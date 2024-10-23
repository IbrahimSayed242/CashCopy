<template class="pb-20">
  <div
    id="sign-in"
    class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900"
  >
    <div class="absolute right-0 top-0 h-full w-full flex justify-end">
      <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
        <span
          class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"
        ></span>
        <span
          class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"
        ></span>
        <span
          class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"
        ></span>
      </div>
    </div>

    <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
      <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
        <span
          class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"
        ></span>
        <span
          class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"
        ></span>
        <span
          class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"
        ></span>
      </div>
    </div>
    <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
      <h1
        class="text-xl/tight md:text-2xl/tight lg:text-5xl/tight font-bold text-heading-1"
      >
        انضم إلينا
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600"
        >
          دون جهد أو خبرة
        </span>
        وحقق دخلاً إضافياً
      </h1>
      <p className="pt-10">
        ندعوك للانضمام إلينا! نحن نوفر لك فرصة لتحقيق دخل إضافي دون جهد أو خبرة
        في عالم التداول.
      </p>
      <div class="flex flex-col items-center lg:items-center justify-center">
        <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
          <div class="w-full flex justify-center m-3 mt-10" dir="rtl">
            <form
              @submit.prevent="submit"
              class="w-3/3 bg-gray-100 dark:bg-gray-800 px-8 pt-6 pb-8 mb-4 rounded shadow-lg text-lg"
            >
              <div class="flex flex-col md:flex-row mb-6 justify-center">
                <div class="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                  <input
                    v-model="formData.first_name"
                    name="first_name"
                    class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    :placeholder="'الاسم الاول'"
                  />
                </div>
                <div class="w-full md:w-1/2 px-1">
                  <input
                    v-model="formData.last_name"
                    name="last_name"
                    type="text"
                    class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    :placeholder="'الاسم الاخير'"
                  />
                </div>
              </div>
              <div class="phone flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    v-model="formData.phone"
                    name="phone"
                    class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="tel"
                    :placeholder="'رقم الجوال'"
                    ref="phoneInput"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                  <input
                    v-model="formData.email"
                    name="email"
                    class="shadow-sm appearance-none block w-full bg-gray-200 text-teal-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    :placeholder="'البريد الالكتروني'"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-3 justify-center pt-10">
                <button
                  type="submit"
                  class="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <span class="text-white relative z-[5]">{{
                    "انضم الينا"
                  }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const $toast = useToast();

export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        ip: "",
        message: "",
      },
      responseMessage: "",
      iti: null,
    };
  },
  async mounted() {
    await this.loadIntlTelInput();
    this.initPhoneInput();
    this.detectIP();
  },
  beforeUnmount() {
    // Cleanup
    if (this.iti) {
      this.iti.destroy();
    }
  },
  methods: {
    async loadIntlTelInput() {
      // Load IntlTelInput script
      const intlTelInputScript = document.createElement("script");
      intlTelInputScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js";
      document.head.appendChild(intlTelInputScript);

      // Load CSS
      const styleSheet = document.createElement("link");
      styleSheet.rel = "stylesheet";
      styleSheet.href =
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css";
      document.head.appendChild(styleSheet);

      // Wait for script to load
      await new Promise((resolve) => {
        intlTelInputScript.onload = resolve;
      });
    },
    initPhoneInput() {
      const input = this.$refs.phoneInput;
      if (!window.intlTelInput) {
        console.error("IntlTelInput not loaded");
        return;
      }

      this.iti = window.intlTelInput(input, {
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("us"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Listen for input changes
      input.addEventListener("input", () => {
        this.formData.phone = this.iti.getNumber();
      });
    },
    detectIP() {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          this.formData.ip = data.ip;
        })
        .catch((error) => {
          console.error("Error detecting IP:", error);
          this.formData.ip = "0.0.0.0";
        });
    },
    async submit() {
      if (!this.iti) {
        this.responseMessage = "Phone initialization error";
        return;
      }

      const phoneNumber = this.iti.getNumber();
      if (!phoneNumber) {
        this.responseMessage = "Please enter a valid phone number";
        return;
      }

      const data = {
        name1: `${this.formData.first_name} ${this.formData.last_name}`,
        email: this.formData.email,
        phone: phoneNumber,
        ip: this.formData.ip,
        message: this.formData.message,
        ...this.getUrlParams(),
      };

      try {
        const response = await axios.post(
          "https://alltargeting.com/api/method/heero.api.leads.flagedu_lead",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        this.responseMessage = "تم إرسال النموذج بنجاح!";

        $toast.success(`${this.responseMessage}`);

        window.location.href = `/thanks`;
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
        this.responseMessage =
          error.response?.data?.message?.error || "An error occurred";
        $toast.error(`${this.responseMessage}`);
      }
    },
    getUrlParams() {
      const params = new URLSearchParams(window.location.search);
      const paramsObj = {};
      params.forEach((value, key) => {
        paramsObj[key] = value;
      });
      return paramsObj;
    },
  },
};
</script>

<style scoped>
.iti {
  width: 100%;
  direction: ltr;
}
.iti input {
  width: 100%;
}
.phone .iti {
  width: 100%;
}
</style>
