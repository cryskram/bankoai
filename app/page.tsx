import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center mt-24 px-4 md:px-10 pb-20">
      <h1 className="text-3xl md:text-7xl text-mLightBlue font-semibold">
        Banko
        <span className="bg-mLightBlue rounded-xl text-mBlack px-2 py-1">
          AI
        </span>
      </h1>
      <p className="mt-5 text-base text-center md:text-xl text-mMidBlue font-medium font-mono">
        Banking Answers, Instantly at Your Fingertips!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/5 gap-5 mt-20">
        <Link href="/general">
          <div className="bg-mOrange max-w-screen-sm flex flex-col items-center justify-center rounded-2xl mx-auto py-10 border-4 border-mOrange">
            <h1 className="text-2xl md:text-3xl font-black uppercase text-mBlack ">
              General
            </h1>
            <p className="w-1/2 text-center mt-4 text-base md:text-xl font-medium">
              Get personalized guidance on all your banking queries and
              services.
            </p>
          </div>
        </Link>
        <Link
          href="/compare"
          className="border-4 border-mOrange bg-transparent hover:bg-mOrange transition duration-300 max-w-screen-sm flex flex-col items-center mx-auto justify-center rounded-2xl py-10 group"
        >
          <h1 className="text-2xl md:text-3xl font-black uppercase text-white group-hover:text-mBlack">
            comparator
          </h1>
          <p className="w-1/2 text-center mt-4 text-base md:text-xl font-medium">
            Compare banking options side-by-side for quick and informed
            decisions.
          </p>
        </Link>
      </div>
    </div>
  );
}
