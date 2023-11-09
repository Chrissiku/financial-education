import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Theme from "../../common/Theme";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

const LoginScreen = () => {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "107008752535-q5nmfelv64cs3b7vf2mj00dhupluckgu.apps.googleusercontent.com",
    expoClientId:
      "107008752535-st5v0a915dhmnp7bu6jjajnicfcj5psj.apps.googleusercontent.com",
  });

  return (
    <View>
      <View>
        <Image
          style={{ width: "100%", height: 300 }}
          source={require("../../assets/images/login.png")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Start your Financial education Today
        </Text>
        <Text style={styles.loginText}>Login or Sign-Up</Text>
      </View>
      <TouchableOpacity onPress={() => promptAsync()} style={styles.button}>
        <Ionicons name="logo-google" size={24} color={Theme.white} />
        <Text style={{ color: Theme.white }}>Proceed with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginTop: -25,
    backgroundColor: Theme.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
  button: {
    backgroundColor: Theme.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 10,
    margin: 30,
    display: "flex",
    borderRadius: 10,
  },
});

export default LoginScreen;
