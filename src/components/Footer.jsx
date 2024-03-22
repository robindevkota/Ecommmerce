import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import React from "react";

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (

    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">Robin Devkota</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
          repellendus dignissimos iure itaque architecto pariatur quia a eveniet
          veniam?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <FacebookIcon />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <InstagramIcon />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <TwitterIcon />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <PinterestIcon/>
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnOutlinedIcon className="text-[#8a4af3]"/>
            <p className='pl-3'>Kathmandu Nepal</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneOutlinedIcon className="text-[#521da8]"/>
            <p className='pl-3'>+977 9813025452</p>
        </div>
        <div className="flex m-3">
            <EmailOutlinedIcon className="text-[#8a4af3]"/>
            <p className='pl-3'>robindevkta0@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;