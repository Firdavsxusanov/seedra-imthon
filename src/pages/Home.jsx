// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
// "Bu yerda cammentda qisqa yozganman shuning uchun chunishga harakat qilamiz !!!"
import React from 'react' // Reactni improt qilamiz
import fire from '../assets/fire.svg'//Fire rasm import qildm
import img1 from '../assets/img1.svg'//img1 rasmni import qildim
import list1 from '../assets/list1.svg'//List 1-8 import qildim
import list2 from '../assets/list2.svg'
import list3 from '../assets/list3.svg'
import list4 from '../assets/list4.svg'
import list5 from '../assets/list5.svg'
import list6 from '../assets/list6.svg'
import list7 from '../assets/list7.svg'
import list8 from '../assets/list8.svg'
import button1 from '../assets/button1.svg'//"Button 1-7 import qildim"
import button2 from '../assets/button2.svg'
import button3 from '../assets/button3.svg'
import button4 from '../assets/button4.svg'
import button5 from '../assets/button5.svg'
import button6 from '../assets/button6.svg'
import button7 from '../assets/button7.svg'
import home1 from '../assets/home1.svg'//Homee 1-6 import qildim 
import home2  from '../assets/home2.svg'
import home3 from '../assets/home3.svg'
import home4 from '../assets/home4.svg'
import home5 from '../assets/home5.svg'
import home6 from '../assets/home6.svg'
import like from '../assets/like.svg'//like rasmni import qildim
import star from '../assets/star.svg'//star rasmni import qildim
import star1 from '../assets/star1.svg'//star1 rasmni import qildim
import shop from '../assets/shop.svg'//shop rasmni import qildim 
import soat from '../assets/soat.svg'//soat rasmni import qildim
import karam from '../assets/karam.svg'//karam rasmni import qildim 
import klubnika from '../assets/klubnika.svg'//klubnika rasmni import qildim
import female from '../assets/female.svg'//female rasmni import qildim
import qiz from '../assets/qiz.svg'//qiz rasmni import qildim
import stars from '../assets/stars.svg'//stars rasmni import qildim
import green from '../assets/green.svg'//green rasmni imort qildim 
import white from '../assets/white.svg'//white rasmni import qildim 
import ayol from '../assets/ayol.svg'//ayol rasmni import qildim
const Home = () => {
    // HOME PAGE boshladik "BISMILLAH"
  return (
    // Navbar qismi birinchi bosh divni boshlanishi
    <div className='h-[580vh]'>
        {/* Birinchi bosh divni boshlanishi header qismi */}
        <div className= ' my-[50px] w-[1240px] h-[445px] bg-[#EAF1EB] container mx-auto mx-[50px] rounded-[20px] flex justify-between items-center '>
            <div className='container mx-auto'> 
                <h1 className='font-bold text-[48px] text-[black] mx-[50px]'>SEEDRA Basil Seeds for<br></br> Indoor and Outdoor Planting</h1>
                <p className='mx-[50px] my-[10px]'>Be sure of our quality - the freshest batches of this season. Non-GMO,<br></br> Heirloom - our seeds were tested and have the best germination ratings.<br></br> Your easy growing experience is our guarantee</p>
                <img src={fire} className='mx-[40px]' alt="" />
                <h1 className='font-bold text-[42px]  mx-[100px] my-[-50px]' >$12.56</h1>
                <h1 className='font-bold text-[22px]  text-[#70737C] mx-[260px] my-[5px]'>$15.56</h1>
                <h1 className='font-bold text-[#70737C] text-2xl mx-[260px] my-[-47px]'>_______</h1>
                <button className='w-[153px] h-[51px] rounded-[8px] bg-[#359740] my-[90px] mx-[50px] text-[white]'>Add to card</button>
                <button className='w-[153px] h-[51px] rounded-[8px] text-[#359740] bg-[white] mx-[-20px]'>Discover</button>
            </div>
            
            <div>
                <img src={img1} className='mx-[-20px] w-[30vw]' alt="" />
            </div>
        </div>
        {/* Navbar qismi tugashi va  ikkinchi bosh divni boshlanishi */}
        <div className='bg-[#FFE62E17] w-[1240px] h-[104px] mx-[0px] rounded-[20px] text-center'>
            <h1 className='text-[24px] font-bold'>We sell seeds </h1>
            <p className='text-[16px] text-[#70737C]'>that always sprout and gardening supplies which never break</p>
            <img src={list1} className='my-[-70px] mx-[10px] absolute' alt="" />
            <img src={list2} className='my-[6px] mx-[50px]' alt="" />
            <img src={list3} className='my-[-80px] mx-[100px] absolute' alt="" />
            <img src={list4} className='mx-[130px] my-[-60px] absolute' alt="" />
            <img src={list5} className='absolute mx-[1030px] my-[-110px]' alt="" />
            <img src={list6} className='absolute mx-[1080px] my-[-50px]' alt="" />
            <img src={list7} className='mx-[1130px] my-[-90px] absolute' alt="" />
            <img src={list8} className='mx-[1130px] my-[-102px]' alt="" />
        </div>
        {/* Ikkinchi divni tugashi va uchinchi divni boshlanishi */}
        <div className='my-[50px] flex justify-between items-center'>
            <h1 className='text-[36px] font-bold '>Our products.</h1>
            <button className='w-[153px] h-[51px] mx-[40px] rounded-[8px] text-[#359740] bg-[white] mx-[-20px] border'>View all (12)</button>
        </div>
        {/* uchunchi home pageni tugashi va tortinchi home page ni boshlanishi */}

        <div className='gap-x-1 w-[100vw]'>
            <button className='h-[72px]  w-[110px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button1} className='my-[-7px] mx-[5px] absolute' alt="" />ALL </button>
            <button className='h-[72px] m-[20px] mx-[30px] w-[144px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button2} className='my-[-7px] mx-[8px] absolute '   alt="" />BUNDLES</button>
            <button className='h-[72px] mx-[30px] w-[128px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button3}  className='my-[-7px] mx-[5px] absolute ' alt="" />HERBS</button>
            <button className='h-[72px] mx-[30px] w-[187px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button4}  className='my-[-7px] mx-[5px] absolute ' alt="" />VEGETABLES   </button>
            <button className='h-[72px] mx-[30px] w-[148px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button5} className='my-[-7px] mx-[5px] absolute' alt="" />FRUITS</button>
            <button className='h-[72px] mx[30px] w-[157px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button6} className='my-[-7px] mx-[5px] absolute' alt="" />SUPPLIES</button>
            <button className='h-[72px] mx-[30px] w-[163px] border text-center gap-5 rounded-[8px] my-[-5px] '><img src={button7} className='my-[-7px] mx-[5px] absolute' alt="" />FLOWERS</button>
        </div>
        {/* tortinchi home pageni tugashi va beshinchi home page ni boshlanishi */}
        <div className='my-[50px] grid grid-cols-3 gap-3 mx-[0px] gap-x-16 gap-y-6'> 
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
                <img src={home3 } className='my-[30px] mx-[25px]' alt="" />
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
                <img src={home4 } className='my-[30px] mx-[25px]' alt="" />
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
                <img src={shop} className='mx-[270px]  my-[70px] absolute' alt="" />
            </div>
            <div className='w-[350px] h-[512px] border rounded-[10px]'>
                <img src={home6 } className='my-[30px] mx-[25px]' alt="" />
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
        </div>
        {/* beshinchi kattalaridan birini home pageni tugashi va oltinchi home page boshlanashi */}
        <div className='my-[50px] flex justify-between items-center'>
            <h1 className='text-[36px] font-bold'>Our blog..</h1>
            <button className='w-[153px] h-[51px] rounded-[8px] text-[#359740] bg-[white] mx-[40px] border'>Go to our blog</button>
        </div>
        {/* oltinchi home pageni tugashi ba yettinchi home page boshlanishi */}
        <div className='h-[100vh]'>
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
                <img src={klubnika} className='absolute my-[50px] mx-[155px]' alt="" />
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
        {/* yettinchi home page tugashi va sakkinzinchi home page boshlanishi */}
        <h1 className='text-[36px] font-bold text-center'>What out clients say</h1>
        <div className='flex justify-between items-center gap-10 my-[20px]'>
            <div className='w-[500px] h-[347px] border rounded-[12px]'>
                <img src={qiz} className='mx-[30px] my-[40px]' alt="" />
                <h1 className='text-[18px] font-bold mx-[110px] my-[-100px] absolute'>Carla Samantoes-Diego</h1>
                <h1 className='text-[#70737C] mx-[110px] my-[-70px] absolute'>12.09.2021</h1>
                <img src={stars} className='mx-[20px] my-[-20px] absolute' alt="" />
            <p className='text-[14px] mx-[20px] my-[30px] absolute'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George<br></br>
            Be sure of our quality - the freshest batches of this season.<br></br> Non-GMO, Heirloom - our seeds were tested and have <the><br /></the> best germination ratings. </p>
            </div>
            <div className='w-[500px] h-[347px] border rounded-[12px]'>
                <img src={qiz} className='mx-[30px] my-[40px]' alt="" />
                <h1 className='text-[18px] font-bold mx-[110px] my-[-100px] absolute'>Carla Samantoes-Diego</h1>
                <h1 className='text-[#70737C] mx-[110px] my-[-70px] absolute'>12.09.2021</h1>
                <img src={stars} className='mx-[20px] my-[-20px] absolute' alt="" />
            <p className='text-[14px] mx-[20px] my-[30px] absolute'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George<br></br>
            Be sure of our quality - the freshest batches of this season.<br></br> Non-GMO, Heirloom - our seeds were tested and have <the><br /></the> best germination ratings. </p>
            </div>
            <div className='w-[500px] h-[347px] border rounded-[12px]'>
                <img src={qiz} className='mx-[30px] my-[40px]' alt="" />
                <h1 className='text-[18px] font-bold mx-[110px] my-[-100px] absolute'>Carla Samantoes-Diego</h1>
                <h1 className='text-[#70737C] mx-[110px] my-[-70px] absolute'>12.09.2021</h1>
                <img src={stars} className='mx-[20px] my-[-20px] absolute' alt="" />
            <p className='text-[14px] mx-[30px] my-[20px] absolute'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George<br></br>
            Be sure of our quality - the freshest batches of this season.<br></br> Non-GMO, Heirloom - our seeds were tested and have <the><br /></the> best germination ratings. </p>
            </div>
        </div>
        {/* sakkinzinchi home page tugashi va toqqizinchi home pageni tugashi */}
        <div className='flex gap-5 items-center mx-[555px] my-[20px]'>
        <img src={green} alt="" />
        <img src={white} alt="" />
        <img src={white} alt="" />
        </div>
        {/* toqqizinchni divni tugashi va oninchi divni boshlanishi  */}
        <div className='flex justify-between items-center my-[70px]'>
            <div>
                <h1 className='font-bold text-[36px] mx-[20px]'>Seedra helps to grow fast and<br></br> efficiant</h1>
                <p className='text-[16px] m-[20px]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br></br> professional instructions created by PhD Helga George</p>
                <p className='text-[16px] m-[20px]'>Be sure of our quality - the freshest batches of this season. Non-<br></br>GMO, Heirloom - our seeds were tested and have the best<br></br> germination ratings. </p>
                <p className='text-[16px] m-[20px]'>  Your easy growing experience is our guarantee<br></br>Spinach commom culinary uses: salads, soups, smoothies, lasagn,<br></br> pizza, pies, risotto, and more</p>
                <p className='text-[16px] m-[20px]'>  Proudly sourced in the USA - our garden seeds are grown,<br></br> harvested, and packaged in the USA. We support local farmers and<br></br> are happy to produce this American-made product</p>
            </div>
            <div>
                <img src={ayol} alt="" />
            </div>
        </div>
        {/* Ohiri oninchi divni tugashi ( oninchi qismni tugashi) */}
    </div>
  )
}
export default Home
// DIV deganda men qism manoni aytmoqchi bolaman shuning uchun man uzim cungandak qildim agar tushunmagan bolsangi menga aytsangiz tushuntirib beraman lekn chunish oson kammentariyani nazarda tutim
