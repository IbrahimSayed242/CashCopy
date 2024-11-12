import React, { Fragment } from "react";
import BestBroker from "../../components/Brokers/BestBroker.jsx";
import ContentBroker from "./ContentBroker.jsx";
import Button from "./Button.jsx";
import CompanyService from "./CompanyService.jsx";

const BrokerList = ({ name, brokers }) => {
  // Handle loading state
  if (brokers.length === 0) {
    return <p>Loading broker Details from CRM Sytem...</p>;
  }

  // Handle empty data case
  if (!Array.isArray(brokers)) {
    console.error("Data is not an array:", brokers);
    return <p>Error: Data is not in the expected format</p>;
  }

  return (
    <Fragment>
      <div>
        {brokers[0]["Brokers"].map((broker, index) => {
          if (broker.title === name) {
            // Return a JSX element with the updated source
            return (
              <div key={index}>
                <div className="main mt-[100px] lg:mt-[140px] ">
                  <div
                    style={{ backgroundColor: "#ddd" }}
                    className="lg:rounded-full rounded-b-3xl"
                  >
                    <div className="main-company flex flex-col  p-12 md:flex-row-reverse justify-between  items-center">
                      <div className="company-img md:min-w-16 w-1/2 md:w-1/6 mb-6">
                        <img
                          fetchpriority="high"
                          className="w-full  rounded md:rounded-[7.5rem] shadow-md m-auto  text-center"
                          src={`https://alltargeting.com/${broker.logo}`}
                          alt="Company"
                        />
                      </div>
                      <div className="company-content min-w-64 lg:text-right text-center w-3/5 mr-5">
                        <h3 className="font-bold text-xl mb-2">
                          تقييم شركة {broker.title}
                        </h3>
                        <p className="mb-3 text-xs md:text-md">
                          {broker.company_description}
                        </p>
                      </div>
                      <div className="create-account w-52 h-12 border-none rounded-md">
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0">
                          <Button
                            href={`${broker.affiliate_link}`}
                            className="flex justify-center lg:min-w-48 w-44"
                            variant="primary"
                            text="فتح حساب"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BestBroker broker={broker} />
                <CompanyService nameBroker={name} broker={broker} />
                {broker.text_editor_jtjm !== null && (
                  <ContentBroker broker={broker} client:only />
                )}
              </div>
            );
          } else {
            return null; // Return null to avoid rendering if conditions don't match
          }
        })}
      </div>
    </Fragment>
  );
};

export default BrokerList;
