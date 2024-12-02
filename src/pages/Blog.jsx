// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
import React from 'react'//Reactni import qlamiz
import { CiSearch } from "react-icons/ci"; // Search iconini import qilamiz
import arrow from '../assets/arrow.svg'//arrow rasmni import qildim
import soat from '../assets/soat.svg'//soat rasmni import qildim
import karam from '../assets/karam.svg'//karam rasmni import qildim 
import klubnika from '../assets/klubnika.svg'//klubnika rasmni import qildim
import female from '../assets/female.svg'//female rasmni import qildim
import grapes from '../assets/grapes.svg'//grapes rasmni import qildim
import qlupnay from '../assets/qlupnay.svg'//qlupnay rasmni import qildim
import sevdim from '../assets/sevdim.svg'//sevdim rasmni import qildim
import blog1 from '../assets/blog1.svg'//blog1 rasmni import qildim
import blog2 from '../assets/blog2.svg'//blog2 rasmni import qildim
import blog3 from '../assets/blog3.svg'//blog3 rasmni import qildim
import pic1 from '../assets/pic1.svg'//pic1 rasmni import qildim
import pic2 from '../assets/pic2.svg'//pic1 rasmni import qildim
import pic3 from '../assets/pic3.svg'//pic1 rasmni import qildim
import pic4 from '../assets/pic4.svg'//pic1 rasmni import qildim
const Blog = () => {
  return (
    // Bu yerda cammentda qisqa yozganman shuning uchun chunishga harakat qilamiz !!!
  
    <div className='h-[350vh]'>
         {/* Birinchi divni boshlanishi header qismi */}
      <div className='my-[50px] w-[1210px] h-[251px] rounded-[24px] bg-[#EAF1EB] text-center mx-[60px]'>
          <h1 className='font-bold text-[48px] my-[40px] '>Welcome to our blog</h1>
          <p className='my-[30px]'>Here you can find a lot of interesting and useful information that you<br></br> need in gardening and creating a beautiful garden</p>
          <img src={pic1} className='my-[-80px]' alt="" />
          <img src={pic2} className='absolute mx-[80px] my-[-150px]'  alt="" />
          <img src={pic3} className='absolute mx-[1085px] my-[-150px]' alt="" />
          <img src={pic4} className='absolute mx-[1175px] my-[-160px]' alt="" />
      </div>
      {/* Birinchi bosh divni tugashi va ikkinchi bosh divni boshlanishi */}
      <div className='flex justify-between items-center my-[50px]'>
      <div className='border rounded-3xl px-2 flex items-center gap-5'>
          {/* Search icon va input bir divda yozildi */}
          <CiSearch className='my-[5px] text-[#70737C] text-2xl' />
          <input type="text" className='w-[20%] h-full outline-none mr-[700px] p-5' placeholder="Search" />
        </div>
        <div>
        <div className='border py-[-20px] rounded-3xl px-6 flex items-center gap-6 rounded-[71px] my-[-30px]'>
              <button className='w-[100%] h-full outline-none p-6 '>Sort by</button>
              <img src={arrow} className='' alt="" />
            </div>
            <div className='my-[-30px] mx-[10px] '>
                <h1 className='font-bold text-[18px] text-center mx-[-10px]'>Recently</h1>
            </div>
        </div>
      </div>
      {/* Ikkinchi bosh divni tugashi va uchunchi divni boshlanishi */}
      <div className=''>
            <div className='bg-[#EAF1EB] w-[730px] h-[300px] flex justify-between items-center rounded-[12px]'>
                <div className=''>
                <img src={soat} className='mx-[20px] my-[-20px] absolute' alt="" />
                <h1 className='font-bold text-[24px] mx-[20px] my-[10px] w-[30vw]'>How to plant spinach correctly<br></br> in winter</h1>
                  <p className='text-[16px] mx-[20px] w-[30vw]'>In most areas, successive sowing can be done from early<br></br> spring until early winter, but more often during hotter<br></br> months...</p>
                  <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                </div>
                <div>
                   <img src={karam} alt="" />
                </div>
            </div>
            <div className='bg-[#EAF1EB] w-[350px] h-[300px] rounded-[12px]'>
                <img src={soat} className='mx-[20px] my-[30px] my-[20px]' alt="" />
                <h1 className='font-bold text-[20px] mx-[20px] my-[0px] '>How to plant spinach correctly<br></br> in winter</h1>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[40px] absolute'>Read</button>
                <img src={grapes} className='absolute my-[50px] mx-[155px]' alt="" />
            </div>
            <div className='bg-[#EAF1EB] w-[350px] h-[300px] rounded-[12px] mx-[390px] my-[-330px]'>
                <img src={soat} className='mx-[20px] my-[30px] my-[20px]' alt="" />
                <h1 className='font-bold text-[20px] mx-[20px] my-[0px] '>How to plant spinach correctly<br></br> in winter</h1>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[40px] absolute'>Read</button>
                <img src={klubnika} className='absolute my-[50px] mx-[155px]' alt="" />
            </div>
            <div className='w-[350px] h-[630px] bg-[#EFF2F8] rounded-[12px] mx-[900px] my-[-630px]'>
                <img src={soat} className='mx-[20px]' alt="" />
                <h1 className='text-[20px] font-bold mx-[20px] m-[20px]'>How to plant spinach<br></br> correctly in winter</h1>
                <p className='mx-[20px] w-[30vw]'>In most areas, successive sowing can be<br></br> done from early spring until early winter, but<br></br> more often during hotter months...</p>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                <img src={female} className='absolute mx-[50px] my-[-30px]' alt="" />
            </div>
        </div>
        {/* Uchunnchi divni tugashi va tortinchi divni boshlanishi */}
        <div className='my-[700px] flex justify-between items-center'>
          <div className='bg-[#EAF1EB] w-[730px] h-[300px] flex justify-between items-center rounded-[12px]'>
                <div className=''>
                <img src={soat} className='mx-[20px] my-[-20px] absolute' alt="" />
                <h1 className='font-bold text-[24px] mx-[20px] my-[10px] w-[30vw]'>How to plant spinach correctly<br></br> in winter</h1>
                  <p className='text-[16px] mx-[20px] w-[30vw]'>In most areas, successive sowing can be done from early<br></br> spring until early winter, but more often during hotter<br></br> months...</p>
                  <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                </div>
                <div>
                   <img src={qlupnay} alt="" />
                </div>
            </div>
            <div className=''>
            <div className='bg-[#EAF1EB] w-[350px] h-[300px] absolute rounded-[12px] mx-[-380px] my-[-155px]'>
                <img src={soat} className='mx-[20px] my-[30px] my-[20px]' alt="" />
                <h1 className='font-bold text-[20px] mx-[20px] my-[0px] '>How to plant spinach correctly<br></br> in winter</h1>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[40px] absolute'>Read</button>
                <img src={sevdim} className='absolute my-[25px] mx-[155px]' alt="" />
                
            </div>
            </div>
            
        </div>
        {/* Tortinchi divni tugashi va beshinchi divni boshlanishi qism demoqchiman  */}
        <div className='flex justify-betwen items-center gap-20 my-[-650px]'>
            <div className='w-[350px] h-[630px] bg-[#EFF2F8] rounded-[12px]'>
                <img src={soat} className='mx-[20px]' alt="" />
                <h1 className='text-[20px] font-bold mx-[20px] m-[20px]'>How to plant spinach<br></br> correctly in winter</h1>
                <p className='mx-[20px] w-[30vw]'>In most areas, successive sowing can be<br></br> done from early spring until early winter, but<br></br> more often during hotter months...</p>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                <img src={blog1} className='absolute mx-[77px] my-[-70px]' alt="" />
            </div>
            <div className='w-[350px] h-[630px] bg-[#EFF2F8] rounded-[12px]'>
                <img src={soat} className='mx-[20px]' alt="" />
                <h1 className='text-[20px] font-bold mx-[20px] m-[20px]'>How to plant spinach<br></br> correctly in winter</h1>
                <p className='mx-[20px] w-[30vw]'>In most areas, successive sowing can be<br></br> done from early spring until early winter, but<br></br> more often during hotter months...</p>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                <img src={blog2} className='absolute mx-[75px] my-[107px]' alt="" />
            </div>
            <div className='w-[350px] h-[630px] bg-[#EFF2F8] rounded-[12px] '>
                <img src={soat} className='mx-[20px]' alt="" />
                <h1 className='text-[20px] font-bold mx-[20px] m-[20px]'>How to plant spinach<br></br> correctly in winter</h1>
                <p className='mx-[20px] w-[30vw]'>In most areas, successive sowing can be<br></br> done from early spring until early winter, but<br></br> more often during hotter months...</p>
                <button className='w-[106px] h-[50px] rounded-[8px] bg-[white] text-[green] mx-[20px] my-[10px]'>Read</button>
                <img src={blog3} className='absolute mx-[50px] my-[-70px]' alt="" />
            </div>
            
        </div>
        {/* Ohirigi beshinchi divni tugashi (qismni tugashi) */}
    </div>
  )
}

export default Blog
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim