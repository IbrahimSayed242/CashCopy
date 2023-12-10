<template>
  <div class="flex justify-center  ">
   <div class="content  flex-wrap-reverse mt-20 ">
    <div class="info text-2xl m-20 md:m-15 text-indigo-700 text-center font-bold" dir="rtl">
 
          شكرا لك سيتم التواصل معك عبر البريد الالكتروني
<div class="m-10">
      <button class="btn "> رجوع</button>
    </div>
    </div>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :loop="true"
    class="mySwiper py-20 px-10 "
  >




 
   
    <swiper-slide class="swiper-slide ">  
      
    
    
    
    </swiper-slide>
    <swiper-slide class="swiper-slide"> </swiper-slide>
    <swiper-slide class="swiper-slide"> </swiper-slide>
    <swiper-slide class="swiper-slide">  </swiper-slide>

  
  </swiper>
</div>


  
<ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul> 
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
<style>
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
  width: 250px;
  height: 850px;
  padding: 50px 0;

 
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  gap: 30px;
  background: linear-gradient(
    180deg,
    rgba(7, 114, 109, 0.28) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(30px);
  border-radius: 20px;
  width: min(900px, 100%);
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
  width: 240px;
  height: 420px;
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
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://flagedu.com/media/images/1_1_zly7bak.original.png)
      no-repeat 50% 50% / cover;
}

.swiper-slide:nth-child(2n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://flagedu.com/media/images/1_2.original.png)
      no-repeat 50% 50% / cover;
}

.swiper-slide:nth-child(3n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://flagedu.com/media/images/3_7WeQwvl.original.png)
      no-repeat 50% 0% / cover;
}

.swiper-slide:nth-child(4n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://flagedu.com/media/images/4.original.png)
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
div{
  font-family: 'Tajawal', sans-serif;
}

</style>