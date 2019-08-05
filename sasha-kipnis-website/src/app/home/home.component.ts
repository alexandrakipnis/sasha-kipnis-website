import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  message = "Welcome to my website! Made using Angular, I created this site as a place to let people get to know me. I've wanted to make a personal website for quite sometime, but what pushed me to do so was learning Angular for my internship in the summer of 2019. You can click on the tabs above to get to know me more, click thorugh my interactive resume, and learn about what I'm passionate about. Below, the icons will take you to my respective social media accounts. I hope you enjoy it!"
  
  ngOnInit() {
  }

}
