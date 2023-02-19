// ServiceContext
import { createContext, useState } from 'react';

const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceValue = {
    error,
    setError,
    loading,
    setLoading,
  };

  return (
    <ServiceContext.Provider value={serviceValue}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
