export class Sublease {
  uid: string;
  name: string;
  address: string;
  photoUrl: string;

  constructor(uid: string, name: string = '', address: string = '', photoUrl: string = '') {
      this.name = name;
      this.address = address;
      this.photoUrl = photoUrl;    
  }
}