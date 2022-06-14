import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  senha = "";

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void  {
  }

  // Serviço de autenticação 
  login() {
    // se o login estiver certo com email e senha, então irá para a pag protegida
    if (this.auth.login(this.email, this.senha)) {
      this.router.navigate(["pagina-protegida"]);
      return;
    }
    // Se for inválido o login
    alert("Login está inválido");
    this.email = ""; // Os campos ficarão vazios para serem digitados novamente
    this.senha = "";
    
  }
}
