import React from 'react';
import { motion } from 'framer-motion';

function HeroGear() {
  return (
    <motion.div>

      <svg viewBox="0 0 665 665" fill="none" xmlns="http://www.w3.org/2000/svg">

        <motion.path
          animate={{
            rotate: -360,
            transition: {
              duration: 50,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'mirror',
            },

          }}
          d="M665 377.277V287.723C619.254 271.459 590.354 266.887 575.807 231.78C561.205 196.563 578.578 172.623 599.276 129.038L535.962 65.7242C492.71 86.2838 468.548 103.823 433.248 89.1931C398.086 74.6185 393.458 45.5248 377.277 0H287.723C271.597 45.3031 266.97 74.5908 231.78 89.1931C196.563 103.823 172.678 86.4777 129.038 65.7242L65.7242 129.038C86.3669 172.484 103.823 196.48 89.1931 231.753C74.5908 266.97 45.3031 271.597 0 287.723V377.277C45.22 393.348 74.5908 398.03 89.1931 433.22C103.879 468.742 86.0344 493.236 65.7242 535.935L129.038 599.276C172.318 578.689 196.48 561.177 231.753 575.807C266.942 590.381 271.569 619.558 287.723 665H377.277C393.403 619.669 398.058 590.465 433.441 575.724H433.469C468.437 561.205 492.211 578.522 535.935 599.304L599.248 535.962C578.633 492.654 561.149 468.548 575.751 433.275C590.354 398.058 619.752 393.375 665 377.277ZM332.5 443.333C271.292 443.333 221.667 393.708 221.667 332.5C221.667 271.292 271.292 221.667 332.5 221.667C393.708 221.667 443.333 271.292 443.333 332.5C443.333 393.708 393.708 443.333 332.5 443.333Z"
          fill="#0079BC"
        />

      </svg>

    </motion.div>
  );
}

export default HeroGear;
