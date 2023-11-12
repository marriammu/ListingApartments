
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, } from "react-native";
import apartmentCreate from "../services/apartment-create";
import { RadioButton } from "react-native-paper";

const CreateApartment = ({ route, navigation }) => {
  const [apartmentInfo, setApartmentInfo] = useState({
    id: "",
    space: "",
    area: "",
    priceRange: "",
    paymentPlan: "",
    isFurnished: false,
    roomCount: "",
    bedCount: "",
    compound: "",
    deliveryDate: "",
  });

  const handleChange = (value, key) => {
    setApartmentInfo({ ...apartmentInfo, [key]: value });
  };

  const [checked, setChecked] = useState("Yes");

  const isFormValid = () => {
    return (
      apartmentInfo.compound &&
      apartmentInfo.area &&
      apartmentInfo.space &&
      apartmentInfo.priceRange &&
      apartmentInfo.paymentPlan &&
      apartmentInfo.roomCount &&
      apartmentInfo.bedCount &&
      apartmentInfo.deliveryDate
    );
  };

  const handleCreateApartment = () => {
    if (isFormValid()) {
      apartmentCreate(apartmentInfo).then((res) => {
        if (route.params && route.params.refreshList) {
          route.params.refreshList();
        }
        navigation.navigate("ApartmentList");
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Compound"
        value={apartmentInfo.compound}
        onChangeText={(value) => handleChange(value, "compound")}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Area"
        value={apartmentInfo.area}
        onChangeText={(value) => handleChange(value, "area")}
        required
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Space"
        value={apartmentInfo.space}
        onChangeText={(value) => handleChange(value, "space")}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Price Range"
        value={apartmentInfo.priceRange}
        onChangeText={(value) => handleChange(value, "priceRange")}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Payment plan"
        value={apartmentInfo.paymentPlan}
        onChangeText={(value) => handleChange(value, "paymentPlan")}
        required
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Room count"
        value={apartmentInfo.roomCount}
        onChangeText={(value) => handleChange(value, "roomCount")}
        required
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Bed count"
        value={apartmentInfo.bedCount}
        onChangeText={(value) => handleChange(value, "bedCount")}
        required
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Delivery date [YYYY-MM-DD]"
        value={apartmentInfo.deliveryDate}
        onChangeText={(value) => handleChange(value, "deliveryDate")}
        required
      />
      <RadioButton.Group
        value={apartmentInfo.isFurnished}
        onValueChange={(value) => handleChange(value, "isFurnished")}
      >

        <View style={styles.radioButtonContainer}>
          <RadioButton value="Yes" />
          <Text>Furnished</Text>
          <RadioButton value="No" />
          <Text>Not Furnished</Text>
        </View>
      </RadioButton.Group>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateApartment}
      >
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    color: "#fff",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#245282",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 7,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  radioButtonContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
});

export default CreateApartment;
