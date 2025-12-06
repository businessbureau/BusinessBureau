import React from "react";
import client1 from "../../assets/clients/autobacs.png";
import client2 from "../../assets/clients/whyletz.png";
import client3 from "../../assets/clients/impressa.png";
import client4 from "../../assets/clients/cushman whitefield.png";
const Clients = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center overflow-hidden py-5">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Our {""}Clients
            </h2>
          </div>
          <div className="m-auto mt-12 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="group py-2 px-4 hover:bg-opacity-10 flex justify-center">
                <img
                  src={client4}
                  className="contrast-0 transition group-hover:contrast-100 w-32 aspect-video object-contain"
                  loading="lazy"
                  alt="logo cushman whitefield"
                />
              </div>
              <div className="group py-2 px-4 hover:bg-opacity-10 flex justify-center">
                <img
                  src={client2}
                  className="contrast-0 transition group-hover:contrast-100 w-32 aspect-video object-contain"
                  loading="lazy"
                  alt="logo whyletz"
                />
              </div>
              <div className="group py-2 px-4 hover:bg-opacity-10 flex justify-center">
                <img
                  src={client3}
                  className="contrast-0 transition group-hover:contrast-100 w-32 aspect-video object-contain"
                  loading="lazy"
                  alt="logo impresso"
                />
              </div>
              <div className="group py-2 px-4 hover:bg-opacity-10 flex justify-center">
                <img
                  src={client1}
                  className="contrast-0 transition group-hover:contrast-100 w-32 aspect-video object-contain"
                  loading="lazy"
                  alt="logo autobacs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
