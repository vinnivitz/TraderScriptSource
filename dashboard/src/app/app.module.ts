import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/auth.state';
import { environment } from 'src/environments/environment';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsEmitPluginModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
