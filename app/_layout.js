import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {

  const [loaded] = useFonts({
    GeologicaMD : require("../assets/fonts/Geologica-Medium.ttf"),
    GeologicaRG : require("../assets/fonts/Geologica-Regular.ttf"),
    GeologicaTh : require("../assets/fonts/Geologica-Thin.ttf")
  })

  if(!loaded){
    return null
  }
  return <Stack />;
}
