import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();

  }
  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev +( curr.preco * curr.quantidade), 0)
  }
  comprar(){
      alert("Parabens por ter comprado conosco");
      this.carrinhoService.limparCarrinho();
      this.router.navigate(['produtos'])
  }
  removeProdutoCarrinho(produtoID: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoID );
    this.carrinhoService.removerProdutoCarrinho(produtoID);
    this.calculaTotal();
  }

}
