import React, { Fragment } from "react";
import Rate from "../elements/Rate.jsx";
// import { useStore } from "../../utils/Store.jsx";

const CardCompany = ({ brokers }) => {
  // const { data } = useStore();
  if (brokers.length === 0) {
    return <p>Loading broker Details from CRM System...</p>;
  }

  if (!Array.isArray(brokers)) {
    console.error("Data is not an array:", brokers);
    return <p>Error: Data is not in the expected format</p>;
  }

  return (
    <Fragment>
      {brokers[0]["Brokers"].length > 0
        ? brokers[0]["Brokers"].map(
            (broker, index) =>
              broker.site === "coupons" && (
                <div
                  key={index}
                  className="text-white w-auto flex flex-col items-center sm:flex-col rounded-lg bg-emerald-400 border border-3 my-5 mx-auto p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-md"
                  dir="rtl"
                >
                  <div className="flex justify-center flex-col m-2">
                    <div></div>
                    <img
                      className="w-full h-20 rounded-full shadow-md m-auto"
                      src={`https://alltargeting.com/${broker.logo}`}
                      alt="Broker Logo"
                    />
                    <div className="flex justify-center">
                      <div>
                        <p className="text-center pt-2 lg:text-xl">
                          تقييم الشركة
                        </p>
                        <Rate broker={broker} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 m-auto sm:border--2 sm:border-t-2 sm:border-b-2 sm:border-indigo-900">
                    <ul className="mt-3 flex flex-col space-y-2">
                      <li className="flex">
                        {broker.minimum_deposit ? (
                          <span className="material-symbols-outlined ml-2">
                            check_circle
                          </span>
                        ) : (
                          <span className="material-symbols-outlined ml-2">
                            cancel
                          </span>
                        )}
                        <p className="text-base text-slate-700 sm:text-lg">
                          <strong>${broker.minimum_deposit}</strong> الحد الأدنى
                          للإيداع
                        </p>
                      </li>
                      <li className="flex">
                        {broker.demo_account ? (
                          <span className="material-symbols-outlined ml-2">
                            check_circle
                          </span>
                        ) : (
                          <span className="material-symbols-outlined ml-2">
                            cancel
                          </span>
                        )}
                        <p className="text-base text-slate-700 sm:text-lg">
                          حساب تجريبي
                        </p>
                      </li>
                      <li className="flex">
                        {broker.islamic_account ? (
                          <span className="material-symbols-outlined ml-2">
                            check_circle
                          </span>
                        ) : (
                          <span className="material-symbols-outlined ml-2">
                            cancel
                          </span>
                        )}
                        <p className="text-base text-slate-700 sm:text-lg">
                          حساب اسلامي
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-2 md:m-2 flex flex-col justify-center">
                    <button
                      className="bg-yellow-600 text-white font-montserrat py-2 px-4 m-1 font-medium rounded-xl hover:bg-yellow-300 transition-all duration-300"
                      style={{
                        boxShadow: "0 5px 10px -5px rgba(217, 119, 6, 0.6)",
                      }}
                    >
                      <a href="https://wa.me/201063588999">فتح حساب</a>
                    </button>
                    <button className="border m-2 border-indigo-800 text-indigo-900 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-indigo-900 hover:text-white transition-all duration-300">
                      <a href={`../../companyDetails/${broker.title}`}>
                        مراجعة الشركة
                      </a>
                    </button>
                  </div>
                </div>
              )
          )
        : ""}
    </Fragment>
  );
};

export default CardCompany;
