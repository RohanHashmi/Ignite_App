import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  Image,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// import { navigate } from 'react-navigation';
// import LaunchScreen from './LaunchScreen.js';

const {width, height} = Dimensions.get('window')

export default class Header extends Component{
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View>
        <StatusBar hidden={true}/>
        <View style={{ marginTop: 20, backgroundColor: 'white', padding: 10}}>
        <TouchableHighlight>
              <Image style={styles.img1} source={require('../Images/backicon.png')} />
        </TouchableHighlight>
        </View>
         <View style={styles.header}>
            <View>
                <Text style={styles.text}>Categories</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 15,
    width: 300,
    backgroundColor: 'white',
    padding: 25,
    marginLeft: 60,
    marginTop: -50
  },
  text: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
    marginTop: -8
  },
 img1: {
    marginLeft: 10,
    marginTop: 10,
  }, 
/*  img2:{
    marginLeft: -20,
    marginTop: -10
  }*/
});

// <TouchableOpacity>
//                 <Text>Hello</Text>
//                 {/* <Image style={styles.img1} source={require('../Images/backicon.png')} /> */}
//               </TouchableOpacity>
//            </View>
//             <View>
//                 <Text style={styles.text}>Categories</Text>
//                 <TouchableOpacity>
//                   <Image style={styles.img1} source={require('../Images/backicon.png')} />
//                 </TouchableOpacity>
//             </View>
//             <TouchableHighlight>
//               <Text></Text>
//               {/* <Image  style={styles.img2} source={require('../Images/search1.png')} /> */}
//             </TouchableHighlight>
//     onPress={() => navigate('LaunchScreen')}
