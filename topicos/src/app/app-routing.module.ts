import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioRoutes } from './funcionarios';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'funcionarios/listar',
        pathMatch: 'full'
    },
    ...FuncionarioRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}