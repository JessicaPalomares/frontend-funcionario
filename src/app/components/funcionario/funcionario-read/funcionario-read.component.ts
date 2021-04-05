
import { FuncionarioService } from './../funcionario.service';
import { Funcionario} from './../funcionario.model';
import { FuncionarioCreateComponent } from './../funcionario-create/funcionario-create.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {
  funcionarios : Funcionario[];


  displayedColumns = ['codigo', 'nome', 'cpf', 'salario', 'action']

  constructor( private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios =>{
      this.funcionarios = funcionarios;
      console.log(funcionarios);

    })


  }


}
