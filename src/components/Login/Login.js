import React, { useState } from 'react';
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Loader } from '..';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import { loginModalVisible, loginUser, logoutUser } from '../../store/userStore/userStore.actions';
import { isLoginModalVisibleSelector, isUserConnectedSelector } from '../../store/userStore/userStore.selectors';
import Modal from 'react-native-modal';

const Login = (props) => {
    const dispatch = useDispatch();
    const isModalVisible = useSelector(isLoginModalVisibleSelector);
    const isUserConnected = useSelector(isUserConnectedSelector);

    const [loginState, setLoginState] = useState(null)

    const onCloseModal = () => {
        dispatch(loginModalVisible(false))
        setTimeout(() => {
            setLoginState(null)
        }, 1000)
    }

    const onLogout = () => {
        dispatch(logoutUser())
        dispatch(loginModalVisible(false))
    }

    const facebookButton = async () => {
        setLoginState('loading')
        const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
        ]);
        if (result.isCancelled) {
            setLoginState(null)
        } else {
            const data = await AccessToken.getCurrentAccessToken();
            const responseInfoCallback = (error, res) => {
                console.log("responseInfoCallback -> res", res)
                if (error) {
                    setLoginState('An error occurred, please try again later 😔')
                    console.log('Error fetching data: ' + error.toString());
                } else {
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

    const ModalContent = () => {
        if (isUserConnected && !loginState) {
            return (
                <>
                    <View style={styles.modalHolderHeader}>
                        <Text style={styles.modalHeaderTitle}>{'Do you want to log out?'}</Text>
                    </View>
                    <View style={styles.logoutContainer}>
                        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                            <Text style={styles.logoutButtonText}>{'Yes'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoutButton} onPress={onCloseModal}>
                            <Text style={styles.logoutButtonText}>{'No'}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )
        } else {
            return (
                <>
                    <View style={styles.modalHolderHeader}>
                        <Text style={styles.modalHeaderTitle}>{props.message}</Text>
                    </View>

                    {!loginState ?
                        <TouchableOpacity style={styles.facebookLoginButton} onPress={() => facebookButton(props)}>
                            <Text style={styles.facebookLoginButtonText}>{'Login with Facebook'}</Text>
                        </TouchableOpacity>
                        :
                        loginState == 'loading' ? <View style={styles.loginStateText}><Loader /></View> : <Text style={styles.loginStateText}>{loginState}</Text>
                    }
                </>
            )
        }
    }

    return (
        <Modal
            isVisible={isModalVisible}
            onRequestClose={onCloseModal}
            onBackdropPress={onCloseModal}
        >
            <View style={styles.modalHolder}>
                <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={onCloseModal}>
                    <Text style={styles.modalCloseIcon}>𝖷</Text>
                </TouchableOpacity>
                <ModalContent />
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
    facebookLoginButton: {
        backgroundColor: '#4267B2',
        borderRadius: 4,
        margin: 5,
        width: 220,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: '10%',
        alignSelf: 'center'
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
    },
    logoutContainer: {
        flexDirection: 'row',
        paddingVertical: 25,
        borderBottomColor: Colors.grey_green,
        justifyContent: 'space-around',
    },
    logoutButton: {
        borderColor: Colors.black_opacity,
        backgroundColor: Colors.black_opacity,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 4,
        padding: 8,
    },
    logoutButtonText: {
        fontSize: 20,
    },
});

export default Login;