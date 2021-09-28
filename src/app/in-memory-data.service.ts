import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cheat } from './cheat';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const cheats = [
      { id: 1, name: 'Cheat 1', systemName: 'snes', comments: 'Just a test', number: 1, code: 'FFFF-FFFF-FFFF-FFFF', description: 'My first cheat code', gameName: 'My first game' },
      { id: 2, name: 'Cheat 2', systemName: 'snes', comments: 'Just a test2', number: 2, code: 'EEEE-FFFF-FFFF-FFFF', description: 'My second cheat code', gameName: 'My first game' },
      { id: 3, name: 'Cheat 3', systemName: 'snes', comments: 'Just a test3', number: 1, code: 'DDDD-FFFF-FFFF-FFFF', description: 'My third cheat code', gameName: 'My first game' }
    ];
    return {cheats};
  }
  //Overrides the genId method to ensure that a cheat always has an id
  // If the cheat array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // cheat id + 1
  genId(cheats: Cheat[]): number {
    return cheats.length > 0 ? Math.max(...cheats.map(cheat => cheat.id)) + 1: 1;
  }
}
