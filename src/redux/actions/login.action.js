import { firebase, googleProvider } from "../../components/firebase/firebase.config"
import { loginTypes } from "../types/Login.types";

export const handleGoogleloginAction = () => {
    return async dispatch => {
        try {
            const {user} = await firebase.auth().signInWithPopup(googleProvider)
            const {displayName, photoURL, email, uid} = user
            dispatch(handleUserInfoAction({displayName, photoURL, email, uid}))
        } catch (error) {
            console.log(error)
        }
    };
};

export const handleRegisterAction = ({userName, email, password }) => async dispatch => {

    try {
        const {user} = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        
        await user.updateProfile({displayName: userName})

        dispatch(handleUserInfoAction({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
        }))
        
    } catch (error) {
        console.log(error)
        
    }
}
const handleUserInfoAction = userInfo => {
    return{
        type: loginTypes.LOGIN_GOOGLE,
        payload: userInfo,
    }
}