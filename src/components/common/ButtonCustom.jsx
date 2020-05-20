import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ buttonStyle, onPress, text, textStyle, disabled }) => {
    return disabled ? (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
};

export default ButtonCustom;
