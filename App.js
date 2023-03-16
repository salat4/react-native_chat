import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';
export default function App() {
  

const SERVER_URL = 'http://localhost:5000';

const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${SERVER_URL}/send`, { message });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(()=>{
  // sendMessage()
  axios.post('http://localhost:5000/users', { name: 'John Doe' })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
},[])
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
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
});
