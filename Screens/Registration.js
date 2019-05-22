import React,{Component} from 'react';
import {Platform,StyleSheet, Text, View,Image,ImageBackground,ScrollView,StatusBar,TextInput,TouchableOpacity,Button} from 'react-native';


export default class Registration extends Component{

	backToSigninPage()
	{
		this.props.navigation.pop()
	}


	render(){
		return(
			<View style={{flex:1}}>
					<ImageBackground
			          resizeMode={'stretch'} // or cover
			            style={styles.backgroundImage} // must be passed from the parent, the number may vary depending upon your screen size
			            source={require('../src/images/loginBg.jpg')}>
			            <View style={{justifyContent:'center',alighItems:'center'}}>
			            		<ScrollView
			            		 contentContainerStyle={styles.contentContainer}
			            		 style={{width:'100%',height:'100%'}}>
			            			<Image
			            				style = {styles.logoImg}
			            				source = {require('../src/images/logo.png')}>
			            			</Image>

								<View style={{marginTop:'10%',flex:1}}>
				            			 <TextInput style = {styles.input}
	                            			underlineColorAndroid = "transparent"
	                            			placeholder = "UserName"
				                            placeholderTextColor = "#ffffff"
				                            autoCapitalize = "none"
				                            onChangeText = {this.handlePassword}/>

			                            <TextInput style = {styles.input}
                            			underlineColorAndroid = "transparent"
                            			placeholder = "Email"
			                            placeholderTextColor = "#ffffff"
			                            autoCapitalize = "none"
			                            onChangeText = {this.handlePassword}/>

			                            <TextInput style = {styles.input}
                            			underlineColorAndroid = "transparent"
                            			placeholder = "Password"
			                            placeholderTextColor = "#ffffff"
			                            autoCapitalize = "none"
			                            onChangeText = {this.handlePassword}/>

			                            <TextInput style = {styles.input}
                            			underlineColorAndroid = "transparent"
                            			placeholder = "Confirm Password"
			                            placeholderTextColor = "#ffffff"
			                            autoCapitalize = "none"
			                            onChangeText = {this.handlePassword}/>

			                            <TextInput style = {styles.input}
                            			underlineColorAndroid = "transparent"
                            			placeholder = "Mobile"
			                            placeholderTextColor = "#ffffff"
			                            autoCapitalize = "none"
			                            onChangeText = {this.handlePassword}/>


			                             <TouchableOpacity>
			                            	<View style={styles.viewSumbit}>
			                            		<Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Sign up</Text>
			                            	</View>
			                            </TouchableOpacity>
			                            <View style={{flexDirection:'row',justifyContent:'center'}}>
			                            <Text style={{fontSize:18,color:'#ffffff'}}>Already have </Text>
			                            <TouchableOpacity
			                            onPress = {()=>this.backToSigninPage()}>
			                            <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>an Account?</Text>
			                            </TouchableOpacity>
			                            </View>

			                    </View>

			            		</ScrollView>
			            </View>
					 </ImageBackground>
			</View>
			);
	}
}


const styles = StyleSheet.create({

	viewSumbit:{
			height:'35%',
			margin: 15,
			backgroundColor:'#ffffff',
			alignItems:'center',
    		justifyContent:'center',borderRadius:5
	},

	input: {
      margin: 15,
      height: '25%',
      borderColor: '#ffffff',
      paddingLeft: 10,
      fontSize: 20,
      color:'#ffffff',
      borderWidth: 2,
      borderRadius: 5
   },
backgroundImage: {
        flex: 1,
        justifyContent:'center',
        resizeMode: 'cover', // or 'stretch'
        opacity:0.8,
        height:'100%',
        width:'100%'
    },
  logoImg:{
  		width:'40%',
  		height:'40%',
  		marginTop: '10%',
  		alignSelf: 'center',
  		resizeMode:'contain'
	},

 });