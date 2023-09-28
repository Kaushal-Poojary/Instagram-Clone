import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/instagram-header.png")} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/plus-icon.png")}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.iconStyle}
            source={require("../../assets/heart-icon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
            <View style = {styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
            </View>
          <Image
            style={styles.iconStyle}
            source={require("../../assets/messenger-icon.png")}
          />
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row", 
        marginHorizontal: 20,
    },
    iconsContainer: {
        flexDirection: "row",
    },
    iconStyle: {
        width: 30, 
        height: 30, 
        resizeMode: "contain",
        marginLeft: 10,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    unreadBadge: {
        backgroundColor: "#FF3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        zIndex: 100,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: "600",
    },
});

export default Header;
