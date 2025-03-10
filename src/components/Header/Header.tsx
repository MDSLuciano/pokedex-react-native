import React from 'react';
import { Image } from 'react-native';

import { styles } from './HeaderStyles';

export function Header() {
  return (
    <Image source={require("../../../assets/logo-pokemon.png")} style={styles.logo} />
  );
}