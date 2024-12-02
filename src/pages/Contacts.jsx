import React from 'react'//Reactni import qilamiz
import contact1 from '../assets/contact1.svg'//contact 1-7 rasmlarni import qildim
import contact2 from '../assets/contact2.svg'
import contact3 from '../assets/contact3.svg'
import contact4 from '../assets/contact4.svg'
import contact5 from '../assets/contact5.svg'
import contact6 from '../assets/contact6.svg'
import contact7 from '../assets/contact7.svg'
import dumoloq1 from '../assets/dumoloq1.svg'//dumoloq 1-2 rasmlarni import qildim
import dumoloq2 from '../assets/dumoloq2.svg'
import { FaHeart } from "react-icons/fa"; // Heart (Yurak) iconini import qilamiz
import line5 from '../assets/line5.svg'//line5 rasmni import qildim
import starr from '../assets/starr.svg'//starr rasmni import qildim
import stars from '../assets/stars.svg'//stars rasmni import qildim
import star2 from '../assets/star2.svg'//star 2-5 rasmlarni import qildim
import star3 from '../assets/star3.svg'
import star4 from '../assets/star4.svg'
import star5 from '../assets/star5.svg'
import rasteniya from '../assets/rasteniya.svg'//rasteniya import qildim
import opoqi from '../assets/opoqi.svg'
import home1 from '../assets/home1.svg'//Homee 1,2,5 import qildim 
import home2 from '../assets/home2.svg'
import home5 from '../assets/home5.svg'
import like from '../assets/like.svg'//like rasmni import qildim
import star from '../assets/star.svg'//star rasmni import qildim
import star1 from '../assets/star1.svg'//star1 rasmni import qildim
import shop from '../assets/shop.svg'//shop rasmni import qildim 
import fire from '../assets/fire.svg'//Fire rasm import qildm
import correct from '../assets/correct.svg'
import fresh1 from '../assets/fresh1.svg'//fresh 1-3 rasimlarni import qildim
import fresh2 from '../assets/fresh2.svg'
import fresh3 from '../assets/fresh3.svg'
const Contacts = () => {
  return (
    <div className='h-[520vh]'>
      {/* Conctact pageni birinchi qismi yoki birinchi divi */}
      <div className='my-[50px]'>
        <div>
          <h1>Main / Cataloug / Vegetables / Cucumber / <h1 className='my-[-22px] mx-[310px] font-bold'>SEEDRA cucumber</h1></h1>
        </div>
        <div className='flex justify-between items-center gap-10'>
          <div className='w-[80vw]'>
            <img src={contact1} className='my-[50px]' alt="" />
            <div className='flex gap-5 my-[10px]'>
              <img src={contact2} alt="" />
              <img src={contact3} alt="" />
              <img src={contact4} alt="" />
              <img src={contact5} alt="" />
              <img src={contact6} alt="" />
              <img src={contact7} alt="" />
            </div>
          </div>
          <div className='mx-[600px] w-[50vw] absolute '>
            <h1 className='text-[25px] font-bold m-[10px]'>SEEDRA Corn - Bodacious Hybrid Seeds for<br></br> Indoor and Outdoor Planting</h1>
            <button className='text-[green] bg-[#35974014] w-[147px] h-[40px] rounded-[119px] m-[10px]'>AVAILABLE</button>
            <button className='text-[black] bg-[white] w-[147px] h-[40px] border-[2px] rounded-[119px] m-[10px]'>VEGETABLE</button>
            <h1 className='m-[10px] text-[grey]'>Size</h1>
            <h1 className='font-bold text-[16px] mx-[50px] my-[-34px] absolute'>2 PACK</h1>
            <h1 className='text-[green] text-[22px] absolute mx-[470px] my-[-40px] w-[30vw]'>- 2 +</h1>
            <div>
              <input type="text" className='w-[510px] h-[44px] border rounded-[5px] text-right' placeholder='$1,56' />
              <img src={dumoloq1} className='absolute my-[-30px] mx-[10px] text-[#1F2533]' calt="" />
              <h1 className='absolute my-[-35px] mx-[40px] text-[#1F2533]'>1 pack</h1>
              <h1 className='absolute my-[-35px] text-[grey] mx-[390px] w-[30vw]'>start from</h1>
            </div>
            <div className='my-[10px]'>
              <input type="text" className='w-[510px] h-[44px] border-teal-400 border-[2px] rounded-[5px] text-right' placeholder='$1,56' />
              <img src={dumoloq2} className='absolute my-[-30px] mx-[10px] text-[#1F2533]' calt="" />
              <h1 className='absolute my-[-35px] mx-[40px] text-[#1F2533]'>1 pack</h1>
              <h1 className='absolute my-[-35px] text-[grey] mx-[390px] w-[30vw]'>start from</h1>
            </div>
            <div className='my-[10px]'>
              <input type="text" className='w-[510px]  h-[44px] border rounded-[5px] text-right' placeholder='$1,56' />
              <img src={dumoloq1} className='absolute my-[-30px] mx-[10px] text-[#1F2533]' calt="" />
              <h1 className='absolute my-[-35px] mx-[40px] text-[#1F2533]'>1 pack</h1>
              <h1 className='absolute my-[-35px] text-[grey] mx-[390px] w-[30vw]'>start from</h1>
            </div>
            <div className='my-[10px]'>
              <input type="text" className='w-[510px] h-[44px] border rounded-[5px] text-right' placeholder='$1,56' />
              <img src={dumoloq1} className='absolute my-[-30px] mx-[10px] text-[#1F2533]' calt="" />
              <h1 className='absolute my-[-35px] mx-[40px] text-[#1F2533]'>1 pack</h1>
              <h1 className='absolute my-[-35px] text-[grey] mx-[390px] w-[30vw]'>start from</h1>
            </div>
            <div className='my-[10px]'>
              <input type="text" className='w-[510px] h-[44px] border rounded-[5px] text-right' placeholder='$1,56' />
              <img src={dumoloq1} className='absolute my-[-30px] mx-[10px] text-[#1F2533]' calt="" />
              <h1 className='absolute my-[-35px] mx-[40px] text-[#1F2533]'>1 pack</h1>
              <h1 className='absolute my-[-35px] text-[grey] mx-[390px] w-[30vw]'>start from</h1>
            </div>
            <h1 className='text-[16px] text-[grey] my-[10px]'>$15,56</h1>
            <h1 className='text-[grey] absolute my-[-42px]' >_______</h1>
            <h1 className='text-[24px] font-bold'>$12,56</h1>
            <FaHeart className='text-[green] text-2xl mx-[335px] my-[-35px] absolute'  /> 
            <button className='bg-[#359740] w-[153px] h-[52px]  mx-[370px] my-[-50px] absolute text-[white] rounded-[12px]'>Add to card</button>
          </div> 
        </div>
      </div>
      {/* Conctact pageni ikkinchi qismi */}
      <div className='my-[50px] h-[50vh]'>
        <h1 className='text-[36px] font-bold'>Product information.</h1>
        <img src={line5} className='my-[30px] mx-[50px]' alt="" />
        <div className=''>
          <div className=''>
            <h1 className='w-[570px] h-[392px] m-[20px]'>EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George
                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination               ratings. Your easy growing experience is our guarantee
                Cilantro common culinary uses: salsa, guacamole, pesto, salads, chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp               skewers, falafel, and more
                Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers   and are happy to               produce this American-made product
                SEEDRA customer service - please contact us directly through Amazon with any questions or concerns about our products. We care about               each customer and do our best to provide you with 100% satisfaction</h1>
          </div>
          <div className='w-[475px] h-[200px] border rounded-[12px] mx-[700px] my-[-410px] '>
            <h1 className='text-[grey] absolute my-[10px] mx-[20px]'>Package Dimensions</h1>
            <h1 className='text-[black ] mx-[300px] w-[20vw] my-[10px]'>5.51 x 3.5 x 0.35 inches</h1>
            <h1 className='text-[grey]'>_______________________________________________________________________</h1>
            <h1 className='text-[grey] absolute my-[10px] mx-[20px]'>Item Weight</h1>
            <h1 className='mx-[300px] w-[20vw] my-[10px]'>0.317 ounces</h1>
            <h1 className='text-[grey]'>_______________________________________________________________________</h1>
            <h1 className='my-[10px] absolute my[10px] mx-[20px] text-[grey]'>ASIN</h1>
            <h1 className='mx-[300px] my-[10px]'>B08Z3HN5MP</h1>
          </div>
        </div>
      </div>
      {/* Ikkinchi qismi tugashi va uchunchi qismi boshlanishi */}
      <div>
        <div className='my-[100px]'>
          <h1 className='text-[36px] font-bold my-[20px]'>Frequently asked questions.</h1>
        </div>
        {/* uchunchi qismi tugashi va tortinchi qismi boshlanishi */}
        <div className='bg-[#EFEFEF] my-[-50px] w-[730px] h-[81px] border rounded-[12px] '>
          <h1 className='mx-[20px] my-[15px] absolute'>For seller: are these seeds organic? it does matter if they are<br></br> organic, seeds can hold pesticides from the plant they grow from.</h1>
          <h1 className='mx-[690px] my-[-10px] text-[green] text-[52px] absolute '>+</h1>
        </div>
        {/* Tortinchi qismi tugashi va beshinchi qismi boshlanishi */}
        <div className='w-[730px] h-[256px] my-[80px] border bg-[#EFEFEF] rounded-[12px]'>
          <h1 className='font-bold text-[20px] mx-[20px] my-[10px]'>Can they be grown on hydroponic systems</h1>
          <h1 className='mx-[690px] my-[-70px] text-[green] text-[52px] absolute '>-</h1>
          <h1 className='mx-[20px] my-[10px] text-[grey] text-[26px]'>___________________________________________________________</h1> 
          <p className='mx-[20px] my-[10px]'>I have heat mats and artificial light. 
          I planted them in all purpose potting soil. Moist not wet. Placed them on a<br></br> heat mat. If not available, somewhere where it's 72 degrees. Add natural<br></br> light, but I used artificial light. Takes 10- 15 days because of there hard<br></br> shell on the seed. </p>
        </div>
        {/* Beshinnchi qismi tugashi va oltinchi qismi boshlanishi */}
        <div className='bg-[#EFEFEF] my-[-50px] w-[730px] h-[81px] border rounded-[12px] '>
          <h1 className='mx-[20px] my-[15px] absolute'>They did not germinate even when i followed directions.<br></br> What should i do?.</h1>
          <h1 className='mx-[690px] my-[-10px] text-[green] text-[52px] absolute '>+</h1>
        </div>
        {/* Oltinchi qismi tugashi va yettinchi qismi boshlanishi */}
        <div className='bg-[#EAF1EB] w-[350px] h-[438px] mx-[800px] my-[-450px] rounded-[12px] '>
          <img src={fresh1} className='absolute' alt="" />
          <img src={fresh2} className='absolute mx-[50px] my-[px]' alt="" />
          <img src={fresh3} className='absolute mx-[298px]' alt="" />
            <h1 className='text-[20px] font-bold mx-[30px] my-[120px] absolute'>Didn’t find answer?</h1>
            <p className='mx-[30px] my-[160px] absolute'>Ask your own!</p>
            <input type="text" placeholder='Type here ' className='w-[297px] h-[133px] mx-[20px] absolute my-[200px] rounded-[10px]' />
            <button className='absolute mx-[20px] my-[360px]  w-[104px] h-[51px] text-[white] bg-[#359740] rounded-[12px]'>Send</button>
        </div>
      </div>
      {/*  Uchunchi qismi tugashi va tortinchi qismi boshlanishi*/}
      <div className='my-[500px] flex justify-between items-center'>
      <div>
        <h1 className='text-[36px] font-bold'>Customer reviews.</h1>
      </div>
      <div>
        <button className='w-[160px] h-[51px] border text-[green] rounded-[12px]'>Make reviews</button>
      </div>
      </div>
      {/* Tortinchi qismi tugashi va beshinchi qismi boshlanishi */}
      <div className='my-[-450px] w-[350px] h-[318px] bg-[#EFEFEF] border rounded-[12px]'>
        <h1 className='text-[48px] font-bold mx-[20px]'>4,1</h1>
        <p className='mx-[100px] text-[grey] absolute my-[-60px]'>124 reviews</p>
        <img src={stars} className='mx-[100px] my-[-35px] absolute' alt="" />
        <div className='mx-[40px]'>
        <img src={star5} className='my-[15px]' alt="" />
        <img src={star4} className='my-[15px]' alt="" />
        <img src={star3} className='my-[15px]' alt="" />
        <img src={star2} className='my-[15px]' alt="" />
        <img src={starr} className='my-[15px]' alt="" />
        </div>
      </div>
      {/* Beshinchi qismi tugashi va oltinchi qismi boshlanishi */}
      <div className='w-[350px] h-[434px] bg-[#EFEFEF] my-[480px] rounded-[12px]  '>
      <p className='mx-[20px] text-[grey] my-[20px] absolute  '>124 reviews</p>
        <h1 className='text-[20px] font-bold my-[60px] mx-[20px] absolute '>Photo&Video review</h1>
        <h1 className='text-[green] text-[22px] absolute mx-[280px] my-[50px]'>View</h1>
        <div className='grid grid-cols-2 gap-3 absolute my-[120px] mx-[20px]'>
        <img src={rasteniya} alt="" />
        <img src={rasteniya} alt="" />
        <img src={rasteniya} alt="" />
        <img src={rasteniya} alt="" />
        </div>
      </div>
      {/* Oltinchi qismi tugashi va yettinchi qismi boshlanishi  */}
      <div className='my-[-830px]'>
      <div className='my-[-400px] w-[730px] h[350px] bg-[#FFFFFF] border rounded-[12px] mx-[500px] absolute my-[-400px]'>
        <img src={opoqi}  className='mx-[30px] my-[20px]' alt="" />
        <h1 className='mx-[110px] absolute font-bold my-[-80px] text-[20px]'>Carla Samantoes-Diego</h1>
        <p className='mx-[110px] absolute text-[grey] my-[-50px]'>Reviewed in the United States on June 18, 2021</p>
        <img src={stars} className='absolute mx-[580px] my-[-80px]' alt="" />
        <p className='my-[10px] mx-[30px]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions<br></br> created by PhD Helga George</p>
        <p className='my-[10px] mx-[30px]'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our<br></br> seeds were tested and have the best germination ratings. </p>
        <h1 className='text-[grey] mx-[30px]'>Size</h1>
        <h1 className='mx-[70px] absolute my-[-22px] font-bold'>2 PAGE</h1>
        <button className='mx-[140px] my-[-40px] bg-[#35974014] text-[green] w-[147px] h-[28px] rounded-[119px]'>VERIFIED</button>
      </div>
      </div>
      {/* Yettinchi qismi tugashi va Sakinzinchi qismi boshlanishi  */}
      <div className='my-[0px] w-[730px] h[350px] bg-[#FFFFFF] border rounded-[12px] mx-[500px] absolute my-[-400px]'>
        <img src={opoqi}  className='mx-[30px] my-[20px]' alt="" />
        <h1 className='mx-[110px] absolute font-bold my-[-80px] text-[20px]'>Carla Samantoes-Diego</h1>
        <p className='mx-[110px] absolute text-[grey] my-[-50px]'>Reviewed in the United States on June 18, 2021</p>
        <img src={stars} className='absolute mx-[580px] my-[-80px]' alt="" />
        <p className='my-[10px] mx-[30px]'>Eine sehr aromatische Sorte, wollte die Himbeere gerade noch einmal bestellen,<br></br> derzeit nicht verfügbar. So süße Früchte und das jetzt im Oktober, unglaublich</p>
        <img src={rasteniya} className='mx-[30px]' alt="" />
        <img src={rasteniya} className='mx-[190px] absolute my-[-145px]' alt="" />
        <h1 className='text-[grey] mx-[30px]'>Size</h1>
        <h1 className='mx-[70px] absolute my-[-22px] font-bold'>2 PAGE</h1>
        <button className='mx-[140px] my-[-40px] bg-[#35974014] text-[green] w-[147px] h-[28px] rounded-[119px]'>VERIFIED</button>
      </div>
      {/* Sakizinchi qismi tugashi va toqizinchi qismi boshlanishi  */}
      <div className='my-[400px] absolute'>
        <h1 className='text-[36px]'>Related products.</h1>
      </div>
      {/* Toqizinchi qismi tugashi va oninchi qismi boshlanishi */}
      <div className='flex justify-between items-center gap-20 my-[500px] absolute '>
      <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home1 } className='my-[30px] mx-[25px]' alt="" />
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
                <img src={shop} className='mx-[270px]  my-[70px] absolute' alt="" />
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
      {/* Oninchi qismi tugashi Contact pageni tugashi   */}
    </div>
  )
}

export default Contacts
