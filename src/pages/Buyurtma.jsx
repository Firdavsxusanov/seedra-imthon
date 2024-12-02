// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
import React from 'react'//Reactni import qilamiz 
import opa from '../assets/opa.svg'//opa rasmni import qilamiz
import qoravoycha from '../assets/qoravoycha.svg'// qoravoycha rasmni import qilamiz 
import ohiri1 from '../assets/ohiri1.svg'//ohirgi1-4 rasmlarni import qilamiz
import ohiri2 from '../assets/ohiri2.svg'
import ohiri3 from '../assets/ohiri3.svg'
import ohiri4 from '../assets/ohiri4.svg'
import pic1 from '../assets/pic1.svg'//pic1-4 rasmlarni import qilamiz
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import pic4 from '../assets/pic4.svg'
const Buyurtma = () => {
  return (
    <div className='h-[320vh]'>
      {/* Buyutma pageni birinchi divni boshlanishi header qismi */}
      <div className='my-[50px] w-[1210px] h-[251px] rounded-[24px] bg-[#EAF1EB] text-center mx-[60px]'>
          <h1 className='font-bold text-[48px] my-[40px] '>Welcome to our blog</h1>
          <p className='my-[30px]'>Here you can find a lot of interesting and useful information that you<br></br> need in gardening and creating a beautiful garden</p>
          <img src={pic1} className='my-[-80px]' alt="" />
          <img src={pic2} className='absolute mx-[80px] my-[-150px]'  alt="" />
          <img src={pic3} className='absolute mx-[1085px] my-[-150px]' alt="" />
          <img src={pic4} className='absolute mx-[1175px] my-[-160px]' alt="" />
      </div>
      {/* birinchi divni tugashi va ikkinchi divni boshlanishi */}
      <div className='flex justify-between items-center gap-20'>
        <div className='mx-[100px] w-[50vw]'>
          <h1 className='font-bold text-[36px]'>Seedra helps to grow fast and<br></br> efficiant</h1>
          <p className='text-[16px] my-[20px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George</p>
          <p className='my-[20px]'>Be sure of our quality - the freshest batches of this season. Non-<br></br>GMO, Heirloom - our seeds were tested and have the best<br></br> germination ratings. </p>
          <p className='my-[20px]'>  Your easy growing experience is our guarantee<br></br>Spinach commom culinary uses: salads, soups, smoothies, lasagne,<br></br> pizza, pies, risotto, and more</p>
          <p>  Proudly sourced in the USA - our garden seeds are grown<br></br>, harvested, and packaged in the USA. We support local farmers and<br></br> are happy to produce this American-made product</p>
        </div>
        <div>
          <img src={opa} className='mx-[-150px] w-[60vw]' alt="" />
        </div>
      </div>
      {/* Ikkinchi divni tugashi va uchunchi divni boshlanishi */}
      <div  clasName='flex justify-between items-center'>
        <div>
          <img src={qoravoycha} className=' my-[100px]' alt="" />
        </div>
        <div className='mx-[650px] my-[-600px] w-[80vw]'>
          <h1 className='font-bold text-[36px]'>Our story</h1>
          <p className='text-[16px] my-[20px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George</p>
          <p className='my-[20px]'>Be sure of our quality - the freshest batches of this season. Non-<br></br>GMO, Heirloom - our seeds were tested and have the best<br></br> germination ratings. </p>
          <p className='my-[20px]'>  Your easy growing experience is our guarantee<br></br>Spinach commom culinary uses: salads, soups, smoothies, lasagne,<br></br> pizza, pies, risotto, and more</p>
          <p>  Proudly sourced in the USA - our garden seeds are grown<br></br>, harvested, and packaged in the USA. We support local farmers and<br></br> are happy to produce this American-made product</p>
        </div>
      </div>
      {/* Uchunchi divni tugashi va turtinchi divni boshlanishi */}
      <div className='my-[800px]'>
        <h1 className='text-[36px] font-bold text-center '>Meet our team</h1>
      </div>
      {/* Tortinchi divni tugashi va beshinchi divni boshlanishi */}
      <div className='flex justify-between items-center my-[-550px]'>
        <div className='text-center my-[-800px] w-[255px] h-[349px]'>
          <img src={ohiri1}  alt="" />
          <h1 className='font-bold text-[22px]'>Leslie Alexander</h1>
          <p>Nursing Assistant</p>
        <div>
        <div className='text-center w-[255px] h-[349px] mx-[300px] my-[-310px] absolute'>
          <img src={ohiri2}  alt="" />
          <h1 className='font-bold text-[22px]'>Leslie Alexander</h1>
          <p>Nursing Assistant</p>
        </div>
        <div className='text-center w-[255px] h-[349px] mx-[600px] my-[-305px] absolute'>
          <img src={ohiri3}  alt="" />
          <h1 className='font-bold text-[22px]'>Leslie Alexander</h1>
          <p>Nursing Assistant</p>
        </div>
        <div className='text-center w-[255px] h-[349px] mx-[900px] my-[-305px] absolute'>
          <img src={ohiri4}  alt="" />
          <h1 className='font-bold text-[22px]'>Leslie Alexander</h1>
          <p>Nursing Assistant</p>
        </div>
        </div>
          </div>
      </div>
      {/* Ohirgi beshinchi divni tugashi (qismni tugashi) */}
    </div>
  )
}

export default Buyurtma
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim