/**
 * BLUE TEAM BOOTCAMP - 6 Schools Outreach Data
 * Dept. of CSE (Cyber Security) | Jyothi Engineering College, Thrissur
 * Cyber Club: CYBERTON
 */

const OUTREACH_DATA = {
  header: {
    college: "Jyothi Engineering College, Thrissur",
    department: "Dept. of CSE (Cyber Security)",
    club: "Cyber Club (CYBERTON)",
    title: "BLUE TEAM BOOTCAMP",
    subtitle: "Advanced Cyber Awareness",
    posterImage: "assets/images/poster/official_poster.jpg",
    titleImage: "assets/images/banner/title_image.png"
  },

  schools: [
    {
      id: "bharathiya-vidya-bhavan",
      name: "Bharathiya Vidya Bhavan",
      date: "19/02/2026",
      day: "Thursday",
      folderPath: "assets/images/bharathiya-vidya-bhavan/",
      coverImage: "assets/images/bharathiya-vidya-bhavan/banner.jpg"
    },
    {
      id: "netaji-memorial-school",
      name: "Netaji Memorial School",
      date: "23/02/2026",
      day: "Monday",
      folderPath: "assets/images/netaji-memorial-school/",
      coverImage: "assets/images/netaji-memorial-school/banner.jpg"
    },
    {
      id: "swathi-central-school",
      name: "Swathi Central School",
      date: "24/02/2026",
      day: "Tuesday",
      folderPath: "assets/images/swathi-central-school/",
      coverImage: "assets/images/swathi-central-school/banner.jpg"
    },
    {
      id: "smm-higher-secondary",
      name: "SMM Higher Secondary School",
      date: "25/02/2026",
      day: "Wednesday",
      folderPath: "assets/images/smm-higher-secondary/",
      coverImage: "assets/images/smm-higher-secondary/banner.jpg"
    },

    {
      id: "christ-new-life",
      name: "Christ New Life ICSE School",
      date: "25/02/2026",
      day: "Wednesday",
      folderPath: "assets/images/christ-new-life/",
      coverImage: "assets/images/christ-new-life/banner.jpg"
    },
    {
      id: "pkm-aup-school",
      name: "PKM AUP School",
      date: "05/03/2026",
      day: "Thursday",
      folderPath: "assets/images/pkm-aup-school/",
      coverImage: "assets/images/pkm-aup-school/banner.jpg"
    },
    {
      id: "st-george-hss",
      name: "St. George HSS, Puttekkara",
      date: "31/08/2026",
      day: "Monday",
      folderPath: "assets/images/st-george-hss/",
      coverImage: "assets/images/st-george-hss/banner.jpg"
    },
    {
      id: "pk-das-liberal-college",
      name: "PK DAS Liberal College of Arts & Science",
      date: "03/09/2026",
      day: "Thursday",
      folderPath: "assets/images/pk-das-liberal-college/",
      coverImage: "assets/images/pk-das-liberal-college/banner.jpg"
    }
  ],

  // Real photos will be placed here by user
  photos: [
    {
      id: "bvb-1",
      schoolId: "bharathiya-vidya-bhavan",
      title: "Outreach Team at Bharatiya Vidya Bhavan's S. Ramakrishnan Memorial Public School",
      src: "assets/images/bharathiya-vidya-bhavan/banner.jpg",
      date: "19/02/2026"
    },
    {
      id: "bvb-2",
      schoolId: "bharathiya-vidya-bhavan",
      title: "Cyber Awareness Classroom Presentation",
      src: "assets/images/bharathiya-vidya-bhavan/classroom_session_1.jpg",
      date: "19/02/2026"
    },
    {
      id: "bvb-3",
      schoolId: "bharathiya-vidya-bhavan",
      title: "Interactive Student Session in Class",
      src: "assets/images/bharathiya-vidya-bhavan/classroom_session_2.jpg",
      date: "19/02/2026"
    },
    {
      id: "swathi-1",
      schoolId: "swathi-central-school",
      title: "Outreach Team & Faculty at Swathy Central School, Vaniamkulam",
      src: "assets/images/swathi-central-school/banner.jpg",
      date: "24/02/2026"
    },
    {
      id: "swathi-2",
      schoolId: "swathi-central-school",
      title: "Outreach Interactive Seminar Session",
      src: "assets/images/swathi-central-school/swathi_session_1.jpg",
      date: "24/02/2026"
    },
    {
      id: "swathi-3",
      schoolId: "swathi-central-school",
      title: "Swathy Central School Campus Signboard",
      src: "assets/images/swathi-central-school/swathi_signboard.jpg",
      date: "24/02/2026"
    },
    {
      id: "swathi-4",
      schoolId: "swathi-central-school",
      title: "Cyber Security & AI Deepfake Awareness Presentation",
      src: "assets/images/swathi-central-school/swathi_presentation.jpg",
      date: "24/02/2026"
    },
    {
      id: "netaji-1",
      schoolId: "netaji-memorial-school",
      title: "Cyber Awareness Interactive Session with Students",
      src: "assets/images/netaji-memorial-school/netaji_session_1.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-2",
      schoolId: "netaji-memorial-school",
      title: "Group Photo with Students, Teachers & Cyberton Team",
      src: "assets/images/netaji-memorial-school/netaji_group_photo.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-3",
      schoolId: "netaji-memorial-school",
      title: "Cyber Awareness Session at Netaji Memorial School",
      src: "assets/images/netaji-memorial-school/netaji_photo2.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-4",
      schoolId: "netaji-memorial-school",
      title: "Interactive Presentation & Demonstration",
      src: "assets/images/netaji-memorial-school/netaji_photo3.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-5",
      schoolId: "netaji-memorial-school",
      title: "Student Engagement & Q&A Session",
      src: "assets/images/netaji-memorial-school/netaji_photo4.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-6",
      schoolId: "netaji-memorial-school",
      title: "Cyberton Team with School Faculty",
      src: "assets/images/netaji-memorial-school/netaji_photo5.jpg",
      date: "23/02/2026"
    },
    {
      id: "netaji-7",
      schoolId: "netaji-memorial-school",
      title: "Blue Team Bootcamp Outreach Highlights",
      src: "assets/images/netaji-memorial-school/netaji_photo6.jpg",
      date: "23/02/2026"
    },
    {
      id: "smm-1",
      schoolId: "smm-higher-secondary",
      title: "Inauguration & Welcome Address at SMM Higher Secondary School",
      src: "assets/images/smm-higher-secondary/smm_photo1.jpg",
      date: "25/02/2026"
    },
    {
      id: "smm-2",
      schoolId: "smm-higher-secondary",
      title: "Interactive Cyber Awareness Session with Students",
      src: "assets/images/smm-higher-secondary/smm_photo2.jpg",
      date: "25/02/2026"
    },
    {
      id: "smm-3",
      schoolId: "smm-higher-secondary",
      title: "Have I Been Pwned – Live Demonstration",
      src: "assets/images/smm-higher-secondary/smm_photo3.jpg",
      date: "25/02/2026"
    },
    {
      id: "smm-4",
      schoolId: "smm-higher-secondary",
      title: "Group Photo with Students & Cyberton Team",
      src: "assets/images/smm-higher-secondary/smm_photo4.jpg",
      date: "25/02/2026"
    },
    {
      id: "smm-5",
      schoolId: "smm-higher-secondary",
      title: "Cyberton Presenter Engaging the Class",
      src: "assets/images/smm-higher-secondary/smm_photo5.jpg",
      date: "25/02/2026"
    },
    {
      id: "cnl-1",
      schoolId: "christ-new-life",
      title: "Inaugural Stage Session & Welcome",
      src: "assets/images/christ-new-life/banner.jpg",
      date: "25/02/2026"
    },
    {
      id: "pkm-1",
      schoolId: "pkm-aup-school",
      title: "Cyber Awareness Interactive Presentation",
      src: "assets/images/pkm-aup-school/pkm_session_1.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-2",
      schoolId: "pkm-aup-school",
      title: "Hands-on Discussion & Cyber Demo Session",
      src: "assets/images/pkm-aup-school/pkm_session_2.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-3",
      schoolId: "pkm-aup-school",
      title: "Group Photo with Students, Teachers & Cyberton Team",
      src: "assets/images/pkm-aup-school/banner.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-4",
      schoolId: "pkm-aup-school",
      title: "Interactive Student Activity & Cyber Discussion",
      src: "assets/images/pkm-aup-school/pkm_photo4.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-5",
      schoolId: "pkm-aup-school",
      title: "Classroom Audience & Student Engagement",
      src: "assets/images/pkm-aup-school/pkm_photo5.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-6",
      schoolId: "pkm-aup-school",
      title: "Students Group in Classroom",
      src: "assets/images/pkm-aup-school/pkm_photo6.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-7",
      schoolId: "pkm-aup-school",
      title: "Interactive Seminar & Cyber Threats Presentation",
      src: "assets/images/pkm-aup-school/pkm_photo7.jpg",
      date: "05/03/2026"
    },
    {
      id: "pkm-8",
      schoolId: "pkm-aup-school",
      title: "School Faculty Address & Opening Remarks",
      src: "assets/images/pkm-aup-school/pkm_photo8.jpg",
      date: "05/03/2026"
    },
    {
      id: "stg-1",
      schoolId: "st-george-hss",
      title: "Cyberton Team & Faculty at St. George HSS, Puttekkara",
      src: "assets/images/st-george-hss/banner.jpg",
      date: "31/08/2026"
    },
    {
      id: "stg-2",
      schoolId: "st-george-hss",
      title: "Outreach Program Official Poster – St. George HSS, Puttekkara, Mundur",
      src: "assets/images/st-george-hss/st_george_poster.jpg",
      date: "31/08/2026"
    },
    {
      id: "stg-3",
      schoolId: "st-george-hss",
      title: "Outreach Awareness Session & NSS Hall Group Photo",
      src: "assets/images/st-george-hss/st_george_session_composite.jpg",
      date: "31/08/2026"
    },
    {
      id: "pkd-1",
      schoolId: "pk-das-liberal-college",
      title: "Cyberton Team, Faculty & Civil Police Officer Joby Kuriakose",
      src: "assets/images/pk-das-liberal-college/banner.jpg",
      date: "03/09/2026"
    },
    {
      id: "pkd-2",
      schoolId: "pk-das-liberal-college",
      title: "Cyber Awareness Bootcamp Official Poster – Think Before You Click",
      src: "assets/images/pk-das-liberal-college/poster.jpg",
      date: "03/09/2026"
    },
    {
      id: "pkd-3",
      schoolId: "pk-das-liberal-college",
      title: "Session by Civil Police Officer Joby Kuriakose at Seminar Hall",
      src: "assets/images/pk-das-liberal-college/session_podium.jpg",
      date: "03/09/2026"
    }
  ]
};
