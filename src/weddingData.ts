import {
  coverImg,
  coupleImg,
  ganeshaImg,
  haldiImg,
  mehendiImg,
  sangeetImg,
  weddingImg,
  receptionImg,
} from "@/assets/images";

/**
 * ============================================================================
 * LUXURY WEDDING CARD MASTER CONFIGURATION
 * TEMPLATE: "Shubh Vivah" (शुभ विवाह — The Royal North Indian Patrika)
 * ============================================================================
 */

export const TEMPLATE_INFO = {
  id: "shubh-vivah",
  name: "Shubh Vivah",
  hindiName: "शुभ विवाह",
  category: "The Royal North Indian Patrika",
};

export const TEMPLATE_NAME = "Shubh Vivah";
export const TEMPLATE_HINDI_NAME = "शुभ विवाह";

export type WeddingSide = "groom" | "bride";

// 1. मास्टर एक्टिव साइड: "groom" (वर पक्ष) या "bride" (कन्या पक्ष)
export const DEFAULT_SIDE: WeddingSide = "groom";

// 2. बैकग्राउंड म्यूजिक सेटिंग्स (YouTube या MP3)
export const WEDDING_AUDIO_CONFIG = {
  // प्रकार: "youtube" या "mp3"
  type: "mp3" as "youtube" | "mp3",
  // YouTube गाने का लिंक:
  youtubeUrl: "https://www.youtube.com/watch?v=PGer5XYPaPk",
  // खुद का MP3 गाना (अगर type: "mp3" रखें):
  mp3Url: "/wedding-music.mp3",
};

/**
 * ============================================================================
 * 📸 3. पूरी वेबसाइट की सभी 8 तस्वीरें (ALL 8 WEDDING PHOTOS)
 * ============================================================================
 * फोटो बदलने के 2 आसान तरीके हैं:
 * 👉 तरीका 1 (लोकल फोटो): अपनी फोटो 'public/images/' फोल्डर में डालें और उसका नाम लिखें, जैसे "/images/cover.jpg"
 * 👉 तरीका 2 (ऑनलाइन लिंक): किसी भी वेबसाइट, गूगल ड्राइव, या इम्गुर (Imgur) का फोटो लिंक सीधे पेस्ट कर दें
 */
export const WEDDING_PHOTOS = {
  // 1️⃣ बाहर कवर की फोटो ("Click to Open" वाले लिफाफे / सर्कल पर)
  cover: "/images/coverImg.webp", // 👈 बाहर की अलग फोटो

  // 2️⃣ अंदर मुख्य कार्ड की दूल्हा-दुल्हन फोटो (Royal Gold Frame के अंदर)
  couple: "/images/coupleImg.webp", // 👈 अंदर मुख्य कार्ड की अलग फोटो

  // 3️⃣ भगवान श्री गणेश जी की प्रतिमा (कार्ड के सबसे ऊपर)
  ganesha: "/images/ganeshaImg.webp", // 👈 भगवान श्री गणेश जी की फोटो

  // 4️⃣ रस्मों की 5 तस्वीरें (Ceremony / Timeline)
  haldi: "/images/haldiImg.webp",         // हल्दी की फोटो
  mehendi: "/images/mehendiImg.webp",     // मेहंदी की फोटो
  sangeet: "/images/sangeetImg.webp",     // संगीत की फोटो
  wedding: "/images/weddingImg.webp",     // शुभ विवाह / फेरे की फोटो
  reception: "/images/receptionImg.webp", // प्रीतिभोज / रिसेप्शन की फोटो
};

// 4. शादी की तारीख, मुहूर्त और उलटी गिनती (Countdown)
export const COMMON_WEDDING_DETAILS = {
  targetDateISO: "2026-11-29T18:45:00+05:30",
  dayName: "Sunday",
  dayNumber: "29",
  monthYear: "Nov 2026",
  ceremonyTime: "04:30 PM onwards",
  calendarEventTitle: "Neha & Aman Wedding Ceremony",
  calendarLocation: "Royal Lakefront Mandap, Agra",
  ganeshaPhoto: WEDDING_PHOTOS.ganesha,
};

// 5. वर पक्ष डेटा (GROOM SIDE CONFIGURATION)
export const GROOM_SIDE_DATA = {
  sideLabel: "वर पक्ष",
  subTitle: "वर पक्ष का पावन आमंत्रण",
  couple: {
    photo: WEDDING_PHOTOS.couple,
    firstPerson: "Aman Sharma",
    secondPerson: "Neha Verma",
    shortFirstPerson: "Aman",
    shortSecondPerson: "Neha",
    hindiFirstPerson: "अमन शर्मा",
    hindiSecondPerson: "नेहा वर्मा",
    invitationQuote:
      "“We joyfully invite you to celebrate our wedding and shower your loving blessings as we begin our new journey together.”",
    hindiQuote:
      "“परमपिता परमेश्वर की असीम अनुकम्पा से हमारे सुपुत्र के शुभ विवाह के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं।”",
  },
  events: [
    {
      title: "Haldi",
      hindiTitle: "हल्दी",
      img: WEDDING_PHOTOS.haldi,
      date: "Saturday, 28th November",
      time: "Ceremony at 10:00 AM",
      venue: "Marigold Sunshine Lawn, Agra",
    },
    {
      title: "Mehendi",
      hindiTitle: "मेहंदी",
      img: WEDDING_PHOTOS.mehendi,
      date: "Saturday, 28th November",
      time: "Ceremony at 04:00 PM",
      venue: "Royal Mango Orchards, Agra",
    },
    {
      title: "Sangeet",
      hindiTitle: "संगीत",
      img: WEDDING_PHOTOS.sangeet,
      date: "Saturday, 28th November",
      time: "Ceremony at 08:30 PM",
      venue: "Grand Ballroom, Agra",
    },
    {
      title: "Wedding Ceremony",
      hindiTitle: "शुभ विवाह",
      img: WEDDING_PHOTOS.wedding,
      date: "Sunday, 29th November",
      time: "04:30 PM Onwards",
      venue: "Royal Lakefront Mandap, Agra",
      muhuratLine: [
        { label: "घुड़चढ़ी", time: "04:30 PM", icon: "🐎" },
        { label: "बारात प्रस्थान", time: "06:00 PM", icon: "🎺" },
        { label: "जयमाला", time: "08:30 PM", icon: "🌸" },
        { label: "शुभ फेरे", time: "11:15 PM", icon: "🔥" },
      ],
    },
    {
      title: "Reception",
      hindiTitle: "प्रीतिभोज",
      img: WEDDING_PHOTOS.reception,
      date: "Monday, 30th November",
      time: "07:30 PM Onwards",
      venue: "Amarvilas Grand Hall, Agra",
      note: "लड़के वालों द्वारा आयोजित भव्य प्रीतिभोज",
    },
  ],
  family: {
    headerSub: "वर पक्ष का पावन आमंत्रण",
    vineet: {
      title: "॥ विनीत ॥",
      names: "श्रीमती रेखा देवी एवं श्री रमेश चंद्र शर्मा",
      relation: "(माता - पिता)",
      clan: "एवं समस्त शर्मा परिवार • आगरा (उ.प्र.)",
    },
    darshanabhilashi: {
      title: "॥ दर्शनाभिलाषी ॥",
      subtitle: "(पूज्य बुजुर्गजन)",
      members: [
        { name: "श्री कैलाश नाथ शर्मा", relation: "(दादाजी)" },
        { name: "श्रीमती शांति देवी", relation: "(दादीजी)" },
        { name: "श्री मुकुंद लाल जी", relation: "(नानाजी)" },
        { name: "श्रीमती पुष्पा देवी", relation: "(नानीजी)" },
      ],
      footer: "एवं समस्त स्नेहीजन",
    },
    swagatkarta: {
      title: "॥ स्वागतकर्ता ॥",
      subtitle: "(भ्रातृगण एवं आत्मीयजन)",
      members: [
        { name: "श्री विकास शर्मा", relation: "(बड़े भ्राता)" },
        { name: "श्रीमती पूजा शर्मा", relation: "(भाभीजी)" },
        { name: "श्री राहुल शर्मा", relation: "(अनुज)" },
        { name: "श्री संजय शर्मा", relation: "(चाचाजी)" },
      ],
      footer: "एवं समस्त मित्र मण्डल",
    },
  },
  venue: {
    title: "Royal Venue",
    name: "The Oberoi Amarvilas / Royal Palace Lawn",
    address: "Taj East Gate Road, Agra (U.P.)",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=78.035,27.162,78.058,27.175&layer=mapnik&marker=27.1685,78.0465",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Amarvilas+Taj+East+Gate+Road+Agra",
  },
  hashtag: "#AmanWedsNeha",
  gratitudeTitle: "With eternal love, The Sharma & Verma Families",
  footerCopyright: "#AmanWedsNeha",
};

// 6. कन्या पक्ष डेटा (BRIDE SIDE CONFIGURATION)
export const BRIDE_SIDE_DATA = {
  sideLabel: "कन्या पक्ष",
  subTitle: "कन्या पक्ष का पावन आमंत्रण",
  couple: {
    photo: WEDDING_PHOTOS.couple,
    firstPerson: "Neha Verma",
    secondPerson: "Aman Sharma",
    shortFirstPerson: "Neha",
    shortSecondPerson: "Aman",
    hindiFirstPerson: "नेहा वर्मा",
    hindiSecondPerson: "अमन शर्मा",
    invitationQuote:
      "“We joyfully invite you to shower your loving blessings upon our daughter as she steps into a beautiful new chapter of life.”",
    hindiQuote:
      "“प्रभु कृपा से हमारी लाडली सुपुत्री के शुभ पाणिग्रहण संस्कार के इस मांगलिक अवसर पर आपका शुभाशीर्वाद हमारे लिए अमूल्य है।”",
  },
  events: [
    {
      title: "Haldi Ceremony",
      hindiTitle: "हल्दी एवं मेहंदी",
      img: WEDDING_PHOTOS.haldi,
      date: "Saturday, 28th November",
      time: "Ceremony at 11:00 AM",
      venue: "Verma Sadan / Gulab Vatika Lawn, Agra",
    },
    {
      title: "Mehendi & Ladies Sangeet",
      hindiTitle: "महिला संगीत एवं मेहंदी",
      img: WEDDING_PHOTOS.mehendi,
      date: "Saturday, 28th November",
      time: "Ceremony at 06:30 PM",
      venue: "Grand Ballroom, Amarvilas, Agra",
    },
    {
      title: "Wedding & Bidai Ceremony",
      hindiTitle: "शुभ विवाह एवं विदाई",
      img: WEDDING_PHOTOS.wedding,
      date: "Sunday, 29th November",
      time: "06:30 PM Onwards",
      venue: "Royal Lakefront Mandap, Agra",
      muhuratLine: [
        { label: "बारात स्वागत", time: "07:30 PM", icon: "🎺" },
        { label: "जयमाला / वरमाला", time: "08:30 PM", icon: "🌸" },
        { label: "कन्यादान व पाणिग्रहण", time: "10:30 PM", icon: "🪷" },
        { label: "सप्तपदी (शुभ फेरे)", time: "11:45 PM", icon: "🔥" },
        { label: "भावभीनी विदाई (डोली)", time: "प्रातः 05:00 AM", icon: "🕊️" },
      ],
    },
  ],
  family: {
    headerSub: "कन्या पक्ष का पावन आमंत्रण",
    vineet: {
      title: "॥ विनीत ॥",
      names: "श्रीमती सुनीता देवी एवं श्री राजेश कुमार वर्मा",
      relation: "(माता - पिता)",
      clan: "एवं समस्त वर्मा परिवार • आगरा (उ.प्र.)",
    },
    darshanabhilashi: {
      title: "॥ दर्शनाभिलाषी ॥",
      subtitle: "(पूज्य बुजुर्गजन)",
      members: [
        { name: "श्री रामअवतार वर्मा", relation: "(दादाजी)" },
        { name: "श्रीमती भगवती देवी", relation: "(दादीजी)" },
        { name: "श्री ओंकार नाथ गुप्त", relation: "(नानाजी)" },
        { name: "श्रीमती सावित्री देवी", relation: "(नानीजी)" },
      ],
      footer: "एवं समस्त स्नेहीजन",
    },
    swagatkarta: {
      title: "॥ स्वागतकर्ता ॥",
      subtitle: "(भ्रातृगण एवं मामा परिवार)",
      members: [
        { name: "श्री आशीष वर्मा", relation: "(भ्राता)" },
        { name: "श्रीमती शिखा वर्मा", relation: "(भाभीजी)" },
        { name: "श्री महेंद्र गुप्त", relation: "(मामाजी)" },
        { name: "श्री विपिन वर्मा", relation: "(चाचाजी)" },
      ],
      footer: "एवं समस्त मित्र मण्डल",
    },
  },
  venue: {
    title: "Wedding Venue",
    name: "Royal Lakefront Mandap & Lawn",
    address: "Taj East Gate Road, Agra (U.P.)",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=78.035,27.162,78.058,27.175&layer=mapnik&marker=27.1685,78.0465",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The+Oberoi+Amarvilas+Taj+East+Gate+Road+Agra",
  },
  hashtag: "#NehaWedsAman",
  gratitudeTitle: "With eternal love, The Verma & Sharma Families",
  footerCopyright: "#NehaWedsAman",
};

/**
 * Helper: resolves active side data with URL query override (?side=bride / ?side=groom).
 */
export function getActiveWeddingData(overrideSide?: WeddingSide) {
  let side: WeddingSide = overrideSide || DEFAULT_SIDE;

  if (typeof window !== "undefined" && !overrideSide) {
    const params = new URLSearchParams(window.location.search);
    const querySide = params.get("side")?.toLowerCase();
    if (querySide === "bride" || querySide === "groom") {
      side = querySide;
    }
  }

  const isBride = side === "bride";
  const data = isBride ? BRIDE_SIDE_DATA : GROOM_SIDE_DATA;

  return {
    template: TEMPLATE_INFO,
    side,
    isBride,
    isGroom: !isBride,
    photos: WEDDING_PHOTOS,
    ...data,
    common: COMMON_WEDDING_DETAILS,
  };
}
