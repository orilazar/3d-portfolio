import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useScrollContext } from "../components/contexts/ScrollContext";

const Contact = () => {
  const { sectionRefs } = useScrollContext();
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ori Lazarovitch",
          from_email: form.email,
          to_email: "ori10122001+portfolio@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Message sent!",
            description: "Thank you for your message 😃",
            duration: 3000,
            isClosable: true,
            status: "success",
          });

          setTimeout(() => {
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error("ERROR", error);

          toast({
            title: "Error occured!",
            description: "I didn't receive your message 😢",
            duration: 3000,
            isClosable: true,
            status: "warning",
          });
        }
      );
  };

  return (
    <section
      className="relative flex lg:flex-row flex-col max-container"
      style={{ paddingBottom: "5em" }}
      id="contact"
      ref={sectionRefs[3]}
    >
      <div className="flex-1 min-w-[50%] flex flex-col dark">
        <h1 className="subhead-text">Get in Touch</h1>
        <div className="flex justify-between w-full">
          <p className="text-slate-200 font-poppins font-semibold text-xl w-[40%] flex justify-end flex-col ml-4">
            Links
            <div className="mt-4">
              {socialLinks.map((link) => (
                <Link key={link.name} to={link.link} target="_blank">
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-8 h-8 object-contain"
                  />
                </Link>
              ))}
              <a
                target="_blank"
                href="full_cv.pdf"
                rel="noopener noreferrer"
                className="flex items-center mt-3 text-base text-blue-400/80 font-poppins cursor-pointer flex items-baseline w-[fit-content] mt-1"
              >
                CV
                <FaArrowUpRightFromSquare className="ml-3" fontSize="0.8em" />
              </a>
            </div>
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-12"
          >
            <label className="text-slate-200 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="mt-2 bg-slate-700 border border-gray-400 text-slate-100 text-sm rounded-lg focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="text-slate-200 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="mt-2 bg-slate-700 border border-gray-400 text-slate-100 text-sm rounded-lg focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label className="text-slate-200 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="mt-2 bg-slate-700 border border-gray-400 text-slate-100 text-sm rounded-lg focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your message here"
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit" disabled={loading} className="btn">
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
