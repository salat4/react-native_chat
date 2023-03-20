import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Main = () => {
  // console.log(initialParams,"init")
  const [userData,setUserData] = useState()

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user')
      return jsonValue !== null && jsonValue !== "null" ?  JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.error(e)
      return null;
    }
  }
  useEffect(()=>{
    getData().then((data) => {
      setUserData(data); // зберігаємо значення в стані
    }).catch((error) => {
      console.error(error);
      setUserData(null); // у випадку помилки, також зберігаємо null
    });
  },[]);
  // useEffect(()=>{
  //   if(userData === null){
  //     navigation.navigate('Registration')
  //   }
  // })
  // console.log(userData)
  return (
    <View>
      <Text>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})