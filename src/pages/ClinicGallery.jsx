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
    <div
      data-motion-gallery
      className="grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {clinicImages.map((image) => (
        <figure
          key={image.title}
          className="cinematic-gallery-card relative overflow-hidden rounded-[20px]"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="cinematic-gallery-image aspect-[0.88/1] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08213d]/90 to-transparent px-5 pb-5 pt-12 text-sm font-medium text-white">
            {image.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ClinicGallery;
