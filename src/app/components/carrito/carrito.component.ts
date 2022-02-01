import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() data:any;
  game:any;  

  constructor(private srvGames: GamesService ) { }

  ngOnInit(): void {
    console.log("data ", this.data);
    this.game = this.srvGames.getGame(this.data)
  }

}
