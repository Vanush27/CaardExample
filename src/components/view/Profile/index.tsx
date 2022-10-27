// import { TextInput, Button, View, Text } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
//
// import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
// import { ParamListBase, useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//
// import { styles } from './styles';
// import React, { useEffect, useState } from 'react';
// import { addUser, setLoggedIn } from '../../../redux/slices/userSlice';
// import { ImagePickerUser } from '../../shared';
// import { useDispatch, useSelector } from 'react-redux';
//
// type FormData = {
//   image: string;
//   name: string;
//   lastName: string;
// };
//
// const Profile = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'HomeScreen'>>();
//   const dispatch = useDispatch();
//
//   // const loggedIn = useSelector((state: any) => state.user.loggedIn);
//   const image = useSelector((state: any) => state.user.data);
//
//   const {
//     control,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm();
//
//   const [formFields, setFormFields] = useState<FormData>();
//
//   const onSubmit = handleSubmit((data) => {
//     const createNewUser = {
//       name: data.name,
//       lastName: data.lastName,
//       image: image,
//     };
//     dispatch(addUser(createNewUser));
//     dispatch(setLoggedIn(true));
//     navigation.navigate('Wallet');
//   });
//
//   const isDisabledButton = !!formFields?.name && !!formFields?.lastName && !!formFields?.image;
//
//   return (
//     <View style={styles.container_form}>
//       <ImagePickerUser setFormFields={setFormFields} />
//       <Text style={styles.text_add_info}>Add Information</Text>
//       <View style={{ paddingLeft: 16, paddingRight: 16, width: '100%' }}>
//         <Controller
//           control={control}
//           render={({ field: { onChange, onBlur, value, name } }) => (
//             <TextInput
//               style={styles.input}
//               onBlur={onBlur}
//               onChangeText={(value) => {
//                 onChange(value);
//                 setFormFields((prevState: any) => ({ ...prevState, name: value }));
//               }}
//               value={value || ''}
//               placeholder="Name"
//               placeholderTextColor="#858585"
//             />
//           )}
//           name="name"
//           rules={{
//             required: {
//               value: true,
//               message: 'Field is required!',
//             },
//           }}
//         />
//       </View>
//       <View style={{ paddingLeft: 16, paddingRight: 16, width: '100%' }}>
//         <Controller
//           control={control}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               style={styles.input}
//               onBlur={onBlur}
//               onChangeText={(value) => {
//                 onChange(value);
//                 setFormFields((prevState: any) => ({ ...prevState, lastName: value }));
//               }}
//               value={value || ''}
//               placeholder="Last name"
//               placeholderTextColor="#858585"
//             />
//           )}
//           name="lastName"
//           rules={{
//             required: {
//               value: true,
//               message: 'Field is required!',
//             },
//           }}
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           disabled={!isDisabledButton}
//           title="Create Account"
//           color="#8C8C8C"
//           onPress={handleSubmit(() => onSubmit())}
//         />
//       </View>
//     </View>
//   );
// };
//
// export default Profile;
