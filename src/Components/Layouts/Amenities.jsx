import React from "react";
import amen1 from "../../assets/amenities/wifi-sign.png";
import amen2 from "../../assets/amenities/coffee-machine.png";
import amen3 from "../../assets/amenities/drawer.png";
import amen4 from "../../assets/amenities/generator.png";
import amen5 from "../../assets/amenities/locker.png";
import amen6 from "../../assets/amenities/video-conferencing.png";
import amen7 from "../../assets/amenities/identification.png";
import amen8 from "../../assets/amenities/cctv-camera.png";

const Amenities = () => {
  return (
    <div data-section id="amenitiesRef">
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl text-center">
              Amenities
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="bb-bg-medium group relative bg-primary/30  dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen1}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="wifi illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Free WIFI
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Enjoy high-speed internet connectivity throughout our
                    co-working space, ensuring you stay seamlessly connected at
                    all times.
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30  dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen2}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="coffee"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Refreshment
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Stay energized with complimentary refreshments available in
                    our communal areas, fostering a vibrant and collaborative
                    work environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30  dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen3}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Shelf & Drawers
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Personalize your workspace with convenient shelves and
                    drawers, offering ample storage to keep your essentials
                    organized.
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30  dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300">
                <img
                  src={amen4}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Power Backups
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Experience uninterrupted productivity with reliable power
                    backups, ensuring a seamless workflow even during unexpected
                    outages.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* second grid */}
          <div className="mt-10 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="bb-bg-medium group relative bg-primary/30 dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen5}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Lockers
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Safeguard your belongings in our secure lockers, providing
                    peace of mind and convenience for all members.
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30 dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen6}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary">
                    Video Conferencing
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Conduct virtual meetings effortlessly in our well-equipped
                    spaces, featuring state-of-the-art video conferencing
                    facilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30 dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={amen7}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    Finger Print Access
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Ensure top-notch security with fingerprint access control,
                    offering a cutting-edge and personalized entry system for
                    enhanced safety
                  </p>
                </div>
              </div>
            </div>
            <div className="bb-bg-medium group relative bg-primary/30 dark:bg-primary/30 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300">
                <img
                  src={amen8}
                  className="w-12"
                  width={512}
                  height={512}
                  alt="burger illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700  transition group-hover:text-primary .bb-text-hover">
                    24/7 Survieilance
                  </h5>
                  <p className="text-sm text-gray-600 ">
                    Rest assured in our co-working environment, where continuous
                    surveillance works tirelessly to uphold a safe and welcoming
                    ambiance for all occupants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
