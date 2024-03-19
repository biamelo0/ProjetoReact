import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style = {styles.container}
      source={{uri:'https://img.freepik.com/fotos-premium/gatinho-fofo-rindo-pequeno-gato-domestico-bocejando-ou-sorrindo-ia-generativa_116953-2823.jpg'}}
      
      />

 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
