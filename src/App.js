import React, {useState, setState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, Keyboard} from 'react-native';
import {EmptyList, NoteBox, Note} from './components';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [count, setCount] = useState(0);
  const [noteList, setNoteList] = useState([]);
  const renderNote = ({item}) => (
    <Note data={item} onLongPress={deleteNote} onPress={changeNoteCount}/>
  );
  function deleteNote(id, isDone) {
    !isDone && decCount();
    setNoteList(noteList.filter((_, i) => noteList[i].id !== id));
  }
  function addTodo(item) {
    setNoteList([...noteList, item]);
    incCount();
    Keyboard.dismiss();
  }
  function decCount() {
    setCount(count - 1);
  }
  function incCount() {
    setCount(count + 1)
  }
  function changeNoteCount(isDone) {
    isDone ? incCount() : decCount();
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.logo}>TODO</Text>
          <Text style={styles.counter}>{count}</Text>
        </View>
        <FlatList
          ListEmptyComponent={<EmptyList />}
          keyExtractor={(item, index) => index.toString()}
          data={noteList}
          renderItem={renderNote}
          testID="list"
        />
        <NoteBox onAdd={addTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logo: {
    color: '#e76f51',
    fontWeight: 'bold',
    fontSize: 40,
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 35,
  },
});

export default App;
