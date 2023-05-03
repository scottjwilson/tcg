"use client";
import { FieldValues, useForm } from "react-hook-form";
import Glow from "../layout/Glow";
import Image from "next/image";
import Logo from "../layout/Logo";
import Link from "next/link";

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
    <div className="container">
      <Link href="/">
        <div className="flex items-center space-x-4">
          <h1 className="font-mono text-4xl my-4">Get your quote today</h1>
          {/* <div className="w-20">
            <Image
              src="/logo.png"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-lg"
              alt="logo"
            />
          </div> */}
        </div>
      </Link>

      <div className="flex">
        <div className="w-full">
          <form
            className="space-y-2"
            onSubmit={handleSubmit((data) => sendForm(data))}
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="input-style"
              required
            />
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone Number"
              className="input-style"
            />
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="input-style"
            />
            <input
              {...register("company")}
              type="text"
              placeholder="Company"
              className="input-style"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="input-style"
            />

            <div className="pt-4">
              <button
                type="submit"
                className="text-white shadow-2xl uppercase border bg-black px-4 py-4 w-full tracking-widesthover:text-white hover:border-teal-700 transition duration-300 ease-in-out;"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <div className="col-span-1">
        <Image
        src="/offices.jpeg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        />
      </div> */}
      </div>
    </div>
  );
};
export default ContactForm;
