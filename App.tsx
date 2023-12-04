import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import Video from 'react-native-video';

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 300, width: '100%'}}>
        {!hidden && (
          <Video
            style={{height: 300, width: '100%'}}
            source={{
              uri: 'https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4',
            }}
            controls
            paused={false}
          />
        )}
      </View>

      <TouchableOpacity
        style={{padding: 20, backgroundColor: hidden ? 'red' : 'green'}}
        onPress={() => setHidden(!hidden)}>
        <Text>Video: {hidden ? 'Unmounted' : 'Mounted'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
