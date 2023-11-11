import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import useApartment from "../hooks/useAprtment";

const ApartmentDetail = ({ route }) => {
  const { apartmentId } = route.params;
  const { apartment, isLoading } = useApartment(apartmentId);
  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Image source={apartment.Image} style={styles.image} />
      <Text style={styles.compound}>{`${apartment.Compound} - ${apartment.Area}`}</Text>
      <Text style={styles.area}>{`${apartment.RoomCount} rooms  ${apartment.Space} m2`}</Text>
      
      <Text style={styles.furnished}>{`Furnished: ${apartment.IsFurnished}`}</Text>
      <Text style={styles.price}>{apartment.PriceRange}</Text>
      <Text style={styles.paymentplan}>{apartment.PaymentPlan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  compound: {
    marginRight:60,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color:"#245282"
  },
  area: {
    marginRight:"45%",
    marginBottom: 4,
    color:"#245282"
  },
  details: {

    fontSize: 16,
    marginBottom: 4,
    color:"#245282"
  },
  furnished: {
    color:"#245282"
  },
  paymentplan: {
    color:"#245282"
  },
  price: {
    fontSize: 16,
    // fontWeight: "bold",
    color:"#245282"
  },
});

export default ApartmentDetail;
