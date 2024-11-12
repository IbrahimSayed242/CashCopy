import React, { Fragment } from "react";

const CompanyService = ({ nameBroker, broker }) => {
  const detailsStyle = {
    padding: "0",
    alignItems: "center",
  };
  const tradeButtonStyle = {
    minWidth: "100px",
    lineHeight: "32px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#ddd",
    color: "#222",
    marginRight: "15px",
    marginBottom: "15px",
    transition: "all 0.3s ease-in-out",
    textAlign: "center",
  };

  const buttonHoverStyle = {
    backgroundColor: "rgba(4, 112, 103, 0.627)",
    color: "#fff",
  };

  const borderBottomStyle = {
    borderBottom: "2px solid rgba(4, 112, 103, 0.627)",
  };

  const iconStyle = {
    leading: "7",
    color: "#1f8e7d",
    marginLeft: "8px",
  };

  console.log(broker);
  return (
    <Fragment>
      <div className="company-info w-11/12 m-auto dark:text-white">
        <div className="article-1 text-right">
          <h1 className="dark:text-white article-head text-lg md:text-2xl my-5">
            تفاصيل ومعلومات شركة {nameBroker}
          </h1>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center md:justify-end p-7 w-full md:w-1/3 lg:w-1/5">
            <span>منصات التداول</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              shopping_cart
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0 flex justify-around flex-wrap">
            {/* {broker.platforms.map((platform) => {
              <button style={tradeButtonStyle}>{platform}</button>;
            })} */}
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center md:justify-end p-7 w-full md:w-1/3 lg:w-1/5">
            <span>الاصول المتاحة للتداول</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              currency_pound
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0 flex justify-around flex-wrap">
            {/* {broker.available_assets_for_trading.map((assets, index) => (
              <span key={index} style={tradeButtonStyle}>{assets}</span>
            ))} */}
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center md:justify-end p-7 w-full md:w-1/3 lg:w-1/5">
            <span>طرق الإيداع والسحب</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              paid
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0 flex justify-around flex-wrap">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center md:justify-end p-7 w-full md:w-1/3 lg:w-1/5">
            <span>حد الإيداع</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              payments
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0 flex justify-around flex-wrap">
            <span style={tradeButtonStyle}>{broker.minimum_deposit}</span>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-center md:justify-end p-7 w-full md:w-1/3 lg:w-1/5">
            <span>التراخيص</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              description
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0 flex justify-around flex-wrap">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyService;
