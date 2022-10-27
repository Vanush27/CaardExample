import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  profile_container: {
    width: 375,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  container_form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_add_info: {
    fontFamily: 'nunito-bold',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#000000',
    marginBottom: 20,
  },
  input_view: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    margin: 'auto',
    height: 42,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,

    marginTop: 8,
    // background: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#858585',
    borderRadius: 2,
  },
  button: {
    width: '91%',
    height: 42,
    marginTop: 44,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    // background: '#FFFFFF',
    borderRadius: 2,
  },
  text_image: {
    marginTop: 33,
    fontFamily: 'nunito-bold',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'capitalize',
    color: '#000000',
  },
});
