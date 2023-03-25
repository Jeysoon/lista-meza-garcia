import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Alumno{
  id: string;
  fechaIngreso: Date;
  nombre: string;
  fotografia: string
  inscrito: boolean;
  experiencia: number;
}
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

constructor(private http: HttpClient) { }

traerAlumnos(){
  return this.http.get<Alumno[]>('https://641f4ae0f228f1a83eb42d21.mockapi.io/alumnos');
}

}
