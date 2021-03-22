import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {post_input} from './styles';

const PostInput = props => {
  const [postText, setPostText] = useState('');
  return (
    <View style={post_input.container}>
      <View style={post_input.inputContainer}>
        <TextInput
          multiline
          placeholder="Type something.."
          onChangeText={value => setPostText(value)}
        />
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => props.onSendingPost(postText)}>
        <Icon
          name="direction"
          size={30}
          color="#69007f"
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export {PostInput};
