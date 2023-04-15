import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function RecipesScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Image
            source={require('../../assets/images/banner.jpeg')}
            resizeMode={'cover'}
            style={{width: '100%', height: 200}}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Cozinha APP</Text>
          <Text style={styles.subTitle}>Receitas</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  recipeView: {
    padding: 10,
    marginBottom: 20,
    margingRight: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 7,
    shadowColor: 'black',
  },
  titleList: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'black',
  },
  contentTitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contentText: {
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    height: 70,
    backgroundColor: '#333232',
    justifyContent: 'space-around',
  },
});
