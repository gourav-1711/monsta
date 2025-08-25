"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../product-details/[...id]/ProductDetails.module.css';

const ImageZoom = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ZOOM_STRENGTH = 3.5;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

    
  return (
    <div className={styles.zoomContainer}>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Base Image */}
        <div className={styles.baseImage}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Zoom Layer */}
        <div
          className={`${styles.zoomLayer} ${isZoomed ? styles.active : ''}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: `${ZOOM_STRENGTH * 200}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageZoom; 