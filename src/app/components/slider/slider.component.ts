import { Component, ElementRef, ViewChild } from '@angular/core';
import { Slide } from 'src/app/models/slide.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent {
  @ViewChild('videoPlayer') videoPlayer!: HTMLVideoElement ;
  @ViewChild('slideList') slideList!: ElementRef;
  scrollPositionValue = 0;

  slides : Slide[] = [
    {
      title: 'Grow up',
      subtitle: 'Stories of a new',
      image: 'assets/Thumbnails/download.jpg',
      video: 'assets/Videos/1_Grow_up_Stage_Modul_video.mp4'
    },
    {
      title: 'Easy Driver',
      subtitle: 'Mercedes AMG GT C Roadster',
      image: 'assets/Thumbnails/download-3.jpg',
      video: 'assets/Videos/EasyRider_8Sec_L.mp4'
    },
    {
      title: 'Jes! All veggie',
      subtitle: 'Our first ever sweets campaign',
      image: 'assets/Thumbnails/download-4.jpg',
      video: 'assets/Videos/katjes_stage-1.mp4'
    },
    {
      title: 'Stronger than time',
      subtitle: 'The new G-Class',
      image: 'assets/Thumbnails/download-11.jpg',
      video: 'assets/Videos/stage_g_class_dna.mp4'
    },
    {
      title: 'Unleash your senses',
      subtitle: 'The new C-Class cabriolet',
      image: 'assets/Thumbnails/download-2.jpg',
      video: 'assets/Videos/TimeToLookUpAgain_8Sec_L.mp4'
    },
    {
      title: 'Unleash your senses',
      subtitle: 'The new C-Class cabriolet',
      image: 'assets/Thumbnails/download-10.jpg',
      video: 'assets/Videos/eq_stage_video.mp4'
    },
    {
      title: 'Luxury in motion',
      subtitle: 'The F015 concept car',
      image: 'assets/Thumbnails/download-1.jpg',
      video: 'assets/Videos/IAA_Makingof_8Sec_L.mp4'
    },
    {
      title: 'Speed thrills',
      subtitle: 'The game of unity',
      image: 'assets/Thumbnails/download-8.jpg',
      video: 'assets/Videos/F1_stage-1.mp4'
    },
    {
      title: 'Stress relief',
      subtitle: 'Keeping you calm',
      image: 'assets/Thumbnails/download-6.jpg',
      video: 'assets/Videos/Mercedes_Leon_stage.mp4'
    },
    {
      title: '3 series',
      subtitle: 'The signature bmw',
      image: 'assets/Thumbnails/download-9.jpg',
      video: 'assets/Videos/bmw_stage_3.mp4'
    },
    {
      title: 'Can you risk it all',
      subtitle: 'The game of risk',
      image: 'assets/Thumbnails/download-5.jpg',
      video: 'assets/Videos/risk_1.mp4'
    },
  ]


 

  
  onScroll(event: Event) {
    const slideList = this.slideList.nativeElement;
    const scrollWidth = slideList.scrollWidth - slideList.clientWidth;
    this.scrollPositionValue = Math.floor((slideList.scrollLeft / scrollWidth) * 100);
    
  }


}



