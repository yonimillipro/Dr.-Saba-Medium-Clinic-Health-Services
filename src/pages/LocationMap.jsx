import { motion } from "framer-motion";

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.546176852515!2d38.85009213171017!3d9.013838148833596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b8cc6cddcb7%3A0x8fee929252dcac0b!2sDr.%20Saba%20Medium%20Clinic!5e0!3m2!1sen!2set!4v1747591073816!5m2!1sen!2set"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Dr.Saba Medium Clinic Location"
        allowFullScreen
      />
    </motion.div>
  );
};

export default LocationMap;
