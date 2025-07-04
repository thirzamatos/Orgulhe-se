import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { LoginComponent } from './paginas/login/login.component';
import { RecSenhaComponent } from './paginas/rec-senha/rec-senha.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CadastroComponent,
    LoginComponent,
    RecSenhaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OrgulheSe';
}
