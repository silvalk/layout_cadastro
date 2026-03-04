import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { View, Text, TextInput, Button,} from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
    
        style={styles.logo}
      />

      <Text style={styles.title}>Criar Conta</Text>

      <View style={styles.form}>

        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#fff"
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="fff"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
        />

      </View>

      <View style={styles.buttonArea}>
        <Button title="Cadastrar" onPress={() => {}} />
      </View>

      <Text style={styles.footer}>
        Já possui conta? Entrar
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 25
  },

  form: {
    width: '100%',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#0000',
    color: '#fff',
    padding: 15,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#F0F8FF',
    overflow: 'hidden'
  },

  buttonArea: {
    width: '50%',
    borderBottomWidth: 8,
    height: '60%',
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 15,
    justifyContent: 'center'
  },

  footer: {
    color: '#94a3b8',
    fontSize: 14
  }

});