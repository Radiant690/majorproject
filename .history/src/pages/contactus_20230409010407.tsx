import { useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [isSending, setIsSending] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSending(true)
    // Your backend code for sending email or saving the message goes here
    setIsSending(false)
    reset()
    alert('Your message has been sent successfully. We will get back to you shortly.')
  }

  return (
    <>
      <Head>
        <title>Contact Us | R&D Cell</title>
      </Head>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 leading-8 text-gray-500">We'd love to hear from you. Get in touch with us using the form below.</p>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative mb-8 lg:mb-0">
              <div className="text-center">
                <FiMapPin className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">Address</p>
                <p className="mt-2 text-base leading-6 text-gray-500">123 Main St. Suite 1</p>
                <p className="mt-2 text-base leading-6 text-gray-500">New York, NY 10001</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <FiMail className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">Email</p>
                <p className="mt-2 text-base leading-6 text-gray-500">info@example.com</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <FiPhone className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">Phone</p>
                <p className="mt-2 text-base leading-6 text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-150 ease-in-out mr-4">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="
