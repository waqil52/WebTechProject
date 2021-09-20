import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedMaterialModule } from '@materials/shared-material.module';
import { FormsMaterialModule } from '@materials/forms-material.module';
import { PageWrapperModule } from '../shared-modules/page-wrapper/page-wrapper.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from './components/settings/add-location/add-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { ModalWrapperModule } from '../shared-modules/modal-wrapper/modal-wrapper.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: {
      breadCrumb:''
    }
  }
]

@NgModule({
  declarations: [
    SettingsComponent,
    AddLocationComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    PageWrapperModule,
    ModalWrapperModule,
    RouterModule.forChild(routes)
  ]
})
export class AppSettingsModule { }
