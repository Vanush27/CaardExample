import React, {FC} from 'react';
import {Image, ImagePickerResult, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AntDesign} from '@expo/vector-icons';
import {styles} from './styles';
import {User} from "../../../redux/slices/userSlice";

type  ImagePickerUserProps = { // todo
    setFormFields: React.Dispatch<React.SetStateAction<User>>
    formFields: User
}

const ImagePickerUser: FC<ImagePickerUserProps> = ({setFormFields, formFields}) => {

    const onTouchImageHandler = async () => { // todo change name
        let result: any = await ImagePicker.launchImageLibraryAsync({ // todo
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setFormFields((prevState: User) => ({...prevState, image: result?.uri}));
        }
    };

    return (
        <View style={styles.container_image} onTouchStart={onTouchImageHandler}>
            {!formFields?.image && <AntDesign name="plus" size={24} color="#FFFFFF"/>}
            {formFields?.image && (
                <View>
                    <Image source={{uri: formFields?.image}} style={styles.image}/>
                </View>
            )}
        </View>
    );
};

export default ImagePickerUser;
