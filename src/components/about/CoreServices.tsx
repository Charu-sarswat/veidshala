import React from "react";

export default function CoreServices() {
  const services = [
    {
      title: "Ayurvedic Consultation",
      description:
        "A detailed discussion of your health concerns, lifestyle and medical history to understand your individual needs.",
      imageSrc: "/a2.png",
      imageAlt: "Ayurvedic Doctor Consultation",
    },
    {
      title: "Panchakarma Therapies",
      description:
        "Personalised Panchakarma therapies planned as per your health condition and suitability.",
      imageSrc: "/a1.png",
      imageAlt: "Panchakarma Shirodhara Therapy",
    },
    {
      title: "Yoga & Lifestyle Care",
      description:
        "Guidance with yoga, meditation and daily routines to support long-term well-being.",
      imageSrc: "/a3.png",
      imageAlt: "Yoga and Meditation Practice",
    },
    {
      title: "Medicines & Products",
      description:
        "Authentic Ayurvedic formulations and wellness products to support your treatment and daily health.",
      imageSrc: "/a5.png",
      imageAlt: "Authentic Ayurvedic Medicines and Products",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
            Our Services
          </span>
          <h2 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
            A complete approach to your health journey.
          </h2>
          <p className="mt-3 text-[15.5px] sm:text-[16.5px] font-normal leading-[1.6] text-[#55645B]">
            Explore our core services, designed to work together for your
            overall well-being.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col transition-all duration-200"
            >
              <div className="overflow-hidden rounded-xl aspect-[16/11] bg-[#EAE4D8]">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 font-serif text-[21px] sm:text-[23px] font-medium leading-[1.25] text-[#0D3226]">
                {service.title}
              </h3>

              <p className="mt-2 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#55645B]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
