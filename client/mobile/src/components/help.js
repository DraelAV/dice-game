import React from 'react';
import { Text, View } from 'react-native';
import Background from './background';
import Button from './button';
import styles from '../styles/help';


export default class Help extends React.Component {

	constructor(props) {
		super(props);

		this.onClose = this.onClose.bind(this);
	}

	onClose() {
		
	}

    render() {
        return (
            <Background>
                <Text style={styles.title}>Game rules</Text>
                <Text style={styles.paragraph}>The goal of the game is to get the highest score in round.</Text>
                <Text style={styles.paragraph}>The first player to roll the dice starts the round. Others will then have to roll their dice in 5 seconds before the round ends.</Text>
                <Text style={styles.paragraph}>Have fun!</Text>
                <Button style={styles.button} onPress={this.onClose}>CLOSE</Button>
            </Background>
        );
    }
}
