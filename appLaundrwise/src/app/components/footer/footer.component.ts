import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public date =  new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }
  playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/audio/alert.mp3';
    audio.load();
    audio.play();
  }
}
