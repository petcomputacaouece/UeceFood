import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconHome from "@assets/iconHome.svg"
import IconVendas from "@assets/iconVendas.svg"
import IconInventario from "@assets/iconInvent.svg"
import IconAnalytics from "@assets/iconAnalyt.svg"
import IconConfiguracoes from "@assets/iconConfig.svg"


import { HomeUser } from '../interfaces/HomeUser';
import { Vendas } from '../interfaces/Vendas';
import { Inventario } from '../interfaces/Inventario';
import { Analytics } from '../interfaces/Analytics';
import { Configuracoes } from '../interfaces/Configuracoes';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes (){

    return(
        <Navigator screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor:'#00214E',
            tabBarStyle:{borderTopColor:'#ffe' , backgroundColor:'#fff'}
     }}>
            <Screen 
            name= "Home"
            component={HomeUser}
            options={{
                tabBarIcon: () => (
                    <IconHome/>
                )
            }}
            />
            <Screen 
            name= "Vendas"
            component={Vendas}
            options={{
                tabBarIcon: () => (
                    <IconVendas/>
                )
            }}
            
            />
            <Screen 
            name= "Inventário"
            component={Inventario}
            options={{
                tabBarIcon: () => (
                    <IconInventario/>
                )
            }}
            />
            <Screen 
            name= "Analytics"
            component={Analytics}
            options={{
                tabBarIcon: () => (
                    <IconAnalytics/>
                )
            }}
            />
            <Screen 
            name= "Configurações"
            component={Configuracoes}
            options={{
                tabBarIcon: () => (
                    <IconConfiguracoes/>
                )
            }}
            />
            

        </Navigator>
    );
}