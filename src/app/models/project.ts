export class Project {
    constructor(
      public name: string,
      public description: string,
      public technologies: string[],
      public media?: string[],
      public projectURL?: string,
      public videoURL?: string,
    ) {}
  }
  