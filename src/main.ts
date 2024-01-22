import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x3Rnxbf1x0ZFFMYFxbRXBPMyBoS35RdURhWHZecndXQmRUVEJ3");


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
