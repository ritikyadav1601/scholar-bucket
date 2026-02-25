// Student testimonials and success stories for Scholar Bucket
// These demonstrate trust, success, and satisfaction

export const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Distance MBA",
      university: "IGNOU",
      year: 2023,
      location: "Delhi",
      rating: 5,
      image: "/testimonials/student1.jpg", // Placeholder
      text: "Scholar Bucket made my dream of pursuing MBA while working a reality. The counselors guided me through every step, from university selection to enrollment. Today I'm successfully managing both my job and studies!",
      designation: "Working Professional",
      featured: true
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "12th NIOS",
      university: "NIOS",
      year: 2024,
      location: "Mumbai",
      rating: 5,
      image: "/testimonials/student2.jpg",
      text: "I had to drop out of regular school due to financial issues. Scholar Bucket helped me complete my 12th through NIOS at my own pace. Their support was incredible. Now I'm preparing for college!",
      designation: "Student",
      featured: true
    },
    {
      id: 3,
      name: "Sneha Patel",
      course: "B.Com (Distance)",
      university: "Symbiosis",
      year: 2023,
      location: "Ahmedabad",
      rating: 5,
      image: "/testimonials/student3.jpg",
      text: "As a mother of two, returning to education seemed impossible. Scholar Bucket's counselors understood my situation and helped me enroll in distance B.Com. Best decision ever! Highly recommended.",
      designation: "Homemaker & Student",
      featured: true
    },
    {
      id: 4,
      name: "Amit Singh",
      course: "BBA Regular",
      university: "Jain University",
      year: 2024,
      location: "Bangalore",
      rating: 4,
      image: "/testimonials/student4.jpg",
      text: "The admission process was so smooth! Scholar Bucket took care of everything - documentation, university coordination, even hostel arrangements. They truly care about students.",
      designation: "Student",
      featured: false
    },
    {
      id: 5,
      name: "Kavita Desai",
      course: "10th NIOS",
      university: "NIOS",
      year: 2023,
      location: "Pune",
      rating: 5,
      image: "/testimonials/student5.jpg",
      text: "I was scared about completing my 10th at age 28. Scholar Bucket counselors were so patient and supportive. They helped me with everything - admission, study material, exam preparation. Forever grateful!",
      designation: "Working Professional",
      featured: true
    },
    {
      id: 6,
      name: "Rajesh Verma",
      course: "Distance MCA",
      university: "Sikkim Manipal University",
      year: 2024,
      location: "Jaipur",
      rating: 5,
      image: "/testimonials/student6.jpg",
      text: "Working in IT and pursuing MCA simultaneously was challenging. Scholar Bucket not only helped with admission but also connected me with study groups. Excellent service and follow-up!",
      designation: "Software Engineer",
      featured: false
    },
    {
      id: 7,
      name: "Anjali Reddy",
      course: "BA (Distance)",
      university: "IGNOU",
      year: 2023,
      location: "Hyderabad",
      rating: 4,
      image: "/testimonials/student7.jpg",
      text: "Scholar Bucket helped me understand which university and course would be best for my career goals. Their knowledge about different universities is impressive. Thank you team!",
      designation: "Student",
      featured: false
    },
    {
      id: 8,
      name: "Vikram Malhotra",
      course: "Online MBA",
      university: "Amity Online",
      year: 2024,
      location: "Chandigarh",
      rating: 5,
      image: "/testimonials/student8.jpg",
      text: "From documentation to final enrollment, everything was handled professionally. The team kept me updated throughout. Now I'm doing my MBA from a reputed university while managing my business!",
      designation: "Entrepreneur",
      featured: true
    },
    {
      id: 9,
      name: "Pooja Joshi",
      course: "12th Commerce",
      university: "CBSE Private",
      year: 2024,
      location: "Indore",
      rating: 5,
      image: "/testimonials/student9.jpg",
      text: "I wanted to improve my 12th percentage for CA preparation. Scholar Bucket guided me to the right option and helped me score 85%! Their counselors really understand student needs.",
      designation: "Student",
      featured: false
    },
    {
      id: 10,
      name: "Sandeep Yadav",
      course: "B.Tech (Regular)",
      university: "Private Engineering College",
      year: 2023,
      location: "Noida",
      rating: 4,
      image: "/testimonials/student10.jpg",
      text: "Got admission in a top engineering college through Scholar Bucket. They helped me understand the entire admission process, scholarship options, and even loan procedures. Truly helpful!",
      designation: "Engineering Student",
      featured: false
    },
    {
      id: 11,
      name: "Meera Nair",
      course: "Distance B.Com",
      university: "University of Mumbai",
      year: 2024,
      location: "Mumbai",
      rating: 5,
      image: "/testimonials/student11.jpg",
      text: "As a bank employee, pursuing regular education was not possible. Scholar Bucket showed me how distance education from Mumbai University is equally valuable. Now I'm on track for CA!",
      designation: "Bank Employee",
      featured: true
    },
    {
      id: 12,
      name: "Karan Kapoor",
      course: "PGDM",
      university: "Top B-School",
      year: 2023,
      location: "Gurgaon",
      rating: 5,
      image: "/testimonials/student12.jpg",
      text: "Scholar Bucket's guidance was invaluable for my PGDM admission. They helped me prepare for entrance exams, select the right institution, and complete all formalities on time. Excellent service!",
      designation: "Management Student",
      featured: false
    }
  ];
  
  // Get featured testimonials for homepage
  export const getFeaturedTestimonials = () => {
    return testimonials.filter(t => t.featured);
  };
  
  // Get testimonials by rating
  export const getTopRatedTestimonials = () => {
    return testimonials.filter(t => t.rating === 5);
  };
  
  // Get testimonials by course category
  export const getTestimonialsByCourse = (courseKeyword) => {
    return testimonials.filter(t => 
      t.course.toLowerCase().includes(courseKeyword.toLowerCase())
    );
  };
  
  // Testimonial statistics
  export const testimonialStats = {
    total: testimonials.length,
    averageRating: (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1),
    fiveStarCount: testimonials.filter(t => t.rating === 5).length,
    satisfactionRate: Math.round((testimonials.filter(t => t.rating >= 4).length / testimonials.length) * 100)
  };