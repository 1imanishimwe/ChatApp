import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useRoute } from "@react-navigation/native";

const MessageScreen = ({Navigate}) => {
    const [newMessage, setNewMessage] = useState('');
    const route = useRoute();
    // get user name from route
    const username = route.params?.username;
 

    const handleSendMessage = () => {
        // Logic to send the message
        console.log('Sending message:', newMessage);
        setNewMessage('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>User</Text>
            </View> 
            <ScrollView style={styles.messageContainer}>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>{username}</Text>
                            <Text style={styles.time}>2:45 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>Hello! How are you?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>2:47 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>Hi! I'm doing great, thanks!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>2:50 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>That's wonderful to hear!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>2:52 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>How about you?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>2:55 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>I'm doing well too, thanks for asking!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>3:00 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>That's great! What have you been up to lately?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>3:05 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>Oh, not much. Just been working on some personal projects. How about you?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>3:10 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>That sounds interesting! I've been traveling a bit. Just got back from a trip to the mountains.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>3:15 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>Wow, that must have been amazing! I love the mountains. Did you do any hiking?</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>3:20 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>Yes, we did! We hiked to this beautiful waterfall. The views were breathtaking.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>3:25 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>That sounds incredible! I'd love to see some pictures if you have any.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.time}>3:30 PM</Text>
                        </View>
                        <View style={styles.senderMessage}>
                            <Text style={styles.messageText}>Of course! I'll send you some later. You should join me next time!</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.messageRow}>
                    <View style={styles.userIcon}>
                        <Icon name="user-circle" size={50} color="#888" />
                    </View>
                    <View style={styles.messageInfo}>
                        <View style={styles.messageInfoRow}>
                            <Text style={styles.username}>User Name</Text>
                            <Text style={styles.time}>3:35 PM</Text>
                        </View>
                        <View style={styles.receiverMessage}>
                            <Text style={styles.messageText}>That would be awesome! I'd love to go on a hiking trip.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
                    <Icon name="send" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20, // Added margin top
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    messageContainer: {
        flex: 1,
    },
    messageRow: {
        flexDirection: 'row',
        padding: 15,
    },
    userIcon: {
        width: 50,
        height: 50,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageInfo: {
        flex: 1,
    },
    messageInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    username: {
        fontWeight: 'bold',
    },
    time: {
        color: '#888',
    },
    senderMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#0084ff',
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%',
    },
    receiverMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%',
    },
    messageText: {
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#0084ff',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MessageScreen;