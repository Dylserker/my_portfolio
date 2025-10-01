import React from 'react';

const PixelEffect: React.FC = () => (
    <div className="pixel-overlay">
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="pixel"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                }}
            />
        ))}
    </div>
);

export default PixelEffect;


