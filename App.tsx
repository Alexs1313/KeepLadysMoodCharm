import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Keepladysmoodstack from './keepladysmoodSrc/keepladysmoodnv/Keepladysmoodstack';
import { ContextProvider } from './keepladysmoodSrc/keepladysmoodst/keepLadysMoodCharmContext';
import KeepLadysMoodCharmLoader from './keepladysmoodSrc/keepladysmoodcmp/KeepLadysMoodCharmLoader';

const App = () => {
  const [showCharmWelcomeScreen, setShowCharmWelcomeScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCharmWelcomeScreen(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {showCharmWelcomeScreen ? (
          <Keepladysmoodstack />
        ) : (
          <KeepLadysMoodCharmLoader />
        )}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
