"use client";
import { useEffect, useState } from "react";

import Popup from "../modal/popup";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  function toggeContact() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);

  return (
    <>
      {/* <Contact show={isOpen} onClose={toggeContact} /> */}

      <Popup show={isOpen} onClose={toggeContact} />

      <div className="bg-hero bg-cover bg-center  md:h-[800px] h-[600px] relative">
        <div className="absolute top-0 left-0 bg-black bg-opacity-20 h-full w-full">
          <div className="flex flex-col space-y-2 justify-center items-center h-full">
            <div className="max-w-3xl space-y-8 px-8">
              <div>
                <h1 className="font-mono text-4xl text-white">
                  &quot;When your environment is clean you feel Happy, Motivated
                  and Healthy.&quot;
                  <br />
                </h1>
              </div>
              <h1 className="font-mono text-xl text-white">
                - Lailah Gifty Akita
              </h1>

              <div>
                <button
                  onClick={toggeContact}
                  className="border-b animate-pulse text-white uppercase"
                >
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
