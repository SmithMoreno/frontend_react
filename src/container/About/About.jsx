import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import "./About.scss";
const about = [
  {
    title: "Mobile App Developer",
    description:
      "Focused on building high-performance mobile applications using React Native, ensuring smooth user experiences.",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Developer",
    description:
      "Skilled in creating responsive and dynamic user interfaces with React Native, delivering clean and efficient code.",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX Designer",
    description:
      "Passionate about designing intuitive and visually appealing user experiences that prioritize both aesthetics and functionality.",
    imgUrl: images.about03,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I understand that <span>Great Apps</span> <br />
        lead to <span>Great Business</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
