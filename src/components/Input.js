import React from 'react';
import {View, TextInput} from 'react-native';
import {input} from './styles';

const Input = props => {
  return (
    <View>
      <TextInput
        style={input.TextInput}
        placeholder={props.placeholder}
        {...props.inputProps}
        onChangeText={props.onType}
      />
    </View>
  );
};

export {Input};
