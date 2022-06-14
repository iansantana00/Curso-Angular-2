import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit {
  // Definir o parâmetro id, pode ser número ou nulo
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = "";

  // Injetar o ActivatedRoute, para trabalhar com a rota
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Parâmetro que quer obter 
    this.route.paramMap.subscribe(params => {
      // converter o parâmetro para number
      this.id = Number(params.get("id"));
    
    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    })
    })
  }

}
