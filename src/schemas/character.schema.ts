export type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
};

export type Info = {
  count: number;
  next: number;
  page: number;
  prev: number;
};

export type Characters = {
  info: Info;
  characters: {
    results: Character[];
  };
};
