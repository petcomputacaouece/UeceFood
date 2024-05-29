import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '@interfaces/Login';
import {Inicial} from '@interfaces/Inicial';
import { Header } from 'react-native/Libraries/NewAppScreen';

const {Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false }}>
            <Screen       //Primeira tela a ser mostrada
            name='inicial'
            component={Inicial}

            />
            <Screen
            name='login'
            component={Login}

            />
        </Navigator>

    );
}