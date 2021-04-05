import { RouterModule ,Routes} from '@angular/router';
import { ClieComponenteComponent } from './componentes/clie-componente/clie-componente.component';
import { LoginComponenteComponent } from './componentes/login-componente/login-componente.component';
import { UsuaComponenteComponent } from './componentes/usua-componente/usua-componente.component';
import { SoliEntregaComponent } from './componentes/soli-entrega/soli-entrega.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { StockComponent } from './componentes/stock/stock.component';
import {StockClienteComponent} from './componentes/stock-cliente/stock-cliente.component';
import {StockOrdenesComponent}from './componentes/stock-ordenes/stock-ordenes.component';
import {VehiculoComponent} from './componentes/vehiculo/vehiculo.component';
import {ChoferComponent} from './componentes/chofer/chofer.component'
const app_routes: Routes = [

    {path:'login',component:LoginComponenteComponent,canActivate:[CheckLoginGuard]},
    {path:'solicitud',component: SoliEntregaComponent},
    {path:'usuaCliente',component: ClieComponenteComponent},

    {path:'stock',component: StockComponent},
    {path:'movimientos',component: StockClienteComponent},
    {path:'ordenes',component: StockOrdenesComponent},

    {path:'administrar/:id', component: UsuaComponenteComponent},
    {path:'chofer',component:ChoferComponent},
    {path:'vehiculo',component:VehiculoComponent},

    {path:'**', pathMatch:'full',redirectTo:'login'},

];
export const app_routing = RouterModule.forRoot(app_routes);
