import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dedicatedDesks from "../../assets/office pics/services/Dedicated desks.webp";
import privateCabins from "../../assets/office pics/services/Private Cabins.webp";
import virtualOffice from "../../assets/office pics/services/Meeting Rooms.webp";
import cafeteria from "../../assets/office pics/services/Cafeteria.webp";
import Clients from "./Clients";

const services = [
  {
    title: "Coworking Space",
    subtitle: "Vibrant Community",
    description:
      "Our shared environment is built for focus and connection. Freelancers, consultants, and remote workers enjoy a coworking space for freelancers in Kerala that gives them a dedicated place to work without the isolation of home or the distraction of a cafe.",
    img: dedicatedDesks,
    accent: "bg-primary",
  },
  {
    title: "Private Offices",
    subtitle: "Exclusive Privacy",
    description:
      "Our private cabins are fully furnished, secure, and ready for teams that need focus without distraction. Each managed office space comes with dedicated infrastructure, climate control, and scalable layouts making them the right choice for startups and growing teams.",
    img: privateCabins,
    accent: "bg-gray-800",
  },
  {
    title: "Meeting Rooms",
    subtitle: "State-of-the-art",
    description:
      " Book a meeting room rental by the hour for client presentations, team workshops, or video conferences. A coworking space with conference room facilities that is accessible makes client meetings far less stressful. ",
    img: virtualOffice,
    accent: "bg-primary",
  },
  {
    title: "Day Pass",
    subtitle: "Total Flexibility",
    description:
      "For professionals needing short-term access, our day office option allows you to use the workspace for a single day ideal for travelers, consultants, or remote workers. You’ll enjoy high-speed internet, a quiet and professional environment, and access to essential office amenities. ",
    img: cafeteria,
    accent: "bg-gray-800",
  },
];

const Services = () => {
  return (
    <section
      id="servicesRef"
      data-section
      className="bg-[#0a0a0a] py-32 overflow-hidden"
    >
      <div className="xl:container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              coworking space in Kochi
            </h2>

            <h2 className="text-white text-5xl md:text-8xl font-light leading-[0.85] tracking-tighter">
              Bespoke <br />
              <span className="text-primary italic font-serif">Services.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm text-sm md:text-base font-light leading-relaxed mb-4"
          >
            Elevate your journey with world-class environments. From solo
            visionaries to growing titans, we have the space for your success.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link to="/services">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent text-opacity-100" />
                  <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Label */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 group-hover:opacity-0 transition-opacity duration-300">
                    <span
                      className={`px-3 py-1 md:px-4 md:py-1.5 ${service.accent} text-white text-[7px] md:text-[8px] uppercase tracking-[0.3em] font-bold rounded-full`}
                    >
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-4 group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm lg:text-base font-light max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 hidden sm:block">
                      {service.description}
                    </p>
                    {/* Mobile optimized description (shorter or hidden if needed) */}
                    <p className="text-gray-300 text-[10px] font-light max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 sm:hidden block line-clamp-2">
                      {service.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-12 h-[1px] bg-primary mt-4 md:scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients Integration */}
      <div className="mt-40 border-t border-white/5 pt-20">
        <Clients />
      </div>

      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Services;
