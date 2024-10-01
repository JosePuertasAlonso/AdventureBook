import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import {getRandomOldMapColor} from "../utils/colors";
const geoUrl = "/features.json";




const WorldMap = ({ onCountryClick }) => {
  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ 
          scale: 130, 
          center: [-3, 40] 
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fillColor = getRandomOldMapColor(); // Color aleatorio para cada región
              return (
                <Geography
                  className="zona"
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (onCountryClick) {
                      onCountryClick(geo);
                    }
                  }}
                  style={{
                    default: {
                      fill: fillColor, // Colores envejecidos variables
                      outline: "none",
                      stroke: "#503e28", // Bordes grises para estilo antiguo
                      strokeWidth: 0.5, 
                    },
                    hover: {
                      fill: "#503e28", // Color en hover
                      outline: "none",
                      stroke: "none", 
                    },
                    pressed: {
                      fill: "#6c8699", // Color al presionar
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
    </div>
  );
};

export default WorldMap;
