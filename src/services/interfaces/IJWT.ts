export interface IJWT {
  signin(payload: string): Promise<string>;
  verify(token: string): string;
}
