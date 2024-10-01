import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import ButtonAnimated from "../animated/ButtonAnimated";
import { AiOutlineDelete } from "react-icons/ai";
import { storage, firestore } from "../../utils/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const AddPhoto = ({ zone, closeDialog }) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 

  const handleChange = (event) => {
    if (event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      
      const url = URL.createObjectURL(selectedFile);
      setImageURL(url);
    }
  };

  const handleCancelImage = () => {
    setFile(null);
    setImageURL(null);
  };

  const handleClickUpload = () => {
    fileInputRef.current.click(); 
  };

  const handleUpload = async () => {
    if (!file || !title || !description) {
        alert("Por favor, selecciona una imagen y completa el título y la descripción.");
        return;
    }

  
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setIsUploading(true);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // Aquí podrías mostrar el progreso si lo deseas
        },
        (error) => {
            console.error("Error al subir archivo:", error);
            setIsUploading(false);
        },
        async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await addDoc(collection(firestore, "images"), {
                    url: downloadURL,
                    title: title, // Asegúrate de incluir el título
                    description: description, // Asegúrate de incluir la descripción
                    country: zone.properties.name, // Incluye la zona
             });


            setIsUploading(false);
            setFile(null);
            setImageURL(null);
            setTitle("");
            setDescription("");
            closeDialog(); // Cierra el diálogo después de subir la imagen
        }
    );
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
            <motion.h1>Añade un recuerdo a la aventura</motion.h1>
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
              alignItems: "center",
              backgroundColor: "",
              width: "100vw",
              padding: "2em",
              position: "relative",
            }}
          >
            <input
              type="file"
              onChange={handleChange}
              style={{ display: "none" }}
              id="file-upload"
              ref={fileInputRef}
            />
            <motion.div
              className="image-picker"
              onClick={!imageURL ?handleClickUpload : null}
            >
              {!imageURL ? <motion.h2>Selecciona una imagen</motion.h2>
              : 
              <motion.div
              style={{
                backgroundImage: `url(${imageURL})`,
                backgroundSize: "contain", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center", 
                width: "80%",
                height: "80%",
              }}
              >
               <motion.button
                className="delete-button"
                onClick={() => handleCancelImage()}
              >
                <AiOutlineDelete className="icon" />
              </motion.button>
              </motion.div>
              }      
            </motion.div>
          </motion.div>
          <motion.div
            style={{ width: "100vw", padding:"1em",  display: "flex", flexDirection: "column",
              justifyContent: "center"}}
          >
                        <motion.h2>Título del recuerdo</motion.h2>
            <motion.input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "80%",
                padding: "0.5em",
                fontSize: "1.5em",
                backgroundColor: "rgb(248, 238, 227)",
                border: "rgb(80, 62, 40) 2px solid",
              }}
            />
            <motion.h2>Descripción del recuerdo</motion.h2>
            <motion.textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onClick={handleUpload}
              disabled={isUploading}
              style={{
                marginTop: "1em",
                padding: "0.5em 1em",
                fontSize: "1.2em",
                backgroundColor: "rgb(80, 62, 40)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: isUploading ? "not-allowed" : "pointer",
                width: "80%",
              }}
            >
              {isUploading ? "Subiendo..." : "Subir recuerdo"}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AddPhoto;
