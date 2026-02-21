import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>H3110 w0rld</Text>
      <StatusBar style="auto" />
      <Button
      title='Click Here!'
      color={'#ccc'}
      onPress={()=>alert("has clicked")}
      />
      <StatusBar style='auto' />
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
  title:{
    fontSize: 30,
    color: '#aaa'
  }
});
