import React from 'react';
import { Text, TouchableOpacity, View, Linking, StyleSheet } from 'react-native';

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
const styles = StyleSheet.create({
  ButtomContainer: {
    flex: 1,
           flexDirection: 'row',
           justifyContent: 'space-between',
           padding: 10,
  },
  ButtomRange: {
fontSize: 15,
alignSelf: 'center',
color: '#000',
fontWeight: '600',
  },
  ButtomSupport: {
fontSize: 15,
alignSelf: 'center',
color: '#000',
fontWeight: '600',
  },
  ButtomSupportTeam: {
fontSize: 15,
alignSelf: 'center',
color: '#000',
fontWeight: '600',
},
buttonStyle: {
  flex: 1,
  alignSelf: 'stretch',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#C0C0C0',
 padding: 5,
}
});
export default Button;
