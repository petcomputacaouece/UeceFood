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
import { CadProduto } from '../interfaces/CadProduto';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes (){
    
    return(
        <Navigator screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor:'#0ad58e',
            tabBarStyle:{borderTopColor:'#ffe' , backgroundColor:'#fff'}
     }}>
            <Screen 
            name= "home"
            component={HomeUser}
            options={{
                tabBarIcon: () => (
                    <IconHome/>
                )
            }}
            />
            <Screen 
            name= "vendas"
            component={Vendas}
            options={{
                tabBarIcon: () => (
                    <IconVendas/>
                )
            }}
            
            />
            <Screen 
            name= "inventario"
            component={Inventario}
            options={{
                tabBarIcon: () => (
                    <IconInventario/>
                )
            }}
            />
            <Screen 
            name= "analytics"
            component={Analytics}
            options={{
                tabBarIcon: () => (
                    <IconAnalytics/>
                )
            }}
            />
            <Screen 
            name= "configurações"
            component={Configuracoes}
            options={{
                tabBarIcon: () => (
                    <IconConfiguracoes/>
                )
            }}
            />
            <Screen 
            name= "cadastrarProd"
            component={CadProduto}
            options={{  tabBarButton: ()=> (null)
            }}
            />

        </Navigator>
    );
}