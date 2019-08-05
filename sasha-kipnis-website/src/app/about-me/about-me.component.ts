import { Component, OnInit } from '@angular/core';


export interface Tile {
    image: string;
    text: string;
    id: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  tiles: Tile[] = [
    {id: 1, image: "California", text: "I grew up in the heart of the Silicon Valley in Cupertino, California. I was surrounded by tech my entire life - the newest tech gadgets were always at my fingertips. My privelaged upbringing inspired me to go into Computer Science - I am eager to contribute to social change through technological advancements. "},
    {id: 1, image: "Purdue", text: "I am currently attending Purdue University as a Computer Science Major with a concentration in Machine Learning. I am also minoring in Statistics and working on completing my Entrepreneurship Certificate. I love Purdue for so many different reasons, but my favorite things are the beautiful campus, the friendliness in the Midwest, and of course the football and basketball games."},
    {id: 2, image: "CSWN", text: "During my sophomore year I served as Purdue's Computer Science Women's Network's President. In this role I worked to manage a board to help put on events for women in the major to meet each other and provide them with networking opportunities. I am an adamant advocate for gender equality in tech, but you can read more about that in the 'Passions' tab."},
    {id: 2, image: "Soccer", text: "I grew up playing competitive soccer for about 10 years. I played competitive club soccer and varsity school soccer and served as team captain on my club team called Revolution. Though I did not continue soccer in college, I continue to actively watch and support the USWNT and am a supporter of their fight for equal pay."},
    {id: 1, image: "Theta", text: "I am currently in Kappa Alpha Theta - a national greek sorority. In my sorority we raise funds for Court Appointed Student Advocates (CASA) - an organization to help at risk youth have a voice when they get into legal trouble. I've made wonderful friends in my sorority and throughout the entire Greek system at Purdue."},
    {id: 1, image: "Skiing", text: "Though I only get to go once or twice a year, my favorite hobby is skiing. I have been skiing since I could walk - my parents put me into ski lessons as early as possible. My favorite place to ski is Squaw Valley in Lake Tahoe, California. I hope to eventually live somewhere with semi-close access to a ski resort. "}
  ]

  constructor() { }

  ngOnInit() {
  }

}
