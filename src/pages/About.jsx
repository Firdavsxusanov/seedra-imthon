// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
import React from 'react'//Reactni import qilamiz
import { CiSearch } from "react-icons/ci"; // Search iconini import qilamiz
import arrow from '../assets/arrow.svg'//arrow rasmni import qildim
import button1 from '../assets/button1.svg'//"Button 1-7 import qildim"
import button2 from '../assets/button2.svg'
import button3 from '../assets/button3.svg'
import button4 from '../assets/button4.svg'
import button5 from '../assets/button5.svg'
import button6 from '../assets/button6.svg'
import button7 from '../assets/button7.svg'
//Homee 2 va 5  import qildim 
import home2 from '../assets/home2.svg'
import home5 from '../assets/home5.svg'
import like from '../assets/like.svg'//like rasmni import qildim
import star from '../assets/star.svg'//star rasmni import qildim
import star1 from '../assets/star1.svg'//star1 rasmni import qildim
import shop from '../assets/shop.svg'//shop rasmni import qildim 
import fire from '../assets/fire.svg'//Fire rasm import qildm
import correct from '../assets/correct.svg'//correct rasmni import qildim
const About = () => {
  return (
    // About saytida qisqa yozganman shuning uchun chunishga harakat qilamiz !!!
    // Shu yerdan boshlab About page boshlanadi
    <div className='h-[300vh]'>
      {/* Birinchi bosh divni boshlanishi header qismi */}
      <div className='flex justify-between items-center my-[50px]'>
      <div className='border rounded-3xl px-2 flex items-center gap-5'>
          {/* Search icon va input bir divda yozildi */}
          <CiSearch className='my-[5px] text-[#70737C] text-2xl' />
          <input type="text" className='w-[20%] h-full outline-none mr-[700px] p-5' placeholder="Search" />
        </div>
        <div>
          <div >
            <div className='border py-[-20px] rounded-3xl px-6 flex items-center gap-6 rounded-[71px] my-[-30px]'>
              <button className='w-[100%] h-full outline-none p-6 '>Sort by</button>
              <img src={arrow} className='' alt="" />
            </div>
            <div className='my-[-30px] mx-[10px] '>
                <h1 className='font-bold text-[18px]'>Most expensive</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Birinchi bosh divni tugashi va ikkinchi bosh divni boshlanishi */}
      <div className='mx-[0px] w-[100vw]'>
            <button className='h-[72px]  w-[110px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button1} className='my-[-7px] mx-[5px] absolute' alt="" />ALL </button>
            <button className='h-[72px] m-[20px] mx-[30px] w-[144px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button2} className='my-[-7px] mx-[8px] absolute '   alt="" />BUNDLES</button>
            <button className='h-[72px] mx-[30px] w-[128px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button3}  className='my-[-7px] mx-[5px] absolute ' alt="" />HERBS</button>
            <button className='h-[72px] mx-[30px] w-[187px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button4}  className='my-[-7px] mx-[5px] absolute ' alt="" />VEGETABLES   </button>
            <button className='h-[72px] mx-[30px] w-[148px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button5} className='my-[-7px] mx-[5px] absolute' alt="" />FRUITS</button>
            <button className='h-[72px] mx[30px] w-[157px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button6} className='my-[-7px] mx-[5px] absolute' alt="" />SUPPLIES</button>
            <button className='h-[72px] mx-[30px] w-[163px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button7} className='my-[-7px] mx-[5px] absolute' alt="" />FLOWERS</button>
        </div>
        {/* Ikkinchi bosh divni tugashi va uchunchi divni boshlanishi */}
        <div className='my-[50px] grid grid-cols-3 gap-3 mx-[180px] w-[80vw] absolute '> 
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <h1 className='font-bold text-[28px] absolute mx-[20px] my-[70px]'>$12.56</h1>
                <img src={shop} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <h1 className='font-bold text-[28px] absolute mx-[20px] my-[70px]'>$12.56</h1>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <img src={fire} className='absolute my-[65px] mx-[10px]' alt="" />
                <h1 className='font-bold text-[28px] absolute mx-[70px] my-[70px]'>$12.56</h1>
                <div className='my-[70px] mx-[-80px] absolute'>
                <h1 className='font-bold text-[22px]  text-[#70737C] mx-[260px] my-[5px]'>$15.56</h1>
                <h1 className='font-bold text-[#70737C] text-2xl mx-[260px] my-[-47px]'>_______</h1>
                </div>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <h1 className='font-bold text-[28px] absolute mx-[20px] my-[70px]'>$12.56</h1>
                <img src={shop} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <img src={fire} className='absolute my-[65px] mx-[10px]' alt="" />
                <h1 className='font-bold text-[28px] absolute mx-[70px] my-[70px]'>$12.56</h1>
                <div className='my-[70px] mx-[-80px] absolute'>
                <h1 className='font-bold text-[22px]  text-[#70737C] mx-[260px] my-[5px]'>$15.56</h1>
                <h1 className='font-bold text-[#70737C] text-2xl mx-[260px] my-[-47px]'>_______</h1>
                </div>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home5 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <img src={fire} className='absolute my-[65px] mx-[10px]' alt="" />
                <h1 className='font-bold text-[28px] absolute mx-[70px] my-[70px]'>$12.56</h1>
                <div className='my-[70px] mx-[-80px] absolute'>
                <h1 className='font-bold text-[22px]  text-[#70737C] mx-[260px] my-[5px]'>$15.56</h1>
                <h1 className='font-bold text-[#70737C] text-2xl mx-[260px] my-[-47px]'>_______</h1>
                </div>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <h1 className='font-bold text-[28px] absolute mx-[20px] my-[70px]'>$12.56</h1>
                <img src={shop} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home2 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <h1 className='font-bold text-[28px] absolute mx-[20px] my-[70px]'>$12.56</h1>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home5 } className='my-[30px] mx-[25px]' alt="" />
                <img src={like} className='mx-[300px] my-[-350px] absolute'  alt="" />
                <img src={star} className='mx-[20px] my-[-10px] absolute ' alt="" />
                <img src={star} className='mx-[40px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[60px] my-[-10px] absolute' alt="" />
                <img src={star} className='mx-[80px] my-[-10px] absolute' alt="" />
                <img src={star1} className='mx-[100px] my-[-10px] absolute' alt="" />
                <h1 className='text-[16px] text-[#70737C] absolute mx-[130px] my-[-10px]'>(123)</h1>
                <h1 className='mx-[20px] my-[20px] absolute'>Seedra Cilantro Seeds for Planting <br></br> Indoor and Outdoor</h1>
                <img src={fire} className='absolute my-[65px] mx-[10px]' alt="" />
                <h1 className='font-bold text-[28px] absolute mx-[70px] my-[70px]'>$12.56</h1>
                <div className='my-[70px] mx-[-80px] absolute'>
                <h1 className='font-bold text-[22px]  text-[#70737C] mx-[260px] my-[5px]'>$15.56</h1>
                <h1 className='font-bold text-[#70737C] text-2xl mx-[260px] my-[-47px]'>_______</h1>
                </div>
                <img src={correct} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
        </div>
        {/* Uchunnchi divni tugashi va tortinchi divni boshlanishi */}
        <div className='w-[525px] h-[504px] border-[2px] bg-[white] absolute my-[150px]'>
          <h1 className='text-[1.8rem]  font-bold mx-[20px] my-[20px]'>Herbs</h1>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='m-[10px] mx-[20px]'>Angelica</h1>
              <h1 className='m-[10px] mx-[20px]'>Anise</h1>
              <h1 className='m-[10px] mx-[20px]'>Anise Hyssop</h1>
              <h1 className='m-[10px] mx-[20px]'>Asclepias</h1>
              <h1 className='m-[10px] mx-[20px]'>Butterfly Weed</h1>
              <h1 className='m-[10px] mx-[20px]'>Basil</h1>
              <h1 className='m-[10px] mx-[20px]'>Bee Balm</h1>
              <h1 className='m-[10px] mx-[20px]'>Borage</h1>
            </div>
            <div>
              <h1 className='m-[10px] mx-[20px]'>Calendula</h1>
              <h1 className='m-[10px] mx-[20px]'>Caraway</h1>
              <h1 className='m-[10px] mx-[20px]'>Catmint</h1>
              <h1 className='m-[10px] mx-[20px]'>Catnip</h1>
              <h1 className='m-[10px] mx-[20px]'>Chamomile</h1>
              <h1 className='m-[10px] mx-[20px]'>Chervil</h1>
            </div>
            <div>
              <h1 className='m-[10px] mx-[20px]'>Calendula</h1>
              <h1 className='m-[10px] mx-[20px]'>Caraway</h1>
              <h1 className='m-[10px] mx-[20px]'>Catmint</h1>
              <h1 className='m-[10px] mx-[20px]'>Catnip</h1>
              <h1 className='m-[10px] mx-[20px]'>Chamomile</h1>
              <h1 className='m-[10px] mx-[20px]'>Chervil</h1>
            </div>
          </div>
          <h1 className='text-[#EFEFEF] font-bold mx-[20px]' >______________________________________________________________________</h1>
          <h1 className='text-[#70737C] mx-[20px] my-[30px]'>View all Hearbs</h1>
        </div>
        {/* Ohirgi tortinchi div  */}
    </div>
  )
}

export default About
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson 
