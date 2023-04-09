import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsSending(true);
    // Your backend code for sending email or saving the message goes here
    setIsSending(false);
    reset();
    alert(
      "Your message has been sent successfully. We will get back to you shortly."
    );
  };

  return (
    <>
      <Head>
        <title>Contact Us | R&D Cell</title>
      </Head>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-2 leading-8 text-gray-500">
              We'd love to hear from you. Get in touch with us using the form
              below.
            </p>
          </div>
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative mb-8 lg:mb-0">
              <div className="text-center">
                <FiMapPin className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Address
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  123 Main St. Suite 1
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <FiMail className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Email
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  info@example.com
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <FiPhone className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Phone
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out mr-4">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out mr-4">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out">
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-16 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium leading-5 text-gray-700">
                Full name
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-base font-medium leading-5 text-gray-700">
                Subject
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  {...register("subject", { required: true })}
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-base font-medium leading-5 text-gray-700">
                Message
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  {...register("message", { required: true })}
                  className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`${
                    isSending ? "opacity-50 cursor-not-allowed" : ""
                  } inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}>
                  {isSending ? "Sending..." : "Send"}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
