import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';

const MoreStoryCardScreen = ({ navigation, route }) => {
    const {story} = route.params;

    return (
        <ScrollView style={styles.container}>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/img/arrowleft1.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.shareButton}
                    onPress={() => {
                        const shareOptions = {
                            title: 'Check out this beautiful fact!',
                            message: `Discover ${story.title} 🌍`,
                        };

                        Share.open(shareOptions).catch(err => console.log('Share error:', err));
                    }}
                >
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>



            <View style={styles.card}>
                <View style={styles.tagsContainer}>
                    {story.hashtags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <Text style={styles.title}>
                {story.title}
            </Text>

            <Text style={styles.welcome}>
                {story.text}
            </Text>

            <View style={{marginBottom: 150}}/>
        </ScrollView>
    );
};

export default MoreStoryCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 150,
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
    backButton: {
        position: 'absolute',
        top: -70,
        left: 20,
        backgroundColor: '#f44336',
        padding: 8,
        borderRadius: 30,
        elevation: 4,
    },
    shareButton: {
        position: 'absolute',
        top: -70,
        right: 20,
        backgroundColor: '#f44336',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
    },
    shareText: {
        color: '#fff',
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
