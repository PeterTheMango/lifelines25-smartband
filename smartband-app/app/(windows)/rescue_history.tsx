import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';


const RescueHistory = () => {
  const navigation = useNavigation();

  const historyData = [
    {
      name: "Bob Smith",
      macAddress: "cb:f2:90:5e:3b:fb",
      timestamp: "2024-12-29 06:12:45.30 UTC",
    },
    {
      name: "Alice Johnson",
      macAddress: "aa:b2:34:cd:5f:90",
      timestamp: "2024-12-30 07:45:21.50 UTC",
    },
    {
      name: "Charlie Brown",
      macAddress: "ff:e3:22:ab:8d:11",
      timestamp: "2024-12-31 09:30:10.15 UTC",
    },
    {
      name: "Diana Prince",
      macAddress: "ee:a1:b2:c3:d4:e5",
      timestamp: "2024-12-31 10:15:00.20 UTC",
    },
    {
      name: "Edward Stone",
      macAddress: "11:22:33:44:55:66",
      timestamp: "2024-12-31 11:20:30.40 UTC",
    },
    {
      name: "Frank Castle",
      macAddress: "aa:bb:cc:dd:ee:ff",
      timestamp: "2024-12-31 12:45:15.60 UTC",
    },
    {
      name: "Grace Kelly",
      macAddress: "12:34:56:78:90:ab",
      timestamp: "2024-12-31 13:30:20.80 UTC",
    },
    {
      name: "Henry Ford",
      macAddress: "cd:ef:12:34:56:78",
      timestamp: "2024-12-31 14:15:40.90 UTC",
    },
    {
      name: "Iris West",
      macAddress: "90:ab:cd:ef:12:34",
      timestamp: "2024-12-31 15:20:50.10 UTC",
    },
    {
      name: "Jack Ryan",
      macAddress: "56:78:90:ab:cd:ef",
      timestamp: "2024-12-31 16:40:10.30 UTC",
    },
    // Add more entries to demonstrate scrolling
    // ... 10 more entries with similar pattern
  ];

  return (
    <View style={styles.rescueHistory}>
      {/* <Link href="/">
      <Pressable onPress={() => navigation.navigate('/')}>
        <Image style={styles.closeIcon} resizeMode="cover" source={require("../../assets/images/Close.png")} />
      </Pressable>
      </Link> */}
      <Text style={styles.historyTitle}>History</Text>
      <ScrollView contentContainerStyle={styles.historyScrollContainer}>
        <View style={styles.historyContainer}>
          {historyData.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.detailText}>{item.macAddress}</Text>
              <Text style={styles.detailText}>{item.timestamp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rescueHistory: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  historyTitle: {
    marginTop: 20,
    fontSize: 36,
    fontFamily: "Inter-Regular",
    color: "#000",
    textAlign: "center",
  },
  historyScrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 40, // Add extra padding at bottom for better scrolling
  },
  historyContainer: {
    width: 350,
    backgroundColor: "rgba(169, 172, 169, 0.5)",
    borderRadius: 25,
    padding: 20,
    gap: 10,
    minHeight: 'auto', // Allow container to grow with content
  },
  historyItem: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#000",
  },
  detailText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
  },
});

export default RescueHistory;
