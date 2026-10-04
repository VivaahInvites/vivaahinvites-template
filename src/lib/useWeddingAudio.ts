import { useEffect, useRef, useState } from 'react';
import { WEDDING_AUDIO_CONFIG } from '@/weddingData';

export function extractYouTubeVideoId(urlOrId: string): string {
  if (!urlOrId) return 'PGer5XYPaPk';
  const trimmed = urlOrId.trim();
  if (!trimmed.includes('/') && !trimmed.includes('.')) {
    return trimmed;
  }
  try {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = trimmed.match(regExp);
    return match && match[1] ? match[1] : 'PGer5XYPaPk';
  } catch {
    return 'PGer5XYPaPk';
  }
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export function useWeddingAudio() {
  const [playing, setPlaying] = useState(false);
  const ytPlayerRef = useRef<any>(null);
  const audioElemRef = useRef<HTMLAudioElement | null>(null);
  const isStartedRef = useRef(false);
  const activeSourceRef = useRef<'youtube' | 'mp3' | null>(null);

  // Initialize background MP3 player (real Indian wedding shehnai music as primary or fallback)
  useEffect(() => {
    const mp3Src = WEDDING_AUDIO_CONFIG.mp3Url || '/wedding-music.mp3';
    const audio = new Audio(mp3Src);
    audio.loop = true;
    audio.preload = 'auto';

    audio.onplay = () => {
      activeSourceRef.current = 'mp3';
      setPlaying(true);
    };
    audio.onpause = () => {
      if (activeSourceRef.current === 'mp3') {
        setPlaying(false);
      }
    };
    audioElemRef.current = audio;

    return () => {
      audio.pause();
      audioElemRef.current = null;
    };
  }, []);

  // Initialize YouTube Iframe Player
  useEffect(() => {
    if (WEDDING_AUDIO_CONFIG.type !== 'youtube') return;

    const videoId = extractYouTubeVideoId(WEDDING_AUDIO_CONFIG.youtubeUrl || 'PGer5XYPaPk');

    let container = document.getElementById('yt-wedding-player-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'yt-wedding-player-container';
      container.style.position = 'fixed';
      container.style.bottom = '-9999px';
      container.style.left = '-9999px';
      container.style.width = '200px';
      container.style.height = '200px';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }

    let playerTarget = document.getElementById('yt-wedding-audio-player');
    if (!playerTarget) {
      playerTarget = document.createElement('div');
      playerTarget.id = 'yt-wedding-audio-player';
      container.appendChild(playerTarget);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      try {
        ytPlayerRef.current = new window.YT.Player('yt-wedding-audio-player', {
          height: '200',
          width: '200',
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            rel: 0,
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.unMute();
                event.target.setVolume(100);
                if (isStartedRef.current && activeSourceRef.current !== 'mp3') {
                  event.target.playVideo();
                  activeSourceRef.current = 'youtube';
                  setPlaying(true);
                }
              } catch {}
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 0 = ended
              if (event.data === 1) {
                activeSourceRef.current = 'youtube';
                setPlaying(true);
              } else if (event.data === 2) {
                if (activeSourceRef.current === 'youtube') {
                  setPlaying(false);
                }
              } else if (event.data === 0) {
                try {
                  event.target.seekTo(0);
                  event.target.playVideo();
                } catch {}
              }
            },
            onError: () => {
              // If YouTube fails on localhost or video is restricted, gracefully fallback to real wedding MP3
              if (isStartedRef.current && audioElemRef.current) {
                audioElemRef.current.play().then(() => {
                  activeSourceRef.current = 'mp3';
                  setPlaying(true);
                }).catch(() => {});
              }
            },
          },
        });
      } catch {}
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      try {
        if (ytPlayerRef.current?.destroy) {
          ytPlayerRef.current.destroy();
        }
      } catch {}
    };
  }, []);

  // Start music on user action (e.g. envelope click)
  const start = async () => {
    isStartedRef.current = true;

    if (WEDDING_AUDIO_CONFIG.type === 'youtube') {
      let startedWithYT = false;
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
        try {
          ytPlayerRef.current.unMute();
          ytPlayerRef.current.setVolume(100);
          ytPlayerRef.current.playVideo();
          activeSourceRef.current = 'youtube';
          setPlaying(true);
          startedWithYT = true;
        } catch {
          startedWithYT = false;
        }
      }

      // If YouTube did not start or failed within 2 seconds, fallback to real MP3
      if (!startedWithYT) {
        window.setTimeout(() => {
          if (!playing && isStartedRef.current && audioElemRef.current) {
            audioElemRef.current.play().then(() => {
              activeSourceRef.current = 'mp3';
              setPlaying(true);
            }).catch(() => {});
          }
        }, 1200);
      }
    } else if (audioElemRef.current) {
      try {
        await audioElemRef.current.play();
        activeSourceRef.current = 'mp3';
        setPlaying(true);
      } catch {}
    }
  };

  // Toggle Mute / Unmute — GUARANTEED to mute immediately
  const toggle = () => {
    if (playing) {
      // 1. Instantly stop YouTube if active
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.pauseVideo?.();
          ytPlayerRef.current.mute?.();
        } catch {}
      }

      // 2. Instantly stop MP3 if active
      if (audioElemRef.current) {
        try {
          audioElemRef.current.pause();
        } catch {}
      }

      // 3. Update state immediately
      setPlaying(false);
    } else {
      // Unmute / Resume
      isStartedRef.current = true;
      if (activeSourceRef.current === 'youtube' && ytPlayerRef.current) {
        try {
          ytPlayerRef.current.unMute?.();
          ytPlayerRef.current.setVolume?.(100);
          ytPlayerRef.current.playVideo?.();
          setPlaying(true);
          return;
        } catch {}
      }

      if (audioElemRef.current) {
        audioElemRef.current.play().then(() => {
          activeSourceRef.current = 'mp3';
          setPlaying(true);
        }).catch(() => {});
      } else if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.unMute?.();
          ytPlayerRef.current.playVideo?.();
          setPlaying(true);
        } catch {}
      }
    }
  };

  return { playing, start, toggle };
}
