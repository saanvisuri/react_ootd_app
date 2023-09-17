import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, Modal, Pressable, View } from "react-native";
import { getUserFeed } from "../services/api.service";
import { useState, useEffect } from "react";
import Post from "../components/post"

export default function Home() {
  const [feed, setFeed] = useState({});
  
  
  const get_feed = async () => {
    const res = await getUserFeed(2)
    setFeed(res);
    console.log(feed);
  }
  
  useEffect(()=>{
    get_feed()
  },[])
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home Screen</Text>
      
      { 
        feed && feed.results ? feed.results.map(x => (
          <Post post = {x} key = {x.url}>

          </Post>
          )) : null
      } 
      <StatusBar style="auto" />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
   // flex: 1,
    backgroundColor: "#fff",
  //  alignItems: "center",
  //  justifyContent: "center",
  },
});
