export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const courseList = [
    {
      id:1,
      name:"Advanced Gas Metal Arc Welding",
      description:"This module is designed for welders who would like to take further their welding skills in groove welding of carbon steel pipes using Gas Metal Arc Welding process. Practical exercises are designed to develop manual skills necessary to produce quality groove welds on pipes in all types of welding position.",
      price:"₱10,000",
      duration:"40 hours",
      link:"https://courselist.mfi.org.ph/courses/1180",
      image:"https://media.licdn.com/dms/image/v2/C5603AQEYx5k_-qrXcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609910450664?e=2147483647&v=beta&t=bvrc339QHKFsD1kxuGeAwpAz3sZF9o3yXIk7OIDWNig"
    },
    {
      id:2,
      name:"Advanced Graphic Design Using Photoshop & Illustrator (Online Course)",
      description:"An advanced short intensive course aiming to teach young individuals about the basics and importance of Graphic Designing and its practical uses in the creative and working industry.",
      price:"₱1,750",
      duration:"9 hours",
      link:"https://courselist.mfi.org.ph/courses/2655",
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTo33YcutzA1p0mRjKqsm6b1B5XpKRJI9BYr5-7lCIg2UztUTdj"
    },
    {
      id:3,
      name:"Advanced Industrial Motor Control",
      description:"The Advanced Industrial Motor Control course is designed for electrical technicians, engineers, and maintenance personnel who are responsible for designing, installing, maintaining, and troubleshooting complex motor control systems in industrial settings. This course builds upon foundational knowledge of motor control principles and focuses on advanced concepts, technologies, and applications relevant to industrial automation and control. Participants will explore advanced topics in motor control theory, learn about the latest technologies and techniques in motor control systems, and gain hands-on experience with programming, configuring, and optimizing motor control systems using industry-standard equipment and software. Emphasis will be placed on practical applications, troubleshooting methodologies, and safety considerations in industrial environments.",
      price:"₱9,000",
      duration:"48 hours",
      link:"https://courselist.mfi.org.ph/courses/65",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70cNDrNfd0qSA8S_4bfttXBvLPaLxJG3OP9hEv1QMAIh0feB2"
    },
    {
      id:4,
      name:"Advanced Industrial Motor Control (Pasay Branch)",
      description:"This module deals with the study of electric motors (AC and DC) and the associated control circuits. It also includes an understanding and practical use of Programmable Controllers and Variable Frequency Drives. Troubleshooting and design of motor control circuits are also given emphasis. Laboratory activities are provided to verify and practice learned principles.",
      price:"₱9,000",
      duration:"48 Hours",
      link:"https://courselist.mfi.org.ph/courses/1523",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70cNDrNfd0qSA8S_4bfttXBvLPaLxJG3OP9hEv1QMAIh0feB2"
    },
    {
      id:7,
      name:"Advanced MS Excel Course (Online)",
      description:"Trainees are expected to efficiently manage spreadsheets and analyze data for business presentations, data storage and analytical representation using one of the world’s most popular spreadsheet application",
      price:"₱3,500",
      duration:"8 hours",
      link:"https://courselist.mfi.org.ph/courses/2661",
      image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC6OyFSCCZvPDl9I0A0Vd9QBgG9mD_T3eNmGQ3_-UHy2vqLYEn"
    },
    {
      id:8,
      name:"Advanced MS Excel Course",
      description:"Trainees are expected to efficiently manage spreadsheets and analyze data for business presentations, data storage and analytical representation using one of the world’s most popular spreadsheet application",
      price:"₱7,200",
      duration:"21 hours",
      link:"https://courselist.mfi.org.ph/courses/1753",
      image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC6OyFSCCZvPDl9I0A0Vd9QBgG9mD_T3eNmGQ3_-UHy2vqLYEn"
    },
    {
      id: 9,
      name:"Advanced Shielded Metal Arc Welding (Pipe Welding)",
      description:"This course focuses on advanced techniques in shielded metal arc welding (SMAW) specifically for pipe welding applications. Participants will learn about various pipe welding positions, joint designs, and the properties of different welding electrodes. The curriculum emphasizes safety practices and quality control measures. Hands-on training will enable participants to develop precision welding skills on various types of pipes and materials. By the end of the course, participants will be prepared to tackle complex pipe welding projects in various industrial settings.",
      price:"₱10,000",
      duration:"40 hours",
      link:"https://courselist.mfi.org.ph/courses/1721",
      image:"https://i.ytimg.com/vi/I1P5GuVHFQA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLAQ76Iel9wj6Y_iUcJcbI_M6e3nEg"
    },
    {
      id:10,
      name:"Applied Industrial Electricity (PEE / BWIM / IE / AIMC)",
      description:"Applied Industrial Electricity focuses on the practical application of electrical principles in an industrial setting. It combines elements from electrical theory, systems, and controls, emphasizing real-world applications in industrial environments. Participants will gain hands-on experience with electrical components, safety practices, and troubleshooting techniques essential for maintaining and optimizing industrial electrical systems.",
      price:"₱31,500",
      duration:"200 Hours",
      link:"https://courselist.mfi.org.ph/courses/3081",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP-xvKDqLljUn9myHNyR2J2DLYyyh0Kbt5Q&s"
    },
    {
      id:11,
      name:"AutoCAD",
      description:"This course introduces the students to AUTOCAD by learning the features, commands, techniques for creating, and editing drawing. Student will be able to create 2D and 3D drawings. They will have an opportunity to work on drawings used in various technical fields, such as mechanical parts, electrical plans and schematics, architectural plans and other engineering diagrams. The participants will receive “hands-on” training and will develop the techniques that are essentials in today’s job market. They will learn on how to adapt basic technical drafting techniques to computer generated drawings of various drafting disciplines.",
      price:"₱5,800",
      duration:"60 Hours",
      link:"https://courselist.mfi.org.ph/courses/57",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn9pJ7BttcPy4UqLi7PnlvVbTR6NtakOIJo8vkxWLGef1kaph"
    },
    {
      id:12,
      name:"AutoCAD (Pasay Branch)",
      description:"This course introduces the students to AUTOCAD by learning the features, commands, techniques for creating, and editing drawing. Student will be able to create 2D and 3D drawings. They will have an opportunity to work on drawings used in various technical fields, such as mechanical parts, electrical plans and schematics, architectural plans and other engineering diagrams. The students will receive “hands-on” training and will develop the techniques that are essentials in today’s job market. They will learn on how to adapt basic technical drafting techniques to computer generated drawings of various drafting disciplines.",
      price:"₱5,800",
      duration:"60 Hours",
      link:"https://courselist.mfi.org.ph/courses/1499",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn9pJ7BttcPy4UqLi7PnlvVbTR6NtakOIJo8vkxWLGef1kaph"
    },
    {
      id:13,
      name:"AutoCAD CIVIL 3D",
      description:"AutoCAD Civil 3D course provides comprehensive training in the use of Autodesk's specialized software for civil engineering design and drafting. Participants learn to navigate the AutoCAD Civil 3D interface, create and edit essential civil objects such as points, alignments, and profiles, and develop proficiency in surface modeling for grading and earthwork calculations. The course covers key aspects of alignment and corridor design for roads and highways, as well as the creation and analysis of pipe and pressure networks for utility systems. Participants gain hands-on experience in quantity takeoff, reporting, and efficient project workflow, emphasizing best practices for data interoperability and collaboration with industry-standard formats. Throughout the course, practical exercises, real-world projects, and case studies reinforce the application of AutoCAD Civil 3D skills, ensuring participants are well-equipped for civil engineering projects in diverse professional settings.",
      price:"₱6,000",
      duration:"60 Hours",
      link:"https://courselist.mfi.org.ph/courses/3054",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cnFgSNE4gweh-usL_dUBTWtltqWHTp46Vw&s"
    },
    {
      id:14,
      name:"Automotive Electricity Course",
      description:"The Automotive Electricity course is designed for individuals seeking to gain a thorough understanding of electrical systems and their applications in modern vehicles. This course provides foundational knowledge and practical skills necessary for diagnosing, repairing, and maintaining automotive electrical systems. Participants will explore key concepts in automotive electricity, including wiring diagrams, circuit analysis, component functionality, and troubleshooting techniques. With a focus on hands-on learning, the course includes practical exercises and real-world scenarios to help participants develop the competence needed to work effectively with automotive electrical systems. By the end of the course, participants will be prepared to handle a wide range of electrical issues and perform essential maintenance and repairs in automotive settings.",
      price:"₱7,000",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/3083",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdjB1Pczp2-eJIRFbyzxOxFd5eGnysESIV3Ont6QnMfLOTgEf"
    }
  ] 
  res.status(200).json(courseList);
}
