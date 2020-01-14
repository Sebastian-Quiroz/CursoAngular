// Aca se declarara todo lo relacionado con este nuevo modulo
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ]
})
export class HomeModule {}
