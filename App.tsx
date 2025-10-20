import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import KeepLadysMoodStack from './KeepLadysMoodCharm/KeepLadysMoodNavigation/KeepLadysMoodStack';
import { ContextProvider } from './KeepLadysMoodCharm/KeepLadysMoodCharmStore/keepLadysMoodCharmContext';
import KeepLadysMoodCharmLoader from './KeepLadysMoodCharm/KeepLadysMoodComponents/KeepLadysMoodCharmLoader';

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
          <KeepLadysMoodStack />
        ) : (
          <KeepLadysMoodCharmLoader />
        )}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
