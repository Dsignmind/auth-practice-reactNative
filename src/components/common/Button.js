import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => { //Passes onPress from parent
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress} //Calls onPress from parent
            style={buttonStyle}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
//because we are exporting all of our components in a common file we must use this syntax
//instead of 'export default Button;'
