// import React from "react";
import {
  FaUserMd,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import ClinicGallery from "./ClinicGallery";
import LocationMap from "./LocationMap";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const scaleVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

function Home() {
  const iconColorClass = "text-amber-900 dark:text-white text-5xl mb-4";
  const contactIconColorClass = "text-amber-900 dark:text-white text-xl mt-1";
  const otherBranchIconColorClass =
    "text-amber-900 dark:text-white text-xl mr-3 mt-1";
  const buttonTextColorClass = "text-white dark:text-black";
  const buttonBgColorClass = "bg-amber-900 dark:bg-white";
  const buttonHoverBgColorClass = "hover:bg-amber-700 dark:hover:bg-gray-300";
  const headerTextColorClass = "text-amber-900 dark:text-white"; // Unified header color class

  return (
    <div className="min-h-screen font-sans ">
      {/* Hero Section*/}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <motion.h1
          whileHover="hover"
          variants={bounceVariants}
          className={` my-5 text-4xl sm:text-5xl font-bold m-6 ${headerTextColorClass}`}
        >
          Welcome to Dr.Saba Medium Clinic
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.03 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Providing Quality Healthcare Services Since 1995 with compassion,
          expertise, and modern care.
        </motion.p>
      </motion.section>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-gray-900 dark:bg-gray-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <motion.h2
            whileHover="hover"
            variants={bounceVariants}
            className={`text-3xl font-bold mb-4 ${headerTextColorClass}`}
          >
            What We Offer
          </motion.h2>
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            At Dr.Saba Medium Clinic, our mission is to deliver expert,
            compassionate, and round-the-clock healthcare.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3"
        >
          {[
            {
              icon: <FaUserMd className={iconColorClass} />,
              title: "Expert Doctors",
              desc: "Access to certified and experienced medical professionals.",
            },
            {
              icon: <FaClock className={iconColorClass} />,
              title: "24/7 Availability",
              desc: "Emergency services and care available around the clock.",
            },
            {
              icon: <FaEnvelope className={iconColorClass} />,
              title: "Quick Communication",
              desc: "Easily reach out to us via phone or email for support.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="rounded-xl p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1
        bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
            >
              <div className="flex justify-center align-center mb-4">
                {item.icon}
              </div>
              <motion.h3
                whileHover="hover"
                variants={bounceVariants}
                className={`flex justify-center align-center text-xl font-semibold mb-2 ${headerTextColorClass}`}
              >
                {item.title}
              </motion.h3>
              <motion.p whileHover={{ scale: 1.02 }} className="text-gray-600">
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Clinic Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            whileHover="hover"
            variants={bounceVariants}
            className={`text-3xl font-bold mb-4 ${headerTextColorClass}`}
          >
            Our Clinic
          </motion.h2>
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Take a virtual tour of our modern facility equipped with
            state-of-the-art medical equipment and comfortable amenities for
            patients.
          </motion.p>
          <ClinicGallery />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8  text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            whileHover="hover"
            variants={bounceVariants}
            className={`text-3xl font-bold mb-6 ${headerTextColorClass}`}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p whileHover={{ scale: 1.02 }} className="text-gray-600 mb-4">
            At Dr.Saba Medium Clinic, we are committed to providing the highest
            quality medical care to our patients. Our state-of-the-art facility
            and experienced medical professionals ensure the best treatment and
            care.
          </motion.p>
          <motion.p whileHover={{ scale: 1.02 }} className="text-gray-600">
            We offer a wide range of medical services, from routine check-ups to
            specialized treatments. Our patient-centered approach means we take
            the time to listen to your concerns and develop personalized
            treatment plans.
          </motion.p>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            whileHover="hover"
            className={`text-3xl font-bold text-center mb-4 ${headerTextColorClass}`}
          >
            Find Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            We are conveniently located in the heart of the city, easily
            accessible by public transportation.
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <LocationMap />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="lg:col-span-2 rounded-xl p-8 shadow-xl dark:shadow-2xl bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
            >
              <motion.h3
                whileHover="hover"
                variants={bounceVariants}
                className={`text-2xl font-semibold mb-6 ${headerTextColorClass}`}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
                >
                  <FaMapMarkerAlt className={contactIconColorClass} />
                  <strong className="font-semibold">Location:</strong>
                  <p className="text-gray-700">
                    Summit 20 meter, next to AJORA MCH CENTER.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
                >
                  <FaPhone className={contactIconColorClass} />

                  <strong className="font-semibold">Phone:</strong>
                  <a href="tel:+251936640980" className="block hover:underline">
                    (+251) 936640980
                  </a>
                  <span>or</span>
                  <a href="tel:+251970333383" className="block hover:underline">
                    (+251) 970333383
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
                >
                  <FaEnvelope className={contactIconColorClass} />
                  <strong className="font-semibold">Email:</strong>
                  <a
                    href="mailto:saba2009welde@gmail.com"
                    className="block hover:underline"
                  >
                    saba2009welde@gmail.com
                  </a>
                </motion.div>
              </div>

              <div className="mt-8">
                <motion.h4
                  whileHover="hover"
                  variants={bounceVariants}
                  className={`font-semibold mb-2 ${headerTextColorClass}`}
                >
                  Opening Hours:
                </motion.h4>
                <ul className="space-y-1 text-gray-700">
                  <motion.li whileHover={{ x: 5 }}>
                    Monday - Sunday: 24 Hours
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="font-semibold">
                    Emergency: 24/7
                  </motion.li>
                </ul>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // href="https://www.google.com/maps/place/Dr.Saba+Medium+Clinic"
                href="https://www.google.com/maps/place/Dr.+Saba+Medium+Clinic/@9.0138813,38.8519143,15z/data=!4m6!3m5!1s0x164b9b8cc6cddcb7:0x8fee929252dcac0b!8m2!3d9.0145092!4d38.8529577!16s%2Fg%2F11h_tcn80t?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-block ${buttonBgColorClass} ${buttonTextColorClass} px-6 py-2 rounded-lg ${buttonHoverBgColorClass} transition w-full text-center`}
              >
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Other Branch Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50  text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            whileHover="hover"
            variants={bounceVariants}
            className={`text-3xl font-bold mb-4 ${headerTextColorClass}`}
          >
            Other Branch
          </motion.h2>
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-600 mb-12 max-w-xl mx-auto"
          >
            Visit our additional location providing the same exceptional care.
          </motion.p>
          <motion.div
            whileHover="hover"
            variants={scaleVariants}
            className="rounded-2xl shadow-xl dark:shadow-2xl p-8 text-left max-w-2xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <motion.h3
              whileHover="hover"
              variants={bounceVariants}
              className={`text-2xl font-semibold mb-4 ${headerTextColorClass}`}
            >
              Uptown Branch
            </motion.h3>
            <div className="space-y-4">
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-700 flex items-start"
              >
                <FaMapMarkerAlt className={otherBranchIconColorClass} />
                behind Ayat Adebabay Station.
              </motion.p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
              >
                <FaPhone className={contactIconColorClass} />
                <p className="text-gray-700 text-center">
                  (+251)936640980 <br />
                  (+251)970333383
                </p>
              </motion.div>
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-700 flex items-center"
              >
                <FaEnvelope className={otherBranchIconColorClass} />
                sabawelde561@gmail.com
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
