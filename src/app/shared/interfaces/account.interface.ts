export interface Test_Account {
  id: number;
  username: string;
  avatarUrl: string;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
}

export interface ProfileSummary<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}