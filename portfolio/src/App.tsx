import { useEffect, useState } from "react";
import Header from "./components/header/header";
import AOS from "aos";
import "./App.css";
import SplashScreen from "./components/splash-screen/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* home  start*/}
      <div className=" h-[100dvh] relative overflow-x-hidden">
        {loading && <SplashScreen />}
        <img
          src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/Frame%2013.png"
          loading="lazy"
          alt=""
          className="w-[100%] h-[100dvh]"
        />
        <Header />
        <div className="absolute top-0 left-0 h-[100dvh] w-[100%] ">
          <div className="flex flex-col m-0 justify-center text-white items-center h-[100dvh] w-[100%] ">
            <p
              className="md:text-9xl text-3xl"
              style={{
                letterSpacing: "15px",
              }}
              data-aos="zoom-out  "
              data-aos-duration="3000"
            >
              DEV PAVAN KUMAR
            </p>
            <div className="flex justify-center">
              <span className="text-center md:w-8/12 md:text-2xl">
                Hello! I'm Pavan Kumar, a dedicated Frontend Developer with a
                year of impactful experience. I specialize in crafting robust
                software solutions and architecting scalable applications using
                React.js and Next.js. My journey has honed my skills in
                technical documentation, communication, and collaborative
                problem-solving. Embracing new challenges, I've expanded my
                toolkit to include Jotai for state management and explored
                creative design with Figma. Passionate
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-14 w-[100%] overflow-hidden ">
          <img
            src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/vecteezy_tumbleweed-and-dust-clouds-in-desert_14718540-removebg-preview.png"
            alt=""
            className="h-[100px] w-[100px] rolling-element"
          />
        </div>
      </div>
      {/* home  end*/}

      {/* projects  start*/}
      <div className=""></div>
      {/* projects  end*/}

      {/* experience  start*/}
      <div className=""></div>
      {/* experience  end*/}

      {/* contact me
        start*/}
      <div className=""></div>
      {/* contact me
        end*/}
    </>
  );
}

export default App;
