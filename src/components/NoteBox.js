import React, {useState, setState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

function NoteBox(props) {
  const [noteText, setNoteText] = useState('');
  const changeNote = (text) => setNoteText(text);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a new task"
        placeholderTextColor="#adb5bd"
        value={noteText}
        style={styles.userInput}
        onChangeText={changeNote}
        testID="input"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          if (noteText.length > 0) {
            props.onAdd({id: new Date().getTime(), text: noteText, isDone: 0});
            setNoteText('');
          }
        }}
        testID="button">
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#BCBCBC',
  },
  userInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    color: 'black',
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export {NoteBox};
