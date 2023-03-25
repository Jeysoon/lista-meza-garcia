import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Alumno, AlumnosService } from './services/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lista-Meza-Garcia';
  alumnos$!: Observable<Alumno[]>;
  constructor(private alumnosService: AlumnosService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.alumnos$ = this.alumnosService.traerAlumnos();
  }

}
