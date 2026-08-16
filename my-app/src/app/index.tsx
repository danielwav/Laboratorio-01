import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Desarrollo de Aplicaciones Móviles
      </Text>

      <Text style={styles.mensaje}>
        Bienvenido a mi primera App en React Native:D
      </Text>

      <Text style={styles.autor}>
        Autor: Paredes Paredes César Augusto Daniel
      </Text>

      <Text style={styles.detalle}>
        Proyecto creado con Expo
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  mensaje: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },

  autor: {
    fontSize: 15,
    marginBottom: 6,
    textAlign: 'center',
  },

  detalle: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },
});