import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const BankMain = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <View style={{ padding: 20 }}>
            {/* Header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <FontAwesome5 name="bars" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>MoMo Account</Text>
            </View>

            {/* Icon Buttons */}
            <View style={{ marginTop: 20 }}>
              {/* You can create a separate component for the buttons to avoid repetition */}
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="dollar-sign" size={40} color="#333" />
                  <Text>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="exchange-alt" size={40} color="#333" />
                  <Text>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="money-bill-wave" size={40} color="#333" />
                  <Text>Loan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                  <FontAwesome5 name="mobile-alt" size={40} color="#333" />
                  <Text>Recharge</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="shopping-cart" size={40} color="#333" />
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="school" size={40} color="#333" />
                  <Text>Education</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 10 }}>
                  <FontAwesome5 name="smile" size={40} color="#333" />
                  <Text>Momo Kleva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                  <FontAwesome5 name="gift" size={40} color="#333" />
                  <Text>Rewards</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Card */}
            <View style={{ marginTop: 20 }}>
              <View
                style={{ borderWidth: 1, borderColor: "#ccc", padding: 10 }}
              >
                {/* Card Logo and Header */}
                <View
                  style={{
                    height: 50,
                    backgroundColor: "#eee",
                    marginBottom: 10,
                  }}
                ></View>

                {/* Available Balance */}
                <Text style={{ fontSize: 18, marginTop: 10 }}>
                  Available Balance
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>$5000</Text>

                {/* Card Footer */}
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1 }}>
                    <Text>Card Holder</Text>
                    <Text>M Soto</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>Expires</Text>
                    <Text>09/25</Text>
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
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 5,
                  marginRight: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 5,
                  marginRight: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 5,
                  marginRight: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 5,
                  marginRight: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 5,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Buttons */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <FontAwesome5 name="university" size={24} color="#333" />
          <Text>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <FontAwesome5 name="chart-pie" size={24} color="#333" />
          <Text>Spending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <FontAwesome5 name="plus" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <FontAwesome5 name="envelope" size={24} color="#333" />
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
          <FontAwesome5 name="robot" size={24} color="#333" />
          <Text>MoMoMate</Text>
        </TouchableOpacity>
      </View>
    </View>
    //   <View>
    //     <Text>Hello there</Text>
    //   </View>
  );
};

export default BankMain;
