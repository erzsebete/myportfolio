import AVTR0 from "../../assets/nttdata.png";
import AVTR1 from "../../assets/iscteupskill.png";
import AVTR2 from "../../assets/backend.png";
import AVTR3 from "../../assets/iscte.png";
import AVTR4 from "../../assets/ispa.PNG";

import CPFA from "../../assets/CPFrontendAngular.pdf";
import CPCP from "../../assets/CPComputerProgramming.pdf";

const education = [
  {
    id: 0,
    avatar: AVTR0,
    name: "Web Development | Intership",
    place: "NTT DATA",
    time: "+3 Months | 2023 ",
    review: `This Frontend Internship was an exciting opportunity to gain hands-on experience in developing dynamic web applications 
    with different technologies like React, Angular, JavaScript, TypeScript and Drupal.`,
    file: "",
  },
  {
    id: 1,
    avatar: AVTR1,
    name: "Certification in Web Development | Frontend",
    place: "ISCTE-IUL / UPskill",
    time: "+7 Months | 2022/2023 ",
    review: `I acquired a strong foundation in frontend development, learning Angular, JavaScript, TypeScript, and Drupal 
    through this course with the mentorship of skilled instructors in a collaborative learning environment`,
    file: CPFA,
  },

  {
    id: 2,
    avatar: AVTR2,
    name: "Certification in Computer Programming | Backend",
    place: "IEFP",
    time: "+1.5 years | 2021/2022 ",
    review: `I gained valuable skills and knowledge in computer programming through a high-quality course offered by IEFP, 
    which covered topics such as C#/.Net, Python, SQL, Java, and C++ for backend development.`,
    file: CPCP,
  },

  {
    id: 3,
    avatar: AVTR3,
    name: "MSc in Human Resources Management",
    place: "ISCTE- University Institute of Lisbon ",
    time: "2015",
    review: `My Master's in Human Resources gave me insights into talent management, recruitment, and organizational behavior. 
    These skills have proven invaluable in my frontend career, helping me create user-centered designs that meet business and user needs.`,
    file: "",
  },

  {
    id: 4,
    avatar: AVTR4,
    name: "Bachelor of Clinical Psychology and Behavioral Science",
    place: "ISPA - Instituto Superior de Psicologia Aplicada",
    time: "2002-2007",
    review: `My background in Clinical Psychology has given me valuable insights into human behavior and cognition, which I apply to 
    designing intuitive and effective user interfaces. This unique blend of skills allows me to approach 
    frontend development from a user-centered perspective, creating engaging experiences that meet users' needs and goals.`,
    file: "",
  },
];

export default education;
