import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Carlos Júnior', cidade: 'Brazlândia', estado: 'DF', ativo: true},
    {nome: 'Lucca Henrico', cidade: 'Plano Piloto', estado: 'DF', ativo: true},
    {nome: 'Mariana Cristina', cidade: 'Tiros', estado: 'MG', ativo: true},
    {nome: 'Rhavi Heitor', cidade: 'Águas Claras', estado: 'DF', ativo: true},
    {nome: 'Bella da Silva', cidade: 'Taguatinga', estado: 'RJ', ativo: true},
    {nome: 'Carlos Valdi', cidade: 'Barreiras', estado: 'BA', ativo: true},
    {nome: 'Andreia dos Santos', cidade: 'Santo Antônio', estado: 'GO', ativo: true},
    {nome: 'Maria Betânia', cidade: 'Floripa', estado: 'SC', status: false},
    {nome: 'Gustavo Mendes', cidade: 'Porto de Galinhas', estado: 'PE', ativo: false},
  ];


}
