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

const Sign = props => {
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Text>Sign</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export {Sign};
