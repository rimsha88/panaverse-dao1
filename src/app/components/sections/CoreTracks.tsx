import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import { CoreTrackData } from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const CoreTracks = () => {
  const header = "Core Courses  \n (Common in All Specializations):";
  return (
    <section className=" mt-16 lg:mt-28">
      <Wrapper>
        {/* {content} */}
        <div className="max-w-screen-sm">
          <h4 className="text-teal-700 text-lg font-semibold mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold mt-2 whitespace-pre-line">
            {header}
          </h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
        </div>
        <div className="mt-5">
          <Button text={"Learn More"} />
        </div>
        {/* {Boxes} */}
        <div className="my-20  flex flex-col md:flex-row gap-x-8  gap-y-6">
          {CoreTrackData.map((item, i) => (
            <QuarterBox
              key={item.number}
              header={item.header}
              description={item.description}
              number={item.number}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
