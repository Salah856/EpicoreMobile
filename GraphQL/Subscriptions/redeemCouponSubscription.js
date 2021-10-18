import {gql} from '@apollo/client'; 

const REDEEM_COUPON_SUBSCRIPTION = gql`

    subscription OnRedeemedCoupon($code: Int){
        redeemedCoupon($code){
            text
            code
            clientID
            expiryDate
        }
    }
`;

export default REDEEM_COUPON_SUBSCRIPTION; 
