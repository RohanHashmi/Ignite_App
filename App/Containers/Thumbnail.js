import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button,
  TouchableHighlight,
  TextInput,
  Image,
  ListView
} from 'react-native';
import {Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window')

export default class Thumbnails extends Component{
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
          <View style={styles.thumb1}>
              <Image source={require('../Images/food.png')} style={{height: 80, width: 88}} />
              <Text style={{textAlign: 'center'}}>Food</Text>
          </View>
          <View style={styles.thumb2}>
              <Image source={require('../Images/travel.png')} style={{height: 80, width: 88}} />
              <Text style={{textAlign: 'center'}}>Travel</Text>
          </View>
          <View style={styles.thumb3}>
              <Image source={require('../Images/Photo.png')} style={{height: 80, width: 88}} />
              <Text style={{textAlign: 'center'}}>Photography</Text>
          </View>
          <View>
            <TouchableHighlight>
              <Text>></Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    thumb1: {
       borderWidth: 1,
       marginTop: -90,
       marginRight: 260
    },
    thumb2: {
       borderWidth: 1,
       marginTop: -100,
       marginRight: 160,
       marginLeft: 100
    },
    thumb3: {
       borderWidth: 1,
       marginTop: -100,
       marginRight: 60,
       marginLeft: 200
    }
});
