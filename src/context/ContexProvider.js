// ContextProviders

import { ThemeProvider } from '@/context/ThemeContext';
import { ServiceProvider } from '@/context/ServiceContext';
import { WeatherProvider } from '@/context/WeatherContext';

const ContextProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <ServiceProvider>
        <WeatherProvider>{children}</WeatherProvider>
      </ServiceProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
