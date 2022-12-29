import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubmitComponent } from './components/form/submit/submit.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import {
  provideEnvironmentNgxMask,
  NgxMaskDirective,
  NgxMaskPipe,
  IConfig,
} from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubmitComponent,
    UsersFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideEnvironmentNgxMask(maskConfigFunction)],
  bootstrap: [AppComponent],
})
export class AppModule {}
