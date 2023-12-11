


<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    :loop="true"
    class="mySwiper"
   
  >
  




  <div class="w-4/5">



</div>

    <swiper-slide
        class="">
        

          <a href="https://affiliate.flagedu.com/evest/EvestStocks?ci=17&uai=44816&ani=7371&afp=Coupons" class="bt text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
           فتح حساب
          </a>
        <div class="cont">
          <h2 class="text-white">
            
          </h2>
        </div>
        <img
        src="https://s6.imgcdn.dev/VdHqD.webp" />
        </swiper-slide

    ><swiper-slide
       class="">
       <a href="https://affiliate.flagedu.com/exness/exness-cc?ci=14&uai=44816&ani=7357&afp=Coupons" class=" bt text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
           فتح حساب
       </a>
       <img
        src="   https://s6.imgcdn.dev/Vdqit.webp

     

" /></swiper-slide
    ><swiper-slide
      >
      <a  href="https://go.mexnetpro.com/visit/?bta=35535&brand=multibankfx&afp=Coupons" class="bt text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
           فتح حساب
      </a>
      <img
        src="https://s6.imgcdn.dev/VdFrT.webp" /></swiper-slide
    >
  </swiper>

  
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';



  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
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
.bt{
  position: absolute;
  z-index: 33;
  top: 80%;
  right: 30%;
}

.cont{
  position: absolute;
  z-index: 33;
  top: 20%;
  right: 56%;
}



body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 22px;
}


</style>