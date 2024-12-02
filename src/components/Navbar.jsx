// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
import React from 'react'; // Reactni import qilamiz
import { NavLink } from 'react-router-dom'; // Navlinkni import qilamiz
import frame1 from "../assets/frame1.svg"; // Rasmni import qilamiz
import { FaSquareInstagram } from "react-icons/fa6"; // Instagram iconini import qilamiz
import { FaFacebook } from "react-icons/fa"; // Facebook iconini import qilamiz
import { CiSearch } from "react-icons/ci"; // Search iconini import qilamiz
import { FaHeart } from "react-icons/fa"; // Heart (Yurak) iconini import qilamiz
import { CiShoppingCart } from "react-icons/ci";// Cart iconini import qilamiz

const Navbar = () => {
  return (
    // Navbar qismi
    <nav className="container mx-auto">
      <div className="container mx-auto flex justify-between items-center py-4">
        <img src={frame1} className="mx-[60px]" alt="" />
        <ul className="flex gap-5 mx-[-70px]">
          <li className='text-[#70737C]'>
            {/* NavLinkda birinchi home pagesimiz */}
            <NavLink to={"/"}>ALL PRODUCTS</NavLink>
          </li>
          <li className='text-[#70737C]'>
            {/* NavLinkda ikkinchi about pagesimiz */}
            <NavLink  to={"/about"}>ABOUT SEEDRA</NavLink>
          </li>
          <li className='text-[#70737C]'>
            {/* NavLinkda uchinchi blog pagesimiz */}
            <NavLink to={"/blog"}>OUR BLOG</NavLink>
          </li>
          <li className='text-[#70737C]'>
            {/* NavLinkda to'rtinchi contact pagesimiz */}
            <NavLink to={"/contacts"}>CONTACTS</NavLink>
          </li>
          <li className='text-[#70737C]'>
            {/* NavLinkda beshinchi buyurtma pagesimiz */}
            <NavLink to={"/buyutma"}>BUYURTMA</NavLink>  
          </li>
        </ul>
        {/* Input va Iconlar shu yerda divlarni ichida */}
        <div className='mx-[100px] '>
          {/* Instagram va Facebok iconlari bir divda yozildi */}
           <FaSquareInstagram className='absolute mx-[-20px] my-[-10px] text-2xl text-[#70737C]' />
           <FaFacebook className='absolute mx-[20px] my-[-10px] text-[#70737C] text-2xl'/>
        </div>
        <div className='border rounded-xl px-3 flex items-center gap-5'>
          {/* Search icon va input bir divda yozildi */}
          <CiSearch className='my-[5px] text-[#70737C] text-2xl' />
          <input type="text" className='w-[80%] h-full outline-none' placeholder="Search" />
        </div>
        {/* Heart (Yurak) va Cart iconlari bir divda yozildi */}
        <FaHeart className='text-[green] text-2xl' />
        <CiShoppingCart className='text-[green] text-2xl' />
      </div>
    </nav>
  );
};

export default Navbar;
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim