// Top Universities and Institutions partnered with Scholar Bucket

export const universities = [
    {
      id: 1,
      name: "Partap University",
      shortName: "Partap",
      type: "Distance Education",
      location: "Rajasthan",
      established: 2012,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Distance MBA", "Distance BBA", "Distance B.Com", "Distance BA", "Distance BCA"],
      specialization: ["Management", "Commerce", "Arts", "Computer Applications"],
      description: "A growing university in Rajasthan offering quality distance education programs with flexible learning options.",
      logo: "/university-logos/partap.png",
      website: "https://partapuniversity.ac.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 2,
      name: "CTU University",
      shortName: "CTU",
      type: "Online University",
      location: "Gujarat",
      established: 2015,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Online MBA", "Online BBA", "Online B.Com", "Online BCA", "Online MCA"],
      specialization: ["Management", "Technology", "Commerce"],
      description: "CTU University Gujarat offers industry-aligned online and distance programs with modern curriculum.",
      logo: "/university-logos/ctu.png",
      website: "https://ctuniversity.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 3,
      name: "ISBM University",
      shortName: "ISBM",
      type: "Distance Education",
      location: "Chhattisgarh",
      established: 2016,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Distance MBA", "Distance BBA", "Distance B.Com", "Distance MA", "Distance BA"],
      specialization: ["Business Management", "Commerce", "Arts"],
      description: "ISBM University Chhattisgarh provides accessible and affordable distance education with a focus on management studies.",
      logo: "/university-logos/isbm.png",
      website: "https://isbmuniversity.edu.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 4,
      name: "Himalayan Garhwal University (HGU)",
      shortName: "HGU",
      type: "Distance Education",
      location: "Uttarakhand",
      established: 2015,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Distance MBA", "Distance BA", "Distance B.Com", "Distance BCA", "Distance MA"],
      specialization: ["Management", "Arts", "Commerce", "Computer Applications"],
      description: "Himalayan Garhwal University offers UGC-recognized distance education programs from the serene hills of Uttarakhand.",
      logo: "/university-logos/hgu.png",
      website: "https://hgu.ac.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 5,
      name: "Sikkim Alpine University (SAU)",
      shortName: "SAU",
      type: "Online University",
      location: "Sikkim",
      established: 2018,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Online MBA", "Online BBA", "Online B.Com", "Online BCA", "Online MCA"],
      specialization: ["Management", "Commerce", "Technology"],
      description: "SAU University Sikkim is an emerging institution offering UGC-approved online and distance programs across disciplines.",
      logo: "/university-logos/sau.png",
      website: "https://sauuniversity.ac.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 6,
      name: "Mahakoshal University",
      shortName: "Mahakoshal",
      type: "Distance Education",
      location: "Madhya Pradesh",
      established: 2018,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Distance MBA", "Distance BA", "Distance B.Com", "Distance BCA", "Distance MA"],
      specialization: ["Management", "Arts", "Commerce", "Computer Applications"],
      description: "Mahakoshal University MP is dedicated to providing quality higher education through flexible distance learning programs.",
      logo: "/university-logos/mahakoshal.png",
      website: "https://mahakoshaluniversity.ac.in",
      featured: true,
      admissionOpen: true
    },
    {
      id: 7,
      name: "Indira Gandhi University",
      shortName: "IGU Meerpur",
      type: "Distance Education",
      location: "Meerpur, Haryana",
      established: 2013,
      ugcApproved: true,
      naacRating: "A",
      programs: ["Distance MBA", "Distance BA", "Distance B.Com", "Distance BCA", "Distance MA"],
      specialization: ["Management", "Arts", "Commerce", "Computer Applications"],
      description: "Indira Gandhi University Meerpur is a state university in Haryana offering recognized distance education programs.",
      logo: "/university-logos/igu.png",
      website: "https://igu.ac.in",
      featured: false,
      admissionOpen: true
    },
    {
      id: 8,
      name: "Maharshi Dayanand University (MDU)",
      shortName: "MDU",
      type: "Distance Learning",
      location: "Rohtak, Haryana",
      established: 1976,
      ugcApproved: true,
      naacRating: "A+",
      programs: ["Distance MBA", "Distance BA", "Distance B.Com", "Distance MA", "Distance M.Com"],
      specialization: ["Management", "Arts", "Commerce"],
      description: "One of Haryana's most reputed state universities, MDU Rohtak has a long legacy of quality education and strong distance learning programs.",
      logo: "/university-logos/mdu.png",
      website: "https://mdurohtak.ac.in",
      featured: false,
      admissionOpen: true
    },
    {
      id: 9,
      name: "Guru Jambheshwar University of Science & Technology (GJU)",
      shortName: "GJU",
      type: "Distance Education",
      location: "Hisar, Haryana",
      established: 1995,
      ugcApproved: true,
      naacRating: "A+",
      programs: [
        "Distance MBA",
        "Distance MCA",
        "Distance B.Com",
        "Distance BA",
        "Distance BA (Mass Communication)",
        "Distance BBA",
        "Distance M.Com",
        "Distance MA",
        "Distance MA (Mass Communication)",
        "Distance M.Sc (Mathematics & Computer Science)",
        "PG Diploma (Industrial Safety)",
        "PG Diploma (Bakery Science)",
        "PG Diploma (Environment)"
      ],
      specialization: ["Management", "Commerce", "Computer Science", "Mass Communication", "Mathematics", "Industrial Safety", "Environmental Studies"],
      description: "GJU Hisar is a NAAC A+ accredited state university with a dedicated Distance & Online Education centre since 1997, offering UGC-DEB approved programs across management, commerce, science, and media studies.",
      logo: "/university-logos/gju.png",
      website: "https://gjust.ac.in",
      featured: false,
      admissionOpen: true
    }
  ];

  // University types for filtering
  export const universityTypes = [
    { id: 'all', name: 'All Universities' },
    { id: 'Open University', name: 'Open Universities' },
    { id: 'Distance Learning', name: 'Distance Learning' },
    { id: 'Online University', name: 'Online Universities' },
    { id: 'Distance Education', name: 'Distance Education' },
    { id: 'Open Schooling', name: 'Open Schooling' }
  ];

  // Get featured universities
  export const getFeaturedUniversities = () => {
    return universities.filter(uni => uni.featured);
  };

  // Get universities by type
  export const getUniversitiesByType = (type) => {
    if (type === 'all') return universities;
    return universities.filter(uni => uni.type === type);
  };

  // Get universities with open admissions
  export const getUniversitiesWithOpenAdmissions = () => {
    return universities.filter(uni => uni.admissionOpen);
  };

  // Get single university by ID
  export const getUniversityById = (id) => {
    return universities.find(uni => uni.id === parseInt(id));
  };

  // University statistics for homepage
  export const universityStats = {
    totalPartners: universities.length,
    ugcApproved: universities.filter(u => u.ugcApproved).length,
    openAdmissions: universities.filter(u => u.admissionOpen).length,
    topRated: universities.filter(u => u.naacRating === "A+" || u.naacRating === "A+").length
  };