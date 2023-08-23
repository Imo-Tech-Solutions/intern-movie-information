import { useState, useEffect } from "react";
import {Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { s } from "react-native-wind";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';

export default function Page() {
  const [movies, setMovies] = useState([]);

  const [searchText, setSearchText] = useState('');

  // const handleSearch = async() => {
  //   onSearch(searchText);
  // };

  useEffect(() => {
    getMovies();
  }, [])

  
const getMovies = async ()=>{
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      setMovies(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
}
//   const day = () => {
//     const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI'
//   }
// };

// axios
//   .request(options)
//   .then(response => {
//     setMovies(response.data.results)
//     console.log(response.data.results);
//   })
//   .catch( error => {
//     setMovies('error fetching data')
//     console.error(error);
// });
//   }


  return (
    <View style={s `bg-black`}>
      <View style={s`border border-white mt-2 w-4/5 h-7 rounded-lg ml-10 mb-3 flex-row`}>
        <View style={s`ml-1`}>
          <AntDesign name="search1" size={24} color="white" />
        </View>
        <TextInput 
          style={s`ml-4`}
          placeholder = 'search movies...'
        />
      </View>
    <SafeAreaView>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={movies}
      renderItem={({item}) => (
        <View style={s`mb-12 mt-4`}>
          <Image style={s`w-full h-60`} source={{uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`}} />
          {/* <Text style={s`text-white`}>{item.title}</Text> */}
          <Text style={s`text-white text-xl font-bold`}>Title: {item.original_title}</Text>
          <Text style={s`text-white`}>OVERVIEW: {item.overview}</Text>
          {/* <Text style={s`text-white`}>{item.title}</Text> */}
        </View>
      )}
      />
    </SafeAreaView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
