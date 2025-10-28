import {
  HeartPulse,
  Stethoscope,
  Syringe,
  Microscope,
  ScanLine,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
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

const icons = [
  HeartPulse,
  Stethoscope,
  Syringe,
  Microscope,
  ScanLine,
  ShieldCheck,
  FileText,
  HeartPulse,
  Stethoscope,
  Syringe,
  Microscope,
  ScanLine,
  ShieldCheck,
  FileText,
  Stethoscope,
];

function Services() {
  const allServices = [
    {
      title: "General Adult & Child Health Service",
      description:
        "Comprehensive care for both adults and children, covering a wide range of health needs.",
    },
    {
      title: "Laboratory Service",
      description:
        "Full-service medical laboratory offering a wide range of diagnostic tests.",
    },
    {
      title: "Emergency Service",
      description:
        "Immediate care for urgent and life-threatening medical conditions.",
    },
    {
      title: "Minor Surgery Service",
      description:
        "Outpatient surgical procedures performed safely and efficiently.",
    },
    {
      title: "ANC Service",
      description:
        "Antenatal care services to monitor and ensure the health of mother and baby during pregnancy.",
    },
    {
      title: "Family Planning Service",
      description:
        "Personalized contraceptive counseling and services for reproductive health.",
    },
    {
      title: "Diabetes Mellitus & Hypertension",
      description:
        "Diagnosis, treatment, and management of diabetes and high blood pressure.",
    },
    {
      title: "Gouty Arthritis & Dyslipidemia Dx & Px",
      description:
        "Evaluation and management of joint pain and abnormal cholesterol levels.",
    },
    {
      title: "Cardiac & Lung Exam & Rx",
      description:
        "Assessment and treatment for cardiovascular and respiratory conditions.",
    },
    {
      title: "Renal & Liver Function Test",
      description: "Testing to evaluate kidney and liver health and function.",
    },
    {
      title: "H. pylori Dx & Rx",
      description: "Testing and treatment for Helicobacter pylori infection.",
    },
    {
      title: "STI Dx & Rx",
      description:
        "Screening, diagnosis, and treatment of sexually transmitted infections.",
    },
    {
      title: "Medical Certificate",
      description:
        "Health certification for driving licenses and employment purposes.",
    },
    {
      title: "General Screening & Counseling Services",
      description: "Preventive screenings and professional health counseling.",
    },
    {
      title: "Ultrasound Service",
      description:
        "Diagnostic imaging services using state-of-the-art ultrasound equipment.",
    },
    {
      title: "Special Dermatologic Service",
      description:
        "By senior dermatologist for advanced skin care and treatment.",
    },
  ];

  const specialService = allServices.find(
    (service) => service.title === "Special Dermatologic Service"
  );
  const otherServices = allServices.filter(
    (service) => service.title !== "Special Dermatologic Service"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto my-5 px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-5xl font-extrabold text-amber-900 text-center dark:text-white m-16 drop-shadow-lg"
        >
          Our Services
        </motion.h1>

        {specialService && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="w-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group
                         bg-amber-50 dark:bg-amber-100 border-2 border-amber-500"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="p-3 rounded-full bg-amber-200 text-amber-800 dark:bg-amber-700 dark:text-white"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <h3 className="ml-4 text-xl font-semibold text-amber-900 dark:text-amber-900 group-hover:text-amber-700">
                  {specialService.title}
                </h3>
              </div>
              <p className="leading-relaxed text-amber-800 dark:text-amber-900">
                {specialService.description}
              </p>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {otherServices.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-700 dark:bg-opacity-25 text-amber-700 dark:text-white rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-amber-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-gray-200">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;
