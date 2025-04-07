import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
    gap: 10
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#333339',
    borderBottomWidth: 1,
    borderColor: '#ffffff'
  },
  pokemonName: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  pokemonImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  pokemonTypes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  pokemonType: {},
  pokemonInfo: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});