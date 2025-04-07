import React, { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, Pressable } from "react-native";

import { styles } from "./HomeStyles";
import { Header } from "../../components/Header/Header";
import { api } from "../../lib/axios";
import { Pokemon, PokemonTypes } from "../../models/PokemonModel";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation<any>();

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                setPokemonList([])
                for (let i = 1; i <= 151; i++) {
                    const response = await api.get(`${i}`)
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
                    setPokemonList(prevState => [...prevState, pokemonData]);
                }
                setIsLoading(false)
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
            <ScrollView >
                <View style={styles.pokemonList}>
                    {isLoading ? (

                        <ActivityIndicator size="large" />
                    ) : (
                        pokemonList.map((pokemon, index) => (
                            <Pressable key={index} onPress={() => {
                                navigation.navigate("PokemonPage", { pokemon })
                            }}>
                                <CardPokemon name={pokemon.name} sprite={pokemon.sprites.front_default} />
                            </Pressable>
                        ))
                    )
                    }
                </View>
            </ScrollView>
        </View>
    );
}