import React, { Fragment } from "react";
//import content styles
import "../../../public/css/contentbroker.css";

const ContentBroker = ({ broker }) => {
  // function to create index for article
  function addLink() {
    if (broker) {
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
  });

  return (
    <Fragment>
      {/* Render broker.text_editor_jtjm as HTML content */}
      <div dir="rtl" id="index">
        <h1>الفهرس</h1>
      </div>
      <div
        className="px-3 lg:px-5 w-full lg:w-3/4 m-auto"
        dangerouslySetInnerHTML={{
          __html: broker.text_editor_jtjm,
        }}
      ></div>
    </Fragment>
  );
};

export default ContentBroker;
