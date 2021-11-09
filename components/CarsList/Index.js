import React from "react";
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from "./Styles";
import cars from "./cars";
import CarItem from "../CarItem/Index";


const CarsList = (props) => {
   // console.log(props)
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}
                showVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                /> }
            />
        </View>
    );
};

export default CarsList;