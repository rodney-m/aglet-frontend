import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Slide } from 'src/app/models/slide.model';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss']
})
export class SlideItemComponent {
  @Input() slide! : Slide;

  playVideo(video : HTMLVideoElement) {
      video.play();
  }
  
  
  pauseVideo(video : HTMLVideoElement) {
    video.pause()
  }
}
