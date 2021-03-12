import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Slider from "@react-native-community/slider";

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!#$!@$%@#@";

export default function App() {
  const [passoword, setPassoword] = useState("");
  const [size, setSize] = useState(5);

  function gerarSenha() {
    let pass = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));

      setPassoword(pass);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}> {size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          maximumTrackTintColor="#000"
          minimumTrackTintColor="#ff0000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={gerarSenha}>
        <Text style={styles.btnText}>Gerar Senha</Text>
      </TouchableOpacity>

      {passoword !== "" && (
        <View style={styles.area}>
          <Text style={styles.passoword}>{passoword}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 80,
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fFA200",
    height: 50,
    borderRadius: 80,
    marginBottom: 25,
  },
  btnText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  passoword: {
    padding: 15,
    textAlign: "center",
    fontSize: 20,
  },
});
