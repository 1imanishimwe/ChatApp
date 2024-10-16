import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import OnlineScreen from './screens/Online';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from './screens/Messages';
import ChatScreen from './screens/Chat';
import SignupScreen from './screens/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [email, setEmaiil] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    checkUserSession();
  }, []);
  const checkUserSession = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const userName = await AsyncStorage.getItem('userName');
      
      if (userId && userName) {
        // User is already logged in, redirect to Chat screen
        navigation.replace('Chat');
      }
    } catch (error) {
      console.error('Error checking user session:', error);
    }
  };

  const handleLogin = () => {
    
    if (!email || email.trim() === "")
       {
      Alert.alert('Please enter a email.');
      return;
    } 
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    if (!password || password.trim() === "") {
      Alert.alert('Please enter a password.');
      return;
  }

    fetch("http://192.168.88.88:8000/api/login", 
      {
           
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // console.log(data.errors.email)
      const message = data.message
      console.log(data.user_name)
      if (message === "Login successful") {
        // Store the user data or token in AsyncStorage or a state management solution
        // For example, using AsyncStorage:
        AsyncStorage.setItem('userId', data.user_id);
        AsyncStorage.setItem('userEmail', email);
        AsyncStorage.setItem('userName', data.user_name);
        // console.log(data.user_id)
        // Navigate to the Online screen
        navigation.navigate('Chat');
      } else {
        // Handle login failure
        Alert.alert('Login Failed', message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while logging in. Please try again.');
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmaiil}
        keyboardType="user-email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Online" component={OnlineScreen} />
        <Stack.Screen name="Messages" component={MessageScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;