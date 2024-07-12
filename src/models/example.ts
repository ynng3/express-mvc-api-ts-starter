export interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
];

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
};

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};

export const updateUser = (
  id: number,
  updatedUser: Partial<User>
): User | null => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return null;
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  return users[userIndex];
};

export const deleteUser = (id: number): boolean => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return false;
  users.splice(userIndex, 1);
  return true;
};
