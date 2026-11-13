import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState([]);

  const incrementarContador = () => {
    const nuevo = contador + 1;
    setContador(nuevo);
    setRegistros([
      {
        id: String(nuevo),
        numero: nuevo,
        hora: new Date().toLocaleTimeString(),
      },
      ...registros,
    ]);
  };
  return (
    <View>
      <View>
        

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
  }

})