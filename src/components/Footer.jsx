import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { isDark } = useTheme();

  const footerVariants = {
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

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className={`py-12 ${
        isDark
          ? "bg-gray-900/95 backdrop-blur-md"
          : "bg-amber-950/95 backdrop-blur-md"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Clinic Section */}
          <motion.div variants={itemVariants}>
            {/* Make the font size responsive */}
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Dr.Saba Medium Clinic
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Providing trusted healthcare services since 1995. Committed to
              quality care and patient satisfaction with modern facilities and
              expert doctors.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            {/* Make the font size responsive */}
            <h3 className="text-xl md:text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className={`text-gray-300 hover:text-amber-300 transition-colors flex items-center text-sm md:text-base`}
                  >
                    <span className="w-2 h-2 bg-amber-300 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div variants={itemVariants}>
            {/* Make the font size responsive */}
            <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start text-sm md:text-base"
              >
                <FaMapMarkerAlt className="text-amber-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Summit 20 meter, next to AJORA MCH CENTER.
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center text-sm md:text-base"
              >
                <FaPhone className="text-amber-300 mr-3" />
                <span className="text-gray-300">
                  (+251) 936640980 <br /> (+251) 970333383
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center text-sm md:text-base"
              >
                <FaEnvelope className="text-amber-300 mr-3" />
                <span className="text-gray-300">saba2009welde@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants}>
            {/* Make the font size responsive */}
            <h3 className="text-xl md:text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-300 text-xl"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            {/* Make the font size responsive */}
            <p className="text-gray-400 text-xs md:text-sm">
              Open 24/7 for emergency services
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          {/* Make the font size responsive */}
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} Dr.Saba Medium Clinic. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
