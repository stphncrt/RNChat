import {Dimensions, StyleSheet} from 'react-native';

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logoText: {
    color: 'purple',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export const timelinePager = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc',
  },
});
