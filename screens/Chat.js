  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

  const ChatScreen = ({ navigation }) => {
      return(
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>ChatNow</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.Online}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
            <Icon name="user-circle" size={70} color="black" />
            <Text style={styles.username}>User4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
            <Icon name="user-circle" size={70} color="black" />
            <Text style={styles.username}>User5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
              <Icon name="user-circle" size={70} color="black" />
              <Text style={styles.username}>User8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Messages')}>
            <Icon name="user-circle" size={70} color="black" />
            <Text style={styles.username}>User9</Text>
            </TouchableOpacity>
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
          <Text>Goo</Text>
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