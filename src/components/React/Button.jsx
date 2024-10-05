import React from "react";

const Button = ({ href, text, className, variant }) => {
  const getThemeStyle = (variant) => {
    if ((variant === "primary") | "secondary") {
      return "bg-emerald-400 border-transparent relative after:bg-[#0c8e89] hover:border-[#0c8e89]";
    }
    return "text-white";
  };

  const getTextColor = (variant) => {
    if ((variant === "primary") | "secondary") {
      return "text-white ";
    }
    return "text-blue-500 hover:text-white";
  };

  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#0c8e89]
                    ${getThemeStyle(
                      variant
                    )} hover:after:opacity-100 hover:after:scale-[2.5] no-underline ${className}`}
    >
      <span className={`relative ${getTextColor(variant)} z-10`}>{text}</span>
    </a>
  );
};
export default Button;
