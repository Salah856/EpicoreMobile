import AsyncStorage from '@react-native-community/async-storage';


const generateClientID = () => {

    if (!AsyncStorage.getItem('clientID')){
        let clientID = Math.random().toString(36).slice(2);
        AsyncStorage.setItem('clientID', clientID); 
    }

    return AsyncStorage.getItem('clientID'); 
}

export default generateClientID; 


