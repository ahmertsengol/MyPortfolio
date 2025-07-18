import { useState, useEffect } from 'react';
import MetallicPaint from './MetallicPaint';
import { parseLogoImage } from '../utils/parseLogoImage';
import { logger } from '../utils/logger';

const MetallicLogo: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function createLogoImage() {
      try {
        // Create SVG string for "AD" letters
        const svgString = `
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                .letter {
                  fill: black;
                  font-family: 'Inter', sans-serif;
                  font-weight: 900;
                  font-size: 200px;
                }
              </style>
            </defs>
            <rect width="400" height="400" fill="white"/>
            <text x="50" y="280" class="letter">A.D</text>
          </svg>
        `;

        // Convert SVG string to blob
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
        const file = new File([svgBlob], "logo.svg", { type: 'image/svg+xml' });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        logger.error("Error creating logo image:", err);
      }
    }

    createLogoImage();
  }, []);

  if (!imageData) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-2xl md:text-3xl">AD</span>
      </div>
    );
  }

  return (
    <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-xl">
      <MetallicPaint 
        imageData={imageData} 
        params={{ 
          edge: 1.2, 
          patternBlur: 0.006, 
          patternScale: 2.2, 
          refraction: 0.025, 
          speed: 0.15, 
          liquid: 0.08 
        }} 
      />
    </div>
  );
};

export default MetallicLogo; 