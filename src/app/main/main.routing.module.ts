import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportOneComponent } from "./components/report-one/report-one.component";
import { ReportTwoComponent } from "./components/report-two/report-two.component";
import { MainComponent } from "./main.component";

const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {path: '', redirectTo: 'report-one', pathMatch: 'prefix'},
            {path: 'report-one', component: ReportOneComponent},
            {path: 'report-two', component: ReportTwoComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}