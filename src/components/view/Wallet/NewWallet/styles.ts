import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container_new_wallet: {
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    borderRadius: 12,
    paddingBottom: 100,
  },
  container_all_input: {
    backgroundColor: '#ee3838',
    // backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 20,
  },
  shadowProp: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 90,
  },
  dashed: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DDDDDD',
    marginTop: 25,
    marginBottom: 38,
  },

  secure_code: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  city_state: {
    flex: 1,
    flexDirection: 'row',
  },
  city: {
    flex: 3,
  },
  state: {
    flex: 1,
    marginLeft: 10,
  },
});
