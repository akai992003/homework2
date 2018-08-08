import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // 跟form 有關係的
import { FlexLayoutModule } from '@angular/flex-layout'; // 幫助畫面排版用的
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 頁面特效方面有關的

import { SharedMaterialModule } from './sharedMaterial-module'; // sharedMetarial引用進來
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http'; // CALL API 會用到的
import { LocalStorage } from './local.storage';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    CdkTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
