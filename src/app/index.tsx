import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  //estado y función del contador
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

        <Text style={estilos.counterBox}>{contador}</Text>

        {/* Botón disparador de eventos */}
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
        

        

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
  },
    counterBox: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  btnClick: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

})