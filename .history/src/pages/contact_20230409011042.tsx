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
              <textarea id="message" rows="4" {...register('message', { required: true })} className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></
