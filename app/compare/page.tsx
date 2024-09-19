"use client";

import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

const ComparatorPage = () => {
  const [result, setResult] = useState("");
  const [bank1, setBank1] = useState("none");
  const [bank2, setBank2] = useState("none");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setResult("");
    setTimeout(() => {
      setLoading(false);
      setResult(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet efficitur felis semper faucibus. Donec in orci leo. Pellentesque et tellus a purus pulvinar efficitur sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac eros quam. Vivamus posuere, erat ultricies rhoncus placerat, nisl augue ornare est, sed ullamcorper nisl ipsum sit amet lacus. Mauris justo est, mollis eu venenatis tristique, consectetur in mi. Etiam vitae nunc risus."
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-10 pb-20">
      <h1 className="text-3xl md:text-7xl text-mLightBlue mt-10">
        Comparator{" "}
        <span className="px-2 py-1 bg-mOrange rounded-2xl text-mBlack font-semibold">
          Bot
        </span>
      </h1>
      <p className="mt-8 text-base text-center font-mono md:text-xl">
        Compare banking options side-by-side for quick and informed decisions.
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-10 items-center">
        {/* Bank 1 */}
        <select
          value={bank1}
          onChange={(e) => setBank1(e.target.value)}
          required
          className="px-4 py-2 text-xl text-mBlack rounded-xl outline-none font-medium"
          name="bank1"
          id="bank1"
        >
          <option disabled value="none">
            Select a bank
          </option>
          <option value="sbi">State Bank of India (SBI)</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="axis">Axis Bank</option>
          <option value="karnataka">Karnataka Bank</option>
        </select>

        {/* Bank 2 */}
        <select
          value={bank2}
          onChange={(e) => setBank2(e.target.value)}
          required
          className="px-4 py-2 text-xl text-mBlack rounded-xl outline-none font-medium"
          name="bank1"
          id="bank1"
        >
          <option disabled value="none">
            Select a bank
          </option>
          <option value="sbi">State Bank of India (SBI)</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="axis">Axis Bank</option>
          <option value="karnataka">Karnataka Bank</option>
        </select>
        <button onClick={handleSend}>
          <IoSend size={30} className="text-mMidBlue" />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mOrange"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {bank1 === bank2 && bank1 !== "none" && bank2 !== "none" ? (
            <h1 className="text-xl mt-10 font-bold">
              You cannot compare the same banks
            </h1>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-wrap gap-10">
                <div
                  className={`${
                    result === ""
                      ? "hidden"
                      : "mt-10 text-justify text-lg font-semibold bg-mLightBlue text-mBlack px-6 py-4 rounded-2xl max-w-screen-sm flex flex-col"
                  }`}
                >
                  <h1 className="text-2xl text-mOrange font-bold text-center">
                    {bank1.toUpperCase().concat(" BANK")}
                  </h1>
                  <p className="mt-4">{result}</p>
                </div>
                <div
                  className={`${
                    result === ""
                      ? "hidden"
                      : "mt-10 text-justify text-lg font-semibold bg-mLightBlue text-mBlack px-6 py-4 rounded-2xl max-w-screen-sm flex flex-col"
                  }`}
                >
                  <h1 className="text-2xl text-mOrange font-bold text-center">
                    {bank2.toUpperCase().concat(" BANK")}
                  </h1>
                  <p className="mt-4">{result}</p>
                </div>
              </div>
              <div
                className={`${
                  result === ""
                    ? "hidden"
                    : "mt-10 text-justify text-lg font-semibold bg-mLightBlue text-mBlack px-6 py-4 rounded-2xl flex flex-col transition duration-300 ease-in"
                }`}
              >
                <h1 className="text-2xl text-mOrange font-bold">Decision</h1>
                <p className="mt-4">{result}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComparatorPage;
