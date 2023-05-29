import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';

function App(): JSX.Element {
  const [listaPalabras, setListaPalabras] = useState<string[]>([]);
  const [letraBusqueda, setLetraBusqueda] = useState<string>('');

  const manejarCambioListaPalabras = (text: string) => {
    setListaPalabras(text.split(' '));
  };
  const manejarCambioLetraBusqueda = (text: string) => {
    setLetraBusqueda(text);
  };
  const contarPalabrasConLetra = (): string => {
    const cantidad = listaPalabras.filter(palabra =>
      palabra.includes(letraBusqueda),
    ).length;

    return cantidad.toString();
  };

  const mostrarMensaje = (mensaje: string) => {
    Alert.alert('Contador de Palabras', mensaje);
  };
  const muestraTexto = () => {
    mostrarMensaje('Gracias por Usar la App');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Palabras</Text>
      <Text style={styles.label}>
        Ingrese la Palabras (Separadas por Espacio)
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={manejarCambioListaPalabras}
      />
      <Text style={styles.label}>Ingrese una letra para Buscar: </Text>
      <TextInput
        style={styles.input}
        maxLength={1}
        onChangeText={manejarCambioLetraBusqueda}
      />
      <Text style={styles.result}>
        Numero de Palabras que contienen "{letraBusqueda}" :{' '}
        {letraBusqueda.length > 0
          ? contarPalabrasConLetra()
          : '☝️ Ingrese una letra a buscar arriba'}
      </Text>
      <Button
        mode="contained"
        onPress={muestraTexto}
        labelStyle={styles.button}>
        {' '}
        Tocame🥺
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
    width: '100%',
    color: '#222',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default App;
