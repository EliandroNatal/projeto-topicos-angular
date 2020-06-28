import { Injectable } from '@angular/core';

import { Funcionario} from './';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarTodos(): Funcionario[]{
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  cadastrar(funcionario: Funcionario): void{
    const funcionarios = this.listarTodos();
    funcionario.id = new Date().getTime();
    funcionarios.push(funcionario);
    localStorage['funcionarios'] = JSON.stringify(funcionarios)
  }

  buscarPorId(id: number): Funcionario {
    const funcionarios: Funcionario[] = this.listarTodos();
    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizar(funcionario:Funcionario): void {
    const funcionarios: Funcionario[] = this.listarTodos();
    funcionarios.forEach((obj, index, objs) => {
      if (funcionario.id === obj.id) {
        objs[index] = funcionario;
      }
    });
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  remover(id: number): void {
    let funcionarios: Funcionario[] = this.listarTodos();
    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  alterarStatus(id: number): void {
    const funcionarios: Funcionario[] = this.listarTodos();
    funcionarios.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }
}
