import { motion } from "framer-motion";
import receptionImage from "../assets/clinicIMG/re.jpg";
import equipmentImage from "../assets/clinicIMG/Med-equ.jpg";
import laboratoryImage from "../assets/clinicIMG/lab1.jpg";
import examImage from "../assets/clinicIMG/Exa.jpg";

const clinicImages = [
  { src: receptionImage, alt: "Clinic reception area", title: "Reception" },
  { src: examImage, alt: "Patient examination area", title: "Examination" },
  { src: equipmentImage, alt: "Clinic laboratory room", title: "Laboratory" },
  { src: laboratoryImage, alt: "Diagnostic laboratory equipment", title: "Diagnostics" },
];

function ClinicGallery() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {clinicImages.map((image, index) => (
        <motion.figure
          key={image.title}
          variants={{
            hidden: { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0 round 20px)" },
            visible: {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0 round 20px)",
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={`group relative overflow-hidden rounded-[20px] ${
            index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-[0.88/1] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08213d]/90 to-transparent px-5 pb-5 pt-12 text-sm font-medium text-white">
            {image.title}
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}

export default ClinicGallery;
