import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '@interfaces/Login';
import {Inicial} from '@interfaces/Inicial';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Recuperacao } from '@interfaces/Recuperacao';
import { Cadastro } from '../interfaces/Cadastro';
import { HomeUser } from '../interfaces/HomeUser';
import { AppRoutes } from './app.routes';

const {Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false }}>
           
            <Screen
            name='cadastroLoja'
            component={Cadastro}
            />
            <Screen       //Primeira tela a ser mostrada
            name='inicial'
            component={Inicial}

            />
            <Screen
            name='login'
            component={Login}

            />
             <Screen
            name='recuperacao'
            component={Recuperacao}
            />
             <Screen
        name='appRoutes'
        component={AppRoutes}
        />
          
        </Navigator>

    );
}