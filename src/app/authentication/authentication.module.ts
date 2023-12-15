import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AuthenticationModule {}
