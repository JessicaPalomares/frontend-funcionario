import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get("id");
    this.funcionarioService.readById(id).subscribe((funcionario) => {
      this.funcionario = funcionario;
      console.log(this.funcionario);
    });

  }

  updateFuncionario():void{
    this.funcionarioService.update(this.funcionario ).subscribe(() => {
      this.funcionarioService.showMessage("Dados do funcionario atualizado com sucesso!");
      this.router.navigate([""]);
    });
  }

  cancel(): void {
    this.router.navigate([""]);
  }



}
