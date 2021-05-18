import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  moodPost: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '95%',
    height: 90,
    // padding: 10,
    borderRadius: 10,
    backgroundColor: '#fefefe',
    marginVertical: 7.5,
  },
  fieldTitle: {
    fontSize: 11,
    color: '#664C70',
  },
  fieldTitle: {
    fontSize: 11,
    color: '#664C70',
  },
  item: {
    color: '#664C70',
    fontSize: 24,
  },
  section1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 3,
    backgroundColor: '#c898db',
    height: '100%',
    flex: 1.5,
  },
  section2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    height: '100%',
    flex: 2,
  },
  section3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    height: '100%',
    flex: 1.5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fefefe',
  },
  recordContainer: {
    width: '100%',

    // backgroundColor: 'green'
  },
  date_mood_int: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 5,
  },
  date_time: {
    textAlign: 'center',
  },
  note_container: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
});

export default styles;
