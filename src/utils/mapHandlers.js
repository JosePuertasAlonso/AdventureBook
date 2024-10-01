// src/utils/mapHandlers.js

export const handleCountryClick = (geo, setZoneSelected, setIsZooming, setShowSpainMap, setOpenDialog) => {
    setZoneSelected(geo);
    if (geo.properties.name === 'España') {
      setIsZooming(true);
      setTimeout(() => {
        setShowSpainMap(true);
      }, 500); 
    }else{
      setOpenDialog(true);
    }
  };
  
  export const handleBackToWorld = (setShowSpainMap, setIsZooming) => {
    setTimeout(() => {  
      setShowSpainMap(false);
    }, 500); 
    setIsZooming(false);
  };
  
  export const closeDialog = (setOpenDialog) => {
    setOpenDialog(false);
  };
  