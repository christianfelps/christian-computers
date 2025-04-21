import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    const termo = this.descricao.trim()
    if (termo) {
      this.router.navigate(['produtos'], { 
        queryParams: { descricao: termo },  // Mudei para 'busca' para ser mais genérico
        queryParamsHandling: 'merge'    // Mantém outros queryParams existentes
      });
    } else {
      this.router.navigate(['produtos']);
    }
  }}
