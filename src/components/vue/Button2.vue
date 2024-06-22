<template>
    <button type="submit" 
      :class="`px-6 py-1 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
              after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#0c8e89]
              ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`"
      @click="handleClick"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      className: {
        type: String,
        default: ''
      },
      variant: {
        type: String,
        required: true,
        validator: value => ['primary', 'secondary'].includes(value)
      },
      type: {
        type: String,
        default: 'button'
      },
      onclick: {
        type: Function,
        default: null
      }
    },
    methods: {
      getThemeStyle(variant) {
        if (variant === 'primary') {
          return 'bg-teal-700 border-transparent relative after:bg-[#0c8e89] hover:border-[#0c8e89]';
        }
        return 'text-primary';
      },
      handleClick(event) {
        if (this.onclick) {
          this.onclick(event);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .bg-teal-700 {
    background-color: #065f46;
  }
  .border-transparent {
    border-color: transparent;
  }
  .relative {
    position: relative;
  }

  /*.after\:bg-[#0c8e89] {
    --tw-bg-opacity: 1;
    background-color: rgba(12, 142, 137, var(--tw-bg-opacity));
  }

  .hover\:border-[#0c8e89]:hover {
    border-color: rgba(12, 142, 137, var(--tw-bg-opacity));
  }
  */
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .relative {
    position: relative;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .border {
    border-width: 1px;
  }
  .duration-300 {
    transition-duration: 300ms;
  }
  .ease-linear {
    transition-timing-function: linear;
  }
  .after\:absolute:after {
    position: absolute;
  }
  .after\:inset-x-0:after {
    left: 0;
    right: 0;
  }
  .after\:aspect-square:after {
    aspect-ratio: 1 / 1;
  }
  .after\:scale-0:after {
    transform: scale(0);
  }
  .after\:opacity-70:after {
    opacity: 0.7;
  }
  .after\:origin-center:after {
    transform-origin: center;
  }
  .after\:duration-300:after {
    transition-duration: 300ms;
  }
  .after\:ease-linear:after {
    transition-timing-function: linear;
  }
  .after\:rounded-full:after {
    border-radius: 9999px;
  }
  .after\:top-0:after {
    top: 0;
  }
  .after\:left-0:after {
    left: 0;
  }
  .hover\:after\:opacity-100:hover:after {
    opacity: 1;
  }
  .hover\:after\:scale-\[2\.5\]:hover:after {
    transform: scale(2.5);
  }
  </style>
  