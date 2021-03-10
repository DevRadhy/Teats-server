export interface IAuthRepository {
  login(email: string, external: string): Promise<any>
}