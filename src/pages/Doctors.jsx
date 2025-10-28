import { motion } from "framer-motion";

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

function Doctors() {
  const doctors = [
    {
      name: "Dr. Saba W/gebriel",
      specialty: "General Medicine",
      experience: "15 years",
      education: "MD, Hayate Medical School",
    },
    {
      name: "Dr. Kassahune Mamo",
      specialty: "Cardiology",
      experience: "12 years",
      education: "MD, Johns Hopkins University",
    },
    {
      name: "Dr. Moges",
      specialty: "Pediatrics",
      experience: "10 years",
      education: "MD, Stanford University",
    },
    {
      name: "Dr. Henok Asfa",
      specialty: "Orthopedics",
      experience: "20 years",
      education: "MD, Yale University",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto my-10 px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" my-20 text-5xl font-extrabold text-amber-900 text-center dark:text-white mb-16 drop-shadow-lg "
        >
          Our Medical Team
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2 text-center dark:text-white">
                {doctor.name}
              </h3>
              <p className="text-amber-700 dark:text-blue-400 text-center mb-2">
                {doctor.specialty}
              </p>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                <p className="mb-1">Experience: {doctor.experience}</p>
                {/* <p>Education: {doctor.education}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Start of new addition with card styling --- */}
        <div className="bg-amber-900/25 mt-16 text-center max-w-2xl mx-auto border border-gray-500 dark:border-gray-700  dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className=" text-lg text-gray-700/80 dark:text-gray-300">
            Our team of doctors, with experience ranging from 10 to 20 years, is
            dedicated to providing high-quality care. Each of our specialists
            brings a wealth of knowledge and expertise to ensure you receive the
            best possible treatment.
          </p>
        </div>
        {/* --- End of new addition --- */}
      </div>
    </motion.div>
  );
}

export default Doctors;
