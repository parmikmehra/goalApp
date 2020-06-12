import React, {userState, useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="GOAL"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
                <View style={styles.buttonLayout}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={cancelHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title = "ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        borderColor:"black",
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    buttonLayout: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '40%',
    },
});