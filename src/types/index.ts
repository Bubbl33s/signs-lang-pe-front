export type Label = {
  _id: string;
  name: string;
  categoryId: string;
  reliability: number;
  verified: boolean;
  primaryContent: Content;
  createdAt: string;
  __v: number;
};

export type Content = {
  _id: string;
  url: string;
  labelId: string;
  verified: boolean;
  contributorId: string;
  createdAt: string;
  __v: number;
};

export type Category = {
  _id: string;
  name: string;
  descrption: string;
  icon: string;
  createdAt: string;
  __v: number;
};

export type User = {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  password: string;
  isDeafMute: boolean;
  role: string;
  createdAt: string;
  __v: number;
};
