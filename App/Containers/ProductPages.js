import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableHighlight
} from 'react-native';
import Carousel from 'react-native-carousel-view';
import styles from './Styles/ProductPagesStyles';
import { navigate } from 'react-navigation';


import Header from './header.js';
import Thumbnails from './Thumbnail.js';


export default class ProductPages extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
        // <StatusBar hidden={true}/>
          <View>
            <TouchableHighlight onPress={() => navigate('LaunchScreen')}>
              <Image style={styles.img1} source={require('../Images/backicon.png')} />
            </TouchableHighlight>
            <View>
              <Text style={styles.text}>Category</Text>
            </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={styles.container}>
              <Carousel
                width={375}
                height={200}
                delay={2000}
                indicatorAtBottom={true}
                indicatorSize={20}
                indicatorText="*"
                indicatorColor="red"
                >
                <View style={styles.contentContainer}>
                  <Image source={require('../Images/caro1.jpg')} />
                </View>
                <View style={styles.contentContainer}>
                  <Image source={require('../Images/caro2.jpg')} />
                </View>
                <View style={styles.contentContainer}>
                  <Image source={require('../Images/caro3.jpg')} />
                </View>
              </Carousel>
            </View>
          </View>
          <View style={styles.thumb}>
            <Thumbnails />
          </View>
        </View>
  
    );
  }
}

