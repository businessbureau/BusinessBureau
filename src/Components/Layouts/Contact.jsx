import React from "react";
import Forms from "./Utils/Forms";

const Contact = () => {
  return (
    <div>
      <section
        data-section
        id="contactRef"
        className="bb-black bg-gray-900 dark:bg-gray-900"
      >
        <h1 className="text-center text-5xl pt-6 font-bold text-white dark:text-white">
          Contact Us
        </h1>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 w-full lg:w-[90%]">
            <Forms />
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex my-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7044886398207!2d76.29365817479305!3d9.958526290144729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872c73eaaaaab%3A0x62be3b55e654cf59!2sBusiness%20Bureau%20Coworking!5e0!3m2!1sen!2sin!4v1706361343066!5m2!1sen!2sin"
              title="Business Bureau Google Map"
              width={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              loading="async"
              className="object-cover object-center rounded-box h-44 md:h-full min-h-52"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
