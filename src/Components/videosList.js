/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {name: '1', latitude: 37.8025259, longitude: -122.4351431},
        {name: '2', latitude: 37.7825259, longitude: -122.4251431},
        {name: '3', latitude: 37.7625259, longitude: -122.4151431},
        {name: '4', latitude: 37.7725259, longitude: -122.4561431},
        {name: '5', latitude: 37.7925259, longitude: -122.4591431},
      ],
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    };
  }
  componentDidMount() {
    // console.log(this.props.videosData.results);
  }
  render() {
    const {latitude, longitude, longitudeDelta, latitudeDelta} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 0.3,
            backgroundColor: '#f2f2f2',
            borderRadius: 1,
            borderColor: 'black',
          }}>
          <Text>Latitude</Text>
          <TextInput
            placeholder={'latitude'}
            style={{
              height: 30,
              borderColor: 'black',
              borderWidth: 1,
              width: 300,
              marginHorizontal: 30,
              marginBottom: 15,
            }}
            onChangeText={txt => {
              this.setState({latitude: txt});
            }}
          />
          <Text>Latitude</Text>
          <TextInput
            placeholder={'longitude'}
            style={{
              height: 30,
              borderColor: 'black',
              borderWidth: 1,
              width: 300,
              marginHorizontal: 30,
              marginBottom: 15,
            }}
            onChangeText={txt => {
              this.setState({longitude: txt});
            }}
          />
          <Text>Latitude</Text>
          <TextInput
            placeholder={'latitudeDelta'}
            style={{
              height: 30,
              borderColor: 'black',
              borderWidth: 1,
              width: 300,
              marginHorizontal: 30,
              marginBottom: 15,
            }}
            onChangeText={txt => {
              this.setState({latitudeDelta: txt});
            }}
          />
          <Text>Latitude</Text>
          <TextInput
            placeholder={'longitudeDelta'}
            style={{
              height: 30,
              borderColor: 'black',
              borderWidth: 1,
              width: 300,
              marginHorizontal: 30,
              marginBottom: 15,
            }}
            onChangeText={txt => {
              this.setState({longitudeDelta: txt});
            }}
          />
        </View>
        <MapView
          style={{flex: 0.7, width: '100%'}}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: parseFloat(latitude),
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}>
          <Polygon
            coordinates={this.state.coordinates}
            fillColor={'rgba(100, 200, 200, 0.3)'}
          />
          <Marker
            draggable
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title={'San Fransisco'}
          />
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default VideoList;
