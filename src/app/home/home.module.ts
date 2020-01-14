// Aca se declarara todo lo relacionado con este nuevo modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
// Importado un modulo que sera compartido por otros modulos
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule {}
