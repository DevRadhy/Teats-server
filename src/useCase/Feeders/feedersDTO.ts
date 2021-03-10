export interface ICreateFeederDTO {
  user_id: string;
  name: string;
  email: string;
  contact: string;
  avatar: string;
  description: string;
  payment: number;
  foods: IFoodProps[];
}

export interface IFoodProps {
  name: string;
  description: string;
  category: number;
  price: string;
}

export interface IIndexProps {
  category?: string;
  payment?: string;
}