import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { GluestackUIProvider } from "@gluestack-ui/themed";

import { Routes } from "./src/routes";
import { config } from "./config/gluestack-ui.config";
import { Loading } from "@components/Loading";
import { SignUp } from "@screens/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        // <Center bg="$gray700" flex={1}>
        //   <Text color="white" fontSize={34}>
        //     Ravi
        //   </Text>
        // </Center>
        <Routes />
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  );
}
