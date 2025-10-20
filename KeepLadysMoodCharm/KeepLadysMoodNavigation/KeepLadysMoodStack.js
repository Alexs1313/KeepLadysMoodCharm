import { createStackNavigator } from '@react-navigation/stack';
import KeepLadysMoodCharmEntry from '../KeepLadysMoodCharmScreens/KeepLadysMoodCharmEntry';
import KeepLadysMoodHome from '../KeepLadysMoodCharmScreens/KeepLadysMoodHome';
import KeepLadysMoodAccount from '../KeepLadysMoodCharmScreens/KeepLadysMoodAccount';
import KeepLadysMoodAbout from '../KeepLadysMoodCharmScreens/KeepLadysMoodAbout';
import KeepLadysMoodSettings from '../KeepLadysMoodCharmScreens/KeepLadysMoodSettings';
import KeepLadysMoodCreateMemory from '../KeepLadysMoodCharmScreens/KeepLadysMoodCreateMemory';
import KeepLadysMoodCharmMemoriesList from '../KeepLadysMoodCharmScreens/KeepLadysMoodCharmMemoriesList';
import KeepLadysMoodCreateMemoryDetails from '../KeepLadysMoodCharmScreens/KeepLadysMoodCreateMemoryDetails';

const Stack = createStackNavigator();

const KeepLadysMoodStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="KeepLadysMoodCharmEntry"
        component={KeepLadysMoodCharmEntry}
      />
      <Stack.Screen name="KeepLadysMoodHome" component={KeepLadysMoodHome} />
      <Stack.Screen
        name="KeepLadysMoodAccount"
        component={KeepLadysMoodAccount}
      />
      <Stack.Screen name="KeepLadysMoodAbout" component={KeepLadysMoodAbout} />
      <Stack.Screen
        name="KeepLadysMoodSettings"
        component={KeepLadysMoodSettings}
      />
      <Stack.Screen
        name="KeepLadysMoodCreateMemory"
        component={KeepLadysMoodCreateMemory}
      />
      <Stack.Screen
        name="KeepLadysMoodCharmMemoriesList"
        component={KeepLadysMoodCharmMemoriesList}
      />
      <Stack.Screen
        name="KeepLadysMoodCreateMemoryDetails"
        component={KeepLadysMoodCreateMemoryDetails}
      />
    </Stack.Navigator>
  );
};

export default KeepLadysMoodStack;
