import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import BadgeIcon from "@mui/icons-material/Badge";
function Navbar() {
    const style="text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[20px] pb-[10px] flex justify-between items-center mobile:pr-0 mobile:pl-0">
        <div className="left flex flex-1 items-center">
          <div className=" language cursor-pointer text-[16px] mobile:hidden">En</div>
          <div
            className="searchInput flex border -[2px] border-solid 
    border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all"
          >
            <input
              type="text"
              placeholder="Search"
              className="input outline-none mobile:w-[50px]"
            />
            <SearchIcon style={{ fontSize: "16px" }} />
          </div>
        </div>
        {/* Center div logo*/}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">Summer Kings </div>
        </div>
        {/* Right div*/}
        <div className="right flex flex-1 justify-end item-center mobile:flex-[1.5] mobile:justify-center">
            <div className="text-[14px] cursor-pointer ml-[25px]">Register</div>
            <div className={style}>Sign in</div>
            <div className={style}>
            {/* <BadgeIcon> */}

                <ShoppingCartIcon />
            {/* </BadgeIcon> */}
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
