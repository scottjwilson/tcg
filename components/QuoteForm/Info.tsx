import Wrapper from "./Wrapper";

type InfoInputs = {
  name: string;
  phone: string;
  email: string;
};
type InfoProps = InfoInputs & {
  updateFields: (fields: Partial<InfoInputs>) => void;
};

const Info = ({ name, email, phone, updateFields }: InfoProps) => {
  return (
    <Wrapper title="Your Business Information">
      <div className="flex flex-col space-y-2">
        <label>Name</label>
        <input
          autoFocus
          required
          type="text"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
          className="info-input"
          placeholder="Name"
        />
        <label>Phone</label>
        <input
          required
          type="number"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
          className="info-input"
          placeholder="Phone"
        />
        <label>Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="info-input"
          placeholder="Email"
        />
      </div>
    </Wrapper>
  );
};
export default Info;
