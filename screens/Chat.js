  import { StatusBar } from 'expo-status-bar';
  import {React, useEffect, useState} from 'react';
  import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import AsyncStorage from '@react-native-async-storage/async-storage';


  const ChatScreen = ({ navigation }) => {
        const [username, setUsername] = useState('N/A')
        const [users, setUsers] = useState({})
        const url = 'http://127.0.0.1:8000/api';
        useEffect(() => {
          getSavedData()
          const interval = setInterval(() => {
            getUsers();
          }, 1000);
          return () => clearInterval(interval);
        }, [])

        // get saved user data in async storage
      const getSavedData = async () => {
         const user_name = await AsyncStorage.getItem('userName')
         setUsername(user_name)
       
      }

      // get all users
      const getUsers = async () => {
        // console.log("tested")
        const user_id = AsyncStorage.getItem('userId')
     fetch(`http://192.168.88.250:8000/api/get-users/${user_id}`)
     .then(response => response.json())
     .then(data => {
       setUsers(data)
      //  console.log(users[0].username)
        // console.log(data[0].email)
     })
     .catch(error => {
      console.error('Error:', error);
     })
           
        
      }
      return(
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>ChatNow</Text>
              {/* display username */}
              <Text style={styles.user_name}>{username}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.Online}>
            {/* display user from seted users */}
            {users && Array.isArray(users) && users.map((user, _index) => (
              <TouchableOpacity key={_index} style={styles.iconContainer} onPress={() => navigation.navigate('Messages', { username: user.username })}>
                <Icon name="user-circle" size={70} color="black" />
                <Text style={styles.username}>{user.username}</Text>
              </TouchableOpacity>
            ))}

            
           
          
          </View>
        </ScrollView>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Online')}>
          {/* <Text>Goo</Text> */}
        </TouchableOpacity>
      
        <View>
          <Text style={styles.Title}>Messages</Text>
        </View>

        <ScrollView>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
          <View style={styles.Usermessage}>
          <Icon name="user-circle" size={70} color="black" />
              <View style={styles.UsermessageContainer}>
                <View style={styles.UserInfoRow}>
                  <Text style={styles.Username}>User Name</Text>
                  <Text style={styles.Time}>10:30 AM</Text>
                </View>
                <View style={styles.MessageRow}>
                  <Text style={styles.Message}>Last Message</Text>
                  <View style={styles.ReadStatus}></View>
                </View>
              </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
          <View style={styles.Usermessage}>
             <Icon name="user-circle" size={70} color="black" />
              <View style={styles.UsermessageContainer}>
                <View style={styles.UserInfoRow}>
                  <Text style={styles.Username}>User Name</Text>
                  <Text style={styles.Time}>2:45 PM</Text>
                </View>
                <View style={styles.MessageRow}>
                  <Text style={styles.Message}>Last Message</Text>
                  <Icon name="check-circle" size={20} color="green" style={styles.ReadStatus} />
                </View>
              </View>
          </View>
        </TouchableOpacity>
         
        </ScrollView>

 
      </View>
      );
  }



  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 10,
        marginBottom: 10,
      },
      headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
      },
      searchInput: {
        flex: 1,
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
      },
      searchButton: {
        marginLeft: 10,
        padding: 16,
        backgroundColor: '#e0e0e0',
        borderRadius: 25,
      },
      user_name: {
        marginLeft: 10,
        padding: 16,
        fontSize: 22
        // backgroundColor: '#e0e0e0',
        // borderRadius: 25,
      },
      scrollView: {
        flexGrow: 0,
      },
      Online: {
        flexDirection: 'row',
        paddingVertical:5,
        marginTop:10,
      },
      iconContainer: {
        margin: 5,
        alignItems: 'center',
      },
      username: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
      },
      Usermessage:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      UsermessageContainer:{
        marginHorizontal:10,
        flex: 1,
      },
      UserInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      MessageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      Username:{
        fontSize:15,
      },
      Message:{
        fontSize:10,
        color:'gray',
      },
      Time: {
        fontSize: 12,
        color: 'gray',
      },
      ReadStatus: {
        width: 20,
        height: 20,
        borderRadius:10,
        backgroundColor: 'gray',
      },
      Title:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
        marginLeft:10,
      },
      camera: {
        flex: 1,
        width: '100%',
        height: 300,
      },
      cameraButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
      },
      cameraButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
      },
      cameraButtonText: {
        fontSize: 18,
        color: 'black',
      },
      settingsDropdown: {
        position: 'absolute',
        right: 10,
        top: 80,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        zIndex: 1000,
      },
      settingsItem: {
        padding: 10,
      },
    });

  export default ChatScreen;