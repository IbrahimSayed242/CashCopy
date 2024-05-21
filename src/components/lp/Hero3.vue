


<template>
  <div class="flex justify-center  pt-20 ">
   <div class="content md:w-2/3  w-5/6 relative  flex-wrap-reverse mt-20  bg-[url(https://res.cloudinary.com/dt9k74vof/image/upload/v1709982615/copy/stocks-bg_svid4a_dcpcpd.png)] bg-cover bg-no-repeat bg-center bg-gradient-to-br from-black from-20% via-gray-800 via-30% to-emerald-500   ">
    <div class="info text-2xl my-20  md:mx-10   md:m-15 text-center font-bold  " dir="rtl">
      <img src="https://res.cloudinary.com/dt9k74vof/image/upload/v1709787333/download_kg6b0b.png" class="absolute top-10 right-0 z-0 " >
    <h1
        class="text-2xl sm:text-3xl 
            font-bold text-heading-1 drop-shadow-md text-white"
      >
        اختر الكوبون المناسب لك

        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-teal-100 from-20% via-teal-400 via-30% to-emerald-600"
        >
        فرصتك لتضاعف حجم محفظتك دون المخاطرة بأي شيء
        </span> 
      </h1>


      <h1 class=" text-heading-1 m-5 text-white font-light">
        لا تفوت هذه الفرصة الرائعة لزيادة ثروتك!


        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 from-20% via-yallow-300 via-30% to-emerald-400 "
        >
        أبدأ رحلة تحقيق أحلامك نحو استثمار آمن وناجح.
 
        </span> 
      </h1>

      <div class="w-full m-5 text-center flex justify-center">
        <a href="https://wa.me/201063588999" class="w-full">
        <Button
        
          class=" min-w-max  text-white rounded-xl bg-gradient-to-br from-emerald-200 from-20% via-yallow-300 via-30% to-emerald-400  hover:from-emerald-300 hover:via-emerald-400 hover:to-emerald-500  text-md px-10 py-4"
        >
          <span class="hidden sm:flex relative z-[5]"> ابدأ الان</span>
          <span class="flex sm:hidden relative z-[5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              ></path>
            </svg>
          </span>
        </Button>
        </a>
      </div>



    </div>




  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    class="mySwiper py-20 px-10  mx-0"
  >




 
   
    <swiper-slide class="swiper-slide ">  
      
    
    
    
    </swiper-slide>
    <swiper-slide class="swiper-slide"> </swiper-slide>
    <swiper-slide class="swiper-slide"> </swiper-slide>
    <swiper-slide class="swiper-slide">  </swiper-slide>

  
  </swiper>
</div>


  

</div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cards';


  // import required modules
  import { EffectCards } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCards],
      };
    },
  };
</script>
<style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
 
}
.swiper-slide h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.4;
  margin: 0 0 20px 20px;
 
}




.btn {
  display: block;
  padding: 10px 40px;
  margin: 10px auto;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  text-decoration: none;
  color: #784ba0;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
} 

.swiper-slide {
  position: relative;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 112%;
}

.btn:hover, .btn:focus, .btn:active, .btn:visited {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: gelatine 0.5s 1;
}


.swiper-slide span {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  padding: 7px 18px;
  margin: 10px;
  border-radius: 20px;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.095);
  box-shadow: inset 2px -2px 20px rgba(214, 214, 214, 0.2), inset -3px 3px 3px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(74px);
}

.mySwiper{
  width: 20%;
  height: 850px;
  padding: 50px 0;

 
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  gap: 30px;
 
  backdrop-filter: blur(30px);
  border-radius: 20px;
 
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
  z-index: 10;


}


.info {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  padding: 0 35px;
  text-align: justify;
  text-align: center;
}

.info p{
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  margin-left: 1px;
    margin-right: 1px;
  width: 240px;
  height: 560px;

}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9_cwr9te.webp)
  no-repeat 50% 50% / cover;
  background-position: center;
  background-size: contain;


}

.swiper-slide:nth-child(2n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211904/copy/cards/%D8%A7%D9%84%D8%A7%D8%B1%D8%A8%D8%A7%D8%AD_%D8%A7%D9%84%D8%B4%D8%A7%D9%86%D9%84%D8%A9_p9msbu.webp)
      no-repeat 50% 50% / cover;
}

.swiper-slide:nth-child(3n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A_qe2p8t.webp)
      no-repeat 50% 0% / cover;
}

.swiper-slide:nth-child(4n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9_cwr9te.webp)
      no-repeat 50% 50% / cover;
}




/* ANIMATED BACKGROUND */

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background-color: #ff3cac;
  background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}


</style>