<template>
  <div class="mt-2" dir="rtl">
    <form
      @submit.prevent="submit"
      id="myForm"
      class="bg-gray-100 dark:bg-gray-800 px-2 pt-6 pb-8 mb-4 rounded shadow-lg text-lg"
    >
      <div class="flex flex-col md:flex-row mb-6 justify-center">
        <div class="w-full md:w-1/2 px-1 mb-6 md:mb-0">
          <input
            v-model="formData.full_name"
            name="full_name"
            class="shadow-sm appearance-none block w-full bg-gray-200 text-blue-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=" الاسم "
          />
        </div>
        <div class="w-full md:w-1/2 px-1">
          <input
            v-model="formData.phone"
            name="phone"
            class="shadow-sm appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="tel"
            placeholder=" رقم الجوال"
            ref="phoneInput"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <input
            v-model="formData.email"
            class="shadow-sm appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            name="email"
            placeholder=" البريد الالكتروني"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-3 justify-center pt-10">
        <!-- <Button2 type="submit"  variant={"primary"} className="bg-primary hover:bg-blue-900">
          <span class="text-white relative z-[5]"> انضم الينا</span>
        </Button2> -->
        <button
          type="submit"
          class="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <span class="text-white relative z-[5]">{{ "انضم الينا" }}</span>
        </button>
      </div>

      <a
        href="https://wa.me/201063588999"
        class="button2 relative cursor-pointer"
      >
        <svg
          class="inline"
          viewBox="0 0 48 48"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            fill="#fff"
          ></path>
          <path
            d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            fill="#fff"
          ></path>
          <path
            d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            fill="#cfd8dc"
          ></path>
          <path
            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            fill="#40c351"
          ></path>
          <path
            clip-rule="evenodd"
            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
            fill-rule="evenodd"
            fill="#fff"
          ></path>
        </svg>
        واتساب
      </a>
    </form>
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
        full_name: "",
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
        name1: `${this.formData.full_name}`,
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
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
        this.responseMessage =
          error.response?.data?.message?.error || "An error occurred";
      }
      $toast.error(`${this.responseMessage}`);
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

<style>
.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 0.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.button2 > svg {
  height: 30px;

  padding: 0px 5px;
  margin-top: -4px;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.button2:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
</style>
