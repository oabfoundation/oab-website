export default function OurVision() {
  const visionItems = [
    {
      title: "We Find & Fund",
      color: "bg-[#ff8c52]", // Lightest orange
      description: "We are in search of opportunities to help as many youth as possible. We approach and fund all those who are in need."
    },
    {
      title: "We Provide Care",
      color: "bg-[#ff7a33]", // Medium-light orange
      description: "Today's youth need a helpful hand and right guidance at every stage. Here's where we take care of them like our own."
    },
    {
      title: "We Educate",
      color: "bg-[#ff6a14]", // Medium-dark orange
      description: "We run small-scale schools for the underprivileged children and youth of daily wage workers for a better future."
    },
    {
      title: "We Employ",
      color: "bg-[#ff5a00]", // Darkest orange
      description: "We run organizations where we employ youngsters so they can live their dreams for themselves and their families."
    }
  ];

  return (
    <section className="py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium text-[#ff5a00] mb-6">Our Vision</h2>
        <div className="w-full border-b border-orange-200"></div>
      </div>

      {/* Vision Blocks */}
      <div className="mx-">
        <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} text-white p-10 flex-1 flex flex-col min-h-[450px] transition-all duration-300 hover:brightness-110`}
            >
              <div className="flex-grow">
                <h3 className="text-3xl font-bold leading-tight mb-8 max-w-[150px]">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed font-light opacity-90">
                  {item.description}
                </p>
              </div>
              
              {/* The white accent line at the bottom */}
              <div className="mt-12">
                <div className="w-12 h-1 bg-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}