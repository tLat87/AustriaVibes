import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const pages = [
    {
        title: 'Welcome to Explore Austria Vibes!',
        text: 'From majestic mountains to imperial palaces — discover the beauty, history, and magic of Austria at your own pace. Your adventure starts here!',
        image: require('../assets/img/initial/1.png'),
    },
    {
        title: 'Smart Travel, Memorable Moments',
        text: 'Explore must-see places on an interactive map, read fascinating stories, and secrets.',
        image: require('../assets/img/initial/2.png'),
    },
    {
        title: 'Test Your Knowledge, Learn While You Go',
        text: 'Can you tell myth from fact? Take part in fun quizzes, collect insights, and become a true Austria explorer.',
        image: require('../assets/img/initial/3.png'),
    },
];

const WelcomeScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            navigation.navigate('SetNicknameScreen')
        }
    };

    const { title, text, image } = pages[currentPage];

    return (
        <ImageBackground source={image} style={styles.background} resizeMode="cover">
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>

                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {currentPage === pages.length - 1 ? 'Start' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'flex-end',
    },
    overlay: {
        backgroundColor: 'rgba(227, 1, 31 ,0.6)',
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#FF2746',
        paddingVertical: 15,
        paddingHorizontal: 40,
        alignItems: 'center',
        width: '100%',
        borderRadius: 99,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
