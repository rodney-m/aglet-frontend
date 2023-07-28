import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  isOpen = false;

  menu : {name : string; url : string}[] = [
    {
      url : '/',
      name: 'home'
    },
    {
      url : '/contact',
      name: 'contact'
    },
  ];

  constructor(private router : Router){}

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

  get currentRoute(){
    return this.router.url
  }

}
