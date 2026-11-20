
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native";


export default function App() {
  
  return (
    <View style={estilos.body}>
      
        {/* Título */}
        <Text style={estilos.titulo}>
          Pedidos SENA
        </Text>

        <View style={estilos.cajaPedido}>
          <text style={estilos.tituloPe}>
            Hamburgueza
          </text>
          <text style={estilos.tituloPre}>
            $15000
          </text>
          <TouchableOpacity style={estilos.contador}>
            <text style={estilos.estilo_contador}>+</text>
          </TouchableOpacity>
          <text></text>

            <text style={estilos.estilo_contador}>+</text>
          
        </View>
      
      
    
    </View>
      
  );
}

// Estilos de la aplicación
const estilos = StyleSheet.create({

  // Fondo principal
  body: {
    flex: 1,
    backgroundColor: "#EAF3FC",
    padding: 20,
  },

  // Título
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0D47A1",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },

  //caja de amburgueza
  cajaPedido: {
    backgroundColor: "#598fdf",
    borderRadius: 16,
    width: '85%',
    height: 150,
    alignSelf: 'center',
    marginTop: 120
  },
  //titulo pedido 
  tituloPe:{
    textAlign: "center",
    marginTop: 10
  },
  //titulo precio de el pedido
  tituloPre:{
    textAlign: "center",
  },

  //contador (+)
  contador:{
    backgroundColor: "#004fc5",
    borderRadius: '10px',
    width: 30,
    height: 20,
    flexDirection: 'row',
  },

  //estilo del contador
  estilo_contador:{
    
  },

  //resta (-)
  resta:{

    backgroundColor: "#004fc5",
    borderRadius: '10px',
    width: 30,
    height: 20,
  }



});

