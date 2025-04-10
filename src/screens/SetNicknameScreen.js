import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setNickname } from '../redux/slices/userSlice';
import {launchImageLibrary} from 'react-native-image-picker';

const SetNicknameScreen = ({ navigation }) => {
    const [nickname, setNicknameInput] = useState('');
    const [avatar, setAvatar] = useState(null);
    const dispatch = useDispatch();

    const handleSet = () => {
        if (nickname.trim().length > 0) {
            dispatch(setNickname({ nickname, avatar }));
            navigation.navigate('MainTab');
        }
    };

    const pickImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                setAvatar(uri);
            }
        });
    };

    return (
        <View style={styles.container}>
            {/*<TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('Home')}>*/}
            {/*    <Text style={styles.skipText}>Skip</Text>*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
                <View style={[styles.avatarCircle, avatar && { overflow: 'hidden' }]}>
                    {avatar ? (
                        <Image source={{ uri: avatar }} style={styles.avatarImage} />
                    ) : (
                        <View style={styles.plusCircle}>
                            <Text style={styles.plusText}>+</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>

            <Text style={styles.title}>Create Your Explorer Nickname</Text>
            <Text style={styles.subtitle}>Let's personalize your journey!</Text>

            <TextInput
                style={styles.input}
                placeholder="Nickname"
                placeholderTextColor="#aaa"
                value={nickname}
                onChangeText={setNicknameInput}
            />

            <TouchableOpacity style={styles.button} onPress={handleSet}>
                <Text style={styles.buttonText}>Set</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SetNicknameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFAF5',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    skip: {
        position: 'absolute',
        top: 60,
        left: 20,
    },
    skipText: {
        fontSize: 16,
        color: '#000',
    },
    avatarContainer: {
        marginBottom: 30,
    },
    avatarCircle: {
        backgroundColor: '#FF3B4F',
        width: 90,
        height: 90,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusCircle: {
        backgroundColor: '#000',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    plusText: {
        color: '#fff',
        fontSize: 14,
    },
    avatarImage: {
        width: 90,
        height: 90,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#444',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF3B4F',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 80,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
