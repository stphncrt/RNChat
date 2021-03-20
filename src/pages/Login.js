import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {authStyle} from './styles';
import {Input, Button} from '../components';
// import auth from '@react-native-firebase/auth';

const Login = props => {
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
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
            />
            <Button title="Sign In" />
            <Button title="Sign Up" noBorder />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export {Login};
