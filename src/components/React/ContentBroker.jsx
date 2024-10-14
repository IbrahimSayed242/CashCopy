import React, { Fragment } from "react";
//import content styles
import "../../../public/css/contentbroker.css";

const ContentBroker = ({ broker }) => {
  console.log(Object.keys(broker));
  const indexStyle = {
    border: "1px solid #14b8a6",
  };
  const linkStyle = {
    display: "block",
    padding: "20px",
    backgroundColor: "#ccc",
  };
  // function to create index for article
  function addLink() {
    if (Object.keys(broker).length > 0) {
      const h2Contaienr = document.querySelectorAll("h2");
      const indexHeads = document.getElementById("index");

      h2Contaienr.forEach((h2, index) => {
        h2.setAttribute("id", index);

        const a = document.createElement("a");

        a.setAttribute("href", `#${index}`);
        a.style = "display: block";
        a.style.padding = "10px";
        a.innerText = h2.innerText;
        indexHeads.appendChild(a);
      });
    }
  }

  setTimeout(() => {
    addLink();
  }, 0);

  return (
    <Fragment>
      {/* Render broker.text_editor_jtjm as HTML content */}
      <div
        dir="rtl"
        id="index"
        className=" m-auto lg:mr-0 mb-10"
        style={indexStyle}
      >
        <h1 className="m-0 text-center text-xl md:text-3xl lg:text-5xl">
          الفهرس
        </h1>
      </div>
      <div
        className="px-3 lg:px-5 w-full  m-auto"
        dangerouslySetInnerHTML={{
          __html: broker.text_editor_jtjm,
        }}
      ></div>
    </Fragment>
  );
};

export default ContentBroker;
