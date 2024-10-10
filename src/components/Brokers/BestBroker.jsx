import React from "react";

const iconStyle = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

const BestBroker = ({ broker }) => {
  return (
    <div className=" bg-[#f8f8f8] p-5 my-5 rounded-md md:rounded-b-3xl shadow-[0px 0px 5px rgba(0, 0, 0, 0.1)] text-center">
      <div className="mb-5 text-center flex flex-col lg:flex-row-reverse items-center">
        <div className="text-center lg:text-right lg:ml-4 w-full lg:w-1/2">
          <h3 className="text-2xl text-[#333]">
            تقييم شركة {broker.title}هو
            <span className="font-bold"> {broker.total_rate}</span>
          </h3>
          <p className="text-sm text-[#666] mt-3">
            بناءً على تقييم خبراء موقع كوبون كوبي تُبين أن الشركة موثوقة ومرخصة
            بأكثر من سبع تراخيص مالية علمية. وتقدم منصات تداول متنوعة تلبّي
            احتياجات المتداولين. تلتزم بمعايير تنظيمية صارمة وتوفر عدد عملاء ضخم
            ومجموعة واسعة من الأدوات والمواد التعليمية لمساعدة المتداولين على
            تحقيق الأرباح. لذلك ننصح نحن خبراء موقع نور التداول مع الشركة.
          </p>
        </div>
        <div className="rating-summary flex flex-col lg:flex-row lg:justify-around my-3">
          <div className=" mb-4 text-lg lg:text-5xl text-[#333] text-center">
            <span className="border-r-solid border-r-2	border-emerald-500 mx-2 px-4 text-xl font-bold">
              {broker.total_rate}
            </span>
            <span className="text-xl ">نتيجة التقييم</span>
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
