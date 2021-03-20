import React, {usestate} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {post_input} from './styles';

const PostInput = () => {
  const [postText, setPostText] = usestate('');
  return (
    <View style={post_input.container}>
      <Text></Text>
    </View>
  );
};

export {PostInput};
