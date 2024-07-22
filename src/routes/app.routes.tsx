import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Pizza } from 'phosphor-react-native';
import IconVendas from "@assets/iconVendas.svg"
import IconHome from "@assets/iconHome.svg";
import IconInventario from "@assets/iconInvent.svg"
import IconAnalytics from "@assets/iconAnalyt.svg"
import IconConfiguracoes from "@assets/iconConfig.svg"


import { HomeUser } from '../interfaces/HomeUser';
import { Vendas } from '../interfaces/Vendas';
import { Inventario } from '../interfaces/Inventario';
import { Analytics } from '../interfaces/Analytics';
import { Configuracoes } from '../interfaces/Configuracoes';
import { CadProduto } from '../interfaces/CadProduto';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#00214E',
            tabBarInactiveTintColor: '#626262',
            tabBarStyle: { borderTopColor: '#ffe', backgroundColor: '#fff' }
        }}>
            <Screen
                name="home"
                component={HomeUser}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconHome fill={color} width={30} height={34} />
                    )
                }}
            />
            <Screen
                name="vendas"
                component={Vendas}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconVendas fill={color} width={30} height={34}/>
                    )
                }}

            />
            <Screen
                name="inventario"
                component={Inventario}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconInventario fill={color} width={30} height={34} />
                    )
                }}
            />
            <Screen
                name="analytics"
                component={Analytics}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconAnalytics fill={color} width={30} height={34}/>
                    )
                }}
            />
            <Screen
                name="configurações"
                component={Configuracoes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconConfiguracoes fill={color} width={30} height={34}/>
                    )
                }}
            />
            <Screen
                name="cadastrarProd"
                component={CadProduto}
                options={{
                    tabBarButton: () => (null)
                }}
            />

        </Navigator>
    );
}