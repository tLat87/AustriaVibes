import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

const spots = [
    {
        id: '1',
        title: 'Schönbrunn Palace',
        description:'Schönbrunn Palace is a magnificent Baroque residence that served as the summer home for the Habsburg monarchs. With 1,441 rooms, the palace showcases opulent architecture and intricate interior designs. The surrounding gardens are adorned with sculptures, fountains, and the Gloriette, offering panoramic views of Vienna. Visitors can explore the imperial apartments, the world\'s oldest zoo, and the charming maze within the gardens.',
        image: require('../assets/0d9bbc7ad9c9e0ee970976dd6b58dd209f1014a7.png'),
    },
    {
        id: '2',
        title: 'Hallstatt Village',
        description: 'Nestled between the serene Hallstätter See and the towering Dachstein mountains, Hallstatt is a picturesque village renowned for its 16th-century Alpine houses and salt production history. Visitors can wander through narrow streets, visit the Hallstatt Skywalk for breathtaking views, and explore the ancient salt mines that date back over 7,000 years. The village\'s charming setting has earned it a spot on the UNESCO World Heritage list.',
        image: require('../assets/4b2ff94664cdae34f45439b5a007803631b61480.png'),
    },
    {
        id: '3',
        title: 'Hofburg Palace',
        description: 'The Hofburg Palace stands as a testament to Austria\'s imperial history, serving as the residence of the Habsburg dynasty for over six centuries. This sprawling complex houses the Imperial Apartments, the Sisi Museum, and the Austrian National Library. The Spanish Riding School, located within the palace grounds, offers performances showcasing the exquisite Lipizzaner horses.',
        image: require('../assets/39b59413a9c2ba1979145f82fb63bbd5523ce730.png'),
    },
    {
        id: '4',
        title: 'Melk Abbey',
        description: 'Perched atop a rocky outcrop overlooking the Danube River, Melk Abbey is a stunning Benedictine monastery known for its Baroque architecture. The abbey\'s library houses an extensive collection of medieval manuscripts, and the frescoed ceilings are masterpieces in themselves. Visitors can stroll through the manicured gardens and enjoy panoramic views of the Wachau Valley.',
        image: require('../assets/86ddfaf29abd7ee5af8104228299716b493aaec3.png'),
    },
    {
        id: '5',
        title: 'Innsbruck\'s Old Town',
        description: 'Innsbruck\'s Altstadt (Old Town) is a delightful blend of medieval architecture and modern amenities. The iconic Golden Roof, adorned with 2,657 gilded copper tiles, was constructed for Emperor Maximilian I. Surrounded by colorful buildings, narrow streets lead to charming cafés, boutiques, and the impressive Imperial Palace. The Nordkette cable car offers a swift ascent to panoramic alpine views',
        image: require('../assets/87539c6174afe568c0c3eb02cd62aa8e796cc0c5.png'),
    },
    {
        id: '6',
        title: 'Grossglockner High Alpine Road',
        description: 'This scenic drive takes travelers through the heart of the Hohe Tauern National Park, offering unparalleled views of Austria\'s highest peak, the Grossglockner. The 48-kilometer route winds through lush meadows, rugged cliffs, and serene glaciers. Numerous viewpoints and information centers along the way provide insights into the region\'s geology and wildlife',
        image: require('../assets/c59d4d827ef07b235231bfb4a3fd6afd4b951f93.png'),
    },
    {
        id: '7',
        title: 'Zell am See',
        description: 'Zell am See is a picturesque town located on the shores of Lake Zell, surrounded by majestic alpine peaks. It\'s a year-round destination offering activities like skiing, hiking, and boating. The Schmittenhöhe mountain provides panoramic views and is accessible via cable car.',
        image: require('../assets/e972a1a32ac8f033a837cc2a0a1336710843262b.png'),
    },
    {
        id: '8',
        title: 'Graz\'s Old Town',
        description: 'Graz, Austria\'s second-largest city, features a historic center characterized by red-roofed buildings, narrow alleys, and Renaissance courtyards. The Schlossberg hill, topped by the iconic Clock Tower, offers panoramic city views. Graz is also known for its vibrant culinary scene and was designated a UNESCO City of Design.',
        image: require('../assets/fb661b343edafe238cf32638d4ff60301b5ce317.png'),
    },
];

const HomeScreen = ({ navigation }) => {
    const { nickname, avatar } = useSelector(state => state.user);

    return (
        <ScrollView style={styles.container}>
            {/* Welcome */}
            <View style={styles.header}>
                <Text style={styles.welcomeText}>
                    Welcome back
                </Text>
                <Image
                    source={avatar ? { uri: avatar } : require('../assets/img/Ellipse7.png')}
                    style={styles.avatar}
                />
            </View>

            {/* Title */}
            <Text style={styles.sectionTitle}>🌟 Explore Popular Locations</Text>

            {/* Horizontal scroll */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={spots}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MoreInfoScreen', {item})}>
                        <Image source={ item.image } style={styles.cardImage} />
                        <TouchableOpacity style={styles.exploreBtn}>
                            <Text style={styles.exploreText}>Explore</Text>
                        </TouchableOpacity>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* More Button */}
            {/*<TouchableOpacity style={styles.moreBtn}>*/}
            {/*    <Text style={styles.moreText}>More</Text>*/}
            {/*</TouchableOpacity>*/}
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F6F1',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '600',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#D32F2F',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 16,
    },
    card: {
        width: 300,
        marginRight: 16,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    cardImage: {
        width: '100%',
        height: 400,
    },
    exploreBtn: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: '#FFEFF1',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    exploreText: {
        fontWeight: '600',
        color: '#D32F2F',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        position: 'absolute',
        bottom: 16,
        left: 16,
    },
    moreBtn: {
        backgroundColor: '#f44336',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    moreText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
