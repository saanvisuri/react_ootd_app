import React, { useState } from "react";
import { StyleSheet, View, Alert, Modal, Text, Pressable } from "react-native";
import { Image } from "expo-image";

const Post = ({ post }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {post.post_images.length > 0 ? (
        <View style={styles.post}>
          <Image
            source={{ uri: post.post_images[0].picture }} // Use the correct source format
            style={styles.image}
            contentFit="contain"
          />
          <Text style={styles.caption}>{post.post_images[0].caption}</Text>
          <View style={styles.author}>
            <Text>{post.author_info.username}</Text>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      {post.comments.map((comment) => (
                        <Text key={comment.url}>{comment.text}{'\n'}</Text>
                      ))}
                    </Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Comments</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>{post.comments.length}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

// Rest of the styles...

export default Post;

// styles
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  post: {
    width : "100%"
  },
  caption: {
    textAlign: "center"
  },
  author: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  image: {
    //flex: 1,
    width: "100%",
    height: "240px",
    backgroundColor: "#0553",
  },
});
