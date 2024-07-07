import Header from "./components/header/header";

function App() {
  return (
    <>
      {/* home  start*/}
      <div className=" h-[100dvh] relative">
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
              className="text-9xl"
              style={{
                letterSpacing: "15px",
              }}
            >
              DEV PAVAN KUMAR
            </p>
            <div className="flex justify-center">
              <span className="text-center w-8/12 text-2xl">
                Hello! I'm Pavan Kumar, a dedicated Frontend Developer with a
                year of impactful internship experience. I specialize in
                crafting robust software solutions and architecting scalable
                applications using React.js and Next.js. My journey has honed my
                skills in technical documentation, communication, and
                collaborative problem-solving. Embracing new challenges, I've
                expanded my toolkit to include Jotai for state management and
                explored creative design with Figma. Passionate
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* home  end*/}

      {/* projects  start*/}
      <div className=""></div>
      {/* projects  end*/}

      {/* experience  start*/}
      <div className=""></div>
      {/* experience  end*/}

      {/* concat me
        start*/}
      <div className=""></div>
      {/* concat me
        end*/}
    </>
  );
}

export default App;
