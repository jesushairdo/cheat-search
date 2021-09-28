import { Component, OnInit } from '@angular/core';
import { Cheat } from '../cheat';
import { CheatService } from '../cheat.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cheats',
  templateUrl: './cheats.component.html',
  styleUrls: ['./cheats.component.css']
})
export class CheatsComponent implements OnInit {
  cheats : Cheat[] = [];
  
  constructor(private cheatService: CheatService) { }

  ngOnInit(): void {
    this.getCheats();
  }

  getCheats(): void {
    this.cheatService.getCheats()
      .subscribe(cheats => this.cheats = cheats);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.cheatService.addCheat({ name } as Cheat)
      .subscribe(cheat => {
        this.cheats.push(cheat);
      });
  }
  delete(cheat: Cheat): void {
    this.cheats = this.cheats.filter(h => h !== cheat);
    this.cheatService.deleteCheat(cheat.id).subscribe();
  }
}
