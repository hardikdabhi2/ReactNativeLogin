import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,ImageBackground,ScrollView,Image,TouchableOpacity} from 'react-native'



export default class ForgotPassword extends Component
{
	backToSignView()
	{
		this.props.navigation.pop()
	}

	render(){
		return(
				<View style={styles.container}>	
					<View style={styles.viewNavigation}>
						<TouchableOpacity
							onPress={()=>this.backToSignView()}>
							<Image
								source={require('../src/images/back.png')}
								style = {styles.navigationBack}>
							</Image>
						</TouchableOpacity>
						<View style={{justifyContent:'center',marginTop:30}}>
							<Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Forgot Password</Text>
						</View>
					</View>				
					<ImageBackground
        				  	resizeMode={'stretch'} // or cover
            				style={styles.backgroundImage} // must be passed from the parent, the number may vary depending upon your screen size
           					source={require('../src/images/loginBg.jpg')}>
					</ImageBackground>
				</View>
			);
	}
}


const styles = StyleSheet.create({

	navigationBack:{
		resizeMode:'contain',
		height:20,
		width:20,
		margin:20,
		marginTop:45
	},
	viewNavigation:{
		backgroundColor:'#0D8D96',
		height:80,
		flexDirection:'row',
	},
	container:{
		flex:1
	},
	backgroundImage: {
        flex: 1,
        justifyContent:'center',
        resizeMode: 'cover', // or 'stretch'
        opacity:0.8,
        height:'100%',
        width:'100%'
    },

});