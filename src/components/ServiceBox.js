const ServiceBox = ({ title, image }) => {
    return (
      <div className="servicesBox" style={{ backgroundImage: `url(${image})` }}>
        <div className="servicesBoxTitle">{title}</div>
      </div>
    );
  };
  
  export default ServiceBox;