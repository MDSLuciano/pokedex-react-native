import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './PokemonPageStyles';
import { Header } from '../../components/Header/Header';
import { Pokemon } from '../../models/PokemonModel';
import { RouteProp } from '@react-navigation/native';
import PokemonTypeColors from '../../utils/color';

type RootStackParamList = {
  PokemonPage: { pokemon: Pokemon };
}

type PokemonPageRouteProp = RouteProp<RootStackParamList, "PokemonPage">;

interface Props{
  route: PokemonPageRouteProp;
}

export function PokemonPage({route}: Props) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header />
        </View>
        {pokemon.id && (
          <>
            <Text style={styles.pokemonName}>
              {pokemon.id} - {pokemon.name}
            </Text>
            <Image source={{ uri: pokemon.sprites.front_default }} style={styles.pokemonImage} />
            <View style={styles.pokemonTypes}>
              {pokemon.types &&
                pokemon.types.map((type, index) =>(
                  <Text key={index} style={[styles.pokemonType, { backgroundColor: PokemonTypeColors[type.type.name] || "#777" }]}>
                    {type.type.name}
                  </Text>
                ))
              }
            </View>

            <Text style={styles.pokemonInfo}>Peso: {pokemon.weight / 10}kg - Altura: {pokemon.height / 10} metros</Text>

          </>
        )}
    </View>
  );
}