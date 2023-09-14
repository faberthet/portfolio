export class Techno {
    name!:string;
    cssStatut!:string; // "filter-active" ou ""

    constructor(name: string, cssStatut:string) {
        this.name = name;
        this.cssStatut=cssStatut
      }
}
