import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODZkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  // Serviço de autenticação
  constructor() { }

  estaAutenticado(): boolean {
    // Salvar token de acesso
    //Local que será armazenado a informação de login
    // !! converte a expressão para boolean
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, senha: string): boolean {
    // Se as informações de email e login forem corretas, então irá salvar o token de acesso
    if (email === "admin@admin.com.br" && senha === "123456") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true; // Aceitou o login
    }

    return false

  }

  logout() {
    sessionStorage.clear(); // Limpar

  }
}
