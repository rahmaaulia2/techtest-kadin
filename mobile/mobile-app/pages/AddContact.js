import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddContact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <View>
            <Text style={styles.h1}>
                Add New Contact
            </Text>
            <TextInput
                placeholder="name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="phoneNumber"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
            >
                <Text 
                style= {{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                }}
                >
                    Add Contact
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#f2f2f2",
        padding: 12,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 5,
    },
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    button: {
        backgroundColor: "#2563eb",
        padding: 12,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderRadius: 5,
    }
});