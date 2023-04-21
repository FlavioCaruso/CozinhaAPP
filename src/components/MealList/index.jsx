import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Beef')
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          navigation.navigate('MealDetails', {mealId: item.idMeal})
        }>
        <View style={styles.listContent}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.strMeal}</Text>
          <Image
            style={styles.tinyImg}
            source={{
              uri: item.strMealThumb,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={meals}
      renderItem={renderItem}
      keyExtractor={item => item.idMeal}
      contentContainerStyle={{paddingVertical: 10}}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000000',
    width: '100%',
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyImg: {
    width: 100,
    height: 50,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default MealList;
