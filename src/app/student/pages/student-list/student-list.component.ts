import { ArrayDataSource, DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {

  students$: Observable<Student[]>;
  displayedColumns = ['id', 'firstName', 'lastName', 'class']

  constructor(private _studentService:StudentService, private _router:Router) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();
    
  }
}

