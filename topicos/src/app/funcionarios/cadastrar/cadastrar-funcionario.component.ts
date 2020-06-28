import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService, Funcionario } from '../shared'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  @ViewChild('formFuncionario',{static: true }) formFuncionario: NgForm;
  funcionario: Funcionario;

  constructor(    
    private funcionarioService: FuncionarioService,
    private router: Router) { }
    
  ngOnInit() {
    this.funcionario = new Funcionario();
  }

  cadastrar(): void{
    if (this.formFuncionario.form.valid){
      this.funcionarioService.cadastrar(this.funcionario);
      this.router.navigate(["/funcionarios"]);
    }
  }

}
