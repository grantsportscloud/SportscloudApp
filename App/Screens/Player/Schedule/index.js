import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text, Image, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { COLORS, FONT, HEIGHT, WIDTH } from '../../../Utils/constants';
import { CommonPicker } from "../../../Components/Common/commonPicker"
import Entypo from 'react-native-vector-icons/Entypo';
import { PracticeScreen, RosterBannerScreen } from "../../../Components/Home/practice"
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../../Redux/Actions/authAction'
import CalendarStrip from 'react-native-calendar-strip';


const sportsType = [
    {
        label: 'Cricket',
        value: 'cricket',
    },
    {
        label: 'Football',
        value: 'football',
    },
];


export default function ScheduleScreens(props) {

    const [sportsName, setSportsName] = useState("cricket");
    const userdata = useSelector((state) => state.userdata);
    const [userMe, setUser] = React.useState(null)
    const dispatch = useDispatch()

    React.useEffect(() => {
        let user = userdata && userdata
        console.log("user profiles data--->", user)
        setUser(user);
    }, [userdata]);

    const handleLogout = async () => {
        const isSignin = await AsyncStorage.removeItem('@user')
        dispatch(logoutUser(isSignin))
    }

    const placeholderSports = {
        label: 'please select sports',
        value: 'sports',
    };
    const selectedDay = (val) => {
        console.log(val)
    };


    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#2C2C2C' }}>
                <StatusBar backgroundColor={COLORS.APPCOLORS} barStyle="light-content" />

                <View style={{ flexDirection: "row", width: WIDTH, justifyContent: "space-around", paddingVertical: 10 }}>
                    <View style={{ width: "40%" }}>
                        <CommonPicker
                            selected={sportsName}
                            placeholder={placeholderSports}
                            onChange={(sportsName) => setSportsName(sportsName)}
                            items={sportsType}
                        />
                    </View>

                    <View style={{ backgroundColor: "#595959", width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Entypo name="plus" size={24} color="white" />
                    </View>
                </View>

                <View style={{ paddingTop: 10, paddingHorizontal: 20, borderRadius: 10,marginBottom:20 }}>
                    <CalendarStrip
                        scrollable
                        style={{ height: 100, paddingTop: 10, paddingBottom: 10,borderRadius:10 }}
                        calendarColor={'#595959'}
                        calendarHeaderStyle={{ color: 'white' }}
                        dateNumberStyle={{ color: 'white' }}
                        dateNameStyle={{ color: 'white' }}
                        iconContainer={{ flex: 0.1, }}
                    />
                </View>
               
               <ScrollView style={{height:HEIGHT*0.57}}>
                <View style={{ backgroundColor: "#595959", marginHorizontal: 10, padding: 5,borderRadius:10,marginBottom:10 }}>
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ color: "white" }}>Wednesday 3, Jun</Text>
                        </View>
                        <View>
                            <Text style={{ color: "white" }}>Today</Text>
                        </View>
                    </View>

                    <View>
                        <View></View>
                        <View></View>
                        <View></View>
                    </View> */}
                    <Image
                        source={require('../../../Assets/toggle.png')}
                        resizeMode="contain" style={{ height: HEIGHT * 0.3, width: WIDTH * 0.9 }}
                    />
                </View>

                <View style={{ backgroundColor: "#595959", marginHorizontal: 10, padding: 5,borderRadius:10, }}>
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ color: "white" }}>Wednesday 3, Jun</Text>
                        </View>
                        <View>
                            <Text style={{ color: "white" }}>Today</Text>
                        </View>
                    </View>

                    <View>
                        <View></View>
                        <View></View>
                        <View></View>
                    </View> */}
                    <Image
                        source={require('../../../Assets/toggle.png')}
                        resizeMode="contain" style={{ height: HEIGHT * 0.3, width: WIDTH * 0.9 }}
                    />
                </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        // height: HEIGHT,
        // width: WIDTH,

    },


})