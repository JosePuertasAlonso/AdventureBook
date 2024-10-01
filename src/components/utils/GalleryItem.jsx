import { motion } from "framer-motion";
import { AiOutlineDelete } from "react-icons/ai";

const GalleryItem = ({ image, openImageModal, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className="photography"
      style={{ rotate: isEven ? "-3deg" : "3deg" }}
      onClick={() => openImageModal(image)}
      whileHover={{ 
        scale: 1.1, 
        rotate: 0,
      }}
    >
      <motion.img
        src={image.url}
        alt={`Gallery image ${image.id}`}
      />
      <motion.h1>{image.title}</motion.h1>
    
    </motion.div>
  );
};

export default GalleryItem;
