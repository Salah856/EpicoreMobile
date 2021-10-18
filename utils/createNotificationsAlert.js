import {Alert} from 'react-native'; 

const createNotificationAlert = (text) => Alert.alert("Coupon Redeemed", text, 
                [
                    { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed")
                    }
                ]
            ); 


export default createNotificationAlert; 
