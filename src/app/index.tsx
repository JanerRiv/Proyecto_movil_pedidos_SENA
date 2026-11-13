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
        
        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          {/* Cabecera de la tabla */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

           {/* Cuerpo de la tabla con scroll */}
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>
                  {item.numero}
                </Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}

          </ScrollView>
        </View>

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
tableContainer: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    overflow: "hidden",
  },

tr: {
    backgroundColor: "#ffffff",

  },
trEven: {
    backgroundColor: "#fafafa",
  },
th: {
    color: "#7f8c8d",
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },
td: {
    color: "#333",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },

})