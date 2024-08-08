import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";

function AuthLoadingScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("home");
      } else {
        navigation.replace("login/preLoginScreen");
      }
    });

    return unsubscribe;
  }, [auth, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default AuthLoadingScreen;
