import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { getUserInfo , getUserFeed } from "../services/api.service";


export default function Settings() {
  const [user, setUser] = useState({});
  const [feed, setFeed] = useState({});
  
  const get_user = async () => {
    const res = await getUserInfo(2)
    setUser(res);
    console.log(user);
  }
  const get_feed = async () => {
    const res = await getUserFeed(2)
    setFeed(res);
    console.log(feed);
  }

  useEffect(()=>{
    get_user();
    get_feed();
  },[])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <div style={styles.profileContainer}>
        <div style={styles.profilePic}>
        <Image
          source={"https://sallysbakingaddiction.com/wp-content/uploads/2013/05/strawberry-shortcake-cupcakes-2-1.jpg"}
          
          style={styles.image}
          contentFit="cover"
        />
        </div>
        <div style={styles.profileNames}>
          <div style = {styles.profileFirstName}> {user.first_name} {user.last_name} </div>
          <div style = {styles.profileFirstName}> {user.username}</div>
        </div>
      </div>
      
      <div style={styles.editProfile}>
        <Button title = "edit profile">
        </Button>
      </div>
      <div style={styles.postContainer}>
        
        { 
        feed && feed.results ? feed.results.map(x => (
          <div style = {styles.post} key = {x.url}>
          {x.post_images.length > 0 ? (
          <Image
            source={{ uri: x.post_images[0].picture }} // Use the correct source format
            style={styles.image}
            contentFit="contain"
          />
          ) : null}
          </div>
          )) : null
        }
      </div>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    marginBottom: 32,
  },
  editProfile: {
    marginBottom: 16,
  },
  postContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  post: {
    height: 100,
    width: 100,
    backgroundColor: "gray",
    marginRight: 16,
    marginBottom: 16,
  },
  profileFirstName: {
    marginBottom: 16,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  profileNames: {
    flex: 1,
  },
  profilePic: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
