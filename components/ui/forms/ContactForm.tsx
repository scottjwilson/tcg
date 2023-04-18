"use client";
import { FieldValues, useForm } from "react-hook-form";
import Glow from "../layout/Glow";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const sendForm = async (data: FieldValues) => {
    try {
      const res = await fetch("https://eojpt8lgy3bv78f.m.pipedream.net", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      reset();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex flex-col">
      <form
        className="space-y-2"
        onSubmit={handleSubmit((data) => sendForm(data))}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className="input-style"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Your Email"
          className="input-style"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="input-style"
          rows={4}
        ></textarea>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
      <Glow />
    </div>
  );
};
export default ContactForm;
