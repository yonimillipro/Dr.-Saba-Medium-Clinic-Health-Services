import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Lightbulb,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const bounceVariants = {
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

function Contact() {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackForm, setFeedbackForm] = useState({
    feedbackName: "",
    feedbackEmail: "",
    feedbackMessage: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMessageChange = (e) => {
    const { id, value } = e.target;
    setMessageForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFeedbackChange = (e) => {
    const { id, value } = e.target;
    setFeedbackForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const showTemporaryNotification = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage("");
    }, 4000);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Sending Message:", messageForm);
      showTemporaryNotification(
        "Your message has been sent successfully!",
        "success"
      );
      setMessageForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Submitting Feedback:", feedbackForm);
      showTemporaryNotification("Thank you for your feedback!", "success");
      setFeedbackForm({
        feedbackName: "",
        feedbackEmail: "",
        feedbackMessage: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=" min-h-screen py-16 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center relative"
    >
      {showNotification && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50 ${
            notificationType === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {notificationType === "success" ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <XCircle className="w-6 h-6" />
          )}
          <p className="font-semibold">{notificationMessage}</p>
          <button
            onClick={() => setShowNotification(false)}
            className="ml-2 text-white opacity-75 hover:opacity-100"
          >
            &times;
          </button>
        </motion.div>
      )}

      <div className="container mx-auto my-10 px-4 max-w-4xl">
        <motion.h1
          whileHover="hover"
          variants={bounceVariants}
          className="text-5xl font-extrabold text-amber-900 text-center dark:text-white mb-16 drop-shadow-lg"
        >
          Get in Touch
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10"
          >
            {/* Contact Information Section */}
            <div className="space-y-6">
              <motion.h3
                whileHover="hover"
                variants={bounceVariants}
                className="text-2xl font-bold text-amber-900 dark:text-white mb-6 flex items-center"
              >
                <MapPin className="w-7 h-7 mr-3 text-amber-700 dark:text-white" />
                Contact Information
              </motion.h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <motion.p whileHover={{ x: 5 }} className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-amber-600 dark:text-white flex-shrink-0" />
                  <strong>Address:</strong> Summit 20 meter, next to AJORA MCH
                  CENTER.
                </motion.p>
                <motion.p whileHover={{ x: 5 }} className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-amber-600 dark:text-white flex-shrink-0" />
                  <strong>Phone:</strong> (+251) 936640980 <br />
                  (+251) 970333383
                </motion.p>
                <motion.p whileHover={{ x: 5 }} className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-amber-600 dark:text-white flex-shrink-0" />
                  <strong>Email:</strong> saba2009welde@gmail.com
                </motion.p>
                <motion.p whileHover={{ x: 5 }} className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 text-amber-600 dark:text-white flex-shrink-0" />
                  <strong>Hours:</strong>
                </motion.p>
                <ul className="list-none pl-8 text-base ">
                  <motion.li whileHover={{ x: 5 }}>
                    Monday - Sunday: 24 Hours
                  </motion.li>
                </ul>

                {/* Map Integration */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    title="Dr.Saba Medium Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.546176852515!2d38.85009213171017!3d9.013838148833596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b8cc6cddcb7%3A0x8fee929252dcac0b!2sDr.%20Saba%20Medium%20Clinic!5e0!3m2!1sen!2set!4v1747591073816!5m2!1sen!2set"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Send us a Message Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3
                whileHover="hover"
                variants={bounceVariants}
                className="text-2xl font-bold text-amber-900 dark:text-white mb-6 flex items-center"
              >
                <MessageSquare className="w-7 h-7 mr-3 text-amber-700 dark:text-white" />
                Send us a Message
              </motion.h3>
              <motion.form
                variants={itemVariants}
                className="space-y-6"
                onSubmit={handleMessageSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={messageForm.name}
                    onChange={handleMessageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={messageForm.email}
                    onChange={handleMessageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={messageForm.message}
                    onChange={handleMessageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm resize-y"
                    placeholder="Type your message here..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-b from-amber-900 to-amber-700 dark:from-gray-900 dark:to-gray-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center dark:hover:from-gray-950 dark:hover:to-gray-800" // Added dark:hover styles
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Feedback Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-10 mt-10"
          >
            <motion.h3
              whileHover="hover"
              variants={bounceVariants}
              className="text-2xl font-bold text-amber-900 dark:text-white mb-6 flex items-center"
            >
              <Lightbulb className="w-7 h-7 mr-3 text-amber-700 dark:text-white" />
              Share Your Feedback
            </motion.h3>
            <motion.form
              variants={itemVariants}
              className="space-y-6"
              onSubmit={handleFeedbackSubmit}
            >
              <div>
                <label
                  htmlFor="feedbackName"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                  {/* Name (Optional) */}
                </label>
                <input
                  type="text"
                  id="feedbackName"
                  value={feedbackForm.feedbackName}
                  onChange={handleFeedbackChange}
                  className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="feedbackEmail"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                >
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="feedbackEmail"
                  value={feedbackForm.feedbackEmail}
                  onChange={handleFeedbackChange}
                  className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="feedbackMessage"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
                >
                  Your Feedback
                </label>
                <textarea
                  id="feedbackMessage"
                  rows="5"
                  value={feedbackForm.feedbackMessage}
                  onChange={handleFeedbackChange}
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm resize-y"
                  placeholder="Tell us what you think..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-b from-amber-900 to-amber-700 dark:from-gray-900 dark:to-gray-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-amber-800 hover:to-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center dark:hover:from-gray-950 dark:hover:to-gray-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Emergency Contact Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-10 mt-10"
          >
            <motion.h3
              whileHover="hover"
              variants={bounceVariants}
              className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center"
            >
              <AlertTriangle className="w-7 h-7 mr-3 text-red-600 dark:text-red-400" />
              Emergency Contact
            </motion.h3>
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800">
              <motion.p
                whileHover={{ x: 5 }}
                className="text-red-700 dark:text-red-300 font-semibold text-xl"
              >
                For medical emergencies, please call immediately:{" "}
                <span className="text-red-600 font-extrabold text-2xl">
                  (+251) 936640980
                </span>
              </motion.p>
              <p className="mt-3 text-red-600 dark:text-red-400">
                Available 24/7 for urgent medical assistance
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
