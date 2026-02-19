export interface Person {
  name: string;
  role: string;
}

export interface OrgNodeData {
  id: string;
  title: string;
  people: Person[];
  children?: OrgNodeData[];
}