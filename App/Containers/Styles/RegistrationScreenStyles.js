import { Dimensions,StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  header:{
    height: 40,
    backgroundColor: 'white',
    padding:5
    },
  headerGap:{
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    marginTop:10
  },
  headerGapText:{
    left: width / 3,
    margin: 10    
  },
  infoConfirm:{
    alignItems: 'center',
    width: 320,
    margin: 17,
    marginTop: 30,
    marginBottom:0,
    textAlign:'center',
    fontWeight: "700"
  },

  proceedButton:{
    margin: 15,
  },
  noticeSMS:{
    fontSize: 12,
    textAlign:'center',
  },
  VerySMS:{
    alignItems: 'center',
    width: 300,
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 5,
    textAlign:'center',
  },
  countrySelectBox:{
  
    borderTopWidth:2,
    borderTopColor:'rgb(241,240,244)',
        
    borderBottomWidth:2,
    borderBottomColor:'rgb(241,240,244)',
    
    borderRightWidth:2,
    borderRightColor:'rgb(241,240,244)',

    borderLeftWidth:4,
    borderLeftColor:'rgb(170,34,37)',
    width: width - 35,
    height: 120,
    marginTop:15,
    left: width / 20
  },
  country:{
    flexDirection:"row",
    margin: 30,
    marginBottom: 0,
    marginTop: 20,
    
  },
  countrylabel:{
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(203,203,203)',
    padding: 2,
    // paddingLeft: width / 30,
    paddingRight: width / 20
  },
  countryLocationLabel:{
    marginTop: 5,
    height: height * 0.02,
    width: 15
  },
  countryDrop:{
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(203,203,203)',
    paddingRight: width/6,
    paddingLeft: width/6,
    
  },
  Gap:{
    padding: 2,
    fontSize: 15
  },
  countryCode:{
    flexDirection:"row",
    margin: 30,
    marginBottom: 0,
    marginTop: 12,
  },
})
