import React from 'react';
import {
    // SafeAreaView, // use at last for wrapping
    View,
    Text,
    StyleSheet,
    useColorScheme, // dark-light mode
    // safeareaview
} from 'react-native';

function AppPro() {
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // flex-start, flex-end, works left-right
        justifyContent: 'center', // works top-bottom
    },
    whiteText: {
        color: '#FFFFFF',
        backgroundColor: '#000000',
    },
    darkText: {
        color: '#000000',
        backgroundColor: '#FFFFFF',
    },
});

export default AppPro;
