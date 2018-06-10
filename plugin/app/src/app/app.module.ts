import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({

	declarations: [
		AppComponent
	],
	imports: [
		CoreModule,
		SharedModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	bootstrap: [
		AppComponent
	]

})
export class AppModule {
}
