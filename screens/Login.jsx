import {  Button, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userLogin } from "../Fetch/FetchUser";
const Login = ({ navigation }) => {
  const [user,setUser] = useState({
    password:'',
    username:''
  })
const SignIn = async (username, password) => {
   const data = await userLogin(username, password)
  //  console.log(data)
  //  navigation.navigate('HomePage'); // перехід на іншу сторінку з назвою "HomePage"
};

  return (
    <>
      <TextInput
        style={styles.input}
        value={user.username}
        placeholder={"Username"}
        onChangeText={(text) => setUser((prev)=>
          ({
          password:prev.password,
          username:text
        })
        )}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={user.password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setUser((prev)=>
          ({
          password:text,
          username:prev.username
        })
        )}      
      />
      <Button title={"Sign In"} onPress={() => SignIn(user.username, user.password)} />
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
})