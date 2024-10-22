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
    <div class="w-4/5"></div>

    <swiper-slide class="">
      <a
        href="https://affiliate.flagedu.com/evest/EvestStocks?ci=17&uai=44816&ani=7371&afp=Coupons"
        class="bt text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[8px] px-5 py-1 text-center me-2 mb-2"
      >
        فتح حساب
      </a>
      <div class="cont">
        <h2 class="text-white"></h2>
      </div>
      <img
        loading="lazy"
        src="https://s6.imgcdn.dev/VdHqD.webp"
      /> </swiper-slide
    ><swiper-slide class="">
      <a
        href="https://affiliate.flagedu.com/exness/exness-cc?ci=14&uai=44816&ani=7357&afp=Coupons"
        class="bt text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[8px] px-5 py-1 text-center me-2 mb-2"
      >
        فتح حساب
      </a>
      <img loading="lazy" src="https://s6.imgcdn.dev/Vdqit.webp"
    /></swiper-slide>
    <swiper-slide>
      <a
        href="https://affiliate.flagedu.com/ava/AvaBonus?ci=35&uai=53854&ani=19424&afp=Flagedu-Article"
        class="bt text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[8px] px-5 py-1 text-center me-2 mb-2"
      >
        فتح حساب
      </a>
      <img
        src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707210458/copy/ava_trade_ejenit.webp"
    /></swiper-slide>

    <swiper-slide>
      <a
        href="https://affiliate.flagedu.com/evetrade/eve?ci=40&uai=46252&ani=19411%3DFlagedu-Article&source=website&st=155"
        class="bt text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[8px] px-5 py-1 text-center me-2 mb-2"
      >
        فتح حساب
      </a>
      <img
        src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707210458/copy/eve_trade_1_ubfrip.webp"
    /></swiper-slide>

    <swiper-slide>
      <a
        href="https://clicks.pipaffiliates.com/c?c=632677&l=ar&p=6"
        class="bt text-white bg-gradient-to-br from-green-400 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[8px] px-5 py-1 text-center me-2 mb-2"
      >
        فتح حساب
      </a>
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dt9k74vof/image/upload/v1707210458/copy/xm_fz1gyo.webp"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

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
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

.bt {
  position: absolute;
  z-index: 0;
  top: 80%;
  right: 24%;
}

.cont {
  position: absolute;
  z-index: 33;
  top: 20%;
  right: 56%;
}

body {
  background: #eeeeee00;
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
  z-index: 0;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 22px;
}
</style>
