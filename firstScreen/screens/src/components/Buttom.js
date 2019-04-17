import React from 'react';
import { Text, TouchableOpacity, View, Linking } from 'react-native';

const Button = () => {
  return (
    <View style={styles.ButtomContainer}>
    <View>
    <TouchableOpacity onPress={() => Linking.openURL('http://alok-ladybirdweb.tk/Uniqo/')} style={styles.buttonStyle}>
    <Text style={styles.ButtomRange}>Range</Text>
    </TouchableOpacity >
    </View>
      <View >
    <TouchableOpacity onPress={() => Linking.openURL('http://rahul-lws.ml')} style={styles.buttonStyle}>
    <Text style={styles.ButtomSupport}>Support</Text>
    </TouchableOpacity >
      </View>
        <View>
    <TouchableOpacity onPress={() => Linking.openURL('http://rahul-lws.ml/bike-on-rent/')} style={styles.buttonStyle}>
    <Text style={styles.ButtomSupportTeam}>Support Team</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = {
  ButtomContainer: {
    flex: 1,
           flexDirection: 'row',
           justifyContent: 'space-between',
           padding: 10,
  },
  ButtomRange: {
fontSize: 12,
alignSelf: 'center',
color: '#000',
paddingLeft: 3,
paddingRight: 3,
padding: 3,
  },
  ButtomSupport: {
fontSize: 12,
alignSelf: 'center',
color: '#000',
paddingLeft: 10,
paddingRight: 10,
padding: 3,
  },
  ButtomSupportTeam: {
fontSize: 12,
alignSelf: 'center',
color: '#000',
paddingLeft: 3,
paddingRight: 3 ,
padding: 3,
},
buttonStyle: {
  flex: 1,
  alignSelf: 'stretch',
  backgroudColor: '#A9A9A9',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#C0C0C0',
  marginleft: 5,
  marginRight: 5,
}
};
export default Button;
