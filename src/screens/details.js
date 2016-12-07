import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Details extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>The Strokes</Text>
                    </View>
                    <Image source={require('../images/header.jpg')} resizeMode='contain' style={{height: 227, width: 380, zIndex: -2}}/>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={[styles.detailBlocks, {borderRightColor: '#E9E5E1', borderRightWidth: 1,}]}>
                        <View style={styles.detailsTextContainer}>
                            <Icon name="ios-navigate-outline" size={25} color="#edd47b" />
                            <Text style={styles.eventText}>Lorem ipsum, blabla, address place</Text>
                        </View>
                    </View>
                     <View style={styles.detailBlocks}>
                        <View style={styles.detailsTextContainer}>
                            <Icon name="ios-calendar-outline" size={25} color="#edd47b" />
                            <Text style={styles.eventText}>23 Nov 2016{"\n"}7PM onwards</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bookContainer}>
                    <View style={styles.bookBlocks}>
                        <View style={styles.bookBlockText}>
                            <Text style={styles.titleText}>Ticket Awesome</Text>
                            <Text style={styles.priceText}>$1000</Text>
                        </View>
                        <TouchableOpacity style={styles.btnBook}>
                            <Text style={styles.btnBookText}>BOOK NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bookContainer}>
                    <View style={styles.bookBlocks}>
                        <View style={styles.bookBlockText}>
                            <Text style={styles.titleText}>Ticket Cool</Text>
                            <Text style={styles.priceText}>$500</Text>
                        </View>
                        <TouchableOpacity style={styles.btnBook}>
                            <Text style={styles.btnBookText}>BOOK NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bookContainer, {marginBottom: 20,}]}>
                    <View style={[styles.bookBlocks, { borderBottomWidth: 0, borderBottomColor: 'transparent'}]}>
                        <View style={styles.bookBlockText}>
                            <Text style={styles.titleText}>Ticket Meh</Text>
                            <Text style={styles.priceText}>$50</Text>
                        </View>
                        <TouchableOpacity style={styles.btnBook}>
                            <Text style={styles.btnBookText}>BOOK NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFAF6'
    },
    headerContainer: {
        flex: 2.5,
        elevation: 2
    },
    headerTextContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        top: 50,
        bottom: 0,
        left: 0,
    },
    headerText: {
        color: '#2A2B40',
        padding: 10,
        backgroundColor: '#edd47b',
        fontFamily: 'montserratbold',
        fontSize: 22,
    },
    detailsContainer: {
        flex: 1.5,
        backgroundColor: '#2A2B40',
        flexDirection: 'row',
    },
    detailsTextContainer: {
        margin: 20
    },
    eventText: {
        marginTop: 10,
        fontFamily: 'montserratlight',
        color: '#fff',
    },
    detailBlocks: {
        flex: 1,
    },
    bookContainer: {
        flex: 1,
        backgroundColor: '#FFFAF6',
    },
    bookBlocks: {
        flex: 1,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingBottom: 5,
        borderBottomColor: '#E9E5E1',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    bookBlockText: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: 'montserrat',
        color: '#2a2b40',
        fontSize: 16
    },
    priceText: {
        marginTop: 3,
        fontFamily: 'montserratlight'
    },
    btnBook: {
        borderRadius: 15,
        backgroundColor: '#2A2B40',
        justifyContent: 'center',
        height: 35,
        padding: 15,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 15,
    },
    btnBookText: {
        color: '#fff',
        fontFamily: 'montserratlight',
        fontSize: 13
    },
};
