// Real data for AJMVPS New Arts, Commerce and Science College, Ahmednagar
// Sources: newartscollege.ac.in, Shiksha, CollegeDunia, Careers360

export const initialData = {
  notices: [
    { id: 1, title: "CET Exam Guidelines for B.Sc. Data Science, Computer Science & Cloud Computing 2025-26", date: "2026-03-01", content: "Download CET guidelines and syllabus from the college website." },
    { id: 2, title: "Admissions Open for 2026-27 Academic Year", date: "2026-03-10", content: "Applications are now being accepted for B.Sc. CS, M.Sc. CS, and BCA programs." },
    { id: 3, title: "NIRF 2025 Data Published", date: "2026-02-15", content: "The college has submitted NIRF 2025 data. View details on the official website." },
    { id: 4, title: "Supplementary Examination Results April 2024", date: "2026-01-20", content: "Supplementary exam results are now available on the college portal." },
  ],

  faculty: [
    { id: 1, name: "Prof. A.D. Gangarde", designation: "Head of Department", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. Arun D. Gangarde.jpeg", specialization: "Database Management Systems", contact: "9422224440" },
    { id: 2, name: "Prof. M.B. Bhingare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.B. Bhingare.jpeg", specialization: "Data Structures & Algorithms", contact: "9423176160" },
    { id: 3, name: "Prof. M.B. Gobare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.B. Gobare.jpeg", specialization: "Operating Systems", contact: "9420011597" },
    { id: 4, name: "Prof. B.M. Danave", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", specialization: "Web Technologies", contact: "9403710000" },
    { id: 5, name: "Dr. A.A. Takate", designation: "Assistant Professor", qualification: "Ph.D., M.Sc. Computer Science", imageUrl: "/admin-photos/Dr. A.A. Takate.jpeg", specialization: "Software Engineering", contact: "9404276376" },
    { id: 6, name: "Prof. M.A. Karkhile", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.A. Karkhile.png", specialization: "Computer Networks", contact: "9665814300" },
    { id: 7, name: "Prof. T.S. Thange", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", specialization: "Python Programming", contact: "9822393332" },
    { id: 8, name: "Prof. S.S. Kale", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. S.S. Kale.jpeg", specialization: "Machine Learning", contact: "9284278855" },
    { id: 9, name: "Prof. M.R. Choudhary", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.R. Choudhary.jpeg", specialization: "Cloud Computing", contact: "9049662964" },
    { id: 10, name: "Prof. S.B. Khalekar", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. S.B. Khalekar.jpeg", specialization: "Artificial Intelligence", contact: "9834756544" },
    { id: 11, name: "Prof. M.J. Jasud", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", specialization: "Information Security", contact: "7218566416" },
    { id: 12, name: "Prof. K.S. Choure", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "", specialization: "Data Analytics", contact: "7498487397" },
  ],

  timetables: [
    { id: 1, year: "FY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/FY Theory Time Table.docx", semester: "Semester I" },
    { id: 2, year: "SY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/SY THEORY TIMETABLE.docx", semester: "Semester I" },
    { id: 3, year: "TY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- I/TY Theory Timetable.docx", semester: "Semester I" },
    { id: 4, year: "M.Sc. CS - I", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - I Sem- I Theroy Time Table.docx", semester: "Semester I" },
    { id: 5, year: "M.Sc. CS - II", pdfUrl: "/Information/Time Table/Sem- I/M.Sc. - II Sem- III Theroy Time Table.docx", semester: "Semester III" },
    { id: 6, year: "FY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/FY Theory Time Table.docx", semester: "Semester II" },
    { id: 7, year: "SY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/SY THEORY TIMETABLE.docx", semester: "Semester II" },
    { id: 8, year: "TY B.Sc. CS", pdfUrl: "/Information/Time Table/Sem- II/TY Theory Timetable.docx", semester: "Semester II" },
    { id: 9, year: "M.Sc. CS - I", pdfUrl: "/Information/Time Table/Sem- II/M.Sc. - I Sem- II Theroy Time Table.docx", semester: "Semester II" },
    { id: 10, year: "UG & PG Practical", pdfUrl: "/Information/Time Table/Sem- I/ALL UG & PG PRACTICAL TIMETABLE SEM - I.docx", semester: "Semester I" },
    { id: 11, year: "UG & PG Practical", pdfUrl: "/Information/Time Table/Sem- II/FINAL FY To M.Sc  Practical Timetable.docx", semester: "Semester II" },
  ],

  syllabus: [
    { id: 1, year: "FY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", pyqUrl: "#" },
    { id: 2, year: "SY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", pyqUrl: "#" },
    { id: 3, year: "TY B.Sc. CS", level: "UG", semester: "All", syllabusUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", pyqUrl: "#" },
    { id: 4, year: "M.Sc. CS", level: "PG", semester: "All", syllabusUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", pyqUrl: "#" },
  ],

  toppers: [],

  placements: [],

  trainings: [],

  events: {
    alumni: [],
    extraCurricular: [],
    conferences: [],
    cultural: [
      { id: 1, title: "Tech Savina 2025", date: "2025-02-14", description: "Annual technical and cultural festival of the Computer Science Department featuring project exhibitions, coding contests, and cultural performances.", imageUrl: "/Information/Dept Event Photh/DSC_3731.JPG" },
      { id: 2, title: "Prize Distribution", date: "2025-02-15", description: "Annual prize distribution ceremony for academics and sports events.", imageUrl: "/Information/Dept Event Photh/DSC_7997.JPG" },
      { id: 3, title: "Cultural Event Showcase", date: "2025-02-13", description: "Students showcasing traditional dances and programs.", imageUrl: "/Information/Dept Event Photh/DSC_8014.JPG" },
    ],
    awards: [],
    social: [],
  },

  books: {
    "FY": [
      { id: 1, subject: "Problem Solving using C", regularBook: "C Programming by Balagurusamy", referenceBook: "Nirali Prakashan", workbook: "Practical C Programming Lab Manual", pdfUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", videoUrl: "https://www.youtube.com/watch?v=ZRetXN69u30" },
      { id: 2, subject: "Database Management Systems", regularBook: "Fundamentals of Database Systems", referenceBook: "Pearson", workbook: "SQL & DBMS Practice Book", pdfUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", videoUrl: "https://www.youtube.com/watch?v=kBdlM6hHGA8" },
      { id: 3, subject: "Discrete Mathematics", regularBook: "Discrete Mathematical Structures", referenceBook: "McGraw Hill", workbook: "Logic & Set Theory Worksheet", pdfUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", videoUrl: "https://www.youtube.com/watch?v=hB9v07eZ2m8" },
      { id: 4, subject: "Digital Electronics", regularBook: "Digital Logic and Design", referenceBook: "Technical Publications", workbook: "Circuit Designing Lab Book", pdfUrl: "/Information/Syllabus/Fy-B.-Sc.-Computer-Sciecne-2024-25.pdf", videoUrl: "https://www.youtube.com/watch?v=yYueuXp7v3A" },
    ],
    "SY": [
      { id: 1, subject: "Data Structures using C", regularBook: "Data Structures Through C in Depth", referenceBook: "Oxford University Press", workbook: "DS Implementation Lab Manual", pdfUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", videoUrl: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
      { id: 2, subject: "Software Engineering", regularBook: "Software Engineering Principles", referenceBook: "Pressman (McGraw Hill)", workbook: "Case Tools Practice Book", pdfUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", videoUrl: "https://www.youtube.com/watch?v=4pP5pOn3m-8" },
      { id: 3, subject: "Operating Systems", regularBook: "Operating System Concepts", referenceBook: "Galvin (Wiley)", workbook: "Linux Shell Scripting Guide", pdfUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", videoUrl: "https://www.youtube.com/watch?v=vBURTt97EkA" },
      { id: 4, subject: "Computer Networks", regularBook: "Computer Networking: A Top-Down Approach", referenceBook: "Tanenbaum (Pearson)", workbook: "Networking Protocols Lab Book", pdfUrl: "/Information/Syllabus/SY B. Sc. Major syllabus template for Printout.pdf", videoUrl: "https://www.youtube.com/watch?v=JFF2vJKuzFY" },
    ],
    "TY": [
      { id: 1, subject: "Artificial Intelligence", regularBook: "Artificial Intelligence: A Modern Approach", referenceBook: "PHI Publications", workbook: "AI Logic Practice Manual", pdfUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", videoUrl: "https://www.youtube.com/watch?v=oV74Najm6Nc" },
      { id: 2, subject: "Web Technologies", regularBook: "Web Programming with HTML/CSS/JS", referenceBook: "Nirali Prakashan", workbook: "Frontend Development Lab Book", pdfUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", videoUrl: "https://www.youtube.com/watch?v=6mbwJ2xhgzM" },
      { id: 3, subject: "Machine Learning", regularBook: "Pattern Recognition and ML", referenceBook: "O'Reilly Media", workbook: "Python ML Implementation Book", pdfUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", videoUrl: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { id: 4, subject: "Information Security", regularBook: "Cryptography and Network Security", referenceBook: "McGraw Hill", workbook: "Cyber Security Lab Manual", pdfUrl: "/Information/Syllabus/TYBSC  Computer Science Major SYLLABUS 2025-26 FINAL.pdf", videoUrl: "https://www.youtube.com/watch?v=UIdV6mS5iEw" },
    ],
    "MSC-I": [
      { id: 1, subject: "Advanced Algorithms", regularBook: "Introduction to Algorithms", referenceBook: "Cormen (MIT Press)", workbook: "Algo Analysis Worksheet", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=0IAPZzGSbME" },
      { id: 2, subject: "Cloud Computing", regularBook: "Cloud Computing: Concepts and Tech", referenceBook: "Wiley Publications", workbook: "AWS/Azure Cloud Lab Manual", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=2LaAJq1lB1Q" },
      { id: 3, subject: "Advanced Database Systems", regularBook: "NoSQL and Big Data", referenceBook: "Pearson", workbook: "MongoDB Practice Guide", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=wmH_05_9p_g" },
    ],
    "MSC-II": [
      { id: 1, subject: "Big Data Analytics", regularBook: "Mining of Massive Datasets", referenceBook: "Packt Publishing", workbook: "Spark & Hadoop Lab Book", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=N63C6fSTGq8" },
      { id: 2, subject: "Deep Learning", regularBook: "Deep Learning with Python", referenceBook: "O'Reilly Media", workbook: "TensorFlow Practice Book", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=q6n_izMvYto" },
      { id: 3, subject: "Internet of Things", regularBook: "IoT: Architecture and Design", referenceBook: "PHI Publications", workbook: "Arduino/Raspberry Pi Lab Guide", pdfUrl: "/Information/Syllabus/M.SC New PG Syllabus Template for Major in Science Faculty Final (1).pdf", videoUrl: "https://www.youtube.com/watch?v=v9UveX7fRao" },
    ],
  },

  skillPrograms: [],
};

// Keys used in localStorage
const STORAGE_KEY = 'cs_dept_data_v18';

export function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { ...initialData };
    }
  }
  // First visit: seed localStorage with initial data
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return { ...initialData };
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  return { ...initialData };
}
