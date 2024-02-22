import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Terceiro info 2024 👌</Text>
      <Text style={styles.negrito}>Etec professor Milton gazzeti</Text>
      <Text style={styles.italic}>Desenvolvimento para dispositivos moveis</Text> 
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  negrito: {
   fontWeight: 'bold',
  },
  italic: {
    fontWeight: 'italic',
  },
});
