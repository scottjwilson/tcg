import ContactForm from "../forms/ContactForm";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container py-12 mt-24 ">
        <div className="grid md:grid-cols-2 gap-8 px-4 ">
          <div className="flex flex-col space-y-4 justify-center">
            <h1 className="text-white text-7xl font-bold capitalize">
              contact
            </h1>
            <p className="text-lg">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="md:pl-32">
            <ContactForm />
          </div>
        </div>

        <hr className="mt-20 mb-10" />
        <div>
          <h1 className="font-mono font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-radial from-orange-400 to-red-800">
            {/* <span className="font-thin">//</span> */}
            scottwil
          </h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
