import {NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';
import {AuthRoutes} from '@routes/auth.routes'

export function Routes(){
    return(
        <>
        <AuthRoutes/>
        </>
    );
}