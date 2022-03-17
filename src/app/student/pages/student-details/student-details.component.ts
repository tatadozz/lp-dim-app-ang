import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student$: Observable<Student>;
  id : string;

  constructor(public _route: ActivatedRoute, private _studentService:StudentService) {
    this.id = this._route.snapshot.params['id']; 
    this.student$ = this._studentService.getStudentById(Number(this.id));
  }

  ngOnInit(): void {

  }

}
