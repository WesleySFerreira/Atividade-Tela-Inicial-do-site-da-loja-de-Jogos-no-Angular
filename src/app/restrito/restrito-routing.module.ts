import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { RestritoComponent } from './restrito.component';
import { guardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
  {
    path: 'restrito', component: RestritoComponent, canActivate: [guardGuard], children: [
        { path: 'cadastro', component: CadastroProdutoComponent },
        { path: 'listar', component: ListarProdutoComponent },
        { path: 'editar/:id', component: AtualizarProdutoComponent }
      ] 
    },

    { path:'', redirectTo: '/restrito/listar', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule]
})
export class RestritoRoutingModule { }
