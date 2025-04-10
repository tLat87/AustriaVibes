import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const data = [
    {
        "id": 1,
        "emoji": "🇦🇹",
        "title": "The Soul of Austria: Music That Echoes Through Time",
        "text": "Austria is not just the birthplace of classical giants like Mozart, Haydn, and Schubert — it is a living, breathing concert hall where music permeates every alley, every square, every heart. Vienna, often called the City of Music, was once home to Beethoven, Brahms, and Mahler, and even today, it resonates with orchestral brilliance that rivals any world stage. From the golden halls of the Musikverein to open-air performances in Salzburg, Austria celebrates its musical legacy with pride and passion. The Vienna Philharmonic’s New Year’s Concert is watched by millions worldwide, and opera lovers flock to the Vienna State Opera for unforgettable nights of drama and harmony. But Austria’s music is not frozen in the past — it thrives in modern jazz bars, underground electronic clubs in Graz, and folk festivals in the Alps, proving that this country doesn’t just preserve its traditions — it reinvents them. Whether you are walking through the silent home of Mozart or dancing in a mountain hut to the sound of an accordion, Austria will surprise you with its timeless rhythm.",
        "hashtags": ["#ClassicalMusic", "#SoundOfAustria"]
    },
    {
        "id": 2,
        "emoji": "🏰",
        "title": "Castles, Crowns, and Conspiracies: Austria’s Royal Past",
        "text": "Austria’s history is a labyrinth of empire, elegance, and empire-shaking drama — a legacy deeply tied to the Habsburg dynasty that ruled for over six centuries. The magnificent Schönbrunn Palace in Vienna, with its 1,441 rooms, is more than a royal residence — it is a stage for centuries of political power plays, romances, and revolutions. Empress Maria Theresa, one of the most powerful women in European history, governed from here, as did her daughter Marie Antoinette before being swept into the chaos of the French Revolution. The grandeur of the Hofburg Palace whispers tales of intrigue, where secret treaties were signed, alliances forged, and dynasties shaped. Austria’s royal past isn’t just confined to palaces — every fortress, from the eerie Burg Kreuzenstein to the alpine Hohenwerfen Castle, hides legends of betrayal and bravery. This imperial heartland watched the rise and fall of empires and still bears the architectural weight and cultural pride of its storied crown.",
        "hashtags": ["#AustrianHistory", "#RoyalAustria", "#CastlesOfAustria"]
    },
    {
        "id": 3,
        "emoji": "🏔️",
        "title": "Austria’s Mountains: More Than Just Snow",
        "text": "When people think of the Austrian Alps, they picture snow-capped peaks and ski lifts — but these mountains hold far more than powdery slopes. The Alps are Austria’s backbone, a place where nature and tradition intertwine, where life slows down and every valley tells a story. Villages like Hallstatt, tucked between lake and peak, offer views so surreal they feel like paintings. Hiking trails lead to hidden chapels, alpine pastures with grazing cows, and crystal-clear lakes you can drink from. These landscapes inspired poets, painters, and philosophers, and continue to attract travelers seeking serenity or adventure. Beyond tourism, the Alps play a critical role in Austrian identity — they shaped the architecture, the cuisine, even the mindset of the people who live among them. Whether in summer, when wildflowers bloom, or in winter, when silence falls with the snow, the Austrian Alps are a living museum of nature, culture, and resilience.",
        "hashtags": ["#AustrianAlps", "#MountainMagic", "#NatureInAustria"]
    },
    {
        "id": 4,
        "emoji": "🍰",
        "title": "Sweet Traditions: The Dessert Culture of Austria",
        "text": "Austria’s passion for sweets is more than just a culinary habit — it’s a national identity, a deeply rooted culture of sugar, spice, and everything perfectly layered. Walk into any Viennese café and you’ll be greeted by a display that looks like edible art — from the iconic Sachertorte, with its rich chocolate and apricot jam core, to the fluffy perfection of Kaiserschmarrn, a shredded pancake fit for emperors. The coffeehouse culture in Austria is almost sacred, where a slice of cake is not just dessert — it’s a ritual. Pastries like Apfelstrudel, Topfenstrudel, and the delicate Mozartkugel are passed down through generations, lovingly handmade in bakeries from Salzburg to Graz. These sweet traditions are not only delicious — they carry stories of empire, creativity, and comfort, connecting people across time and tables. No visit to Austria is complete without surrendering to a warm café corner, a cup of Melange, and a slice of history on a plate.",
        "hashtags": ["#AustrianDesserts", "#StrudelTime"]
    },
    {
        "id": 5,
        "emoji": "🎭",
        "title": "Myths, Magic & Folklore: Austria’s Secret Stories",
        "text": "Beneath Austria’s elegant cities and postcard-perfect villages lies a world of shadowy legends, ancient customs, and curious creatures that still haunt the collective imagination. In Alpine villages, stories are passed down of Krampus, the horned beast who punishes naughty children at Christmas, marching through towns in terrifying parades of fur and fire. The Danube River is said to be home to nixies — water spirits who lure travelers with song, while dense forests whisper tales of witches, dwarves, and forest guardians. Many of these myths are tied to nature, reminding listeners to respect the land and fear what they don’t understand. Folklore festivals like the Perchtenlauf bring ancient rituals to life with eerie masks and wild dances, blurring the line between tradition and theatre. Austria’s legends are not forgotten — they live in the mountains, in the firelit faces of storytellers, and in the curious silence of snow-covered woods.",
        "hashtags": ["#AustrianFolklore", "#KrampusNight", "#MysticAustria", "#AlpineMagic"]
    },
    {
        "id": 6,
        "emoji": "🚂",
        "title": "Trains, Tunnels, and Timeless Journeys: Traveling Austria by Rail",
        "text": "Austria’s railway system is more than just transport — it’s a gateway to some of the most breathtaking scenery and culturally rich destinations in Europe. Hop aboard the Westbahn or the legendary Semmering Railway, and you’ll find yourself gliding past rolling vineyards, sleepy villages, and towering alpine passes that look like film sets. Austrian trains are known for their punctuality, comfort, and panoramic windows that turn any ride into an experience. Some routes, like the Arlberg line or the Mariazellerbahn, are engineering marvels, cutting through mountains and over valleys with elegance and precision. Rail stations like Vienna Hauptbahnhof are modern transport hubs, while others, like Hallstatt’s tiny lakeside platform, feel frozen in time. Traveling by train in Austria is not just eco-friendly — it’s meditative, scenic, and deeply connected to the rhythm of the land. It’s where stories begin, books are read, windows frame dreams, and every stop brings a new layer of Austria into view.",
        "hashtags": ["#TrainTravel", "#ScenicRoutes", "#EcoTravel"]
    }
]


const StoryCard = ({story}) => {
    const navigation = useNavigation();
    return (
  <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('MoreStoryCardScreen', {story})}}>
    <View style={styles.tagsContainer}>
      {story.hashtags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
    <Text style={styles.cardTitle}>{story.title}</Text>
  </TouchableOpacity>
)};

const ExploreStoriesScreen = ({ navigation }) => {
    const { nickname } = useSelector(state => state.user);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcome}>Welcome back, {nickname}!</Text>
            <Text style={styles.title}>
                Explore stories, facts, and{'\n'}the timeless charm of Austria
            </Text>
            {data.map(story => (
                <StoryCard story={story}/>
            ))}
            <View style={{marginBottom: 150}}/>
        </ScrollView>
    );
};

export default ExploreStoriesScreen;

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
