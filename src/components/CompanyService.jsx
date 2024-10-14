import React, { Fragment } from "react";
import { useStore } from "../utils/Store.jsx"; // Import zustand store

const CompanyService = ({ nameBroker }) => {
  const { data } = useStore();

  console.log(nameBroker);

  const detailsStyle = {
    padding: "0",
    alignItems: "center",
  };

  const tradeButtonStyle = {
    minWidth: "100px",
    height: "30px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#ddd",
    color: "#222",
    marginRight: "15px",
    transition: "all 0.3s ease-in-out",
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

  return (
    <Fragment>
      <div className="company-info w-11/12 m-auto">
        <div className="article-1 text-right">
          <h1 className="article-head text-2xl my-5">
            تفاصيل ومعلومات شركة {nameBroker}
          </h1>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-end p-7">
            <span>منصات التداول</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              shopping_cart
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-end p-7">
            <span>منتجات التداول</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              currency_pound
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-end p-7">
            <span>طرق الإيداع والسحب</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              paid
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-end p-7">
            <span>حد الإيداع</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              payments
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0">
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
            <button style={tradeButtonStyle}>Ava Option</button>
          </div>
        </div>
        <div style={detailsStyle} className="flex flex-col md:flex-row-reverse">
          <div className="flex justify-end p-7">
            <span>التراخيص</span>
            <span className="material-symbols-outlined" style={iconStyle}>
              description
            </span>
          </div>
          <div className="trade text-center mb-3 lg:mb-0">
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
