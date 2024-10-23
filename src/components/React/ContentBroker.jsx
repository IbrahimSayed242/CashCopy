import React, { Fragment, useEffect } from "react";
//import content styles
import "../../../public/css/contentbroker.css";

const ContentBroker = ({ broker }) => {
  const indexStyle = {
    border: "1px solid #14b8a6",
  };
  const linkStyle = {
    display: "block",
    padding: "20px",
    backgroundColor: "#ccc",
  };
  const indesDesgin = {
    borderButton: "1px solid #ddd",
  };
  // function to create index for article

  useEffect(() => {
    addLink();
  }, []);

  function addLink() {
    if (Object.keys(broker).length > 0) {
      const h2Contaienr = document.querySelectorAll("h2");
      const indexHeads = document.getElementById("index");

      h2Contaienr.forEach((h2, index) => {
        h2.setAttribute("id", index);

        const a = document.createElement("a");

        a.setAttribute("href", `#${index}`);
        a.style = "display: block";
        a.style.padding = "15px";
        a.innerText = h2.innerText;
        indexHeads.appendChild(a);

        a.onclick = () => {
          window.scrollY = window.scrollY - 140;
        };
      });
    }
  }

  return (
    <Fragment>
      {/* Render broker.text_editor_jtjm as HTML content */}
      <div className="flex flex-col md:flex-row-reverse ">
        <div
          dir="rtl"
          id="index"
          className="lg:mr-0 md:w-1/4 h-max align-top mt-24 hidden md:block dark:text-white"
          style={indexStyle}
        >
          <span
            className="m-0 text-center text-md md:text-lx lg:text-2xl block border-b-2 border-emerald-500"
            style={indesDesgin}
          >
            الفهرس
          </span>
        </div>
        <div
          className="px-3 lg:px-5 md:w-3/4 m-auto"
          dangerouslySetInnerHTML={{
            __html: broker.text_editor_jtjm,
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default ContentBroker;
