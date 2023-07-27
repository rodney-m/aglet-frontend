import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild("links") links! : ElementRef;
  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  show = false;

  ngOnInit(): void {
    this.windowWidth > 900 ? this.show = true : this.show = false
  }
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    if(this.windowWidth > 900){
      this.show = true;
    }
  }
  toggleMenu(){
    this.show = !this.show
    // if(this.windowWidth > 900){
    //   this.show = true;
    // } else{
    // }
  }

}
