import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  TextInput,
  Dimensions,
  Image
} from 'react-native';

import {navigate} from 'react-navigation';

// Styles
import styles from './Styles/RegistrationScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
     <View>
         <View style={styles.header}>
            <View style={{backgroundColor: '#b22222',borderRadius:24, borderColor:"black",marginLeft:20, borderWidth:1,width: 30,height: 30 }}>
              <Image source={require("../Images/checkbox1.png")} style={{width:15, height:20,margin: 5}}/>
            </View>
            <View style={{backgroundColor: '#000',borderRadius:24, borderColor:"black", marginLeft:150, marginTop: -30, borderWidth:1,width: 30,height: 30 }}>
              <Image source={require("../Images/checkbox1.png")} style={{width:15, height:20,margin: 5}}/>
            </View>
            <View style={{backgroundColor: '#000',borderRadius:24, borderColor:"black", marginLeft:300, marginTop: -30, borderWidth:1,width: 30,height: 30 }}>
              <Image source={require("../Images/checkbox1.png")} style={{width:15, height:20,margin: 5}}/>
            </View>
        </View>
        
        <View style={styles.headerGap}>
          <Text style={styles.headerGapText}>Languages</Text>
        </View>
        <View>
          <Text style={styles.infoConfirm}>
            Please confirm your country code and enter your phone number.
          </Text>
          
          <View style={styles.countrySelectBox}>
            <View style={styles.country}>
              <View style={styles.countrylabel}>
                <Image source={require('../Images/location.png')} style={styles.countryLocationLabel}/> 
                <Text > Country </Text>
              </View>
                <Text style={styles.Gap}> | </Text>
                <Text style={styles.countryDrop}>Kenya</Text>
            </View>
            <View style={styles.country}>
              <View style={styles.countrylabel}>
                <Image source={require('../Images/smartphone.png')} style={styles.countryLocationLabel}/> 
                <Text > + 254 </Text>
              </View>
                <Text style={styles.Gap}> | </Text>
                <Text style={styles.countryDrop}>Kenya</Text>
            </View>
          </View>       
          
          <View style={styles.proceedButton} >
            <Button onPress={ () => navigate('ProductPages')} color="#b22222" title='Proceed' />
            <Text style={[styles.VerySMS, styles.noticeSMS]}>Pointspesa will send you SMS message to verify your phone number.</Text>
            <Text style={styles.noticeSMS}>Carrier SMS charges may apply.</Text>
          </View>
        </View>
      </View>
    )
  }
}
