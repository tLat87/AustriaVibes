import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const QuizScreen = ({ navigation }) => {
    const { nickname, } = useSelector(state => state.user);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome back, {nickname}!</Text>
            <Text style={styles.title}>
                Austria Quiz: True or Myth
            </Text>
            <Text style={styles.welcome}>
                Think you know everything about Austria’s history and culture? Let’s find out!
            </Text>
            <Text style={styles.welcome}>
                ♦️ Truth or Myth? Decide whether the statements about Austria are true or just popular myths. Some facts might surprise you!
            </Text>
            <Text style={styles.welcome}>
                ♦️ Time to Beat! Answer as many questions as you can before time runs out and set a new personal best.            </Text>

            <Text style={styles.welcome}>
                ♦️ Learn While You Play! Get fun explanations for each question and uncover fascinating stories about Austria’s landmarks, traditions, and legendary figures.            </Text>

            <TouchableOpacity style={styles.exploreButton} onPress={() => navigation.navigate('QuizProccesScreen')}>
                <Text style={styles.exploreButtonText}>Let’s play! </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default QuizScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    welcome: {
        fontSize: 16,
        marginBottom: 10,
        color: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    card: {
        backgroundColor: '#D32F2F',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    exploreButton: {
        alignSelf: 'center',
        backgroundColor: '#f44336',
        paddingVertical: 12,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
        borderRadius: 25,
        zIndex: 10,
        marginTop: 50
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    tag: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        color: '#D32F2F',
        fontWeight: '500',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
