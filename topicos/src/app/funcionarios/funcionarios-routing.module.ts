import { Routes}  from '@angular/router';

import { ListarFuncionarioComponent } from './listar';
import { CadastrarFuncionarioComponent } from './cadastrar';
import { EditarFuncionarioComponent} from './editar';


export const FuncionarioRoutes : Routes = [
    {
    path: 'funcionarios',
    redirectTo: 'funcionarios/listar'
    },
    {
        path: 'funcionarios/listar',
        component: ListarFuncionarioComponent
    },
    {
        path: 'funcionarios/cadastrar',
        component: CadastrarFuncionarioComponent
    },
    {
        path:'funcionarios/editar/:id',
        component: EditarFuncionarioComponent
    }
];