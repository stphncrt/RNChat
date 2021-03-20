import {Dimensions, StyleSheet} from 'react-native';
export const button = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
  },
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#9c27b0',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  usename: {
    fontWeight: 'bold',
    color: 'white',
  },
  bodyContainer: {
    padding: '5',
  },
  time: {
    color: 'white',
    fontStyle: 'italic',
  },
});

export default post_input = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b0bec5',
  },
  inputContainer: {
    flex: 1,
  },
  button: {},
});

export default header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#90a4ae',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78909c',
  },
});
