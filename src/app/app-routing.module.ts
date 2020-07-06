import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { ProductSpecsComponent } from './product-specs/product-specs.component';
import { EditformComponent } from './editform/editform.component';


const routes: Routes = [
  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "product/:id",
    component : ProductSpecsComponent
  },
  {
    path : "product/:id/editform",
    component : EditformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
