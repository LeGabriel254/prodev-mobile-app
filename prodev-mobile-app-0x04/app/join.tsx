import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/signinStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* arrow-back */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.push("/")}/>
          <Image source={require('@/assets/images/logo-green.png')} />
        </View>

        {/* Instruction */}
        <Text style={styles.largeText}>Create Your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter new details to create a new account.
        </Text>

        {/* Form Group */}
        <View style={styles.formGroup}>
          {/* Email */}
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          {/* Password */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

           {/* Password */}
           <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Confirm Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
       
        </View>

        {/* Signing in Buttons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        {/* Authentication Options */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* New users */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Have an account?</Text>
          <Text style={styles.subTextJoin} onPress={() => router.push("/Sign")}>Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}