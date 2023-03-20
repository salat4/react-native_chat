import axios from 'axios';
import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
const host = 'http://localhost:8800';

export const userRegister = async(username,email,password) =>{
    try {
        const response = await axios.post(`${host}/api/auth/register`, { username, email, password });
        // console.log(response.data);
        if(response.data.status){
          const jsonValue = JSON.stringify(response.data.user)
          Alert.alert(
            "Success!",
            `User ${user.username} was successfully created!`
          );
          await AsyncStorage.setItem('@user',data)

            return jsonValue
        //   await AsyncStorage.setItem('@user',jsonValue)
          
        }
       
      } catch (error) {
        Alert.alert("Error!", error.message);
      }
}
export const userLogin = async(username,password)=>{
    try {
        const response = await axios.post(`${host}/api/auth/login`, { username, password });
        if(response.data.status){
          const jsonValue = JSON.stringify(response.data.user)
          Alert.alert(
            "Success!",
            `User ${username} was successfully login!`
          );
          return jsonValue
        //   await AsyncStorage.setItem('@user',jsonValue)
          
        }
        else{
          Alert.alert(
            response.data.msg
          );
        }
        
    } catch (error) {
        Alert.alert("Error!", error.message);

    }
}