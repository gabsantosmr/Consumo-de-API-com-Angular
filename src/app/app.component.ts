import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { MenuComponent } from './componentes/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RodapeComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-jogos';
}
