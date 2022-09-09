import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,//FlatList compnenti gelen fazla veriyi kullanıcı ne kadarını görecekse o kadarını ekrana basıyor.
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import NewsCard from './Components/NewsCard';
import news_data from './news_data.json'

function App() {


  return (
    <SafeAreaView style={styles.container}>
      <View>
      <FlatList
        data = {news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
