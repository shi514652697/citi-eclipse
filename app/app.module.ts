import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';


/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
import { EclipseComponent }    from './eclipse/eclipse.component';
import { EclipseNavComponent }    from './eclipseNav/eclipseNav.component';
import { DemographicComponent }    from './demographic/demographic.component';
import { ProductDetailsComponent }    from './proddetails/proddetails.component';
import { AdditionalInfoComponent }    from './additionalinfo/additionalinfo.component';
import { EclipseService }            from './service/eclipse.service';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* import http module*/
import { HttpModule } from '@angular/http';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    ReactiveFormsModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService },
                   { provide: EclipseService, useClass: EclipseService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, 
                  EclipseComponent, EclipseNavComponent, DemographicComponent,ProductDetailsComponent,AdditionalInfoComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}