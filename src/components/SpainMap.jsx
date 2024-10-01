// src/components/SpainMap.js
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Dialog from "./Dialogs/Dialog";
import { motion } from "framer-motion";
const geoUrl = "/spain-provinces.geojson";
import { closeDialog } from '../utils/mapHandlers';
import {getRandomOldMapColor} from "../utils/colors";
import { IoIosArrowBack } from "react-icons/io";

const SpainMap = ({ handleBackToWorld }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [zoneSelected, setZoneSelected] = React.useState(null);
  return (
    <div className="spain-map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ 
          scale: 2500, 
          center: [-3, 40] 
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fillColor = getRandomOldMapColor();
              return (
                <Geography
                  className="zona"
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    setZoneSelected(geo);
                    setOpenDialog(true);
                  }}
                  style={{
                    default: {
                      fill: fillColor,
                      outline: "none",
                      stroke: "#503e28",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#503e28",
                      outline: "none",
                      stroke: "none",
                    },
                    pressed: {
                      fill: "#6c8699",
                      outline: "none",
                      stroke: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <motion.button 
        onClick={handleBackToWorld} 
        className="back-button"
        whileHover={{ scale: 1.05 }}
        >
        <IoIosArrowBack />
        Volver
      </motion.button>
      {openDialog && 
        <Dialog zone={zoneSelected} closeDialog={() => closeDialog(setOpenDialog)} />
      }
    </div>
  );
};

export default SpainMap;
