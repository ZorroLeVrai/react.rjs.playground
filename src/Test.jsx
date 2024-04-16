import React, { forwardRef, useRef, useEffect } from 'react';

// Composant fonctionnel qui accepte un ref
const MyComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Fait quelque chose avec le ref transmis par le parent
    if (ref) {
      ref.current = inputRef.current;
    }
  }, [ref]);

  return <input ref={inputRef} />;
});

// Composant parent
const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus sur l'input quand le composant est monté
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <MyComponent ref={inputRef} />;
};

export default App;
