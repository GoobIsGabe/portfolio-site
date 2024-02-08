import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor() {}
  Projects: Project[] = [
    new Project(
      /*Name*/'Speedrun Tracker',
      /*Desc*/'This project serves online speedrunners by allowing them to display their splits or times in a customizable HTML document. It utilizes TheRun.gg API, parsing JSON data, and can trigger actions on a local bot named Streamer.bot, with conditional support for special events.',
      /*Tech*/['C#', 'JavaScript', 'HTML', 'CSS', 'Websockets', 'OBS RAW'],
      /*Pics*/[],
      /*Repo*/'https://github.com/GoobIsGabe/Speedrun-Tracker',
      /*Vide*/'https://www.youtube.com/embed/pSom3BJ3-78?si=R2XoMMcG7SwRIxSD'
    ),
    new Project(
      'NGO Donation Portal',
      'This is a donation portal web application with JWT token authentication where users can create donors to contribute to set events which can be recurring or one time.',
      ['Java', 'Angular', 'JWT', 'Spring Boot', 'PostgreSQL', 'Typescript', 'Angular Material', 'Git'],
      [],
      'https://github.com/paulwhite93/NGO-groupProject',
    ),
    new Project(
      'Revature Community',
      'Created a platform for employees to post or ask questions about locations, focusing on categories like Housing, Entertainment, Food, and Events.',
      ['Java', 'Angular', 'AWS', 'Spring', 'Hibernate', 'HTML', 'CSS'],
      [],
      'https://github.com/revaturelabs/revature-community-backend/tree/main',
    ),
    new Project(
      'GameHub',
      'Developed a social platform for users to showcase their gaming progression, interests, and achievements.',
      ['Java', 'Angular', 'AWS', 'JavaScript', 'PostgreSQL', 'HTML', 'Bootstrap'],
      [],
      'https://github.com/GoobIsGabe/GameListProject',
    ),
    new Project(
      'Expense Reimbursement System (ERS)',
      'Designed a system for managing employee expense reimbursements, enabling users to submit requests and finance managers to approve or deny them.',
      ['Java', 'Microservices', 'AWS', 'JavaScript', 'PostgreSQL', 'HTML', 'CSS'],
      [],
      'https://github.com/GoobIsGabe/GameListProject',
    ),
  ];
  
}
