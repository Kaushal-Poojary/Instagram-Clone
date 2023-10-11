import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";

// Import components
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Posts from "../components/home/Posts";
import BottomTabs from "../components/home/BottomTabs";

// Import data
import { posts } from "../data/posts";
import { bottomTabIcons } from "../data/bottom-tabs";

const HomeScreen = ({navigation}) => {
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
      <BottomTabs icons = {bottomTabIcons} navigation = {navigation} />
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
