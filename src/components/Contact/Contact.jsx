import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <footer id="contact" className="flex flex-col text-white bg-[#0B0213] ">
      <div className="py-10 px-5 flex flex-col gap-5  w-screen max-w-7xl mx-auto ">
        <h2 className="text-3xl">Contact</h2>
        <p className="text-l ">
          Whether you have a project in mind, want to collaborate, or just say
          hello, feel free to reach out! I'm always open to discussing new
          opportunities, creative ideas, or potential collaborations. Let's
          build something amazing together!
        </p>
        <ul className="flex gap-4 text-2xl">
          <li className="flex items-center gap-2">
            <a
              href="mailto:ungureanud6@gmail.com?subject=Let's%20Connect&body=Hello!"
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              <SiGmail />
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/dragos-ungureanu-83485220b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <SiLinkedin />
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://github.com/DragosU25"
              className="text-gray-500 hover:text-gray-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Contact;
