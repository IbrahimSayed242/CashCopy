import React from "react";
// import { create } from "zustand";

// Create a zustand store outside the fetch function

// Fetch data before rendering the page
async function fetchData() {
  const API_URL =
    "https://alltargeting.com/api/method/heero.flagedu.doctype.brokers.brokers.get_brokers";

  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "token 2cbd2ea5bec2a9d:b96c0c190c9097e ",
      },
    });

    if (response.ok) {
      const result = await response.json();
      useStore.getState().setData([result.message] || []); // Update store with fetched data
      console.log("Fetched data:", result.message);
    } else {
      window.location.href = "/error500";
      console.error(`Failed to fetch data: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Immediately call the fetchData function
// fetchData();

// export { useStore };
