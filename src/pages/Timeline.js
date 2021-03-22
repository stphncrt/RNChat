import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const Timeline = () => {
  // const user = auth().currentUser;
  // console.log(user);

  const [topicModalFlag, setTopicModalFlag] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <View style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header onTopicModalSelect={() => setTopicModalFlag(true)} />

        <FlatList data={[]} renderItem={() => null} />

        <PostInput onSendingPost={x => console.log(x)} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => setTopicModalFlag(false)}
          onTopicSelect={value => {
            setSelectedTopic(value);
            setTopicModalFlag(false);
          }}
        />
      </View>
    </View>
  );
};

export {Timeline};
