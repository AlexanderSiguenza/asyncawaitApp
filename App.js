import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const DogAPI = () => {
  const [breed, setBreed] = useState('');
  const [images, setImages] = useState([]);
  const getDogImages = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
      setImages(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DogAPI</Text>
      <TextInput style={styles.input} placeholder="Enter a breed" onChangeText={setBreed} />
      <Button title="Search" onPress={getDogImages} />
      {images.length > 0 && (
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  imagesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: '45%',
    height: 150,
    margin: 5,
  },
});

export default DogAPI;

