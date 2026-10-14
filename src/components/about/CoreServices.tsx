import React from "react";

export default function CoreServices() {
  const services = [
    {
      title: <>Ayurvedic<br />Consultation</>,
      description: (
        <>
          A detailed discussion of your
          <br className="hidden sm:inline" /> health concerns, lifestyle and
          <br className="hidden sm:inline" /> medical history to understand
          <br className="hidden sm:inline" /> your individual needs.
        </>
      ),
      imageSrc: "/about/i3.png",
      imageAlt: "Ayurvedic Doctor Consultation",
    },
    {
      title: <>Panchakarma<br />Therapies</>,
      description: (
        <>
          Personalised Panchakarma
          <br className="hidden sm:inline" /> therapies planned as per your
          <br className="hidden sm:inline" /> health condition and
          <br className="hidden sm:inline" /> suitability.
        </>
      ),
      imageSrc: "/a1.png",
      imageAlt: "Panchakarma Shirodhara Therapy",
    },
    {
      title: <>Yoga &<br />Lifestyle Care</>,
      description: (
        <>
          Guidance with yoga, meditation
          <br className="hidden sm:inline" /> and daily routines to support
          <br className="hidden sm:inline" /> long-term well-being.
        </>
      ),
      imageSrc: "/a3.png",
      imageAlt: "Yoga and Meditation Practice",
    },
    {
      title: <>Medicines &<br />Products</>,
      description: (
        <>
          Authentic Ayurvedic
          <br className="hidden sm:inline" /> formulations and wellness
          <br className="hidden sm:inline" /> products to support your
          <br className="hidden sm:inline" /> treatment and daily health.
        </>
      ),
      imageSrc: "/a5.png",
      imageAlt: "Authentic Ayurvedic Medicines and Products",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-4 sm:pb-5 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            Our Services
          </span>
          <h2 className="mt-1.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
            A complete approach to your health journey.
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950]">
            Explore our core services, designed to work together for your
            overall well-being.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col transition-all duration-200"
            >
              <div className="overflow-hidden rounded-xl aspect-[16/11] bg-[#EAE4D8]">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 font-serif text-[17.5px] sm:text-[18px] font-medium leading-[1.25] text-[#0D3226]">
                {service.title}
              </h3>

              <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-medium leading-[1.5] text-[#4A5950]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
