import { useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
    const dummy = [
        {
            name: "Rahma",
            email: "rahma@mail.com",
            phoneNumber: "08123456789"
        },
        {
            name: "Mira",
            email: "mira@mail.com",
            phoneNumber: "08123456789"
        },
        {
            name: "Kadin",
            email: "kadin@mail.com",
            phoneNumber: "08123456789"
        }
    ]

    const [contacts, setContacts] = useState([])

    return (
        <SafeAreaView
        style={{
            flex:1
        }}
        >
        <View
            style={{
                marginHorizontal: 15,
                flex: 1,
                justifyContent: "flex-start"
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Text style={styles.h1}>
                    Contacts
                </Text>
                <TouchableOpacity
                    style={{
                        alignSelf: "center"
                    }}
                >
                    <Ionicons name="add-circle-outline" size={35}/>
                </TouchableOpacity>

            </View>
            <FlatList
                data={dummy}
                keyExtractor={(item, index) => index}
                renderItem={(props) => {
                    return (
                        <View
                            style={{
                                borderBottomColor: "#D3D3D3",
                                borderBottomWidth: 1,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <View>
                                <Text
                                    style={styles.name}
                                >
                                    {props.item.name}
                                </Text>
                                <Text
                                    style={{
                                        marginBottom: 5
                                    }}
                                >
                                    {props.item.email}
                                </Text>
                                <Text
                                    style={{
                                        marginBottom: 5
                                    }}
                                >
                                    {props.item.phoneNumber}
                                </Text>

                            </View>

                            <View
                            style={{
                                display:"flex",
                                flexDirection: "row",
                                gap: 2,
                                alignItems: "center"
                            }}
                            >
                                <TouchableOpacity>
                                    <Ionicons name="create" size={25} color={"#4052d6"} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <Ionicons name="trash" size={25} color={"#d20a2e"} />
                                </TouchableOpacity>
                            </View>
                        </View >
                    )
                }}
            >
            </FlatList>
        </View>
        </SafeAreaView>
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
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        marginVertical: 20
    },
    button: {
        backgroundColor: "#2563eb",
        padding: 12,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderRadius: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        marginVertical: 5
    }

});