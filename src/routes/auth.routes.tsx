import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '@interfaces/Login';
import { Recuperacao } from '@interfaces/Recuperacao';
import { Cadastro } from '../interfaces/Cadastro';
import { HomeUser } from '../interfaces/HomeUser';
import { AppRoutes } from './app.routes';
import { Loading } from '../interfaces/Loading';

const {Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false }}>
            <Screen       //Primeira tela a ser mostrada
            name='Loading'
            component={Loading}

            />
          <Screen
            name='cadastroLoja'
            component={Cadastro}
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