import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App {
  name = 'Temporizador Tabata ';
}

bootstrapApplication(App);

let title = "Temporizador Tabata";
document.getElementById('app').innerHTML = title;

let action = '-';
let round = 0;
let second = 5;
let intervalId =  setInterval(() => {
  if (round < 1) action = 'Prepare-se!';
  else if (round > 8) action = 'Sessão concluída!';
  else if (second > 10 ) action = 'Comece a se exercitar!';
  else action = 'Você merece um descanso (=';
  document.getElementById('app-acao').innerHTML = action;
  
  if (round >=1 && round <=8){
    document.getElementById('app-round').innerHTML = round.toString();
  }else {
    document.getElementById('app-round').innerHTML = '-';
  }
  if (round <= 8) {
    document.getElementById('app-tempo').innerHTML = second.toString() + 's';
  }else {
    document.getElementById('app-tempo').innerHTML = '-';
  }

  second -= 1;
  if(second == 0){
    round += 1;
    second = 30;
  }
},100);