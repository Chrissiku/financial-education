import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons
import Themes from "../shared/Themes";

const BankMain = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: Themes.background }}>
        <View style={styles.content}>
          {/* Header */}
          <View
            style={[
              styles.header,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={{ fontSize: 20, color: Themes.black }}>Account</Text>
          </View>

          {/* Icon Buttons */}
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons
                name="attach-money"
                size={25}
                color={Themes.black}
              />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                Top Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons
                name="swap-horizontal-circle"
                size={25}
                color={Themes.black}
              />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                Transfer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="ac-unit" size={25} color={Themes.black} />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                Freeze
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="calculate" size={25} color={Themes.black} />
              <Text
                style={{ color: Themes.black, fontSize: 10, fontWeight: "200" }}
              >
                Calculator
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconButtonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons
                name="description"
                size={25}
                color={Themes.black}
              />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                Reports
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="school" size={25} color={Themes.black} />
              <Text
                style={{ color: Themes.black, fontSize: 11, fontWeight: "200" }}
              >
                Education
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="android" size={25} color={Themes.black} />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                ChatBot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="info" size={25} color={Themes.black} />
              <Text
                style={{ color: Themes.black, fontSize: 12, fontWeight: "200" }}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>

          {/* Card */}
          <View style={{ marginTop: 20 }}>
            <View style={styles.card}>
              {/* Card Logo and Header */}
              <View
                style={{
                  height: 50,
                  backgroundColor: "#eee",
                  marginBottom: 10,
                }}
              ></View>

              {/* Available Balance */}
              <Text
                style={{ fontSize: 16, marginTop: 10, color: Themes.black }}
              >
                Available Balance
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: Themes.black,
                }}
              >
                $5000
              </Text>

              {/* Card Footer */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: Themes.black, fontSize: 12 }}>
                    Card Holder
                  </Text>
                  <Text style={{ color: Themes.black, fontSize: 14 }}>
                    M Soto
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: Themes.black, fontSize: 12 }}>
                    Expires
                  </Text>
                  <Text style={{ color: Themes.black, fontSize: 14 }}>
                    09/25
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Slide Indicators */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View style={styles.slideIndicator}></View>
            <View style={styles.slideIndicator}></View>
            <View style={styles.slideIndicator}></View>
            <View style={styles.slideIndicator}></View>
            <View style={styles.slideIndicator}></View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons
            name="account-balance"
            size={22}
            color={Themes.black}
          />
          <Text style={{ color: "#333" }}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="pie-chart" size={22} color={Themes.black} />
          <Text style={{ color: "#333" }}>Spending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="add" size={22} color={Themes.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="mail" size={22} color={Themes.black} />
          <Text style={{ color: "#333" }}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="android" size={22} color={Themes.black} />
          <Text style={{ color: "#333" }}>MoMoMate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.black,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  iconButtonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  iconButton: {
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent black background
    borderColor: Themes.black, // black border color
    borderWidth: 1, // Border width
    borderRadius: 0, // No border radius
    padding: 10,
  },
  card: {
    backgroundColor: Themes.primary, // Background color for the card
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10, // Border radius for the card
  },
  slideIndicator: {
    width: 10,
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginRight: 5,
  },
  bottomButtons: {
    flexDirection: "row",
    backgroundColor: "#eee",
    paddingVertical: 10,
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
  },
});

export default BankMain;
