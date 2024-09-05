import React from "@astrojs/react";

function Features() {
  return (
    <>
      <div className="features row container ">
        <h1 className="text-center">ما الذي يميّز أكسيا؟</h1>
        <div className="card col">
          <div className="img">{/* <img src={award1} alt="" /> */}</div>
          <h5>ألقاب الشركة</h5>
          <p>حائز على جوائز على مدار 3 سنوات متتالية!</p>
        </div>
        <div className="card col">
          <div className="img">{/* <img src={award2} alt="" /> */}</div>
          <h5>أنظمة الأمان</h5>
          <p>مستويات عالية من الأمان مع PSI و SSL</p>
        </div>
        <div className="card col">
          <div className="img">{/* <img src={award3} alt="" /> */}</div>
          <h5>تراخيص</h5>
          <p>منظمة من قبل FSA, رقم الترخيص: SD034</p>
        </div>
        <div className="card col">
          <div className="img">{/* <img src={assetsPhone} alt="" /> */}</div>
          <h5>أكثر من 600 أصل</h5>
          <p>عملات، مؤشرات، أسهم، سلع وغيرها</p>
        </div>
      </div>
    </>
  );
}
export default Features;
