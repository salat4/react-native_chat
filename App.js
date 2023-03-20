import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Button} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/Login'
import Main from './screens/Main'
import Registration from './screens/Registration'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [userData, setUserData] = useState(null);

  const Stack = createNativeStackNavigator();

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@user');
    } catch (e) {
      // remove error
    }
  };

  useEffect(() => {
    // removeValue()
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      return jsonValue !== null && jsonValue !== "null" ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.error(e);
      return null;
    }
  };

  useEffect(() => {
    getData().then((data) => {
      setUserData(data); // зберігаємо значення в стані
    }).catch((error) => {
      console.error(error);
      setUserData(null); // у випадку помилки, також зберігаємо null
    });
  });

  useEffect(()=>{
    console.log(userData,'userData')
  })
  // console.log(userData, "userData");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData === null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            component={Main}
            options={{
              title: "Chat",
              headerLeft: null,
              headerRight: () => (
                <Button
                  onPress={async () => {
                    try {
                      await AsyncStorage.removeItem('@user');
                      setUserData(null);
                    } catch (e) {
                      console.error(e);
                    }
                  }}
                  title="Logout"
                />
              )
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
