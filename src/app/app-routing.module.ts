import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AboutComponent } from "./about/about.component";
import { SignupComponent } from "./signup/signup.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { ProfileComponent } from "./profile/profile.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "adminProducts",
    component: AdminProductsComponent
  },
  {
    path: "addProduct",
    component: AddProductComponent
  },
  {
    path: "editProduct/:id",
    component: EditProductComponent
  },
  {
    path: "adminUsers",
    component: AdminUsersComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
