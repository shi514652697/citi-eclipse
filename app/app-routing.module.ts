import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent }    from './personal/personal.component';
import { WorkComponent }        from './work/work.component';
import { AddressComponent }     from './address/address.component';
import { ResultComponent }      from './result/result.component';
import {EclipseComponent}       from './eclipse/eclipse.component';
import { EclipseNavComponent }    from './eclipseNav/eclipseNav.component';
import { DemographicComponent }    from './demographic/demographic.component';
import { ProductDetailsComponent }    from './proddetails/proddetails.component';
import { AdditionalInfoComponent }    from './additionalinfo/additionalinfo.component';
import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    //{ path: 'personal',  component: PersonalComponent },
   { path: 'eclipse',  component: EclipseComponent },
   { path: 'demographic',  component: DemographicComponent },
   { path: 'proddetails',  component: ProductDetailsComponent },
   { path: 'additionalinfo',  component: AdditionalInfoComponent },
    { path: 'details',  component: AdditionalInfoComponent },
     { path: 'signer',  component: AdditionalInfoComponent },
   { path: '',   redirectTo: '/additionalinfo', pathMatch: 'full' },
    // 2nd Route
    { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
   // { path: '',   redirectTo: '/personal', pathMatch: 'full' },
     
    // 6th Route
    { path: '**', component: PersonalComponent }
    //eclipse
   
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}