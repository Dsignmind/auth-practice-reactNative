//Functional component good for static content

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backGroundColor: '#F8F8F8',
        justifyContent: 'center', //vertical alignment
        alignItems: 'center',  //horizontal alignment
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export { Header };
