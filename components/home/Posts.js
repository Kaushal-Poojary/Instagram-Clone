import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const Posts = ({ post }) => {
  return (
    <View style={styles.container} >
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={headerStyles.headerContainer}>
      <TouchableOpacity style={{marginTop: 5}}>
        <View style={headerStyles.wrap}>
            <Image source={{uri: post?.profile_picture}} style={headerStyles.avatar} />
            <Text style={headerStyles.headerText}>{post?.user}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginRight: 5}}>
        <Text style={headerStyles.headerText}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ post }) => {
  
  // Set the initial dimensions of the image
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  let imageAspectRatio = 1;
  
  // Get the dimensions of the image
  const handleImageLoad = (event) => {
    const { width, height } = event.nativeEvent.source;
    setImageDimensions({ width, height });
  };

  // Set the aspect ratio for the image
  imageAspectRatio = imageDimensions.width / imageDimensions.height;

  return (
    <View style={[imageStyles.imageContainer, { aspectRatio: imageAspectRatio ? imageAspectRatio : 16/9 }]}>
      <Image source={{ uri: post?.imageUrl }} style={imageStyles.postImage} onLoad={handleImageLoad} />
    </View>
  )
}

const headerStyles = StyleSheet.create({
    headerContainer: {
      margin: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatar: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 10,
      borderWidth: 1.3,
      borderColor: "#ff8501",
    },
    headerText: {
      color: 'white',
      marginLeft: 5,
      fontWeight: '700',
    },
    wrap: {
      flexDirection: 'row',
      alignItems: 'center',
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        marginBottom: 30,
    },
});

const imageStyles = StyleSheet.create({
    postImage: {
        resizeMode: "cover",
        flex: 1
    },
    imageContainer: {
    },
});

export default Posts;
