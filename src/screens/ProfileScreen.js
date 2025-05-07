import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Switch,
    Alert,
    TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setNickname } from '../redux/slices/userSlice';
import Share from 'react-native-share';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const { nickname, avatar } = useSelector(state => state.user);

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedNickname, setEditedNickname] = useState(nickname);

    const handleToggleNotifications = () => {
        setNotificationsEnabled(prev => !prev);
    };

    const handleReset = () => {
        Alert.alert(
            'Reset all data',
            'Are you sure you want to reset all profile data?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Yes',
                    onPress: () => {
                        dispatch(setNickname({ nickname: '', avatar: null }));
                    },
                },
            ]
        );
    };


    const handleShare = async () => {
        const shareOptions = {
            title: 'Share app',
            message: 'Hi! Try this cool app 🚀',
        };

        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Ошибка при попытке поделиться:', error);
        }
    };

    const handleSave = () => {
        dispatch(setNickname({ nickname: editedNickname, avatar }));
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
            {/* Avatar */}
            <TouchableOpacity style={styles.avatarContainer}>
                <View style={styles.avatarCircle}>
                    {avatar ? (
                        <Image source={{ uri: avatar }} style={styles.avatarImage} />
                    ) : (
                        <View style={styles.placeholder} />
                    )}
                    <View style={styles.plusCircle}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Name + edit */}
            <View style={styles.nameRow}>
                {isEditing ? (
                    <>
                        <TextInput
                            value={editedNickname}
                            onChangeText={setEditedNickname}
                            style={styles.input}
                            placeholder="Enter nickname"
                        />
                        <TouchableOpacity onPress={handleSave}>
                            <View style={styles.saveButton}>
                                <Text style={styles.saveText}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.nameText}>{nickname || 'Anonymous'}</Text>
                        <TouchableOpacity onPress={() => setIsEditing(true)}>
                            <View style={styles.editCircle}>
                                <Image source={require('../assets/img/Frame35.png')} />
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            <View style={styles.divider} />

            {/* Share */}
            <TouchableOpacity style={styles.row} onPress={handleShare}>
                <Text style={styles.rowLabel}>Share the app</Text>
                <Image source={require('../assets/img/Frame.png')} />
            </TouchableOpacity>

            {/* Reset */}
            <TouchableOpacity style={styles.row} onPress={handleReset}>
                <Text style={styles.rowLabel}>Reset all data</Text>
                <Image source={require('../assets/img/Frameкопія.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F6F1',
        paddingHorizontal: 24,
        // paddingTop: 40,
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#D32F2F',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    placeholder: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    plusCircle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#000',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 12,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    saveButton: {
        backgroundColor: '#f44336',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    saveText: {
        color: '#fff',
        fontWeight: '600',
    },
    editCircle: {
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 6,
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    rowLabel: {
        fontSize: 16,
    },
});
