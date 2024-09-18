import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Card, Avatar, Paragraph } from 'react-native-paper';
import data from './data.json';
import styles from "./Styles.js";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.scrollView}>
                    {data.map((user) => {
                        return (
                            <Card style={styles.card} key={user.name}>
                                <Card.Title
                                    title={user.name}
                                    subtitle={user.email}
                                    left={() => (
                                        <Avatar.Image size={50} source={{ uri: user.photo_url }} />
                                    )}
                                />
                                <Card.Content>
                                    <Paragraph style={styles.paragraph}>User Information</Paragraph>
                                </Card.Content>
                            </Card>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}