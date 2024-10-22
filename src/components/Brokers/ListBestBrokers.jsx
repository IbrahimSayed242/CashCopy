// this commponent work on git dynamic best broker based on rate
// but we now put the best brokers a static

import React, { Fragment } from "react";
// import { useStore } from "../../utils/Store.jsx";

const ListbestBroker = () => {
  const { data } = useStore();

  if (data.ok && data.length) {
    return <p>Loading Fetch List Best Brokers</p>;
  }
  if (!Array.isArray(data)) {
    return alert("error in fetch list best brokers");
  }

  return (
    <Fragment>
      <ul>{data[0]["Brokers"].map((broker) => {})}</ul>
    </Fragment>
  );
};
export default ListbestBroker;
