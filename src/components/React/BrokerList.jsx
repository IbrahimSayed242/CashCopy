import React, { useEffect } from "react";
import { useStore } from "../../utils/Store.jsx"; // Import zustand store
import BestBroker from "../../components/Brokers/BestBroker.jsx";

const BrokerList = ({ name }) => {
  // Accessing `message` and `data` from the zustand store
  const { message, data } = useStore();
  const imageUrl =
    "https://res.cloudinary.com/dt9k74vof/image/upload/v1703669065/copy/evest_xjj0rq.jpg";
  // Log the data to verify that it's being retrieved correctly
  console.log("Message from store:", message);
  console.log("Data from store:", data);

  // Handle loading state
  if (data.length === 0) {
    return <p>Loading brokers...</p>;
  }

  // Handle empty data case
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return <p>Error: Data is not in the expected format</p>;
  }

  return (
    <div>
      {/* <h1>{name}</h1> */}
      <div>
        {data[0]["Brokers"].map((broker, index) => {
          if (broker.name === name) {
            // Replace the source link for image
            console.log(broker.name === name);
            // const newSrc = broker.text_editor_jtjm.replace(
            //   'src="',
            //   'src="https://alltargeting.com'
            // );
            // console.log(newSrc);

            // Return a JSX element with the updated source
            return (
              <div key={index}>
                <div className="main mt-40">
                  <div
                    style={{ backgroundColor: "#ddd" }}
                    className="lg:rounded-full"
                  >
                    <div className="main-company flex flex-col md:mt-52 p-12 md:flex-row-reverse justify-between container items-center">
                      <div className="company-img min-w-52 md:min-w-16 w-1/5">
                        {/* Updated: using newSrc */}
                        <img
                          className="w-full md:rounded shadow-md m-auto p-8 text-center"
                          src={`https://alltargeting.com/${broker.logo}`}
                          alt="Company"
                        />
                      </div>
                      <div className="company-content min-w-64 lg:text-right text-center w-3/5 mr-5">
                        <h2 className="font-bold text-xl mb-2">
                          تقييم شركة {broker.title}{" "}
                        </h2>
                        <p className="mb-3">
                          شركة افاتريد شركة وساطة مالية عبر الانترنت تأسست عام
                          2006 وتقدم خدمات التداول في العقود مقابل الفروقات على
                          العملات والأسهم والمؤشرات والمعادن والعملات الرقمية
                          والطاقة.
                        </p>
                      </div>
                      <div className="create-account w-52 h-12 border-none rounded-md">
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0">
                          {/* <BtnLink2
                            text="فتح حساب"
                            href="https://wa.me/201063588999"
                            className="flex justify-center w-full min-w-52 sm:w-max"
                            variant="primary"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {broker.text_editor_jtjm !== null && (
                  <div>
                    {/* Render broker.text_editor_jtjm as HTML content */}
                    <div
                      className="px-3 lg:px-5"
                      dangerouslySetInnerHTML={{
                        __html: broker.text_editor_jtjm,
                      }}
                    ></div>
                  </div>
                )}
                <BestBroker broker={broker} />
              </div>
            );
          } else {
            return null; // Return null to avoid rendering if conditions don't match
          }
        })}
      </div>
    </div>
  );
};

export default BrokerList;
