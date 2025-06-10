
const Service = () => {
  const services = [
    {
      title: "Residential Electrical Services",
      description: "We provide comprehensive electrical services for homes, including installations, repairs, and maintenance.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Commercial Electrical Solutions",
      description: "Our team specializes in commercial electrical systems, ensuring safety and efficiency for your business.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Emergency Electrical Repairs",
      description: "Available 24/7 for emergency electrical issues. We respond quickly to restore power and safety.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <div key={index} className="service">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <img src={service.image} alt={service.title} />
        </div>
      ))}
    </div>
  );
}
export default Service;
