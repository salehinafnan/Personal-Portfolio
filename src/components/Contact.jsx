import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("mwkgwdea");

  if (state.succeeded) {
    return (
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center font-medium text-2xl"
      >
        Thanks for Contacting
      </motion.p>
    );
  }

  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <form
          action={import.meta.env.VITE_EMAIL_API}
          onSubmit={handleSubmit}
          className="my-2 flex flex-col px-10 justify-center items-center"
        >
          <input
            id="email"
            type="email"
            name="email"
            className="w-full lg:w-1/4 mb-4 rounded px-2 py-2"
            placeholder="Your Email"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className="w-full lg:w-1/4 mb-4 rounded px-2 py-8"
            placeholder="Your Message"
            style={{
              resize: "none",
              overflow: "auto",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <motion.button
            type="submit"
            disabled={state.submitting}
            className="rounded px-5 py-2 font-medium text-blue-100"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
