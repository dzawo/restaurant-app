export class Recipe {
  name: string;
  description: string;
  imageUrl: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imagePath;
  }
}
