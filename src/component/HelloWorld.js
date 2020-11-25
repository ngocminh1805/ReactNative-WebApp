import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

class HelloWorld extends PureComponent{

    render(){
        return(
            <View style = {{flex:1}}>
                <Text style = {{ fontSize: 30 , fontWeight}}>
                    Hello World
                </Text>
            </View>
        )
    }


}

export default HelloWorld