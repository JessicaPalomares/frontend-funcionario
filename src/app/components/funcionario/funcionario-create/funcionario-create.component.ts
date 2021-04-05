import { Funcionario } from './../funcionario.model';
import { FuncionarioService } from './../funcionario.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario :Funcionario = {
    nome: '',
    cpf:'',
    salario: null,

  }

  constructor( public funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {


  }
  createFuncionario(): void{
    this.funcionarioService.create(this.funcionario).subscribe(() =>{
      this.funcionarioService.showMessage('Funcionario creado!')
      this.router.navigate(['/funcionario'])
    });

  }
  cancel(): void{
    this.router.navigate([''])
  }

}
