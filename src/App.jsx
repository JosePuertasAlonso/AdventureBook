import React, { useState } from 'react';
import WorldMap from './components/WorldMap';
import SpainMap from './components/SpainMap';
import Dialog from './components/Dialogs/Dialog';
import { motion, AnimatePresence } from 'framer-motion';
import AddPhoto from './components/Dialogs/AddPhoto';

import './App.css';

// Importa las funciones desde el archivo mapHandlers.js
import { handleCountryClick, handleBackToWorld, closeDialog } from './utils/mapHandlers';
import Cover from './components/Cover';

function App() {
  const [showCover, setShowCover] = useState(true); // Estado para controlar la portada
  const [showSpainMap, setShowSpainMap] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [zoneSelected, setZoneSelected] = useState(null);
  const [addPhoto, setAddPhoto] = useState(false);

  console.log(addPhoto);
  return (
    <div className="App">
      <AnimatePresence>
        {showCover && (
          <Cover setShowCover= {setShowCover}/>
        )}
      </AnimatePresence>

      {!showCover && (
        <>
          {showSpainMap ? (
            <div className={`map-container ${isZooming ? 'zoom-out' : ''}`}>
              <SpainMap handleBackToWorld={() => handleBackToWorld(setShowSpainMap, setIsZooming)} />
            </div>
          ) : (
            <div className={`map-container ${isZooming ? 'zoom-in' : ''}`}>
              <WorldMap
                onCountryClick={(geo) =>
                  handleCountryClick(geo, setZoneSelected, setIsZooming, setShowSpainMap, setOpenDialog)
                }
              />
            </div>
          )}
          <AnimatePresence>
            {openDialog && !addPhoto && (
              <Dialog zone={zoneSelected} closeDialog={() => closeDialog(setOpenDialog)} setAddPhoto={setAddPhoto} />
            )}
            {
              addPhoto && (
                <AddPhoto zone={zoneSelected} closeDialog={() => setAddPhoto(false)} />
              )
            }
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
