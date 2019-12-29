import { Component, OnInit } from '@angular/core';

export interface Tile {
  title: string;
  subtitle: string;
  item1: string;
  item2: string;
  item3: string;
}

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {title: "Computer Science Women's Network", subtitle: "President 2018 - 2019", item1: "Serve as the face of CSWN within Purdue's CS department, maintain a 13-member officer team, run weekly meetings", item2: "Create opportunities for networking and 1-on-1 company interaction by working with Purdue Corporate Partners", item3: "Planned Women in Tech Panel for 100 students to hear from 7 female panelists in the tech industry"},
    {title: "Mentors for Aspiring Girls in Computing", subtitle: "Mentor 2017 - Present", item1: "Teach girls programming skills by running weekly workshops at local Lafayette high schools", item2: "Serve as a role model to encourage female students to pursue a career in a STEM related field", item3: "Spoke with Governor Holcomb and Indiana State representatives about funding for K-12 STEM Education"},
    {title: "Women in Science Programs", subtitle: "Mentor 2018-2019",item1: "Acted as a mentor for an incoming freshman in the College of Science at Purdue University by meetings weekly", item2: "Received Jandos Scholarship Award for my commitment to women in stem related majors", item3: "Attended monthly diversity events and led group discussions about their impact and intended messages"}
  ]
  ngOnInit() {
  }

}
