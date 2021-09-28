import { Component, OnInit } from '@angular/core';
import { Cheat } from '../cheat';
import { CheatService } from '../cheat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cheats: Cheat[] = [];

  constructor(private cheatService: CheatService ) { }

  ngOnInit() {
    this.getCheats();
  }

  getCheats(): void{
    this.cheatService.getCheats()
      .subscribe(cheats => this.cheats = cheats.slice(1,3));
  }
}
