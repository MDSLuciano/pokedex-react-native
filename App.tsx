import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonPage } from './src/screens/PokemonPage/PokemonPage';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PokemonPage' component={PokemonPage}/>
      </Stack.Navigator>
      <Home />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

