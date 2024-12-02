import React from 'react'//Reactni import qilamiz 
import Navbar from '../components/Navbar'//Navbar ni import qilamiz
import { Outlet } from 'react-router-dom'// Outletni import qilamiz
import frame1 from '../assets/frame1.svg'//frame1ni import qilamiz
import line from '../assets/line.svg'//lineni import qilamiz
import lines from '../assets/lines.svg'//linesni import qilamiz
import { FaSquareInstagram } from "react-icons/fa6"; // Instagram iconini import qilamiz
import { FaFacebook } from "react-icons/fa"; // Facebook iconini import qilamiz
const RouterLayout = () => {
  return (
    <div>
      {/* Navbar shu yerdan boshlanadi bu yerda hozir har doim Navbar turishi mumkin bu pagedan bu page utganda tepada faqat navabar turushu uchun Navbar shu yerda birinchi bolib qoshilgan */}
      <Navbar/>
      {/* bu divni ichida ataylab container mx-auto berdim divlani otasiga qoshdim keyn boshqa divlarga yozishim shart emas aftamatichiski uzi containerga olib ketadi bu katta + lardan biri */}
      <div className='min-h-[70vh] container mx-auto'>
        {/* Outletni shu yerda qoshildi */}
      <Outlet/>
      </div>
      {/* Footer shu yerda boshlanadi */}
      <footer className='text-center flex gap-11 mx-[200px]'>
        {/* bu yerda hamma h1 va img lar qoshilagan */}
        <h1 className='text-[green]'>ALL PRODUCTS</h1>
        <img src={line} alt="" />
        <h1 className='text-[#70737C] '>ABOUT SEEDRA</h1>
        <img src={line} alt="" />
        <h1 className='text-[#70737C] text-[#70737C]  '>OUR BLOG</h1>
        <img src={frame1} alt="" />
        <h1 className='text-[#70737C] '>Terms&Conditions</h1>
        <img src={line} alt="" />
        <h1 className='text-[#70737C] '>Privacy Policy</h1>
        
      </footer>
      {/* Bu yerda ohirgi footeri qoshildgan */}
      <div className='mx-[200px] my-[30px]'>
        <img src={lines} alt="" />
        {/* Instagram va Facebook iconlar shu yerda qoyilgan */}
        <FaSquareInstagram className='absolute mx-[-20px] my-[-10px] text-2xl text-[green] my-[30px]' />
           <FaFacebook className='absolute mx-[20px] my-[-10px] text-[green] text-2xl my-[30px]'/>
           <h1 className='text-right text-[#70737C] my-[30px]'>All rights reserved</h1>
        </div>
    </div>
  )
}

export default RouterLayout