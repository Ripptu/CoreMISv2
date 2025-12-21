import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // delay in ms
}

export const RevealOnScroll: React.FC<RevealProps> = ({ children, width = '100%', delay = 0 }) => {
  return (
    <div style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1.0, 
          delay: delay / 1000, 
          ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier matching the calm aesthetic
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};