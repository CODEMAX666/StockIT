import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';

import { CurrencyComponent } from './currency.component';


const routes = [
  {
    path: '',
    component: CurrencyComponent ,
    data: { animation: 'sample' }
  }
];

@NgModule({
  declarations: [CurrencyComponent ],
  imports: [RouterModule.forChild(routes),TranslateModule, CoreCommonModule,NgbModule],
  exports: [CurrencyComponent]
})
export class CurrencyModule {}