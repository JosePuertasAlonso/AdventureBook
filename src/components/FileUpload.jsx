import React, { useState, useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { storage, firestore } from "../utils/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import ButtonAnimated from "./animated/ButtonAnimated";

const FileUpload = ({ country, onImageUploaded, setAddPhoto }) => {
  const openAddPhoto = () => {
    console.log(setAddPhoto);
    setAddPhoto(true);
  };

  return (
    <div className="file-upload" style={{ marginLeft: "1em" }}>
      <ButtonAnimated
        htmlFor="file-upload"
        text={"Subir Foto"}
        onClick={openAddPhoto}
        bgColor={"#e6e6e6"}
        fontColor="black"
        icon={<IoIosAdd />}
      />
    </div>
  );

/*
  return (
    <div className="file-upload" style={{ marginLeft: "1em" }}>
      <input
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
        id="file-upload"
        ref={fileInputRef}
      />
      <ButtonAnimated
        htmlFor="file-upload"
        text={"Subir Foto"}
        onClick={handleClickUpload}
        bgColor={"#e6e6e6"}
        fontColor="black"
        icon={<IoIosAdd />}
      />

      {isUploading && <progress value={uploadValue} max="100" />}
    </div>
  );*/
};

export default FileUpload;
