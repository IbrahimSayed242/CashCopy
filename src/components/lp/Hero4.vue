<template>


<div class="mx-5 lg:mx-20  mt-10">
  <swiper
  :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :slidesPerView="1"
    :spaceBetween="10"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
     :navigation="true"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
   
    }"
    :modules="modules"
    class="mySwiper "
  >


    <swiper-slide class="relative hover:scale-105 hover:duration-500 hover:shadow-2xl ">

      <div
    class="group  absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
  >
    <svg
      class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
      viewBox="0 0 48 48"
      fill="none"
      height="48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)">
        <path
          clip-rule="evenodd"
          d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
          fill-rule="evenodd"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h48v48H0z" fill="#fff"></path>
        </clipPath>
      </defs>
    </svg>
    <div
      class="items-left duration-600 absolute left-0 top-0  flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
    >
      <div class="items-left flex flex-col justify-center">
        <h1 class="md:text-[1.5em] text-[12px] font-bold leading-[0.8em]">كوبون الربح الاساسي</h1>
        <p class="md:text-[1.5em] text-[10px] font-light  text-center mt-4">
لا يوجد نسخ للصفقات

        </p>

        <p class="md:text-[1.5em] text-[10px] font-light  text-center ">
كاش باك يصل الى 50%

        </p>


      </div>

      <a href="../couopn1" class="cursor-pointer text-[0.7em] underline ">تعرّف على المزيد</a>
    </div>
  </div>
      <img  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1716194787/copy/cards/%D9%83%D9%88%D8%A8%D9%88%D9%86_%D8%A7%D9%84%D8%B1%D8%A8%D8%AD_%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A_ansvat.jpg">
    </swiper-slide>



















      <swiper-slide class="relative hover:scale-105 hover:duration-500 hover:shadow-2xl ">

      <div
    class="group  absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
  >
    <svg
      class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
      viewBox="0 0 48 48"
      fill="none"
      height="48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)">
        <path
          clip-rule="evenodd"
          d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
          fill-rule="evenodd"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h48v48H0z" fill="#fff"></path>
        </clipPath>
      </defs>
    </svg>
    <div
      class="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
    >
      <div class="items-left flex flex-col justify-center">
        <h1 class="text-[1.5em] font-bold leading-[0.8em]">كوبون الربح الاساسي</h1>
        <p class="text-[0.9em] font-light  text-center mt-4">
لا يوجد نسخ للصفقات

        </p>

        <p class="text-[0.9em] font-light  text-center ">
كاش باك يصل الى 50%

        </p>


      </div>

      <a href="../couopn1" class="cursor-pointer text-[0.7em] underline ">تعرّف على المزيد</a>
    </div>
  </div><img  src="https://res.cloudinary.com/dt9k74vof/image/upload/v1716194790/copy/cards/%D9%83%D9%88%D8%A8%D9%88%D9%86_%D8%A7%D9%84%D8%B1%D8%A8%D8%AD_%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85_bhcpjy.jpg"></swiper-slide> 
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <swiper-slide class="relative hover:scale-105 hover:duration-500 hover:shadow-2xl ">

<div
class="group  absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
>
<svg
class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
viewBox="0 0 48 48"
fill="none"
height="48"
width="48"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#a)">
  <path
    clip-rule="evenodd"
    d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
    fill-rule="evenodd"
    fill="#fff"
  ></path>
</g>
<defs>
  <clipPath id="a">
    <path d="M0 0h48v48H0z" fill="#fff"></path>
  </clipPath>
</defs>
</svg>
<div
class="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
>
<div class="items-left flex flex-col justify-center">
  <h1 class="text-[1.5em] font-bold leading-[0.8em]">كوبون الربح الاساسي</h1>
  <p class="text-[0.9em] font-light  text-center mt-4">
لا يوجد نسخ للصفقات

  </p>

  <p class="text-[0.9em] font-light  text-center ">
كاش باك يصل الى 50%

  </p>


</div>

<a href="../couopn1" class="cursor-pointer text-[0.7em] underline ">تعرّف على المزيد</a>
</div>
</div> <img src="https://res.cloudinary.com/dt9k74vof/image/upload/v1716194793/copy/cards/%D9%83%D8%A8%D9%88%D9%86_%D8%A7%D8%B1%D8%A8%D8%A7%D8%AD_%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9_n9bq2h.jpg"></swiper-slide>
  







































<swiper-slide class="relative hover:scale-105 hover:duration-500 hover:shadow-2xl  ">

<div
class="group  absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
>
<svg
class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
viewBox="0 0 48 48"
fill="none"
height="48"
width="48"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#a)">
  <path
    clip-rule="evenodd"
    d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
    fill-rule="evenodd"
    fill="#fff"
  ></path>
</g>
<defs>
  <clipPath id="a">
    <path d="M0 0h48v48H0z" fill="#fff"></path>
  </clipPath>
</defs>
</svg>
<div
class="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
>
<div class="items-left flex flex-col justify-center">
  <h1 class="text-[1.5em] font-bold leading-[0.8em]">كوبون الربح الاساسي</h1>
  <p class="text-[0.9em] font-light  text-center mt-4">
لا يوجد نسخ للصفقات

  </p>

  <p class="text-[0.9em] font-light  text-center ">
كاش باك يصل الى 50%

  </p>


</div>

<a href="../couopn1" class="cursor-pointer text-[0.7em] underline ">تعرّف على المزيد</a>
</div>
</div> <img src="https://res.cloudinary.com/dt9k74vof/image/upload/v1716207688/copy/cards/%D8%A7%D9%84%D8%AB%D8%B1%D9%88%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84%D8%A9_rdhx3n.jpg"></swiper-slide> 
 
  </swiper>

</div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/navigation';
  // Import Swiper styles



  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination,Navigation],
      };
    },
  };
</script>
<style>

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
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
  height: 100%;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;

  cursor: pointer;
}
 
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


swiper-slide:nth-child(1n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9_cwr9te.webp)
  no-repeat 50% 50% / cover;
  background-position: center;
  background-size: contain;

  cursor: pointer;

}

.swiper-slide:nth-child(2n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211904/copy/cards/%D8%A7%D9%84%D8%A7%D8%B1%D8%A8%D8%A7%D8%AD_%D8%A7%D9%84%D8%B4%D8%A7%D9%86%D9%84%D8%A9_p9msbu.webp)
      no-repeat 50% 50% / cover;
      
  cursor: pointer;
}

.swiper-slide:nth-child(3n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A_qe2p8t.webp)
      no-repeat 50% 0% / cover;
      
  cursor: pointer;
}

.swiper-slide:nth-child(4n) {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(https://res.cloudinary.com/dt9k74vof/image/upload/v1716211901/copy/cards/%D8%A7%D9%84%D9%86%D8%AE%D8%A8%D8%A9_cwr9te.webp)
      no-repeat 50% 50% / cover;
      
  cursor: pointer;
}













</style>