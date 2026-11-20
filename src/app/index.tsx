
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

type Registro = {
  id: string;
  numero: number;
  hora: string;
};

export default function App() {
  // Estados del contador y del historial
  const [contador, setContador] = useState<number>(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Agregar Like
  const incrementarContador = () => {
    const nuevo = contador + 1;
    setContador(nuevo);

    const nuevoRegistro: Registro = {
      id: String(nuevo),
      numero: nuevo,
      hora: new Date().toLocaleTimeString(),
    };

    setRegistros((anteriores) => [
      nuevoRegistro,
      ...anteriores,
    ]);
  };

  // Restar Like
  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  // Reiniciar contador e historial
  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  // Cambiar color al superar los 10 Likes
  const colorContador = contador > 10 ? "#0D47A1" : "#1976D2";

  return (
    <View style={estilos.body}>
      <View style={estilos.tarjeta}>

        {/* Título */}
        <Text style={estilos.titulo}>
          Contador de Likes
        </Text>

        <Text style={estilos.descripcion}>
          Presiona los botones para modificar el contador.
        </Text>

        {/* Contador */}
        <Text style={[estilos.counterBox, { color: colorContador }]}>
          {contador}
        </Text>

        {/* Mensaje al superar los 10 Likes */}
        {contador > 10 && (
          <Text style={estilos.mensaje}>
            ¡Has superado los 10 Likes!
          </Text>
        )}

        {/* Botones */}
        <View style={estilos.filaBotones}>

          <TouchableOpacity
            style={estilos.btnClick}
            onPress={incrementarContador}
          >
            <Text style={estilos.btnText}>
              + Agregar Like
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.btnRestar}
            onPress={restarContador}
          >
            <Text style={estilos.btnText}>
              - Restar Like
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.btnReiniciar}
            onPress={reiniciarContador}
          >
            <Text style={estilos.btnText}>
              Reiniciar contador
            </Text>
          </TouchableOpacity>

        </View>

        {/* Historial */}
        <View style={estilos.historialContainer}>

          <Text style={estilos.subtitulo}>
            Historial de Likes
          </Text>

          {/* Encabezado de la tabla */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>
              N.º Clic
            </Text>

            <Text style={[estilos.th, estilos.cellHora]}>
              Hora
            </Text>
          </View>

          {/* Filas del historial */}
          <ScrollView style={estilos.tableBody}>
            {registros.length === 0 ? (
              <View style={estilos.filaVacia}>
                <Text style={estilos.textoVacio}>
                  Aún no hay Likes registrados
                </Text>
              </View>
            ) : (
              registros.map((item, index) => (
                <View
                  key={item.id}
                  style={[
                    estilos.tr,
                    index % 2 === 0 ? estilos.trEven : null,
                  ]}
                >
                  <Text style={[estilos.td, estilos.cellNumero]}>
                    {item.numero}
                  </Text>

                  <Text style={[estilos.td, estilos.cellHora]}>
                    {item.hora}
                  </Text>
                </View>
              ))
            )}
          </ScrollView>

        </View>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  // Tarjeta principal
  tarjeta: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#0D47A1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  // Título
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0D47A1",
    textAlign: "center",
  },

  descripcion: {
    fontSize: 14,
    color: "#607D9B",
    marginVertical: 15,
    textAlign: "center",
  },

  // Contador
  counterBox: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },

  mensaje: {
    color: "#0D47A1",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },

  // Botones
  filaBotones: {
    width: "100%",
    gap: 10,
  },

  btnClick: {
    backgroundColor: "#1976D2",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  btnRestar: {
    backgroundColor: "#42A5F5",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  btnReiniciar: {
    backgroundColor: "#0D47A1",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Contenedor del historial
  historialContainer: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#0D47A1",
    textAlign: "center",
  },

  // Encabezado
  tableHeader: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#0D47A1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  th: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    padding: 15,
    textAlign: "center",
  },

  // Cuerpo de la tabla
  tableBody: {
    width: "100%",
    maxHeight: 280,
    backgroundColor: "#F4F9FF",
  },

  // Filas del historial
  tr: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#D6E7F8",
    minHeight: 55,
    alignItems: "center",
  },

  trEven: {
    backgroundColor: "#EAF3FC",
  },

  td: {
    color: "#174A7E",
    fontSize: 15,
    padding: 15,
    textAlign: "center",
  },

  // Mensaje cuando no hay registros
  filaVacia: {
    width: "100%",
    minHeight: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F9FF",
  },

  textoVacio: {
    color: "#7895B3",
    fontSize: 14,
    fontStyle: "italic",
  },

  // Distribución de columnas
  cellNumero: {
    flex: 1,
  },

  cellHora: {
    flex: 1.5,
  },

});
