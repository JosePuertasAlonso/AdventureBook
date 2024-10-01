const oldMapColors = [
    "#d2b48c", 
    "#c19a6b", 
    "#b38b6d", 
    "#9b7653", 
    "#8b5e3c", 
  ];
export const getRandomOldMapColor = () => {
    return oldMapColors[Math.floor(Math.random() * oldMapColors.length)];
  };
