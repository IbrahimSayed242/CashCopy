<template>
  <div
    class="py-6 sm:py-8 lg:py-[50px] dark:bg-teal-800/10 bg-cover bg-no-repeat bg-center bg-[#11726dc7] text-white mx-auto relative"
    id="sign-in"
    :style="{ backgroundImage: 'url(https://res.cloudinary.com/dt9k74vof/image/upload/v1709982615/copy/stocks-bg_svid4a_dcpcpd.png)' }"
  >
    <svg
      viewBox="0 0 52 24"
      fill="currentColor"
      class="absolute top-0 left-30 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
    >
      <defs>
        <pattern
          id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
          x="0"
          y="0"
          width=".135"
          height=".30"
        >
          <circle cx="1" cy="1" r=".7"></circle>
        </pattern>
      </defs>
      <rect
        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
        width="52"
        height="24"
      ></rect>
    </svg>
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8 relative">
      <img
        src="https://res.cloudinary.com/dt9k74vof/image/upload/v1709787333/download_kg6b0b.png"
        class="absolute top-10 right-0 z-0"
      />
      <div class="flex flex-col items-center rounded-lg p-4 sm:p-8 lg:flex-row lg:justify-between">
        <div class="mb-4 sm:mb-8 lg:mb-0">
          <h2
            class="text-center text-xl font-bold sm:text-2xl lg:text-3xl"
            dir="rtl"
          >
            {{ 'أحصل علي قائمة بأفضل الوسطاء' }}
          </h2>
          <p class="text-center text-white dark:text-gray-100" dir="rtl">
            {{ 'اترك بريدك لتحصل علي القائمة الخاصة بك' }}
          </p>
        </div>

        <div class="flex flex-col items-center lg:items-center justify-center">
          <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
            <div class="w-full flex justify-center m-3 mt-10" dir="rtl">
              <form
                @submit="submit"
                class="w-3/3 bg-gray-100 dark:bg-gray-800 px-8 pt-6 pb-8 mb-4 rounded shadow-lg text-lg"
              >
                <div class="flex flex-col md:flex-row mb-6 justify-center">
                  <div class="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                    <input
                      name="first_name"
                      class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      :placeholder="'الاسم الاول'"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-1">
                    <input
                      name="last_name"
                      type="text"
                      class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      :placeholder="'الاسم الاخير'"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <input
                      name="phone"
                      class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      :placeholder="'رقم الجوال'"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full px-3">
                    <input
                      name="email"
                      class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="email"
                      :placeholder="'البريد الالكتروني'"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-3 justify-center pt-10">
                  <Button2 type="submit" variant="primary" className="bg-teal-600 hover:bg-teal-900">
                    <span class="text-white relative z-[5]">{{ 'انضم الينا' }}</span>
                  </Button2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dive>
      {{ responseMessage }}
    </dive>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button2 from './Button2.vue';

// Reference for response message
const responseMessage = ref<string>();

// Function to extract URL parameters and add them to FormData
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const paramsObj: Record<string, string> = {};
  params.forEach((value, key) => {
    paramsObj[key] = value;
  });
  return paramsObj;
}

// Function to get the client's IP address
async function getClientIP(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching client IP:", error);
    return null;
  }
}

// Submit handler for the form
async function submit(e: Event) {
  e.preventDefault();

  // Extract form data
  const formData = new FormData(e.currentTarget as HTMLFormElement);

  // Append URL parameters to form data
  const urlParams = getUrlParams();
  Object.keys(urlParams).forEach((key) => {
    formData.append(key, urlParams[key]);
  });

  // Get client IP and append it to form data
  const clientIP = await getClientIP();
  if (clientIP) {
    formData.append('user_ip', clientIP);
  }

  // Send form data to the server
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    responseMessage.value = data.message;
    window.location.href = '/thanks';
  } catch (error) {
    console.error("Error submitting form:", error);
    responseMessage.value = "An error occurred while submitting the form.";
  }
}

// On mounted, log the URL parameters for debugging
onMounted(() => {
  console.log("URL Parameters:", getUrlParams());
});
</script>


  
  <style scoped>
  .bg-cover {
    background-size: cover;
  }
  .bg-no-repeat {
    background-repeat: no-repeat;
  }
  .bg-center {
    background-position: center;
  }
 
  .text-white {
    color: white;
  }
  .mx-auto {
    margin: auto;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .z-0 {
    z-index: 0;
  }
  .hidden {
    display: none;
  }
  .w-32 {
    width: 8rem;
  }
  .-mt-8 {
    margin-top: -2rem;
  }
  .-ml-20 {
    margin-left: -5rem;
  }
  .text-blue-gray-100 {
    color: #e0f2fe;
  }
  .lg\:w-32 {
    width: 8rem;
  }
  .lg\:-ml-28 {
    margin-left: -7rem;
  }
  .lg\:-mt-10 {
    margin-top: -2.5rem;
  }
  .sm\:block {
    display: block;
  }
  .p-4 {
    padding: 1rem;
  }
  .sm\:p-8 {
    padding: 2rem;
  }
  .lg\:justify-between {
    justify-content: space-between;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .sm\:mb-8 {
    margin-bottom: 2rem;
  }
  .lg\:mb-0 {
    margin-bottom: 0;
  }
  .text-center {
    text-align: center;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .font-bold {
    font-weight: 700;
  }
  .sm\:text-2xl {
    font-size: 1.5rem;
  }
  .lg\:text-3xl {
    font-size: 1.875rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .md\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }
  .bg-gray-100 {
    background-color: #f3f4f6;
  }
  .dark\:bg-gray-800 {
    background-color: #1f2937;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .pt-6 {
    padding-top: 1.5rem;
  }
  .pb-8 {
    padding-bottom: 2rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .text-lg {
    font-size: 1.125rem;
  }
  .w-1\/2 {
    width: 50%;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .w-full {
    width: 100%;
  }
  .bg-gray-200 {
    background-color: #e5e7eb;
  }
  .text-teal-600 {
    color: #059669;
  }
  .border {
    border-width: 1px;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .leading-tight {
    line-height: 1.25;
  }
  .focus\:outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .focus\:bg-white {
    background-color: #ffffff;
  }
  .focus\:border-gray-500 {
    border-color: #6b7280;
  }
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  </style>
  