import { StyleSheet, Platform, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a178b1',
    // paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingTop: 30,
    alignItems: 'center',
  },
  entriesContainer: {
    display: 'flex',
    padding: 10,
    paddingLeft: 35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
    width: width,
    flex: 1,
    borderColor: '#fefefe',
    borderWidth: 2,
    backgroundColor: 'white',
  },
});

export default styles;
