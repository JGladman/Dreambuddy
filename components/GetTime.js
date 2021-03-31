import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

  const GetTime = () => {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        
        if(hours > 12){
            hours = hours%12
        };
        
        setCurrentDate( 
            //date + ' ' + month + ' '+ ' ' + 
            hours + ':' + min 
        );
    }
    );

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.container}>

            <Text style={styles.textStyle}>
                {currentDate}
            </Text>
            </View>
        </View>
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 2,
          backgroundColor: 'white',
          justifyContent: 'center',
          padding: 10,
        },
        textStyle: {
          textAlign: 'center',
          fontSize: 50,
          color: 'black',
        },
      });
      

  
export default GetTime; 