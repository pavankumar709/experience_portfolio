import "./header.css";
const Header = () => {
  return (
    <div className="absolute top-0 left-0  ">
      <div className=" fixed top-0   md:w-[150px] md:h-[150px] ">
        <div className="relative">
          <img
            src="https://raw.githubusercontent.com/pavankumar709/pavankumar709/main/_Pngtree_top_view_of_straw_hat_13325396-removebg-preview.png"
            className="   header"
            alt=""
          />
          <p className="text-sm  text-center right-0 absolute  text-white left-0 m-auto my-auto bottom-16 ">
            <span className="border-1 border-red-600 rounded-full">MENU</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
