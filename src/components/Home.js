import React, { useEffect, useState } from "react";
import cover1 from "../media/cover7.jpg";
import cover3 from "../media/cover10.jpg";
import cover4 from "../media/cover11.jpg";
import cover5 from "../media/cover.jpg";
import logo from "../media/with-outline-cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
const images = [cover1, cover3, cover4, cover5];

function Home() {
  function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(images[0]);
    let [count, setCount] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImage(images[count]);
        if (count == images.length - 1) {
          setCount(0);
        } else {
          setCount(count++);
          console.log(count);
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }, [count]);

    return <img src={currentImage} className="cover-img" />;
  }

  return (
    <div>
      <div className="header-ctnr">
        <div className="header-details">
          <div className="tag-ctnr">
            <p className="tag">UP Praefects</p>
          </div>
          <img src={logo} className="logo-img"></img>
          <p className="title">UP GUILD OF UNITED MINDS</p>
          <p className="subtitle">
            9 years of promoting science into society through innovations
          </p>
          <div className="logo-ctnr">
            <FontAwesomeIcon
              icon={faFacebook}
              className="logo-icon"
              size="2x"
            />
            <FontAwesomeIcon icon={faTwitter} className="logo-icon" size="2x" />
            <FontAwesomeIcon
              icon={faInstagram}
              className="logo-icon"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="logo-icon"
              size="2x"
            />
          </div>
        </div>
        {ImageSwapper()}
      </div>
    </div>
  );
}

export default Home;
