import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { CardModule } from './card/card.module';
import { CommentComponent } from './comment/comment.component';
import { UserModule } from './user/user.module';
import { StaticModule } from './static/static.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentComponent,
    EditComponent,
    CreateComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StaticModule,
    CoreModule,
    UserModule,
    CardModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
