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

const clinicImages = [
  {
    id: 1,
    src: "clinicIMG/re.jpg",
    alt: "Modern clinic reception",
    title: "Reception Area",
  },
  {
    id: 2,
    src: "clinicIMG/Exa-2.jpg",
    alt: "Medical examination room",
    title: "Examination Room",
  },
  {
    id: 3,
    src: "clinicIMG/lab1.jpg",
    alt: "Medical lab equipment",
    title: "Laboratory",
  },
  {
    id: 4,
    src: "clinicIMG/Exa.jpg",
    alt: "Waiting area for patients",
    title: "Waiting Lounge",
  },
  {
    id: 5,
    src: "clinicIMG/nurse.jpg",
    alt: "Medical consultation room",
    title: "Consultation Room",
  },
  {
    id: 6,
    src: "clinicIMG/med-micro.jpg",
    alt: "Modern medical equipments",
    title: "Medical Equipments",
  },
];

const ClinicGallery = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {clinicImages.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <h3 className="text-white font-semibold text-xl p-4 w-full">
                {image.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ClinicGallery;

// const clinicImages = [
//   {
//     id: 1,
//     src: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
//     alt: "Modern clinic reception",
//     title: "Reception Area"
//   },
//   {
//     id: 2,
//     src: "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg",
//     alt: "Medical examination room",
//     title: "Examination Room"
//   },
//   {
//     id: 3,
//     src: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg",
//     alt: "Medical lab equipment",
//     title: "Laboratory"
//   },
//   {
//     id: 4,
//     src: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg",
//     alt: "Waiting area for patients",
//     title: "Waiting Lounge"
//   },
//   {
//     id: 5,
//     src: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
//     alt: "Medical consultation room",
//     title: "Consultation Room"
//   },
//   {
//     id: 6,
//     src: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg",
//     alt: "Modern medical equipment",
//     title: "Medical Equipment"
//   }
// ];

// const ClinicGallery = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {clinicImages.map((image) => (
//         <div
//           key={image.id}
//           className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
//         >
//           <div className="relative group">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
//               <h3 className="text-white font-semibold text-xl p-4 w-full">{image.title}</h3>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ClinicGallery;
