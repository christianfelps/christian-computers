import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  constructor() { }

  obtemCarrinho(){
     this.itens = JSON.parse(localStorage.getItem('carrinho') || "[]");
     return this.itens;
  }

  addAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoID: number){
    this.itens = this.itens.filter(item => item.id !== produtoID);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }


}
