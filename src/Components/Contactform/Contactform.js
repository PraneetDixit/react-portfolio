import { useForm } from "@formspree/react";
import "./Contactform.css";
import { motion } from "motion/react";

export default function Contactform() {
  const [state, handleSubmit] = useForm("xdkoprrk");
  if (state.submitted) {
    alert("Thanks for reaching out!");
  }
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 }}
      variants={{
        hidden: { y: 300, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
    >
      {/* <label htmlFor="name">Name</label> */}
      <input
        required
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
      />
      {/* <label htmlFor="email">Email</label> */}
      <input
        required
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      {/* <label htmlFor="mobile">Mobile no.</label> */}
      <input
        required
        id="mobile"
        type="number"
        name="mobile"
        placeholder="Mobile number"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        rows={8}
      />
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting" : "Submit"}
      </button>
    </motion.form>
  );
}
