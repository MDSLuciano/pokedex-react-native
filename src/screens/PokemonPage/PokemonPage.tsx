import React from 'react';
import { View } from 'react-native';

import { styles } from './PokemonPageStyles';
import { Header } from '../../components/Header/Header';

export function PokemonPage() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header />
        </View>
    </View>
  );
}