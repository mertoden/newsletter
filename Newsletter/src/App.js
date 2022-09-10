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
  //burada kullanmamın sebebi döngüyle tekrar oluşturmak zorunda kalmıyoruz.
  const renderNews = ({item}) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <FlatList
      keyExtractor={(item, index) => item.u_id.toString()}//burada flatlistimiz ekrana bakılmadığında verileri siler ihtiyaç duyuldukça çağırır ekranda göstereceklerini ayırt etmeli o yüzden gerekli.
        data = {news_data}
        renderItem={renderNews}
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
