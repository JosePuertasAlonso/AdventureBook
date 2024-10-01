import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Prueba = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Definir los items
  const items = [
    { id: 1, title: 'Item 1', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Item 2', subtitle: 'Subtitle 2' },
    { id: 3, title: 'Item 3', subtitle: 'Subtitle 3' }
  ];

  // Estilos en línea
  const itemStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const selectedStyle = {
    border: '2px solid #007BFF',
    padding: '30px',
    margin: '20px',
    borderRadius: '15px',
    backgroundColor: '#e0f7fa',
    cursor: 'pointer',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          style={itemStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

<AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} style={selectedStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {items
              .filter(item => item.id === selectedId)
              .map(item => (
                <div key={item.id}>
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    style={buttonStyle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Prueba;
