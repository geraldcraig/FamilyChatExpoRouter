import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function ChatListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#555',
  },
  timestamp: {
    color: '#777',
  },
  image: {
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 50,
    width: 50,
    marginRight: 10
  }
});
