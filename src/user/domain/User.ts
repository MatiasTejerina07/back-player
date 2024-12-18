export class User {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public photo?: string,
    public name?: string,
    public token?: string
  ) {}

  setToken(token: string) {
    this.token = token;
  }
}
