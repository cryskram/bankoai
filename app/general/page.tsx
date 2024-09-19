"use client";

import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

const GeneralPage = () => {
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setResult("");
    const timer = setTimeout(() => {
      setLoading(false);
      setResult(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet efficitur felis semper faucibus. Donec in orci leo. Pellentesque et tellus a purus pulvinar efficitur sit amet sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac eros quam. Vivamus posuere, erat ultricies rhoncus placerat, nisl augue ornare est, sed ullamcorper nisl ipsum sit amet lacus. Mauris justo est, mollis eu venenatis tristique, consectetur in mi. Etiam vitae nunc risus."
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-10 pb-20">
      <h1 className="text-3xl md:text-7xl text-mLightBlue mt-10">
        General{" "}
        <span className="px-2 py-1 bg-mOrange rounded-2xl text-mBlack font-semibold">
          ChatBot
        </span>
      </h1>
      <p className="mt-8 text-base text-center font-mono md:text-xl">
        Get personalized guidance on all your banking queries and services.
      </p>
      <div className="flex gap-4 w-full justify-center mt-10 items-center">
        <input
          type="text"
          placeholder="Enter your query"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-xl w-3/4 md:w-1/2 text-mBlack outline-none font-medium text-xl"
        />
        <button onClick={handleSend}>
          <IoSend size={30} className="text-mMidBlue" />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mOrange"></div>
        </div>
      ) : (
        <div
          className={`${
            result === ""
              ? "hidden"
              : "mt-10 text-justify text-lg font-semibold bg-mLightBlue text-mBlack px-6 py-4 rounded-2xl max-w-screen-sm flex flex-col"
          }`}
        >
          <h1 className="text-2xl text-mOrange font-bold text-center">
            {query || "No query"}
          </h1>
          <p className="mt-4">{result}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralPage;
