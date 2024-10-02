import React from "react";

import BtnLink2 from "../../components/shared/BtnLink2.astro";

const RatingContainer = {
  BackgroundColor: " #f8f8f8",
  padding: "20px",
  BorderRadius: "8px",
  BoxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.1)",
  MaxWidth: "800px",
  Margin: " 30px auto",
};
const RatingItem = {
  BackgroundColor: " #fff",
  Padding: "15px",
  BorderRadius: "5px",
  BoxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  TextAlign: "center",
};
const iconStyle = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

const BestBroker = ({ broker }) => {
  return (
    <div className=" bg-[#f8f8f8] p-5 rounded-md shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
      <div className="mb-5 text-center flex flex-col lg:flex-row-reverse items-center">
        <div className="text-center lg:text-right lg:ml-4 w-1/2">
          <h2 className="text-2xl text-[#333]">
            <span className="font-bold"> {broker.total_rate} هو</span>
            {broker.title} تقييم شركة
          </h2>
          <p className="text-sm text-[#666] mt-3">
            بناءً على تقييم خبراء موقع نور تُبين أن الشركة موثوقة ومرخصة بأكثر
            من سبع تراخيص مالية علمية. وتقدم منصات تداول متنوعة تلبّي احتياجات
            المتداولين. تلتزم بمعايير تنظيمية صارمة وتوفر عدد عملاء ضخم ومجموعة
            واسعة من الأدوات والمواد التعليمية لمساعدة المتداولين على تحقيق
            الأرباح. لذلك ننصح نحن خبراء موقع نور التداول مع الشركة.
          </p>
        </div>
        <div className="rating-summary flex flex-col lg:flex-row lg:justify-around">
          <div className="overall-rating mb-4 text-5xl text-[#333] text-center">
            <h1>{broker.total_rate}</h1>
            <p className="text-lg">نتيجة التقييم</p>
          </div>
          <div className="rating-details grid grid-cols-2 gap-2.5">
            <div className="rating-item bg-white p-4 rounded-md shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
              <p className="text-sm text-[#333] mb-3">تنوع منصات التداول</p>
              <div className="rating-stars flex justify-center">
                <span className="mr-1 text-xl font-bold">
                  {broker.trading_platforms * 5}
                </span>
                {broker.trading_platforms * 5 < 3 ? (
                  <span className="material-symbols-outlined text-yellow-500">
                    {" "}
                    star_half
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined text-yellow-500"
                    style={iconStyle}
                  >
                    {" "}
                    star
                  </span>
                )}
              </div>
            </div>
            <div className="rating-item bg-white p-4 rounded-md shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
              <p className="text-sm text-[#333] mb-3">
                الامان والتراخيص المالية
              </p>
              <div className="rating-stars flex justify-center">
                <span className="mr-1 text-xl font-bold">
                  {broker.security * 5}
                </span>
                {broker.security * 5 < 3 ? (
                  <span className="material-symbols-outlined text-yellow-500">
                    {" "}
                    star_half
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined text-yellow-500"
                    style={iconStyle}
                  >
                    {" "}
                    star
                  </span>
                )}
              </div>
            </div>
            <div className="rating-item bg-white p-4 rounded-md shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
              <p className="text-sm text-[#333] mb-3">الرسوم المتاحة للتداول</p>
              <div className="rating-stars flex justify-center">
                <span className="mr-1 text-xl font-bold">
                  {broker.fees * 5}
                </span>
                {broker.fees * 5 < 3 ? (
                  <span className="material-symbols-outlined text-yellow-500">
                    {" "}
                    star_half
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined text-yellow-500"
                    style={iconStyle}
                  >
                    {" "}
                    star
                  </span>
                )}
              </div>
            </div>
            <div className="rating-item bg-white p-4 rounded-md shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
              <p className="text-sm text-[#333] mb-3">الأصول المتاحة للتداول</p>
              <div className="rating-stars flex justify-center">
                <span className="mr-1 text-xl font-bold">
                  {broker.assets * 5}
                </span>
                {broker.assets * 5 < 3 ? (
                  <span className="material-symbols-outlined text-yellow-500">
                    {" "}
                    star_half
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined text-yellow-500"
                    style={iconStyle}
                  >
                    {" "}
                    star
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBroker;

/* start section rate */

/* end section rate */
