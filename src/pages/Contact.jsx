import React, { Suspense, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Loader, Html } from "@react-three/drei";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nathan",
          from_email: form.email,
          to_email: "kutil.kebok@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //Show succes message
        showAlert({
          show: true,
          text: "Message sent succesfully!",
          type: "success",
        });
        //Hide an alert
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
          hideAlert();
        }, [2000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        //Show error message
        showAlert({
          show: true,
          text: "I didn't receive your message!",
          type: "danger",
        });
      });
  };
  return (
    <>
      <Navbar />
      <section className="relative flex flex-col lg:flex-row lg:-mt-30 items-center justify-center min-h-screen px-6 py-16 bg-white gap-16">
        {alert.show && <Alert {...alert} />}

        <div className="w-full max-w-md">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
            Get in Touch
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name input */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            {/* Email input */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                required
                className="mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            {/* Message input */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Your Message
              <textarea
                name="message"
                rows={5}
                placeholder="Let me know how I can help you!"
                required
                className="mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 rounded-md transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-[400px] h-[300px] lg:h-[500px]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense
              fallback={
                <Html>
                  <Loader />
                </Html>
              }
            >
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
