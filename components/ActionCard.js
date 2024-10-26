// rnfs
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(WebsiteLink) {
        Linking.openURL(WebsiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.headingText, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript
            </Text>
        </View>
        <Image 
        source={{
            uri: 'https://imgs.search.brave.com/V-YOZ4ifSuA_xDeXk25qmeqJ--smPYH_dbKtstuIYbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzY4LzE3LzMz/LzM2MF9GXzg2ODE3/MzM5M18yRm1PaHR5/Y01od2ZadGhnaGNo/Z3MwVko4eWFURU5X/Yy5qcGc',
        }}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, molestias.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://medium.com/@diversepixel/building-the-foodfusion-rails-app-ruby-deep-dive-24-9cb0703c20d6')} style={styles.socialLinks}>
            <Text style={styles.headerText}>
                Read more
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/bhavyansh_y/')}style={styles.socialLinks}>
            <Text style={styles.headerText}>
                Follow me
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    },
});
