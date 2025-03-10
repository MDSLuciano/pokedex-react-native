import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { styles } from "./HomeStyles";
import { Header } from "../../components/Header/Header";
import { api } from "../../lib/axios";
import { Pokemon, PokemonTypes } from "../../models/PokemonModel";

export function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('1')
                const pokemonData: Pokemon = {
                    id: response.data.id,
                    name: response.data.name,
                    height: response.data.height,
                    weight: response.data.weight,
                    sprites: {
                        front_default: response.data.sprites.front_default,
                        front_shiny: response.data.sprites.front_shiny
                    },
                    types: response.data.types.map((type: PokemonTypes) => ({
                        slot: type.slot,
                        type: {
                            name: type.type.name
                        }
                    }))
                }

                console.log(pokemonData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
        </View>
    );
}