import React, {useState, useEffect} from 'react';
import {Image, Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import axios from 'axios';

const MealDetailsScreen = ({route}) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const mealId = route.params.mealId;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => {
        setMeal(response.data.meals[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [route.params.mealId]);

  if (!meal) {
    return null;
  }

  return (
    <ScrollView style={{flex: 1, padding: 10, marginBottom: 50}}>
      <StatusBar />
      <Image
        style={styles.mealImg}
        source={{
          uri: meal.strMealThumb,
        }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          margin: 20,
        }}>
        {meal.strMeal}
      </Text>
      <Text style={styles.mealText}>{meal.strInstructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mealImg: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  mealText: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowRadius: 10,
  },
});

export default MealDetailsScreen;
