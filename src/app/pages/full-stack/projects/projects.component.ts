import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getEmbeddedVideoUrl(videoURL: string): SafeResourceUrl {
    const embedUrl = `https://www.youtube.com/embed/${videoURL}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  Projects: Project[] = [
    new Project(
      /*Name*/ 'Speedrun Tracker',
      /*Desc*/ 'This project serves online speedrunners by allowing them to display their splits or times in a customizable HTML document. It utilizes TheRun.gg API, parsing JSON data, and can trigger actions on a local bot named Streamer.bot, with conditional support for special events.',
      /*Tech*/ ['C#', 'JavaScript', 'HTML', 'CSS', 'Websockets', 'OBS RAW'],
      /*Pics*/ [],
      /*Repo*/ 'https://github.com/GoobIsGabe/Speedrun-Tracker',
      /*Vide*/ 'pSom3BJ3-78?si=LKBi-UUzjmJ2Mddm&amp;start=30'
    ),
    new Project(
      'NGO Donation Portal',
      'This was a two week sprint of creating a donation portal web application which included a JWT token authentication where users can create donors to contribute to set events which can be recurring or one time. Admins have the functionality to add and remove users/donation types, and view all current donations.',
      [
        'Java',
        'Angular',
        'JWT',
        'Spring Boot',
        'PostgreSQL',
        'Typescript',
        'Angular Material',
        'Git',
      ],
      ['/assets/images/NGO/NGOLogin.webp', '/assets/images/NGO/NGOAdminViewUser.webp', '/assets/images/NGO/NGOAdminViewDono.webp', '/assets/images/NGO/NGOAdminViewTypes.webp', '/assets/images/NGO/NGOUserMakeDono.webp', '/assets/images/NGO/NGOUserCheckout.webp' ],
      'https://github.com/paulwhite93/NGO-groupProject'
    ),
    new Project(
      'Revature Community',
      'Two week sprint with four teams following Agile methodology, myself as a team lead. We have organized a platform for employees to post or ask questions about locations, focusing on categories like Housing, Entertainment, Food, and Events. Including features such as filtering, posting, logging in and registering. This project was also deployed and hosted on an EC2 instance and utilized RDS.',
      ['Java', 'Angular', 'AWS', 'Spring', 'Hibernate', 'HTML', 'CSS'],
      [],
      'https://github.com/revaturelabs/revature-community-backend/tree/main'
    ),
    new Project(
      'GameHub',
      'Developed a social platform for users to showcase their gaming progression, interests, and achievements.',
      [
        'Java',
        'Angular',
        'AWS',
        'JavaScript',
        'PostgreSQL',
        'HTML',
        'Bootstrap',
      ],
      [],
      'https://github.com/GoobIsGabe/GameListProject'
    ),
    new Project(
      'Expense Reimbursement System (ERS)',
      'Designed a system for managing employee expense reimbursements, enabling users to submit requests and finance managers to approve or deny them.',
      [
        'Java',
        'Microservices',
        'AWS',
        'JavaScript',
        'PostgreSQL',
        'HTML',
        'CSS',
      ],
      [],
      'https://github.com/GoobIsGabe/GameListProject'
    ),
  ];
  
  modalOpen: boolean = false;
  selectedImage: string = '';

  openModal(image: string): void {
    console.log('Open modal clicked', image);
    this.modalOpen = true;
    this.selectedImage = image;
  }

  closeModal(): void {
    console.log('Close modal activated');
    this.modalOpen = false;
    this.selectedImage = '';
  }
}
