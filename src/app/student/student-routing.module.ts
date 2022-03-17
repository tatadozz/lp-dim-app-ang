import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './student.component';

//localhost:4200/.../...ici.../
const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [{
    path: '',
    component: StudentListComponent
  },{
    path: ':id',
    component: StudentDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
