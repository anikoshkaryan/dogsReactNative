import React, { Component } from 'react';
// import Svg, { Path, Rect, Circle, Defs, Stop } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';


import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
            password: null,

        };

    }

    componentDidMount() {

    }



    registerLink = () => {
        console.log(this.props);

        this.props.navigation.navigate("Register");
    }

    redirectToDogsBreeds = () => {
        this.props.navigation.navigate("DogsBreeds");
    }

    render() {

        return (
            <SafeAreaView style={styles.container} >
                <LinearGradient colors={['#E1C1B7', '#FFFFFF']} style={styles.login_wrapper} >

                <View style={styles.login_inputs_wrapper}>
                    <Text style={styles.login_title}>Авторизация</Text>
                    <View style={styles.login_input_parent}>
                        <TextInput
                            style={[styles.login_input]}
                            onChangeText={(val) => this.setState({login:val})}
                            value={this.state.login}
                            placeholder="Логин"
                            placeholderTextColor="#c9a477"
                        />
                    </View>
                    <View style={styles.login_input_parent}>
                        <TextInput
                            style={[styles.login_input]}
                            onChangeText={(val) => this.setState({password:val})}
                            value={this.state.password}
                            placeholder="Пароль"
                            placeholderTextColor="#c9a477"
                            secureTextEntry={true}
                        />
                    </View>
                    <LinearGradient colors={['#c9a477', '#b56422']} style={styles.login_button} >
                        <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center'}} onPress={this.redirectToDogsBreeds}>
                            <Text style={styles.login_button_text}>Войти</Text>

                        </TouchableOpacity>



                    </LinearGradient>

                    <View style={styles.register_link_wrapper}>
                        <Text style={styles.yet_not_account_text}>Еще нет аккаунта?</Text>
                        <TouchableOpacity onPress={this.registerLink}>
                            <Text style={styles.register_link_text}>Зарегистрироваться</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </LinearGradient>



            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',


    },

    login_wrapper: {
        width: "100%",
        paddingVertical: 60,
        height: "100%",
    },
    login_inputs_wrapper: {
        paddingHorizontal: 20,
    },
    login_title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#b56422',
        textAlign: 'center',
        marginBottom: 40,
    },
    login_input_parent: {
        // width: '100%',
        marginBottom: 15,
    },
    login_input: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 17,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        fontSize: 14,
        color: '#c9a477',
        // borderWidth: 1,
        // borderColor: "#a03c08",
    },
    login_button: {
        width: '100%',
        // backgroundColor: '#a03c08',
        borderRadius: 10,
        paddingVertical: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 62,
    },
    login_button_text: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    register_link_wrapper: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    yet_not_account_text: {
        fontSize: 14,
        marginBottom: 12,
        color: '#c9a477',

    },
    register_link_text: {
        color: "#b56422",
        fontSize: 14,
        fontWeight: "bold",
    }
});