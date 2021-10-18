import {gql} from '@apollo/client';

const REQUEST_COUPON_CODE = gql`
    query GetCouponByFoodItem($foodItemName: String, $clientID: String){
        getCouponByFoodItem($foodItemName, $clientID){
            code
            clientID
            expiryDate
        }
    }
`; 


export default REQUEST_COUPON_CODE; 

