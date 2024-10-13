// // src/components/DataProvider.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const DataContext = createContext();

// export const DataProvider = ({ onDataPass }) => {
//   const [data, setData] = useState([{ name: "hisham", id: 1 }]);

//   useEffect(() => {
//     async function fetchData() {
//       const API =
//         "https://alltargeting.com/api/method/heero.flagedu.doctype.brokers.brokers.get_brokers";
//       try {
//         const response = await fetch(API, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "token a15c6600b1349e5:b43b28c461e8573",
//           },
//         });

//         if (!response.ok) {
//           window.location.href = "/error500";
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const result = await response.json();

//         if (result && result.message && Array.isArray(result.message)) {
//           setData(result.message);
//         } else {
//           setData([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setData([]);
//       }
//     }

//     fetchData();
//   }, []);

//   // Pass data to the Astro component through a prop
//   useEffect(() => {
//     if (data) {
//       onDataPass(data); // Call the callback function to pass the data
//     }
//   }, [data, onDataPass]);

//   return (
//     <div>
//       <h2>Data fetched in React (DataProvider):</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
