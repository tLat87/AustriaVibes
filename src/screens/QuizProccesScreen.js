import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';

const questions =
    [
        {
            "question": "The famous Blue Danube River flows through Vienna.",
            "answer": true,
            "explanation": "The Danube River flows through Vienna and is a vital part of Austria's geography and culture."
        },
        {
            "question": "Mozart was born in Vienna, the capital of Austria.",
            "answer": false,
            "explanation": "Mozart was born in Salzburg, not Vienna — though he later lived and worked in Vienna."
        },
        {
            "question": "Austria shares a border with 4 countries.",
            "answer": false,
            "explanation": "Austria actually borders 8 countries: Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein."
        },
        {
            "question": "Skiing is one of the most popular sports in Austria.",
            "answer": true,
            "explanation": "Austria is world-famous for its Alpine ski resorts and ski culture."
        },
        {
            "question": "The official language of Austria is German.",
            "answer": true,
            "explanation": "German is the official language, though some regions also speak Slovene, Croatian, and Hungarian."
        },
        {
            "question": "The Austrian flag is the oldest national flag in the world still in use.",
            "answer": true,
            "explanation": "The red-white-red Austrian flag dates back to the 13th century and is one of the oldest."
        },
        {
            "question": "Kangaroos are often found in the wild in Austria.",
            "answer": false,
            "explanation": "That’s a common mix-up with Australia! No wild kangaroos in Austria."
        },
        {
            "question": "Austria is a landlocked country.",
            "answer": true,
            "explanation": "Austria has no coastline and is completely surrounded by other countries."
        },
        {
            "question": "Sound of Music was filmed entirely in Vienna.",
            "answer": false,
            "explanation": "It was mostly filmed in Salzburg and the surrounding regions, not Vienna."
        },
        {
            "question": "The currency used in Austria is the Euro.",
            "answer": true,
            "explanation": "Austria is part of the Eurozone and has used the Euro since 2002."
        },
        {
            "question": "Austria is part of the European Union.",
            "answer": true,
            "explanation": "Austria has been a member of the EU since 1995."
        },
        {
            "question": "The Alps cover more than half of Austria’s territory.",
            "answer": true,
            "explanation": "About two-thirds of Austria is mountainous, with the Alps dominating the landscape."
        },
        {
            "question": "Vienna is known as the City of Music.",
            "answer": true,
            "explanation": "Many famous composers lived in Vienna, including Beethoven, Mozart, and Schubert."
        },
        {
            "question": "Austria has a tropical climate.",
            "answer": false,
            "explanation": "Austria has a temperate alpine climate, with cold winters and warm summers — no tropics here!"
        },
        {
            "question": "Red Bull was invented in Austria.",
            "answer": true,
            "explanation": "Red Bull was created by Austrian entrepreneur Dietrich Mateschitz in the 1980s."
        },
        {
            "question": "Vienna has been ranked as one of the world's most livable cities.",
            "answer": true,
            "explanation": "Vienna frequently tops global rankings for quality of life."
        },
        {
            "question": "The Vienna Philharmonic performs at the New Year's Concert in Berlin.",
            "answer": false,
            "explanation": "The famous New Year’s Concert by the Vienna Philharmonic takes place in Vienna, not Berlin."
        },
        {
            "question": "Schnitzel is a traditional Austrian dish.",
            "answer": true,
            "explanation": "Wiener Schnitzel is one of Austria’s most iconic national dishes."
        },
        {
            "question": "Austria has hosted the Summer Olympics.",
            "answer": false,
            "explanation": "Austria has never hosted the Summer Olympics, but it has hosted the Winter Olympics (Innsbruck 1964 & 1976)."
        },
        {
            "question": "The Austrian capital Vienna has more residents than all of Slovakia.",
            "answer": false,
            "explanation": "Vienna has about 2 million residents; Slovakia’s population is over 5 million."
        },
        {
            "question": "Austria’s national flower is the Edelweiss.",
            "answer": true,
            "explanation": "Edelweiss, a rare Alpine flower, is a national symbol of Austria."
        },
        {
            "question": "The Austrian Parliament building is shaped like a giant violin.",
            "answer": false,
            "explanation": "Although Austria is famous for music, the Parliament building is in classical Greek style — not shaped like a violin."
        },
        {
            "question": "Austria's highest mountain is the Grossglockner.",
            "answer": true,
            "explanation": "The Grossglockner is Austria’s tallest peak at 3,798 meters (12,461 ft)."
        },
        {
            "question": "Arnold Schwarzenegger was born in Austria.",
            "answer": true,
            "explanation": "The actor and former California governor was born in Thal, near Graz."
        },
        {
            "question": "Austria produces more chocolate than Switzerland.",
            "answer": false,
            "explanation": "While Austria does produce excellent chocolate (like Mozartkugeln), Switzerland is more globally known for chocolate production."
        },
        {
            "question": "All Austrians wear lederhosen daily.",
            "answer": false,
            "explanation": "Lederhosen are traditional clothing mostly worn during festivals, not daily attire."
        },
        {
            "question": "The Vienna State Opera is one of the most famous opera houses in the world.",
            "answer": true,
            "explanation": "It’s renowned for its history, architecture, and world-class performances."
        },
        {
            "question": "Austria is the flattest country in Europe.",
            "answer": false,
            "explanation": "Quite the opposite — Austria is one of Europe’s most mountainous countries!"
        },
        {
            "question": "Salzburg is the setting for The Sound of Music.",
            "answer": true,
            "explanation": "The film was set and filmed largely in Salzburg and its surroundings."
        },
        {
            "question": "You can swim in lakes with drinking water quality in Austria.",
            "answer": true,
            "explanation": "Many Austrian lakes, like Wolfgangsee or Achensee, are so clean they meet drinking water standards."
        }
    ]

const QuizProccesScreen = ({navigation}) => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (userAnswer) => {
        const correct = questions[current].answer === userAnswer;
        if (correct) setScore(score + 1);

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <ScrollView style={styles.resultContainer}>
                <TouchableOpacity style={styles.exploreButton} onPress={() => {navigation.goBack()}}>
                    <Text style={styles.exploreButtonText}>Home</Text>
                </TouchableOpacity>
                <Text style={styles.resultTitle}>Quiz Completed!</Text>
                <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>

                <Text style={styles.resultTextwqfqwf}>
                    1. "The famous Blue Danube River flows through Vienna."
                    ✅ Correct Answer: True 📌 Explanation: The Danube River flows through Vienna and is a vital part of Austria's geography and culture.
                    {'\n'}
                    {'\n'}
                    2. "Mozart was born in Vienna, the capital of Austria."
                    ❌ Correct Answer: Myth 📌 Explanation: Mozart was born in Salzburg, not Vienna — though he later lived and worked in Vienna.
                    {'\n'}
                    {'\n'}

                    3. "Austria shares a border with 4 countries."
                    ❌ Correct Answer: Myth 📌 Explanation: Austria actually borders 8 countries: Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein.
                    {'\n'}
                    {'\n'}

                    4. "Skiing is one of the most popular sports in Austria."
                    ✅ Correct Answer: True 📌 Explanation: Austria is world-famous for its Alpine ski resorts and ski culture.
                    {'\n'}
                    {'\n'}
                    5. "The official language of Austria is German."
                    ✅ Correct Answer: True 📌 Explanation: German is the official language, though some regions also speak Slovene, Croatian, and Hungarian.
                    {'\n'}
                    {'\n'}
                    6. "The Austrian flag is the oldest national flag in the world still in use."
                    ✅ Correct Answer: True 📌 Explanation: The red-white-red Austrian flag dates back to the 13th century and is one of the oldest.

                    {'\n'}
                    {'\n'}7. "Kangaroos are often found in the wild in Austria."
                    ❌ Correct Answer: Myth 📌 Explanation: That’s a common mix-up with Australia! No wild kangaroos in Austria.
                    {'\n'}
                    {'\n'}8. "Austria is a landlocked country."
                    ✅ Correct Answer: True 📌 Explanation: Austria has no coastline and is completely surrounded by other countries.
                    {'\n'}
                    {'\n'}9. "Sound of Music was filmed entirely in Vienna."
                    ❌ Correct Answer: Myth 📌 Explanation: It was mostly filmed in Salzburg and the surrounding regions, not Vienna.
                    {'\n'}
                    {'\n'}10. "The currency used in Austria is the Euro."
                    ✅ Correct Answer: True 📌 Explanation: Austria is part of the Eurozone and has used the Euro since 2002.
                    {'\n'}
                    {'\n'}11. "Austria is part of the European Union."
                    ✅ Correct Answer: True 📌 Explanation: Austria has been a member of the EU since 1995.
                    {'\n'}
                    {'\n'}12. "The Alps cover more than half of Austria’s territory."
                    ✅ Correct Answer: True 📌 Explanation: About two-thirds of Austria is mountainous, with the Alps dominating the landscape.
                    {'\n'}
                    {'\n'}13. "Vienna is known as the City of Music."
                    ✅ Correct Answer: True 📌 Explanation: Many famous composers lived in Vienna, including Beethoven, Mozart, and Schubert.
                    {'\n'}
                    {'\n'}14. "Austria has a tropical climate."
                    ❌ Correct Answer: Myth 📌 Explanation: Austria has a temperate alpine climate, with cold winters and warm summers — no tropics here!
                    {'\n'}
                    {'\n'}15. "Red Bull was invented in Austria."
                    ✅ Correct Answer: True 📌 Explanation: Red Bull was created by Austrian entrepreneur Dietrich Mateschitz in the 1980s.
                    {'\n'}
                    {'\n'}16. "Vienna has been ranked as one of the world's most livable cities."
                    ✅ Correct Answer: True 📌 Explanation: Vienna frequently tops global rankings for quality of life.
                    {'\n'}
                    {'\n'}17. "The Vienna Philharmonic performs at the New Year's Concert in Berlin."
                    ❌ Correct Answer: Myth 📌 Explanation: The famous New Year’s Concert by the Vienna Philharmonic takes place in Vienna, not Berlin.
                    {'\n'}
                    {'\n'}18. "Schnitzel is a traditional Austrian dish."
                    ✅ Correct Answer: True 📌 Explanation: Wiener Schnitzel is one of Austria’s most iconic national dishes.
                    {'\n'}
                    {'\n'}19. "Austria has hosted the Summer Olympics."
                    ❌ Correct Answer: Myth 📌 Explanation: Austria has never hosted the Summer Olympics, but it has hosted the Winter Olympics (Innsbruck 1964 & 1976).
                    {'\n'}
                    {'\n'}20. "The Austrian capital Vienna has more residents than all of Slovakia."
                    ❌ Correct Answer: Myth 📌 Explanation: Vienna has about 2 million residents; Slovakia’s population is over 5 million.
                    {'\n'}
                    {'\n'}21. "Austria’s national flower is the Edelweiss."
                    ✅ Correct Answer: True 📌 Explanation: Edelweiss, a rare Alpine flower, is a national symbol of Austria.
                    {'\n'}
                    {'\n'}22. "The Austrian Parliament building is shaped like a giant violin."
                    ❌ Correct Answer: Myth 📌 Explanation: Although Austria is famous for music, the Parliament building is in classical Greek style — not shaped like a violin.
                    {'\n'}
                    {'\n'}23. "Austria's highest mountain is the Grossglockner."
                    ✅ Correct Answer: True 📌 Explanation: The Grossglockner is Austria’s tallest peak at 3,798 meters (12,461 ft).
                    {'\n'}
                    {'\n'}24. "Arnold Schwarzenegger was born in Austria."
                    ✅ Correct Answer: True 📌 Explanation: The actor and former California governor was born in Thal, near Graz.
                    {'\n'}
                    {'\n'}25. "Austria produces more chocolate than Switzerland."
                    ❌ Correct Answer: Myth 📌 Explanation: While Austria does produce excellent chocolate (like Mozartkugeln), Switzerland is more globally known for chocolate production.
                    {'\n'}
                    {'\n'}26. "All Austrians wear lederhosen daily."
                    ❌ Correct Answer: Myth 📌 Explanation: Lederhosen are traditional clothing mostly worn during festivals, not daily attire.
                    {'\n'}
                    {'\n'}27. "The Vienna State Opera is one of the most famous opera houses in the world."
                    ✅ Correct Answer: True 📌 Explanation: It’s renowned for its history, architecture, and world-class performances.
                    {'\n'}
                    {'\n'}28. "Austria is the flattest country in Europe."
                    ❌ Correct Answer: Myth 📌 Explanation: Quite the opposite — Austria is one of Europe’s most mountainous countries!
                    {'\n'}
                    {'\n'}29. "Salzburg is the setting for The Sound of Music."
                    ✅ Correct Answer: True 📌 Explanation: The film was set and filmed largely in Salzburg and its surroundings.
                    {'\n'}
                    {'\n'}30. "You can swim in lakes with drinking water quality in Austria."
                    ✅ Correct Answer: True 📌 Explanation: Many Austrian lakes, like Wolfgangsee or Achensee, are so clean they meet drinking water standards.
                </Text>
                <View style={{marginBottom: 50}}/>
            </ScrollView>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>True or Myth</Text>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${(current + 1) / questions.length * 100}%` }]} />
                </View>
            </View>

            <Text style={styles.question}>{questions[current].question}</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
                    <Text style={styles.buttonText}>Myth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
                    <Text style={styles.buttonText}>Truth</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuizProccesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF8',
        padding: 20,
        justifyContent: 'space-around',
    },
    exploreButton: {
        alignSelf: 'center',
        backgroundColor: '#f44336',
        paddingVertical: 12,
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 24,
        borderRadius: 25,
        zIndex: 10,
        marginBottom: 50,
        marginTop: 40
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000',
        marginBottom: 16
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#eee',
        borderRadius: 3,
        marginBottom: 24,
    },
    progressBar: {
        height: 6,
        backgroundColor: '#D32F2F',
        borderRadius: 3,
    },
    question: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 40,
        color: '#000',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        borderColor: '#bbb',
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        width: '40%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
    resultContainer: {
        flex: 1,
        backgroundColor: '#FFFCF8',
        paddingTop: 50
    },
    resultTitle: {
        fontSize: 28,
        marginLeft: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    resultText: {
        marginLeft: 16,
        fontSize: 20,
    },
    resultTextwqfqwf: {
        marginTop: 50,
        marginLeft: 16,
        fontSize: 14,
    },
});
