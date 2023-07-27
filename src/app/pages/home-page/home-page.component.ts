import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @ViewChild('videoPlayer') videoPlayer!: HTMLVideoElement | any;
  thumbnailUrl = 'assets/Thumbnails/download-9.jpg';

  playVideo() {
    // this.videoPlayer.play();
    this.videoPlayer.nativeElement.play()
    console.log(this.videoPlayer);
    // console.log("me ", this.videoPlayer.nativeElement.play())
  }

  pauseVideo() {
    // this.videoPlayer.pause();
  }
}
