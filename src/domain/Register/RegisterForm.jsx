import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HemovisionLogo } from "src/components/hemovision-logo";
import { Input } from "src/components/input";
import Checkbox from "expo-checkbox";
import { colors } from "src/theme/colors";

export function RegisterForm({ navigation }) {
    const [text, onChangeText] = useState("Useless Text");
    const [isChecked, setChecked] = useState(false);
    return (
        <>
            <View className="self-center absolute top-16">
                <HemovisionLogo />
            </View>

            <ScrollView className="mt-48 px-12" centerContent="true">
                <Input
                    textContentType="emailAddress"
                    borderColor="#EF4444"
                    iconColor="#EF4444"
                    placeholder="Email"
                    iconName="account-outline"
                ></Input>
                <Input
                    placeholder="Senha"
                    iconName="account-outline"
                    secureTextEntry={true}
                ></Input>
                <Input
                    placeholder="Email"
                    iconName="email-outline"
                    secureTextEntry={true}
                ></Input>
                <Input
                    placeholder="Data dea niversário"
                    type="date"
                    iconName="cake-variant-outline"
                    secureTextEntry={true}
                ></Input>
                <Input
                    placeholder="Senha"
                    iconName="lock-outline"
                    secureTextEntry={true}
                ></Input>
                <Input
                    placeholder="Repetir a senha"
                    iconName="lock-outline"
                    secureTextEntry={true}
                ></Input>
                <View className="flex-row flex items-center my-4">
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={colors.primary}
                    />
                    <Text className="ml-2">
                        I accept the{" "}
                        <Text
                            style={{ color: colors.primary }}
                            className="font-medium"
                        >
                            terms of use{" "}
                        </Text>
                        of the application
                    </Text>
                </View>

                <View className="bottom-0 flex flex-1 mt-6 ">
                    <View className="flex flex-1 ">
                        <TouchableOpacity
                            className="justify-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 w-full h-14 font-bold"
                            style={{ backgroundColor: "#EF4444" }}
                        >
                            <Text className="text-white uppercase">
                                REGISTRAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        className="flex items-center   py-4"
                        style={{ color: "#6B6B6B" }}
                    >
                        <Text className=" ">
                            Já possuiuma conta?{" "}
                            <Text
                                className="font-medium  h-48 "
                                style={{ color: "#EA5A44" }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Fazer login
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
