import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Button, AsyncStorage, ImageBackground } from 'react-native';
import { SocialIcon, Input } from 'react-native-elements';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Constant } from './Constant';
import Splash from './Splash';
import axios from 'axios';
export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { email: '', password: '', isLoading: true };
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		setTimeout(() => { this.setState({ isLoading: false }); }, 3000);
	}
	async login() {
		try {

			// let res = await axios.post(Constant.BASE_URL + 'users/login', { email: this.state.email, password: this.state.password });
			// if (res.status == 200 && res.data.status == 'success') {
				if(this.state.email === 'kajal@pitangent.com'){
				// let userid = res.data.data.id.toString();
				let userid = 1;
				// await AsyncStorage.multiSet([['@userid', `${userid}`], ['username', 'kajal7050']]);
				this.props.navigation.navigate('Drawer');
			}

		} catch (error) {
			console.log('error saving data', error);
		}
	}

	render() {

		if (this.state.isLoading) { return <Splash /> }
		else {
			return (
				<View style={styles.container}>
					<ImageBackground source={require('../assets/background_signup.png')} style={styles.backgroundImage}>
						<Text style={{ fontSize: 20, color: 'green', textAlign: 'left', marginTop: 60 }}>Welcome To</Text>
						<Image source={require('./../assets/atom.png')} style={{ alignItems: 'center', height: 50, width: 150 }} />
						<Input placeholder='Enter Your Email/Phone '
							rightIcon={<MaterialIcons name='email' size={24} color='black' />}
							containerStyle={styles.inputContainer}
							onChangeText={(email) => this.setState({ email })}
							onSubmitEditing={() => this.password.focus()}
						/>
						<Input
							containerStyle={styles.inputContainer}
							placeholder='Enter Your Password Here'
							rightIcon={<FontAwesome name='lock' size={24} color='black' />}
							secureTextEntry={true}
							onChangeText={(password) => this.setState({ password })}
						/>
						<SocialIcon title='SignIn' button style={{ width: '80%', backgroundColor: '#fe9b1d', height: 50 }}
							onPress={this.login} />
						<SocialIcon title='SignUp' button style={{ width: '80%', backgroundColor: '#469220', height: 50 }} onPress={() => this.props.navigation.navigate('Subscription')} />
						<View style={{ marginBottom: 20 }}>
							<Text style={styles.textStyle}>Or{"\n"} Signup With </Text>
						</View>
						<SocialIcon title='Facebook' button type='facebook' style={{ width: '80%' }} onPress={() => this.props.navigation.navigate('Drawer')} />
						<SocialIcon title='Google' button type='google-plus-official' style={{ width: '80%' }} onPress={() => this.props.navigation.navigate('VideoExample')} />
					</ImageBackground>
				</View>
			);
		}
	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textStyle: {
		color: '#000308',
		fontSize: 18,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: 'center'
	},
	inputContainer: {
		backgroundColor: '#ffffff',
		borderRadius: 10,
		width: '80%',
		marginVertical: 5,
		height: 37
	}
});