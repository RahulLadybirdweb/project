import React, { Component } from 'react';
import { ScrollView, View, state, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(response => this.setState({ albums: response.data }));
   }
   renderAlbums() {
     return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
     );
   }
  render() {
    console.log(this.State);
  return (
    <ScrollView>
    <View style={styles.Albumscontainer}>
    {this.renderAlbums()}
    </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  Albumscontainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
  },
  });
export default AlbumList;
