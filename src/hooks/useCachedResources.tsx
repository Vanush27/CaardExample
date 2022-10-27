import * as Font from 'expo-font';
import {useEffect, useState} from 'react';

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false); // todo

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await Font.loadAsync({
                    "karla": require('../../assets/fonts/Karla-Regular.ttf'),
                    'karla-bold': require('../../assets/fonts/Karla-Bold.ttf'),
                    'nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
                    'nunito-bold': require('../../assets/fonts/Nunito-Bold.ttf'),
                })
            } catch (e) {
                console.warn(e);
            } finally {
                setIsLoadingComplete(true);
            }
        }

        loadResourcesAndDataAsync().then();
    }, []);
    return isLoadingComplete;
};

export default useCachedResources;
