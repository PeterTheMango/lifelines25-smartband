import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Image, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';


const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({
    qrCode: "",
    serialNumber: "",
    macAddress: "",
    fullName: "",
    idNumber: "",
    nationality: "",
    gender: "Male",
    dateOfBirth: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
  });

  // Add form sections for better organization
  const formSections = {
    "Device Information": ["qrCode", "serialNumber", "macAddress"],
    "Personal Information": ["fullName", "idNumber", "nationality", "gender", "dateOfBirth"],
    "Contact Information": ["phoneNumber", "addressLine1", "addressLine2"]
  };

  // Add basic validation
  const [errors, setErrors] = React.useState({});
  
  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'phoneNumber':
        return /^\+?[\d\s-]{8,}$/.test(value) ? '' : 'Invalid phone number';
      case 'dateOfBirth':
        return /^\d{4}-\d{2}-\d{2}$/.test(value) ? '' : 'Use YYYY-MM-DD format';
      case 'fullName':
        return value.length >= 2 ? '' : 'Name is required';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    console.log("Form submitted", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.confirmationScreen}>
      {/* <Link href="/">
        <Pressable>
          <Image style={styles.closeIcon} resizeMode="cover" source={require("../../assets/images/Close.png")} />
        </Pressable>
      </Link> */}
        <Text style={styles.details}>DETAILS</Text>
        <View style={styles.formContainer}>
          {Object.entries(formSections).map(([section, fields]) => (
            <View key={section} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{section}</Text>
              {fields.map((key) => (
                <View key={key} style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                    {['fullName', 'idNumber', 'phoneNumber'].includes(key) && 
                      <Text style={styles.required}> *</Text>
                    }
                  </Text>
                  {key === "gender" ? (
                    <Picker
                      selectedValue={formData[key]}
                      style={[styles.inputBox, styles.picker]}
                      onValueChange={(value) => handleInputChange(key, value)}
                    >
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                    </Picker>
                  ) : (
                    <TextInput
                      style={[
                        styles.inputBox,
                        errors[key] ? styles.inputError : null
                      ]}
                      value={formData[key]}
                      onChangeText={(text) => handleInputChange(key, text)}
                      keyboardType={key === "dateOfBirth" || key === "phoneNumber" ? "numeric" : "default"}
                      placeholder={key === "dateOfBirth" ? "YYYY-MM-DD" : ""}
                    />
                  )}
                  {errors[key] && (
                    <Text style={styles.errorText}>{errors[key]}</Text>
                  )}
                </View>
              ))}
            </View>
          ))}
          
          <Pressable 
            style={[styles.confirmButton, styles.buttonShadow]}
            onPress={handleSubmit}
          >
            <Link href="/">
              <Text style={styles.confirmButtonText}>Confirm Rescued Personnel</Text>
            </Link>
          </Pressable>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  confirmationScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  details: {
    fontSize: 36,
    fontFamily: "Inter-Regular",
    color: "#000",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "rgba(169, 172, 169, 0.5)",
    padding: 20,
    borderRadius: 25,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#000",
    marginBottom: 5,
  },
  inputBox: {
    height: 50,
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "rgba(25, 218, 25, 0.65)",
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#000",
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  required: {
    color: "red",
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
  picker: {
    backgroundColor: "#d9d9d9",
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default ConfirmationScreen;
