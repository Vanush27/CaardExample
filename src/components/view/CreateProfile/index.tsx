import {TextInput, Button, View, Text} from 'react-native';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import React, {FC, SetStateAction, useEffect, useState} from 'react';
import {addUser, setLoggedIn, User} from '../../../redux/slices/userSlice';
import {ImagePickerUser} from '../../shared';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';

const CreateProfile: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase, 'DrawerNav'>>();
    const dispatch = useDispatch();

    const dataUser = useSelector((state: any) => state.user.dataUser);

    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
    } = useForm();

    const [formFields, setFormFields] = useState<User>({}); // TODO

    const onSubmit = handleSubmit((data: FieldValues) => { // TODO
        const createNewUser: User = {  // TODO
            name: data.name,
            lastName: data.lastName,
            image: formFields?.image,
        };
        dispatch(addUser(createNewUser));
        // dispatch(setLoggedIn(true));
        // navigation.navigate('Profile');
    });

    const isDisabledButton = !!formFields?.name && !!formFields?.lastName && !!formFields?.image;

    useEffect(() => {
        if (Object.entries(dataUser || {})?.length) { // TODO
            setValue('name', dataUser.name);
            setValue('lastName', dataUser.lastName);
            setFormFields({image: dataUser.image});
        }
    }, []);

    return (
        <View style={styles.profile_container}>
            <View style={styles.container_form}>
                {formFields?.image ? (    //TODO
                    <Text style={styles.text_image}>Edit image</Text>
                ) : (
                    <Text style={styles.text_image}>Attach an image </Text>
                )}

                <ImagePickerUser setFormFields={setFormFields} formFields={formFields}/>
                <Text style={styles.text_add_info}>Add Information</Text>
                <View style={styles.input_view}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value, name}}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={(value) => {
                                    onChange(value);
                                    setFormFields((prevState: User) => ({...prevState, name: value}));
                                    // TODO new
                                }}
                                value={value || ''}
                                placeholder="Name"
                                placeholderTextColor="#858585"
                            />
                        )}
                        name="name"
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required!',
                            },
                        }}
                    />
                </View>
                <View style={styles.input_view}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={(value) => {
                                    onChange(value);
                                    setFormFields((prevState: User) => ({...prevState, lastName: value}));
                                //    TOdo new
                                }}
                                value={value || ''}
                                placeholder="Last name"
                                placeholderTextColor="#858585"
                            />
                        )}
                        name="lastName"
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required!',
                            },
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        disabled={!isDisabledButton}
                        title="Create Account"
                        color="#8C8C8C"
                        onPress={handleSubmit(() => onSubmit())}
                    />
                </View>
            </View>
        </View>
    );
};

export default CreateProfile;
