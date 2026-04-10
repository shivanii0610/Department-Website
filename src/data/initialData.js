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
    { id: 1, name: "Prof. Arun D. Gangarde", designation: "Head of Department", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. Arun D. Gangarde.jpeg", contact: "9422224440", experience: "15+ Years" },
    { id: 2, name: "Prof. M.B. Bhingare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.B. Bhingare.jpeg", contact: "9423176160", experience: "12+ Years" },
    { id: 3, name: "Prof. M.B. Gobare", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.B. Gobare.jpeg", contact: "9420011597", experience: "10+ Years" },
    { id: 4, name: "Prof. B.M. Danave", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. B.M. Danave.jpeg", contact: "9403710000", experience: "8+ Years" },
    { id: 5, name: "Dr. A.A. Takate", designation: "Assistant Professor", qualification: "Ph.D., M.Sc. Computer Science", imageUrl: "/admin-photos/Dr. A.A. Takate.jpeg", contact: "9404276376", experience: "14+ Years" },
    { id: 6, name: "Prof. M.A. Karkhile", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.A. Karkhile.jpeg", contact: "9665814300", experience: "9+ Years" },
    { id: 7, name: "Prof. T.S. Thange", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. T.S. Thange.jpeg", contact: "9822393332", experience: "11+ Years" },
    { id: 8, name: "Prof. S.S. Kale", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. S.S. Kale.jpeg", contact: "9284278855", experience: "7+ Years" },
    { id: 9, name: "Prof. M.R. Choudhary", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.R. Choudhary.jpeg", contact: "9049662964", experience: "8+ Years" },
    { id: 10, name: "Prof. S.B. Khalekar", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. S.B. Khalekar.jpeg", contact: "9834756544", experience: "10+ Years" },
    { id: 11, name: "Prof. M.J. Jasud", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. M.J. Jasud.jpeg", contact: "7218566416", experience: "6+ Years" },
    { id: 12, name: "Prof. K.S. Choure", designation: "Assistant Professor", qualification: "M.Sc. Computer Science", imageUrl: "/admin-photos/Prof. K.S. Choure.jpeg", contact: "7498487397", experience: "7+ Years" },
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
    { id: 4, year: "M.Sc. CS - I", level: "PG", semester: "All", syllabusUrl: "/Information/Syllabus/M.SC. CS-I.pdf", pyqUrl: "#" },
    { id: 5, year: "M.Sc. CS - II", level: "PG", semester: "All", syllabusUrl: "/Information/Syllabus/M.SC. CS-II.pdf", pyqUrl: "#" },
  ],

  toppers: [],

  placements: [],

  trainings: [],

  events: {
    alumni: [],
    extraCurricular: [],
    conferences: [],
    cultural: [
      { id: 1, title: "Tech Srujana 2025", date: "2025-02-14", description: "Annual technical and cultural festival of the Computer Science Department featuring project exhibitions, coding contests, and cultural performances.", imageUrl: "/Information/Dept Event Photh/DSC_3731.JPG" },
      { id: 2, title: "Prize Distribution", date: "2025-02-15", description: "Annual prize distribution ceremony for academics and sports events.", imageUrl: "/Information/Dept Event Photh/DSC_7997.JPG" },
      { id: 3, title: "Cultural Event Showcase", date: "2025-02-13", description: "Students showcasing traditional dances and programs.", imageUrl: "/Information/Dept Event Photh/DSC_8014.JPG" },
    ],
    awards: [],
    social: [],
  },

  books: {
    "FY": [
      { id: 1, subject: "Problem Solving using C", publication: "Nirali Prakashan", pdfUrl: "#" },
      { id: 2, subject: "Database Management Systems", publication: "Pearson", pdfUrl: "#" },
      { id: 3, subject: "Discrete Mathematics", publication: "McGraw Hill", pdfUrl: "#" },
      { id: 4, subject: "Digital Electronics", publication: "Technical Publications", pdfUrl: "#" },
    ],
    "SY": [
      { id: 1, subject: "Data Structures using C", publication: "Oxford University Press", pdfUrl: "#" },
      { id: 2, subject: "Software Engineering", publication: "Pressman (McGraw Hill)", pdfUrl: "#" },
      { id: 3, subject: "Operating Systems", publication: "Galvin (Wiley)", pdfUrl: "#" },
      { id: 4, subject: "Computer Networks", publication: "Tanenbaum (Pearson)", pdfUrl: "#" },
    ],
    "TY": [
      { id: 1, subject: "Artificial Intelligence", publication: "PHI Publications", pdfUrl: "#" },
      { id: 2, subject: "Web Technologies", publication: "Nirali Prakashan", pdfUrl: "#" },
      { id: 3, subject: "Machine Learning", publication: "O'Reilly Media", pdfUrl: "#" },
      { id: 4, subject: "Information Security", publication: "McGraw Hill", pdfUrl: "#" },
    ],
    "MSC-I": [
      { id: 1, subject: "Advanced Algorithms", publication: "Cormen (MIT Press)", pdfUrl: "#" },
      { id: 2, subject: "Cloud Computing", publication: "Wiley Publications", pdfUrl: "#" },
      { id: 3, subject: "Advanced Database Systems", publication: "Pearson", pdfUrl: "#" },
    ],
    "MSC-II": [
      { id: 1, subject: "Big Data Analytics", publication: "Packt Publishing", pdfUrl: "#" },
      { id: 2, subject: "Deep Learning", publication: "O'Reilly Media", pdfUrl: "#" },
      { id: 3, subject: "Internet of Things", publication: "PHI Publications", pdfUrl: "#" },
    ],
  },

  skillPrograms: [],

  admins: [
    { id: 1, name: "Super Admin", username: "superadmin", password: "superadmin123", role: "superadmin" }
  ],

  adminRequests: [],
};

// Keys used in localStorage
const STORAGE_KEY = 'cs_dept_data_v5';

export function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Ensure backwards compatibility for existing localStorage data
      if (!parsed.admins) parsed.admins = [...initialData.admins];
      if (!parsed.adminRequests) parsed.adminRequests = [];
      return parsed;
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
