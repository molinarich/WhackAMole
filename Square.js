import React from "react";
import {view, StyleSheet} from 'react-native';

const Square = () => {

    return(
    <view style={styles.square} ></view>
    )

    }


    const styles = StyleSheet.create(
        square:{
            flex: '1',
            minWidth: '80',
            minHeight: '80',
            margine: '10',
            backgroundcolor: 'red',
        }
    )

    export default Square
