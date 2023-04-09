import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      // TODO: Add your form submission code here

      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
    }

    setSubmitting(false);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Contact Us | Research and Development Cell</title>
      </Head>

      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:mt-8 sm:mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-base font-medium leading-5 text-gray-700">Full name</label>
            <div className="mt-1 rounded-md shadow-sm">
              <input id="name" type="text" {...register('name', { required: true })} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium leading-5 text-gray-700">Email address</label>
            <div className="mt-1 rounded-md shadow-sm">
              <input id="email" type="email" {...register('email', { required: true })} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-base font-medium leading-5 text-gray-700">Subject</label>
            <div className="mt-1 rounded-md shadow-sm">
              <input id="subject" type="text" {...register('subject', { required: true })} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" />
              {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-base font-medium leading-5 text-gray-700">Message</label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea id="message" {parseInt(rows)}="4" {...register('message', { required: true })} className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></
              {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" disabled={submitting} className="w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {submitted && <p className="mt-6 text-center text-green-500 font-bold">Thanks for contacting us!</p>}
      </div>

      <div className="mt-16 max-w-md mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FiMapPin className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-3 text-base leading-5 text-gray-600">
            <p>Department of Computer Science and Engineering</p>
            <p>University Name</p>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FiPhone className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-3 text-base leading-5 text-gray-600">
            <p>+91 1234567890</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FiMail className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-3 text-base leading-5 text-gray-600">
            <p>researchcell@example.com</p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-md mx-auto">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Connect with us</h3>
        <p className="mt-2 text-base leading-5 text-gray-600">Follow us on social media for updates and news about our research and development initiatives.</p>
        <div className="mt-6 flex">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
