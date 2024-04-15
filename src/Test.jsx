import React from 'react';

interface AgeProps {
  age?: number; // Optional prop
}

const Age: React.FC<AgeProps> = ({ age = 18 }) => {
  return (
    <div>Votre age: {age}</div>
  );
};

export default Age;
