import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import ButtonAnimated from "../animated/ButtonAnimated";
import { storage, firestore } from "../../utils/firebase-config";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
import DeleteConfirmation from "./DeleteConfirmation";

const PhotoDetails = ({zone, closeDialog, image, setImages }) => {

    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setOpenDeleteConfirmation(true);
    };

    const handleCancelDelete = () => {
        setOpenDeleteConfirmation(false);
    };
    console.log(image);
    const handleDeleteImage = async () => {
        if (!image) return;
        const storageRef = ref(
          storage,
          image.url
        );
        console.log(storageRef);
        try {
          await deleteObject(storageRef);
          await deleteDoc(doc(firestore, "images", image.id));
      
          setImages((prevImages) => prevImages.filter((imagen) => imagen.id !== image.id));
        } catch (error) {
          console.log("Error eliminando la imagen:", error);
        } finally {
            closeDialog();
        }
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
          <motion.div
            style={{ display: "flex", alignItems: "center", marginLeft: "1em" }}
          >
            <motion.h1>Detalles del recuerdo</motion.h1>
          </motion.div>

          <ButtonAnimated
            text={"Cerrar"}
            onClick={closeDialog}
            bgColor={"#CF2A2A"}
            icon={<IoCloseSharp />}
          />
        </motion.div>
        <motion.div
          style={{ display: "flex", flexDirection: "row"}}
        >
          <motion.div
            style={{
              display: "flex",
              backgroundColor: "",
              width: "100vw",
              padding: "2em",
              position: "relative",
            justifyContent: "center",
            }}
          >
            <motion.div
              className="image-detail"
            >
            <motion.div
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "contain", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center", 
                width: "80%",
                height: "80%",
              }}
              />
              
            </motion.div>
          </motion.div>
          <motion.div
            style={{ width: "100vw", padding:"1em",  display: "flex", flexDirection: "column",
              justifyContent: "center"}}
          >
            <motion.h2>Título de la imagen</motion.h2>
            <motion.input
              type="text"
              value={image.title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "80%",
                padding: "0.5em",
                fontSize: "1.5em",
                backgroundColor: "rgb(248, 238, 227)",
                border: "rgb(80, 62, 40) 2px solid",
              }}
              disabled
            />
            <motion.h2>Descripción de la imagen</motion.h2>
            <motion.textarea
              value={image.description}
              onChange={(e) => setDescription(e.target.value)}
              disabled
              style={{
                width: "80%",
                padding: "0.5em",
                fontSize: "1.5em",
                height: "40%",
                backgroundColor: "rgb(248, 238, 227)",
                border: "rgb(80, 62, 40) 2px solid",
              }}
            />
            <motion.button
              onClick={handleDeleteClick}
              style={{
                marginTop: "1em",
                padding: "0.5em 1em",
                fontSize: "1.2em",
                backgroundColor: "rgb(80, 62, 40)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor:  "pointer",
                width: "85%",
              }}
              whileHover={{ 
                backgroundColor: "#6b594b",
            }}
            >
              Eliminar Imagen
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      {openDeleteConfirmation && (
        <DeleteConfirmation
          handleDelete={handleDeleteImage}
          handleCancel={handleCancelDelete}
        />
      )}
    </motion.div>
  );
};

export default PhotoDetails;
