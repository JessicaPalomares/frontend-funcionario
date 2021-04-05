import { Funcionario } from './funcionario.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = "http://localhost:8080/funcionarios";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(funcionario:Funcionario) : Observable<Funcionario>
  {
    return this.http.post<Funcionario>(this.baseUrl, funcionario)
  }

  read():Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

  readById(codigo: number): Observable<Funcionario> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.get<Funcionario>(url)
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/${funcionario.codigo}`;
    return this.http.put<Funcionario>(url, funcionario)

  }
}
