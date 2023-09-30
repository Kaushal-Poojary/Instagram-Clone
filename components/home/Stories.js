import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { users } from "../../data/users";


const Stories = () => {
    return (
      <View style={{marginBottom: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {users.map((story, index) => (
                <TouchableOpacity style={styles.storyContainer} activeOpacity={0.7} key={index}>
                    <Image source={{uri: story.imageUrl}} style={styles.story}/>
                    <Text style={styles.name}>
                        {story.name.length > 8 ? story.name.slice(0,8).toLowerCase() + "... " : story.name.toLowerCase()}
                        </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: "#ff8501",
    },
    name: {
        color: "white",
        textAlign: "center",
    },
    storyContainer: {
        alignItems: "center",
    },
});

export default Stories;
