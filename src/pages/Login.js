import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import {resolveAuthError} from '../functions';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function login() {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => alert('basarili'))
  //     .catch(err => Alert.alert('Claruschat', resolveAuthError(err.code)));
  // }

  // async function login() {
  //   try {
  //     await auth().signInWithEmailAndPassword(email, password);
  //     props.navigation.navigate('Timeline');
  //   } catch (error) {
  //     Alert.alert('Claruschat', resolveAuthError(error.code));
  //   }
  // }
  function login() {
    props.navigation.navigate('Timeline');
  }
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/logo.jpeg')}
            />
            <Text style={authStyle.logoText}> CLARUSCHAT</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email..',
                keyboardType: 'email-address',
              }}
              // placeholder="Type your email.."
              onType={value => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onType={value => setPassword(value)}
            />
            <Button title="Sign In" onPress={() => login()} />
            <Button
              title="Sign Up"
              noBorder
              onPress={() => props.navigation.navigate('Sign')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export {Login};
