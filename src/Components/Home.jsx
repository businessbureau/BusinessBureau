import React from "react";
import Header from "./Layouts/Header";
import Seo from "./Seo";
import HeroSection from "./Layouts/HeroSection";
import WhoWeAre from "./Layouts/WhoWeAre";
import About from "./Layouts/About";
import Services from "./Layouts/Services";
import Amenities from "./Layouts/Amenities";
import Testimonials from "./Layouts/Testimonials";
import FAQ from "./Layouts/FAQ";
import Contact from "./Layouts/Contact";
import Footer from "./Layouts/Footer";

import SectionWrapper from "./Layouts/Utils/SectionWrapper";

const Home = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of coworking spaces are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Business Bureau offers shared work areas, dedicated desks, private office cabins, and meeting rooms. These options are designed to support freelancers, startups, consultants, and small teams with flexible workspace requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Is short-term access possible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, short-term access is available through flexible day-based options. This allows professionals, remote workers, and business travelers to use the workspace without long-term commitments or contractual obligations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide meeting room rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meeting rooms are available for client discussions, internal meetings, presentations, and workshops. Each space is professionally set up to ensure a productive environment with reliable connectivity and essential meeting infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Are private cabins fully furnished?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All private cabins are fully furnished with work-ready furniture, lighting, and essential infrastructure. These cabins provide a secure, distraction-free environment suitable for focused work and confidential business operations.",
        },
      },
      {
        "@type": "Question",
        name: "Is internet speed suitable for IT work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The workspace is equipped with high-speed, stable internet connectivity suitable for IT professionals, developers, and remote teams. This ensures smooth video conferencing, cloud-based work, and uninterrupted daily operations.",
        },
      },
      {
        "@type": "Question",
        name: "Can small teams scale easily?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small teams can easily scale by upgrading workspace plans or moving into larger private offices. The flexible model allows businesses to grow without the limitations of long-term leases or relocation challenges.",
        },
      },
      {
        "@type": "Question",
        name: "Is parking available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parking facilities are available for members and visitors, depending on location. This ensures convenient access for professionals commuting by personal vehicles and supports hassle-free daily workspace usage.",
        },
      },
      {
        "@type": "Question",
        name: "Are utilities included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, essential utilities such as electricity, internet, and maintenance are included in the workspace plans. This helps businesses manage predictable costs without worrying about separate operational expenses.",
        },
      },
      {
        "@type": "Question",
        name: "Can freelancers join?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freelancers are welcome and benefit from a professional environment, reliable infrastructure, and a collaborative atmosphere. The workspace supports independent professionals seeking focus, networking opportunities, and work-life balance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer professional address services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional address services are available for businesses needing a credible office address. This supports registrations, official correspondence, and client communication while enhancing the company’s professional presence.",
        },
      },
    ],
  };

  return (
    <div>
      <Seo
        title="Coworking Space in Kerala | Business Bureau"
        description="Discover a premium coworking space in Kerala with shared offices, meeting rooms, and a productive environment for professionals."
        url="https://www.businessbureau.in/"
        jsonLd={faqSchema}
      />
      <Header />
      <HeroSection />
      <WhoWeAre />
      <About />
      <Services />
      <SectionWrapper>
        <Amenities />
      </SectionWrapper>
      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default Home;
