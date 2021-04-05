import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
/*Componentes */
import { ClieComponenteComponent } from './componentes/clie-componente/clie-componente.component';
import { LoginComponenteComponent } from './componentes/login-componente/login-componente.component';
import { UsuaComponenteComponent } from './componentes/usua-componente/usua-componente.component';
import { SoliEntregaComponent } from './componentes/soli-entrega/soli-entrega.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
//rutas
import {app_routing}from './app.routes';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
//TablaSoliEntregaComponent
import {DataTablesModule} from 'angular-datatables';

import { TablaUsuarioComponent } from './componentes/tabla-usuario/tabla-usuario.component';
import { TablaSoliEntregaComponent } from './componentes/tabla-soli-entrega/tabla-soli-entrega.component';
import { TablaClienteComponent } from './componentes/tabla-cliente/tabla-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogConfirComponent } from './componentes/dialog-confir/dialog-confir.component';
import { ClientesService } from './servicios/clientes.service';
import { StockComponent } from './componentes/stock/stock.component';
import { StockClienteComponent } from './componentes/stock-cliente/stock-cliente.component';
import { TablaStockClienteComponent } from './componentes/tabla-stock-cliente/tabla-stock-cliente.component';
import { TablaStockComponent } from './componentes/tabla-stock/tabla-stock.component';
import { StockOrdenesComponent } from './componentes/stock-ordenes/stock-ordenes.component';
import { TablaStockOrdenesComponent } from './componentes/tabla-stock-ordenes/tabla-stock-ordenes.component';
import { TablaChoferComponent } from './componentes/tabla-chofer/tabla-chofer.component';
import { ChoferComponent } from './componentes/chofer/chofer.component';
//servicios
import {StockService} from './servicios/stock.service';
import { DatePipe } from '@angular/common';
//fecha
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { VehiculoComponent } from './componentes/vehiculo/vehiculo.component';
import { TablaVehiculoComponent } from './componentes/tabla-vehiculo/tabla-vehiculo.component';

registerLocaleData(localeEs,'es');

@NgModule({
  declarations: [
    AppComponent,
    ClieComponenteComponent,
    LoginComponenteComponent,
    UsuaComponenteComponent,
    MenuComponent,
    CabeceraComponent,
    SoliEntregaComponent,
    TablaUsuarioComponent,
    TablaSoliEntregaComponent,
    TablaClienteComponent,
    DialogConfirComponent,
    StockComponent,
    StockClienteComponent,
    TablaStockClienteComponent,
    TablaStockComponent,
    StockOrdenesComponent,
    TablaStockOrdenesComponent,
    TablaChoferComponent,
    ChoferComponent,
    VehiculoComponent,
    TablaVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
  ],
  exports:[ReactiveFormsModule,DialogConfirComponent],
  providers: [ClientesService,DatePipe,TablaChoferComponent,TablaVehiculoComponent,
              {provide:LOCALE_ID,useValue:'es'},
            ],
  bootstrap: [AppComponent],
  entryComponents:[DialogConfirComponent]
})
export class AppModule { }
