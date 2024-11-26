export interface IJWT {
  signin(payload: string): string;
  verify(token: string): string;
}
