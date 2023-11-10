import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Themes from "../shared/Themes";

const BankMain = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: Themes.background }}>
        <View style={styles.content}>
          {/* Header */}
          <View style={[styles.header, { justifyContent: "center", alignItems: "center" }]}>
            <Text style={{ fontSize: 20, color: Themes.white }}>Account</Text>
          </View>

          {/* Icon Buttons */}
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="bank-plus" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="swap-horizontal-bold" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="snowflake" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>Freeze</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="calculator-variant" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 10, fontWeight: "200" }}>Calculator</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconButtonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="file-document-outline" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="school-outline" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 11, fontWeight: "200" }}>Education</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="robot" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>ChatBot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons name="information-outline" size={25} color={Themes.white} />
              <Text style={{ color: Themes.white, fontSize: 12, fontWeight: "200" }}>Details</Text>
            </TouchableOpacity>
          </View>

          {/* Card */}
          <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.card}>
              {/* Card Logo and Header */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                {/* Debit Text on the far left */}
                <Text style={{ color: Themes.black, fontSize: 14 }}>Debit</Text>
              </View>

              {/* Wifi Icon in the center with styling */}
              <View style={{ alignItems: "center" }}>
                <AntDesign name="wifi" size={30} color={Themes.white} style={{ marginBottom: 10 }} />
              </View>

              {/* Available Balance */}
              <Text style={{ fontSize: 16, marginTop: 10, color: Themes.black }}>Available Balance</Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", color: Themes.black }}>$5000</Text>

              {/* Card Footer */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: Themes.black, fontSize: 12 }}>Card Holder</Text>
                  <Text style={{ color: Themes.black, fontSize: 14 }}>M Soto</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: Themes.black, fontSize: 12 }}>Expires</Text>
                  <Text style={{ color: Themes.black, fontSize: 14 }}>09/25</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom Buttons */}
          <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="bank-outline" size={22} color={Themes.black} />
              <Text style={{ color: "#333" }}>Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="chart-pie" size={22} color={Themes.black} />
              <Text style={{ color: "#333" }}>Spending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="plus" size={22} color={Themes.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="email-outline" size={22} color={Themes.black} />
              <Text style={{ color: "#333" }}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="human-greeting" size={22} color={Themes.black} />
              <Text style={{ color: "#333" }}>MoMoMate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    borderColor: Themes.white,
    borderWidth: 1,
    borderRadius: 0,
    padding: 10,
  },
  card: {
    backgroundColor: Themes.card,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    width: "70%",
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
