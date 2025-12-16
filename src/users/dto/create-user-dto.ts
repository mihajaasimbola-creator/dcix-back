export class CreateUserDto {
  username: string;
  password: string;
  fullName: string;
  email: string;
  isActive: boolean;
  roles_id: number[];
}
