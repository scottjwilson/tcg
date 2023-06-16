import Wrapper from "./Wrapper";

type Duration = {
  duration: string;
  setPage: (page: number) => void;
};
type DurationProps = Duration & {
  updateFields: (fields: Partial<Duration>) => void;
};

const Duration = ({ duration, updateFields, setPage }: DurationProps) => {
  const handleChoice = (duration: string) => {
    updateFields({ duration: duration });
    setPage(1);
  };
  return (
    <Wrapper title="Are you interested in One-Time or Recurring service?">
      <div className="btn-wrapper">
        <button onClick={() => handleChoice("One-Time")} className="quote-btn">
          One-Time
        </button>
        <button onClick={() => handleChoice("Recurring")} className="quote-btn">
          Recurring
        </button>
      </div>

      {duration}
    </Wrapper>
  );
};
export default Duration;
