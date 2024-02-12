import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal text-primary">
                150+
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                RESDIDENCE <br></br>TYPES
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal text-primary">
                100+
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                PROJECTS <br></br>DELIVERED
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal text-primary">
                25000+
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                DESIGN <br></br>HOURS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metrics;
