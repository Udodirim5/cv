import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { myInfo } from "../../data/data";

const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://zeirrow.vercel.app";

const Contact = () => {
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState("");
  const contactLinks = [
    {
      icon: <FaGithub />,
      color: "hover:text-gray-300",
      bg: "bg-gray-700",
      url: `https://github.com/${myInfo.contact.github}`,
    },
    {
      icon: <FaLinkedin />,
      color: "hover:text-blue-400",
      bg: "bg-blue-600/20",
      url: myInfo.contact.linkedIn,
    },
    {
      icon: <FaTwitter />,
      color: "hover:text-cyan-400",
      bg: "bg-cyan-500/20",
      url: myInfo.contact.twitter,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Track loading state, success, or error

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      setStatus("loading"); // Set loading state
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        // Success handling
        setStatus("success");
        setMessage("Your message was sent successfully!");
      } else {
        // Handle errors (if any) returned by the server
        setStatus("error");
        setMessage(data?.message || "Something went wrong!");
      }
      // Reset the form
      e.target.reset();
    } catch (error) {
      // Error handling
      setStatus("error");
      setMessage("Failed to send the message. Please try again later.");
      console.error("Error:", error.message);
    } finally {
      setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-gray-900/80 to-gray-800/80">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Fill out the form or reach out directly through one of these
                  channels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mt-1">
                      <FiMail />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href={`mailto:${myInfo.contact.email}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {myInfo.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {contactLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -3 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link to ${social.url}`}
                        className={`w-10 h-10 rounded-full ${social.bg} flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                    {status === "success" && (
                      <p className="text-green-500 bg-green-300/10 rounded-xl p-1">{message}</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-500 bg-red-300/10 rounded-xl p-1">{message}</p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    {status === "loading"
                      ? "Sending your message.."
                      : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
