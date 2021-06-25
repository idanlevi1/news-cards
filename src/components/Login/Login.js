import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    LoginManager,
    GraphRequest,
    GraphRequestManager,
    AccessToken,
} from 'react-native-fbsdk';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Dimensions,
    Text,
    View,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Avatar } from 'react-native-paper';

const { width } = Dimensions.get('window');

const mapStateToProps = (state) => {
    return {
        // movies: state.showMovies.movies,
        // error: state.showMovies.error,
        // loading: state.showMovies.loading,
        // name: state.userInfo.name,
        // photo: state.userInfo.photo,
        // auth: state.userInfo.auth,
        // moviePage: state.showMovies.moviePage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchCountires: () => dispatch(fetchMovies()),
        // onLoggedIn: (cred) => dispatch(loginCredentials(cred)),
    };
};

const facebookButton = async (props, setLoading) => {
    setLoading(true);
    const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
    ]);
    if (result.isCancelled) {
        setLoading(false);
    } else {
        const data = await AccessToken.getCurrentAccessToken();
        const responseInfoCallback = (error, res) => {
            console.log("responseInfoCallback -> res", res)
            if (error) {
                console.log('Error fetching data: ' + error.toString());
            } else {
                // props.onLoggedIn([res.first_name, res.picture.data.url]);
                console.log("responseInfoCallback -> [res.first_name, res.picture.data.url]", [res.name, res.picture.data.url])
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
        setLoading(false);
    }
};


const textButton = (props) => {
    return !props.auth ? (
        <Text style={styles.h2}>Log in to continue</Text>
    ) : (
            <Button
                style={{ marginTop: 30 }}
                title="Click to fetch Movies!"
                buttonStyle={{ backgroundColor: '#ffd700' }}
                titleStyle={{
                    color: 'black',
                    fontSize: 20,
                }}
                onPress={(() => { })}
            />
        );
};
const image = (props) => {
    console.log("image -> props", props)
    return <Text>AVATAR</Text>
};

const loadingFunc = (loadingState) => {
    return loadingState ? <ActivityIndicator size="large" /> : <View />;
};

const Login = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.h1}>{props.name}</Text>
                    <View style={styles.avatar}>{image(props)}</View>
                    {textButton(props)}
                    {loadingFunc(loading)}
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => facebookButton(props, setLoading)}>
                        <Text>FACEBOOK LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    button: {
        width: width * 0.45,
    },
    h1: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    h2: {
        margin: 20,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    avatar: {
        alignSelf: 'center',
        margin: 10,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);