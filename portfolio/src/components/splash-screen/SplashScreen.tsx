import { useEffect, useState } from "react";
import "./SplashScreen.css"; // Create a CSS file for styling
import AOS from "aos";

const SplashScreen = () => {
  const [classname, setClassName] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("off");
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`splash-screen ${classname}`} data-aos="zoom-in">
      <img
        src="/Untitled_design__1_-removebg-preview.png"
        alt="Logo"
        className="splash-logo"
      />
    </div>
  );
};

export default SplashScreen;
