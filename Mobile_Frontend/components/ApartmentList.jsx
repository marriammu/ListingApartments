import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useApartments from "../hooks/useApartments";

const ApartmentList = () => {
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(true);
  const { apartments } = useApartments(refresh);
  const refreshList = () => {
    setRefresh(!refresh);
  };

  const handleApartmentPress = (apartment) => {
    navigation.navigate("ApartmentDetail", { apartmentId: apartment.ID });
  };
  const renderApartmentCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleApartmentPress(item)}
    >
      <View>
        <Image source={item.Image} style={styles.image} />
        <Text style={styles.compound}>{item.Compound}</Text>
        <Text style={styles.details} >{item.Area}</Text>
        <Text style={styles.space}>{`${item.RoomCount} rooms  ${item.Space} m2`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateApartment", { refreshList })}
      >
        <Text style={styles.createButtonText}>Create Apartment</Text>
      </TouchableOpacity>
      <FlatList
        data={apartments}
        renderItem={renderApartmentCard}
        keyExtractor={(item) => item.ID.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ApartmentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingTop: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  compound: {
    color:"#245282",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 16,
    marginBottom: 4,
    color:"#245282"
  },
  space: {
    fontSize: 16,

    color: "#245282",
  },
  createButton: {
    backgroundColor: "#fff",
    color :"gray",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    marginTop: 16,
  },
  createButtonText: {
    color: "#245282",
    fontSize: 16,
    fontWeight: "bold",
  },
});
