import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";


const routes: Routes = [
  {path:'',redirectTo:'page',pathMatch:'full'},
  {path:'page',component: DictionaryPageComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
