import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonPage } from './src/screens/PokemonPage/PokemonPage';
import { Pokemon } from './src/models/PokemonModel';


type RootStackParamList = {
  Home: undefined;
  PokemonPage: { pokemon: Pokemon }
}

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PokemonPage' component={PokemonPage}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

