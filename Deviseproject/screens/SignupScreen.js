import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Button , Input} from 'react-native-elements';
import firebase from '../firebase/fire';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const signUp= async()=>{
        try {
         firebase.auth().createUserWithEmailAndPassword(email,password);
            navigation.navigate('signin')
        } catch (err) {
            setError(err.message);
        }

    }

    return (
       
        <>
            <Input
            label="Email" 
            value={email}
            onChangeText={setEmail}
            />
             <Input
            label="Password"
            value={password}
            onChangeText={setPassword} 
            secureTextEntry
            />

            {
                error?
                <Text style={{color:'red'}}>{error}</Text>
                : null
            }

            <Button 
            title="SignUp"
            onPress={() => signUp() } />            
       
        <TouchableOpacity onPress={()=> navigation.navigate('signin')}>
            <Text>Already have an account? Sign In</Text>
        </TouchableOpacity>
        </>
    )
};

const GoogleSignIn = () => {
    return (
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
      );
}

export default SignupScreen

const styles = StyleSheet.create({})
