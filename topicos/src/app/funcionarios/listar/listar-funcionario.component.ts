import { Component, OnInit } from '@angular/core';

import { FuncionarioService, Funcionario } from '../shared';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  
  funcionarios: Funcionario[];
  
  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.funcionarios = this.listarTodos();
  }

  listarTodos(): Funcionario[] {
  	return this.funcionarioService.listarTodos();
  }

  remover($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm('Deseja remover o funcionario "' + funcionario.nome + '"?')) {
      this.funcionarioService.remover(funcionario.id);
      this.funcionarios = this.listarTodos();
    }
  }

  alterarStatus(funcionario: Funcionario): void {
    if (confirm('Deseja desvincular o funcionario "' + funcionario.nome + '"?')) {
      this.funcionarioService.alterarStatus(funcionario.id);
      this.funcionarios = this.listarTodos();
    }
  }

}
