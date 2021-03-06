import React from "react";

const Features = () => {
  return (
    <div className="w-screen min-h-150vh md:min-h-screen linear relative text-center">
      <div id="bg-left-top" className="absolute top-auto left-0">
        <img src="images/dot-bg.png" alt="dot bg" />
      </div>
      <div id="bg-right-bottom" className="absolute bottom-0 right-0">
        <img className="h-56 w-56" src="images/dot-bg.png" alt="dot bg" />
      </div>

      <div
        id="content-overlay"
        className="absolute top-0 left-0 min-h-150vh md:min-h-screen w-full flex justify-center items-center py-10"
      >
        <div id="feature-content" className="container">
          <h2 className="text-4xl mb-10"> How it works</h2>
          <div className="flex w-full justify-center items-start flex-wrap lg:justify-between">
            <div className="max-w-xs flex-col items-center p-8">
              <img
                className="h-56 w-56"
                src="images/features.png"
                alt="features 1"
              />
              <h4 className="text-3xl text-MainBlue mb-2 font-medium"> 1 </h4>
              <h5 className="text-2xl font-mediumn mb-2"> Water</h5>
              <p> Fill your popgerm with water </p>
            </div>
            <div className="max-w-xs flex-col items-center p-8">
              <img
                className="h-56 w-56"
                src="images/features.png"
                alt="features 1"
              />
              <h4 className="text-3xl text-MainBlue mb-2 font-medium"> 2 </h4>
              <h5 className="text-2xl font-mediumn mb-2"> Salt</h5>
              <p> Add a teaspoon of kitchen salt </p>
            </div>
            <div className="flex-col items-center max-w-xs p-8">
              <img
                className="h-56 w-56"
                src="images/features.png"
                alt="features 1"
              />
              <h4 className="text-3xl text-MainBlue mb-2 font-medium"> 3 </h4>
              <h5 className="text-2xl font-mediumn mb-2"> PopGerms</h5>
              <p> Plug it in. Pop. Wait 5 min. Ready to desinfect!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
