import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChemicalDetailComponent } from "./chemical-detail/chemical-detail.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'detail/:id', component: ChemicalDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }