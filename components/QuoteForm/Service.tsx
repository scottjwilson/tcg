import Wrapper from "./Wrapper";
type TheService = {
  service: string;
  setPage: (page: number) => void;
};

type ServiceProps = TheService & {
  updateFields: (fields: Partial<TheService>) => void;
};

const services = [
  {
    name: "Disinfection Sanitation",
  },
  {
    name: "Pressure Washing",
  },
  {
    name: "Floor Treatment",
  },
  {
    name: " Janitorial/Porter Services",
  },
];

const Service = ({ service, updateFields, setPage }: ServiceProps) => {
  const handleChoice = (service: string) => {
    updateFields({ service: service });
    setPage(2);
  };
  return (
    <Wrapper title="What type of service do you want a quote for?">
      <div className="btn-wrapper">
        {services.map((service) => (
          <button
            key={service.name}
            className="quote-btn"
            onClick={() => handleChoice(service.name)}
          >
            {service.name}
          </button>
        ))}
      </div>
      {service}
    </Wrapper>
  );
};
export default Service;
