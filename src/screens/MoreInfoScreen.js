import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView, Alert,
} from 'react-native';
import Share from 'react-native-share';

const MoreInfoScreen = ({ navigation, route }) => {
    const { item } = route.params

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />

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
                        title: 'Check out this beautiful place!',
                        message: `Discover ${item.title} 🌍`,
                        url: item.image,
                    };

                    Share.open(shareOptions).catch(err => console.log('Share error:', err));
                }}
            >
                <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
};

export default MoreInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F6F1',
    },
    image: {
        width: '100%',
        height: 500,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#f44336',
        padding: 8,
        borderRadius: 30,
        elevation: 4,
    },
    shareButton: {
        position: 'absolute',
        top: 50,
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
    infoContainer: {
        padding: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#333',
    },
});
