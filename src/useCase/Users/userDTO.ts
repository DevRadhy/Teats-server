export interface IUserDTO {
  id?: string;
  external: string;
  email: string;
}

export interface ICreateUserDTO extends IUserDTO {
  name: string;
}