import React, { useRef } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');

const markers = [
    {
        id: 1,
        latitude: 48.184517,
        longitude: 16.311865,
        title: 'Schönbrunn Palace',
        description:'Schönbrunn Palace is a magnificent Baroque residence that served as the summer home for the Habsburg monarchs. With 1,441 rooms, the palace showcases opulent architecture and intricate interior designs. The surrounding gardens are adorned with sculptures, fountains, and the Gloriette, offering panoramic views of Vienna. Visitors can explore the imperial apartments, the world\'s oldest zoo, and the charming maze within the gardens.',
        image: 'https://s3-alpha-sig.figma.com/img/39b5/9413/a9c2ba1979145f82fb63bbd5523ce730?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B7lRrEgqoYJP4n~1GELrqR7B2nSZY8ZVPQ1FnAV6N3~3zeaE0aCbKo13UbVPdCtmbKaw5iXDyxyV3ItERRJlIY-ijhjGQAyatNjIjKxuEY0Vq-vCwUeVSXP4XNS7nU6EbCLxAv1Q1brHCkPDj~0J23-UtYOH2BZvTlZOC6UFnXdV4daP~5heJaCgzvS9poxJo6j0sQVW9~wNj-kZKHPKs81l7naYWtLVCzZJVZoaTCuxs-Key6BQQJAR8hXcTQhLTqMHRdtq~8UlR84Su7oV~d4RcS2FV1JhFLa2Wg7lFyli9Hf~EHgHs1wp~D7gYvZrkqe1Oh1zOGiAg~TlOVQErA__',
    },
    {
        id: 2,
        latitude: 47.562233,
        longitude: 13.649262,
        title: 'Hallstatt Village',
        description: 'Nestled between the serene Hallstätter See and the towering Dachstein mountains, Hallstatt is a picturesque village renowned for its 16th-century Alpine houses and salt production history. Visitors can wander through narrow streets, visit the Hallstatt Skywalk for breathtaking views, and explore the ancient salt mines that date back over 7,000 years. The village\'s charming setting has earned it a spot on the UNESCO World Heritage list.',
        image: 'https://s3-alpha-sig.figma.com/img/e972/a1a3/2ac8f033a837cc2a0a1336710843262b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=awmrGcN5SGQb5qHOjnIZrQYJKt4Mx4jJKwupGaecKH97mxSqd56gXgz-tj0m6AkbVX6h4IVTwSVXNs0zb031K0h2neBY~gr1Ybo4UuhzsKG2uiytAX3OkTeP8-bLR3ttNlDk9G0c6D2dmTlSeQ48cBl9KKT7LYQNDZrVxHVng5jaIJG5V9OWUdVyUZY6bR1dSHQX8oJLlrUVgTNUqrjaQoYSX6ncbuTng4EV3Xml-67RHkrDrRQMkOiFb69zSKAXIfvYie0VgFuHYmojGrHcTG4UGsv8ecidLrG0Xp-w~2RIETFwxxMxpEx1Gz4O~XH~ScbcDthIOeuYCNM8uh5rdw__',

    },
    {
        id: 3,
        latitude: 48.2064,
        longitude: 16.3647,
        title: 'Hofburg Palace',
        description: 'The Hofburg Palace stands as a testament to Austria\'s imperial history, serving as the residence of the Habsburg dynasty for over six centuries. This sprawling complex houses the Imperial Apartments, the Sisi Museum, and the Austrian National Library. The Spanish Riding School, located within the palace grounds, offers performances showcasing the exquisite Lipizzaner horses.',
        image: 'https://s3-alpha-sig.figma.com/img/0d9b/bc7a/d9c9e0ee970976dd6b58dd209f1014a7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gNdT2XqIzHEWRyCQmWLEgPo9LAgoSgTlqvmgcTgesUpfbxORh2JvPVsi2ezpJavQQQXOWSH4NyfgIou2LFwUqKI1bGUsMVcnA7BRMbptAUCGzDbG8LueajpBiPe-nEkjStTItyimvcURwuuxT-lN3H0myQZ0flOgne-gxojyIq4c0FLvL~r3RR3IO87dC5~5AMz47QZ6MnOG-FOoWllknIGJGanIZtenTq6dcZT3kxSCaTHw5ESOLhf43J~FPT5seVBmMFhJesneCfxXjVUZ0ms1J5GBjuknjcPfjWJ3Y4k72PbviOdS~qweZQKD8VLp2UX832qTCIK9Amffmf~LLA__',
    },
    {
        id: 4,
        latitude: 48.2297,
        longitude: 15.3394,
        title: 'Zell am See',
        description: 'Zell am See is a picturesque town located on the shores of Lake Zell, surrounded by majestic alpine peaks. It\'s a year-round destination offering activities like skiing, hiking, and boating. The Schmittenhöhe mountain provides panoramic views and is accessible via cable car.',
        image: 'https://s3-alpha-sig.figma.com/img/fb66/1b34/3edafe238cf32638d4ff60301b5ce317?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K0YtABPQNmX~eLyTMRzIO~EZt8bFEq~N05-Y3RlGhaLRm6HNjIlnB11zuiBtemm8EuFPtQa8PHm47-PYiIWr20pdRKlQ1EqyHNMvHzoNqljxiSB6hm-nS33InkqhllcOYnFRy3mrhrmuMjV5i38GI21dPue~6GhOY45g6498~FOInz24CC~fWURs8IAkyExhzk17xw~WazBuzMr7kmq8yKShLRnx9W4aMXD4Na8oYHyFe1ajwUnvtUxjqNjPDdEiIGgXPY1~zeO5qZ4Kkaksadu~D7CSTU-G7e7lXx-K2~A8JXrngrllRzpAanM4Vl~Wedqhv6r~ltREw~dlUueNDg__'
    },
    {
        id: 5,
        latitude: 47.2682,
        longitude: 11.3933,
        title: 'Melk Abbey',
        description: 'Perched atop a rocky outcrop overlooking the Danube River, Melk Abbey is a stunning Benedictine monastery known for its Baroque architecture. The abbey\'s library houses an extensive collection of medieval manuscripts, and the frescoed ceilings are masterpieces in themselves. Visitors can stroll through the manicured gardens and enjoy panoramic views of the Wachau Valley.',
        image: 'https://s3-alpha-sig.figma.com/img/4b2f/f946/64cdae34f45439b5a007803631b61480?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qASfTMezyoHK4DyOSUXnQE89MjAnWqjIqjuWVAOXE-7pFfU1jKWqjUvSLsfiuYPnUkgh81TCwMD1meZr8JuF2UssJXoUOi1Qhq8U1JJqrKOSecP9zugs~g~F~2ViBqCLBW4kiYaYSxO21B7DtxwvP9Oc8gKqlKsfDgbo-3wvVIW12ddCr-bkks5cIrpeNPqcN25OmKQBHUSdXPD7GUHwmI6IbK4U1HPYTLhFsb8PivQAN3Eg-atqPHM4fKb--nE4OCEeEwsCxICcnzlD8zUpDNmtdJWCUeQf-8iGg~QWTlGo9xsaOaRdaIh7oVpNdM6K45YhVACcQS5PQ5Vc51P5bg__',

    },
    {
        id: 6,
        latitude: 47.0747,
        longitude: 12.8469,
        title: 'Graz\'s Old Town',
        description: 'Graz, Austria\'s second-largest city, features a historic center characterized by red-roofed buildings, narrow alleys, and Renaissance courtyards. The Schlossberg hill, topped by the iconic Clock Tower, offers panoramic city views. Graz is also known for its vibrant culinary scene and was designated a UNESCO City of Design.',
        image: 'https://s3-alpha-sig.figma.com/img/8753/9c61/74afe568c0c3eb02cd62aa8e796cc0c5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L~-8H4HtlBzDOjQ6a~X2kqxjp6K5tUfvR-IVN5s0o4Weza9piCYtl1djwDAepLjnsZulKPJM6Cs6ZYRRhUaicv~53VX-ThE906puyuoxPGFeGwFlosptfyUUSdYEprWIj2Qm0rG98wtF6LgRHUa~xzO6LHwN2YLweH9r6-t-LRG5poHBrH5rywFUwvDTyrnMr1XLwkb6GH2cgCD0kkDSEh9T5tKs1TSvqr7dWisbKjhIuWIyrOZ6f3ye9BYOTXQ-hZ6xsJojEYWTjUmtrQZau8Z7HE0IQ6w9lugIqrHcVmpV02q6IHfFcED4aVoW3TfxbicELL~fLImZQ77l0KmMqw__'
    },
];

const MapScreen = ({ navigation }) => {
    const mapRef = useRef(null);

    const handleLocationPress = (location) => {
        mapRef.current.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
        }, 1000);
    };

    return (
        <View style={styles.container}>
            {/* Location Buttons */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.locationList}>
                {markers.map(marker => (
                    <TouchableOpacity
                        key={marker.id}
                        style={styles.locationButton}
                        onPress={() => handleLocationPress(marker)}
                    >
                        <Text style={styles.locationButtonText}>{marker.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Map */}
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 47.70,
                    longitude: 14.50,
                    latitudeDelta: 2,
                    longitudeDelta: 2,
                }}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.title}
                    >
                        <View style={styles.markerWrapper}>
                            <Image
                                source={{ uri: marker.image }}
                                style={styles.markerImage}
                            />
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    locationList: {
        position: 'absolute',
        top: 80,
        paddingHorizontal: 10,
        zIndex: 10,
    },
    locationButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    locationButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    markerWrapper: {
        alignItems: 'center',
    },
    markerImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginBottom: 2,
    },
});
