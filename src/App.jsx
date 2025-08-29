
import React from "react";
function App() {
  const projects = [
  {
    id: 1,
    name: "Be Bold Beauty Store",
    description: "An elegant frontend for a beauty store with categories and shop features.",
    image: "/Beauty.jpg", // ✅ CORRECT path
    link: "http://127.0.0.1:5501/project.html",
  },
  {
    id: 2,
    name: "Food Delivery App",
    description: "A React-based food delivery UI with categories and cart system.",
    image: "/Food.jpg", // ✅ CORRECT path
    link: "http://localhost:5173/#home",
  },
];


  const skills = [
    {
      name: "HTML",
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
      description: "HTML is used to structure the content of web pages."
    },
    {
      name: "CSS",
      logo: "https://img.icons8.com/color/48/000000/css3.png",
      description: "CSS is used to style and layout web pages."
    },
    {
      name: "JavaScript",
      logo: "https://img.icons8.com/color/48/000000/javascript.png",
      description: "JavaScript is used to add interactivity and dynamic behavior to websites."
    },
    {
      name: "React",
      logo: "https://img.icons8.com/color/48/000000/react-native.png",
      description: "React is a JavaScript library to build interactive UIs."
    },
    {
      name: "Tailwind CSS",
      logo: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      description: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/color/48/000000/mongodb.png",
      description: "MongoDB is a NoSQL database used to store data in JSON-like format."
    }
  ];
  return (
    <div className="font-sans bg-gray-50">
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-10 flex justify-center items-center shadow-md z-50">
  <div className="flex justify-between w-full max-w-7xl items-center">
    <h1 className="text-3xl font-bold">Shivani Gour</h1>
    <ul className="flex space-x-8 ml-auto">
      <li>
        <a href="#home" className="hover:text-yellow-500 text-2xl">Home</a>
      </li>
      <li>
        <a href="#about" className="hover:text-yellow-500 text-2xl">About</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-yellow-500 text-2xl">Projects</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-yellow-500 text-2xl">Skills</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-yellow-500 text-2xl">Contact</a>
      </li>
    </ul>
  </div>
</nav>

    <section
  id="home"
  className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-gray-100 px-8 py-20 md:gap-36"
>
  {/* Left Side Text */}
  <div className="text-center md:text-left max-w-xl">
    <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-extrabold mb-8 leading-snug">
      👋 Hi, I'm <span className="text-yellow-500">Shivani Gour</span>
    </h1>

    <h2 className="text-2xl md:text-3xl lg:text-5xl text-gray-700 mb-10 leading-normal">
      Frontend Developer & MERN Stack Learner
    </h2>

    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 font-medium leading-relaxed">
      Hi, I’m Shivani Gour 👩‍💻 — a passionate IT student & Frontend Developer,
      currently learning the MERN Stack. I enjoy building responsive and
      user-friendly websites.
    </p>

    <a
      href="#contact"
      className="inline-block px-8 py-3 bg-yellow-500 text-white rounded-xl hover:bg-gray-600 font-semibold text-lg transition"
    >
      Download CV
    </a>
  </div>

  {/* Right Side Image */}
  <div className="flex justify-center md:justify-end mt-12 md:-mt-12">
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-500 shadow-xl">
      <img
        src="/sg.jpg"
        alt="Shivani Gour"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>
      <section
        id="about"
        className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-white text-black px-6 py-20"
      >
        <h2 className="text-7xl font-extrabold mb-6 text-yellow-500">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 max-w-6xl gap-8">
          <div className="text-left ">
            <p className="text-3xl text-black mb-4 leading-relaxed">
              I am an IT student who loves learning web development and building projects.
              Currently, I am learning the MERN Stack (MongoDB, Express, React, Node.js)
              and improving my skills step by step.
            </p>
        
            <p className="text-3xl text-black mb-4 leading-relaxed">
              I enjoy creating websites that are responsive and user-friendly.
              I also like exploring new tools and understanding design to make my projects better.
            </p>
            <p className="text-3xl text-black leading-relaxed">
              My goal is simple → to keep learning, practicing, and gradually become a good developer.
            </p>
          </div>
        </div>
      </section>
<section id="projects" className="py-32 px-8 bg-gray-100 text-center">
  <h2 className="text-7xl font-bold text-gray-900 mb-12">My Projects</h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {projects.map((project) => (
      <div
        key={project.id}
        className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transform transition-all duration-300"
      >
        {/* 👇 IMAGE added here */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-70 object-cover rounded-lg mb-6"
        />

        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-700 mb-4 text-xl">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline hover:text-yellow-400"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
</section>


      <section id="skills" className="py-32 px-8 bg-white text-center">
        <h2 className="text-7xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition text-left flex flex-col items-center">
              <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-700  text-center text-2xl">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 px-8 bg-gray-900 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-8">Get In Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-16">
          <div className="w-full md:max-w-xs text-left space-y-4">
            <p className="mt-4 text-xl font-light">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
            </p>
            <p>📧 Email: <a href="mailto:gourshivani2004@gmail.com" className="text-yellow-300 underline ">gourshivani2004@gmail.com</a></p>
            <p>🐙 GitHub: <a href="https://github.com/Shivani-Gour111" className="text-yellow-300 underline" target="_blank" rel="noopener noreferrer">Shivani-Gour111</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/shivani--gour" className="text-yellow-300 underline" target="_blank" rel="noopener noreferrer">Shivani--Gour</a></p>
          </div>
          <div className="w-full md:max-w-lg bg-gray-50 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Send a Message</h3>
            <form action="your-backend-endpoint" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-white text-black text-lg" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-white text-black text-lg" />
              <textarea name="message" placeholder="Your Message" required rows="4" className="w-full p-3 rounded-md bg-white text-black text-lg"></textarea>
              <button type="submit" className="w-full py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition text-lg font-bold">Send Message</button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
