import { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="absolute top-0 left-0  z-[1]"
        onClick={() => {
          setMenu(true);
        }}
      >
        <div className=" fixed top-0   md:w-[150px] md:h-[150px] ">
          <div className="relative flex justify-center md:block w-[100%]">
            <img
              src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/_Pngtree_top_view_of_straw_hat_13325396-removebg-preview.png"
              className="   header h-[90px] md:h-auto"
              alt=""
            />
            <p className="text-sm  text-center right-0 absolute  text-white left-0 m-auto my-auto bottom-16 ">
              <span className="border-1 border-red-600 rounded-full">MENU</span>
            </p>
          </div>
        </div>
      </div>
      {menu && (
        <>
          <div className="h-[100dvh] w-[100%] absolute top-0 left-0 z-10 bg-[#00000099]">
            <div className="h-[100dvh] w-[100%] flex-col  justify-center items-center ">
              <div className="relative flex justify-center">
                <img
                  src="./hat.png"
                  alt=""
                  data-aos="zoom-out-up"
                  data-aos-duration="3000"
                />
                <img
                  src="Best-Animations-unscreen.gif"
                  className="absolute h-[114px]  anmation"
                  alt=""
                />
              </div>
              <div
                className="flex justify-center"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <div className="relative">
                  <img
                    src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/Download_Brown_Cowboy_Hat_for_free-removebg-preview.png"
                    alt="Home"
                    className="h-[150px]"
                  />
                  <p className="absolute anmation text-2xl text-white">HOME</p>
                </div>
                <div className="relative">
                  <img
                    src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/Download_Brown_Cowboy_Hat_for_free-removebg-preview.png"
                    alt="Projects"
                    className="h-[150px]"
                  />
                  <p className="absolute anmation text-2xl text-white">
                    PROJECTS
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/Download_Brown_Cowboy_Hat_for_free-removebg-preview.png"
                    alt="experience"
                    className="h-[150px]"
                  />
                  <p className="absolute anmation text-2xl text-white">
                    EXPERIENCE
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/Download_Brown_Cowboy_Hat_for_free-removebg-preview.png"
                    alt="contact"
                    className="h-[150px]"
                  />
                  <p className="absolute anmation text-2xl text-white">
                    CONTACT
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/220524-P104HM-863-removebg-preview.png"
              alt="dsds"
              className="top-0 right-0 absolute text-white h-[130px] "
              onClick={() => {
                setMenu(false);
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
