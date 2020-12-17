import React, {useState, setState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

function Note(props) {
  const [noteStyle, setNoteStyle] = useState({backgroundColor: '#e76f51'});
  const [textStyle, setTextStyle] = useState({textDecorationLine:'none'});
  function changeStatus() {
    if (props.data.isDone) {
      props.data.isDone = 0
      props.onPress(1);
      setNoteStyle({backgroundColor: '#e76f51', textDecorationLine:'none'});
      setTextStyle({textDecorationLine:'none'});
    } else {
      props.data.isDone = 1;
      props.onPress(0);
      setNoteStyle({backgroundColor: '#ecb5a8'});
      setTextStyle({textDecorationLine:'line-through'});
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.noteArea, noteStyle]} onLongPress={() => props.onLongPress(props.data.id, props.data.isDone)} onPress={changeStatus}>
        <Text style={[styles.text, textStyle]}>{props.data.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  noteArea: {
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
export {Note};
