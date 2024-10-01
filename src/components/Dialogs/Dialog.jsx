import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import FileUpload from "../fileUpload";
import DeleteConfirmation from "./DeleteConfirmation";
import { storage, firestore } from "../../utils/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { motion } from "framer-motion";
import ButtonAnimated from "../animated/ButtonAnimated";
import GalleryItem from "../utils/GalleryItem";
import PhotoDetails from "./PhotoDetails";

const Dialog = ({ zone, closeDialog, setAddPhoto  }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (zone && zone.properties) {
        const q = query(
          collection(firestore, "images"),
          where("country", "==", zone.properties.name)
        );
        const querySnapshot = await getDocs(q);
        const fetchedImages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().url,
          title: doc.data().title,
          description: doc.data().description,
          country: doc.data().country,
        }));
        setImages(fetchedImages);
        console.log('CONSULTANDO IMAGENES');
      }
    };
  
    fetchImages();
  }, [zone]);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleDeleteClick = (image) => {
    setImageToDelete({ id: imageId, url: imageUrl });
    setOpenDeleteConfirmation(true);
  };

  return (
    <motion.div className="overlay">
      <motion.div
        layoutId={zone}
        className="zone-dialog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="dialog-header">
          <motion.div style={{ display: "flex", alignItems: "center", marginLeft:"1em" }}>
            <motion.h1>{zone.properties.name}</motion.h1>
            <FileUpload country={zone.properties.name} setAddPhoto={setAddPhoto} />
          </motion.div>
          <ButtonAnimated text={'Cerrar'} onClick={closeDialog} bgColor={'#CF2A2A'} icon={<IoCloseSharp/>}/>
        </motion.div>
        {images.length === 0 && (
          <motion.div style={{display:'flex', alignItems:"center", justifyContent:"center", height:'40em' }}>
            <motion.h2>No hay imágenes en esta zona</motion.h2>
          </motion.div>
        )}
        {
          images.length > 0 && (
            <motion.div className="image-gallery">
              {images.map((image,index) => (
                <GalleryItem key={image.id} image={image} openImageModal={openImageModal} index={index}/>
              ))}
            </motion.div>
          )
        }
      </motion.div>
      {selectedImage && (
        <PhotoDetails zone={zone}  closeDialog={closeImageModal} image={selectedImage} setImages={setImages} />
      )}
    </motion.div>
  );
};

export default Dialog;
