import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { s } from "react-native-wind";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trending, setTrending] = useState([]);
  const [airing, setAiring] = useState([]);

  

  // const handleSearch = async() => {
  //   onSearch(searchText);
  // };

  useEffect(() => {
    getMovies();
    getTrending();
    getAiring();
  }, []);

  const getMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    
    
      
  };

  const getTrending = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTrending(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getAiring = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzE3M2RjMmE4MTkzNjczN2QxYjEzMDBiMmE4NDgwYiIsInN1YiI6IjYzZGEzY2YxOTU1YzY1MDBhMGVjY2FhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SD_jcyNpHjJOz9XLnAWn0j-2yuIewFUlJm2juIjkKbI",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setAiring(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
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
    <View style={s`bg-black`}>
      <View
        style={s`border border-white mt-2 w-4/5 h-7 rounded-lg ml-10 mb-3 flex-row`}
      >
        <View style={s`ml-1`}>
          <AntDesign name="search1" size={24} color="white" />
        </View>
        <TextInput style={s`ml-4`} placeholder="search movies..." />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View>
            <Text style={s`text-white text-lg font-bold ml-2`}>Trending</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedMovie(item)}
                setModalVisible={true}
              >
                <View style={s`mb-12 mt-4 ml-1 items-center justify-center`}>
                  <Image
                    style={{ height: 250, width: 180, borderRadius: 5 }}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                    }}
                  />
                  {/* <Text style={s`text-white mt-3 text-lg font-bold`}>Movie Title: {item.title}</Text> */}
                  {/* <Text style={s`text-white text-lg`}>Release Date: {item.release_date}</Text> */}
                  {/* <Text style={s`text-white`}>OVERVIEW: {item.overview}</Text> */}
                  {/* <Text style={s`text-white`}>{item.title}</Text> */}
                </View>
              </TouchableOpacity>
            )}
          />
          <View>
            <Text style={s`text-white text-lg font-bold ml-2`}>Featured</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={trending}
            renderItem={({ item }) => (
              <View style={s`mb-12 mt-4 items-center justify-center ml-1`}>
                <Image
                  style={{ height: 250, width: 180, borderRadius: 10 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                  }}
                />
                {/* <Text style={s`text-white mt-3 text-lg font-bold`}>Movie Title: {item.title}</Text> */}
                {/* <Text style={s`text-white text-lg`}>Release Date: {item.release_date}</Text> */}
                {/* <Text style={s`text-white`}>OVERVIEW: {item.overview}</Text> */}
                {/* <Text style={s`text-white`}>{item.title}</Text> */}
              </View>
            )}
          />
          <View>
            <Text style={s`text-white text-lg font-bold ml-2`}>Airing Today</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={airing}
            renderItem={({ item }) => (
              <View style={s`mb-12 mt-4 items-center justify-center ml-1`}>
                <Image
                  style={{ height: 250, width: 180, borderRadius: 10 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                  }}
                />
                {/* <Text style={s`text-white mt-3 text-lg font-bold`}>Movie Title: {item.title}</Text> */}
                {/* <Text style={s`text-white text-lg`}>Release Date: {item.release_date}</Text> */}
                {/* <Text style={s`text-white`}>OVERVIEW: {item.overview}</Text> */}
                {/* <Text style={s`text-white`}>{item.title}</Text> */}
              </View>
            )}
          />
        </SafeAreaView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedMovie?.title}</Text>
          <Text style={styles.modalOverview}>{selectedMovie?.overview}</Text>
          {/* Add more movie information in the modal as needed */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalOverview: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
