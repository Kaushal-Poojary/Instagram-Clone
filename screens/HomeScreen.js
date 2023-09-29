import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Posts from "../components/home/Posts";

import { posts } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Header />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
            <Posts post={post} />
            ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});

export default HomeScreen;
