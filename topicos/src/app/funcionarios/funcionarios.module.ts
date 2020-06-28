import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { FuncionarioService, FuncionarioConcluidaDirective} from './shared';
import { ListarFuncionarioComponent } from './listar';
import { CadastrarFuncionarioComponent } from './cadastrar';
import { EditarFuncionarioComponent } from './editar';



@NgModule({
  declarations: [ListarFuncionarioComponent, CadastrarFuncionarioComponent, EditarFuncionarioComponent, FuncionarioConcluidaDirective],
  providers: [
    FuncionarioService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class FuncionariosModule { }
