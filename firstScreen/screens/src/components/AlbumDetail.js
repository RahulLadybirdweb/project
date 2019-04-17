import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Buttom';
import { Item } from 'native-base';

const AlbumDetail = ({ album }) => {
  const { title, artist, image , thumbnail_image } = album;
  const { thumbnailStyle, headerTextTitleStyle, HeaderContenStyle,
     thumbnailContainerStyle, headerImageStyle, containerImageStyle,
   ImageheaderTextStyle, Main, timeStyle, containerTimeStyle } = styles;
  return (
  <Card>
  <CardSection>
  <View style={thumbnailContainerStyle}>
  <Image
       style={thumbnailStyle}
       source={{ uri: image }}
  />
  </View>
  <View style={Main}>
  <View style={containerImageStyle}>
  <Image
       style={headerImageStyle}
       source={require('./image/inbox.png')}
  />
  <Text style={ImageheaderTextStyle}>{item.email}</Text>
  </View>
  <View style={HeaderContenStyle}>

  <Text style={headerTextTitleStyle}>{title}</Text>
  <Text>{artist}</Text>
  </View>
  <View style={containerTimeStyle}>
  <Text style={timeStyle}>7:10 PM</Text>
  </View>
  </View>
  </CardSection>
  <CardSection>
  <Button />
  </CardSection>
  </Card>
);
};
const styles = {
  HeaderContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextTitleStyle: {
    fontSize: 18,
    color: '#000',
  },
  containerImageStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginleft: 10,
    marginRight: 10,
    marginTop: 5
  },
  Main: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  },
  headerImageStyle: {
    height: 20,
    width: 20,
  },
  ImageheaderTextStyle: {
    fontSize: 15,
    paddingLeft: 6,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginleft: 10,
    marginRight: 10,

  },
  timeStyle: {
    fontSize: 13,
  },
};
export default AlbumDetail;
