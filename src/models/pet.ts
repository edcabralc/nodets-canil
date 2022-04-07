type PetType = "dog" | "cat" | "fish";
type Pet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  gender: "Masculino" | "Feminino";
};

const data: Pet[] = [
  {
    type: "dog",
    image: "pastor-alemao.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    gender: "Masculino",
  },
  {
    type: "dog",
    image: "labrador.jpg",
    name: "Labrador-retriever",
    color: "Branco",
    gender: "Masculino",
  },
  {
    type: "dog",
    image: "zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    gender: "Feminino",
  },
  {
    type: "dog",
    image: "husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    gender: "Masculino",
  },
  {
    type: "dog",
    image: "golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    gender: "Masculino",
  },
  {
    type: "dog",
    image: "poodle.jpg",
    name: "Poodle",
    color: "Branco",
    gender: "Feminino",
  },
  {
    type: "dog",
    image: "bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    gender: "Masculino",
  },
  {
    type: "cat",
    image: "persa.jpg",
    name: "Persa",
    color: "Amarelo",
    gender: "Masculino",
  },
  {
    type: "cat",
    image: "mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    gender: "Masculino",
  },
  {
    type: "cat",
    image: "bengal.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    gender: "Feminino",
  },
  {
    type: "cat",
    image: "siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    gender: "Masculino",
  },
  {
    type: "cat",
    image: "sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    gender: "Masculino",
  },
  {
    type: "fish",
    image: "neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    gender: "Masculino",
  },
  {
    type: "fish",
    image: "matogrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    gender: "Masculino",
  },
  {
    type: "fish",
    image: "limpavidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    gender: "Masculino",
  },
  {
    type: "fish",
    image: "tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    gender: "Masculino",
  },
  {
    type: "fish",
    image: "acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    gender: "Masculino",
  },
];

export const Pet = {
  getAllPets: (): Pet[] => data,
  getPetsByType: (type: PetType): Pet[] => {
    return data.filter((pet) => pet.type === type);
  },
  getPetsByName: (name: string): Pet[] => {
    return data.filter(
      (pet) =>
        pet.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
    );
  },
};
