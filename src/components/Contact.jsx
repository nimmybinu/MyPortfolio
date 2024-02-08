import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-black flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/fd4d078b-fcd8-46c0-b879-dfa491e6d6e7"
        method="post"
        className="mt-12 flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or Send me an email at nimmimm2014@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          className="p-2 bg-[#ccd6f6] my-4"
          name="email"
          type="email"
          placeholder="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          placeholder="message"
          name="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-green-400 hover:border-green-400 px-4 py-3 my-8 mx-auto ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
