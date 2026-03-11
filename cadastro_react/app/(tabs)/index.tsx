import { Image } from 'expo-image';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/logo2.png')}
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
          placeholderTextColor="#fff"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
        />
       <TextInput
          placeholder="Telefone"
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
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 15,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 2,
   borderColor: '#334155'
  },

  buttonArea: {
    width: '50%',
    height: 55,
    borderBottomWidth: 8,
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