import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './CardPokemonStyles'

interface CardPokemonProps {
    name: string,
    sprite: string
}

export default function CardPokemon({name, sprite}: CardPokemonProps) {
    return (
        <View style={styles.pokemonCard}>
            <Text style={styles.pokemonName}>{name}</Text>
            <Image source={{ uri: sprite }} style={styles.pokemonImage} />
        </View>
    );
}