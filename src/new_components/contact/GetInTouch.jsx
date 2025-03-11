import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function UnlockAIPotential() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_ck7eqhn",  // Replace with your EmailJS Service ID
        "template_wyt3q8y", // Replace with your EmailJS Template ID
        form.current,
        
        "QZtJcmjbcusK_tfu4"   // Replace with your EmailJS Public Key
      );
      console.log(form.current)
      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-screen-xl rounded-xl bg-cover bg-center mt-16 w-[90%] mx-auto h-[70vh] sm:h-[60vh]"
        style={{ backgroundImage: "url('https://res.cloudinary.com/ddljq4uyx/image/upload/v1741712829/contact_us_final_lnhvgv.jpg')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-bold text-gray-100 mb-6"
        >
          Stay Connected, Grow Together.
        </motion.h1>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-screen-xl mx-auto mt-10 p-10 rounded-xl"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 mb-4">Get in Touch</h2>
        
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
          <input type="text" name="name" placeholder="Name" className="p-4 text-lg rounded-lg border border-gray-500 text-white bg-transparent focus:outline-none w-full" required />
          <input type="email" name="email" placeholder="Email" className="p-4 text-lg rounded-lg border border-gray-500 text-white bg-transparent focus:outline-none w-full" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="p-4 text-lg rounded-lg border border-gray-500 text-white bg-transparent focus:outline-none w-full" />
          <input type="text" name="business" placeholder="Business Name" className="p-4 text-lg rounded-lg border border-gray-500 text-white bg-transparent focus:outline-none w-full" />

          <fieldset className="flex flex-col gap-4 text-gray-300 w-full">
            <legend className="font-semibold text-lg">How Can We Help You?</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center text-lg">
                <input type="checkbox" name="services" value="AI Strategy Consulting" className="mr-3" /> AI Strategy Consulting
              </label>
              <label className="flex items-center text-lg">
                <input type="checkbox" name="services" value="Automation Solutions" className="mr-3" /> Automation Solutions
              </label>
              <label className="flex items-center text-lg">
                <input type="checkbox" name="services" value="AI-Powered Marketing" className="mr-3" /> AI-Powered Marketing
              </label>
              <label className="flex items-center text-lg">
                <input type="checkbox" name="services" value="Data Analytics & Insights" className="mr-3" /> Data Analytics & Insights
              </label>
            </div>
          </fieldset>

          <textarea name="message" placeholder="Message" className="p-4 text-lg rounded-lg border border-gray-500 text-white bg-transparent focus:outline-none h-32 w-full"></textarea>
          
          <label className="text-gray-300 text-lg">
            <input type="checkbox" name="callback" value="Yes" className="mr-3" /> Request a Callback
          </label>

          <button type="submit" className="bg-blue-600 text-white p-4 text-lg rounded-lg font-semibold hover:bg-blue-700 transition w-full">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}
