import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    LoginManager,
    GraphRequest,
    GraphRequestManager,
    AccessToken,
} from 'react-native-fbsdk';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    Text,
    View,
} from 'react-native';
import { Loader } from '..';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import { loginModalVisible, loginUser } from '../../store/userStore/userStore.actions';
import { isLoginModalVisibleSelector } from '../../store/userStore/userStore.selectors';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');


const Login = (props) => {
    const dispatch = useDispatch();
    const isModalVisible = useSelector(isLoginModalVisibleSelector);
    console.log("Login -> isModalVisible", isModalVisible)
    const [loginState, setLoginState] = useState(null)
    const onCloseModal = () => {
        dispatch(loginModalVisible(false))
        setTimeout(() => {
            setLoginState(null)
        }, 1000)
    }

    const facebookButton = async (props) => {
        const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
        ]);
        if (result.isCancelled) {
        } else {
            const data = await AccessToken.getCurrentAccessToken();
            const responseInfoCallback = (error, res) => {
                console.log("responseInfoCallback -> res", res)
                if (error) {
                    setLoginState('An error occurred, please try again later 😔')
                    console.log('Error fetching data: ' + error.toString());
                } else {
                    console.log("responseInfoCallback -> { accessToken: data.accessToken, name: res.name, avatar: res.picture.data.url}", { accessToken: data.accessToken, name: res.name, avatar: res.picture.data.url })
                    dispatch(loginUser({ accessToken: data.accessToken, name: res.name, image: res.picture.data.url }))
                    setLoginState("You've logged in successfully! 👏")
                }
            };
            const infoRequest = new GraphRequest(
                '/me',
                {
                    accessToken: data.accessToken,
                    parameters: {
                        fields: {
                            string: 'email,name,picture',
                        },
                    },
                },
                responseInfoCallback,
            );
            new GraphRequestManager().addRequest(infoRequest).start();
        }
    };

    return (
        <Modal
            isVisible={isModalVisible}
            onSwipeComplete={onCloseModal}
            swipeDirection="left"
        >
            <View style={styles.modalHolder}>
                <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={onCloseModal}>
                    <Text style={styles.modalCloseIcon}>𝖷</Text>
                </TouchableOpacity>
                <View style={styles.modalHolderHeader}>
                    <Text style={styles.modalHeaderTitle}>{props.message}</Text>
                </View>
                {!loginState ?
                    <TouchableOpacity style={styles.facebookLoginButton} onPress={() => facebookButton(props)}>
                        <Text style={styles.facebookLoginButtonText}>{'Login with Facebook'}</Text>
                    </TouchableOpacity>
                    :
                    <Text style={styles.loginStateText}>{loginState}</Text>
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalHolder: {
        backgroundColor: Colors.off_white,
        borderRadius: 5,
        overflow: 'hidden',
        paddingTop: 10,
        alignItems: 'center'
    },
    modalHolderHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey_green,
        padding: 15,
        marginTop: '8%'
    },
    modalHeaderTitle: {
        fontWeight: '500',
        color: Colors.black,
        fontSize: 20,
        lineHeight: 26,
        fontFamily: Fonts.KBWriter,
    },
    modalCloseButton: {
        position: 'absolute',
        alignItems: 'center',
        borderRadius: 4,
        top: 10,
        left: 0,
        width: 42,
        height: 42,
        backgroundColor: Colors.off_white,
        zIndex: 9
    },
    modalCloseIcon: {
        color: Colors.grey_green,
        fontSize: 24
    },
    filtersListHolder: {
        flex: 0,
        backgroundColor: Colors.off_white
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
        paddingHorizontal: 8,
        backgroundColor: Colors.off_white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey_green,
    },
    optionIcon: {
        color: Colors.black,
        fontSize: 34,
        paddingHorizontal: 10,
    },
    optionText: {
        color: Colors.black,
        fontSize: 22,
        fontFamily: Fonts.KBWriterThin
    },
    facebookLoginButton: {
        backgroundColor: '#4267B2',
        borderRadius: 4,
        margin: 5,
        width: 220,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: '10%'
    },
    facebookLoginButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    loginStateText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginVertical: '12%'
    }
});

export default Login;