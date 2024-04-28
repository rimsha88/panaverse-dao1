"use client";
import Image from "next/image";
import { programData } from "../shared/ProgramData";
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SpecializedTrack = () => {
  const [selectedItems, setSelectedItems] = useState("WMD");
  const selectedItemData = programData.find(
    (item) => item.slug === selectedItems
  );
  return (
    <section>
      <Wrapper>
        {/* { header} */}
        <div>
          <h2 className="text-5xl font-bold  whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        {/* {left content} */}
        <div className="  mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          <div className=" basis-8/12 sticky top-28 self-start flex-1 show-xl   rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-semibold">
              {selectedItemData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              {selectedItemData?.description}
            </p>
            <button className="text-primary p-3.5 rounded-lg text-2xl  mt-4 border-2 hover:bg-gray-200 border-primary font-semibold flex gap-x-4 items-end">
              Learn More
              {/* <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg> */}
              <FaArrowRight className="mb-0.5" />
            </button>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              {selectedItemData?.quarter.map((item) => (
                <QuarterBox
                key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* {Right content} */}
          <div className="space-y-6 px-4 py-6 basis-4/12  rounded-lg  flex-1 ">
            {programData.map((item, i) => (
              <div
                onClick={() => setSelectedItems(item.slug)}
                key={item.slug}
                className=" flex gap-x-2  items-center cursor-pointer "
              >
                <div className="flex-shrink-0 h-24 w-36">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image
                    src={item.imag}
                    alt={item.header}
                    className=" h-24 w-36 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium ">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold border-b-4">
                    {item.header}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
  
    </section>
  );
};

export default SpecializedTrack;
