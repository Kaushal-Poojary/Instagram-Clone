import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({ icon }) => {
        return (
            <TouchableOpacity onPress = {() => setActiveTab(icon.name)}>
                <Image source={{uri: activeTab == icon.name ? icon.active : icon.inactive }} style={styles.icon} />
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <Divider width={1} orientation="vertical" />
            <View style={styles.icon_container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    icon_container: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        height: 50,
        alignItems: 'center',
    },
    icon: {
        width: 30, 
        height: 30
    }
});

export default BottomTabs;
