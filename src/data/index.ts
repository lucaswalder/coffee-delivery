import americano from '../assets/coffes/americano.png';
import arabe from '../assets/coffes/arabe.png';
import cafeComLeite from '../assets/coffes/cafe-com-leite.png';
import cafeGelado from '../assets/coffes/cafe-gelado.png';
import capuccino from '../assets/coffes/capuccino.png';
import chocolateQuente from '../assets/coffes/chocolate-quente.png';
import cubano from '../assets/coffes/cubano.png';
import expressoCremoso from '../assets/coffes/expresso-cremoso.png';
import expresso from '../assets/coffes/expresso.png';
import havaiano from '../assets/coffes/havaiano.png';
import irlandes from '../assets/coffes/irlandes.png';
import latte from '../assets/coffes/latte.png';
import macchiato from '../assets/coffes/macchiato.png';
import mochaccino from '../assets/coffes/mochaccino.png';

export interface CoffeProps {
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

const COFFES: CoffeProps[] = [
  {
    image: americano,
    name: 'Expresso Americano',
    type: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },

  {
    image: expressoCremoso,
    name: 'Expresso Cremoso',
    type: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },

  {
    image: cafeGelado,
    name: 'Expresso Gelado',
    type: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },

  {
    image: cafeComLeite,
    name: 'Café com Leite',
    type: ['tradiconal', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },

  {
    image: expresso,
    name: 'Expresso Tradicional',
    type: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    image: latte,
    name: 'Latte',
    type: ['tradicinal', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },

  {
    image: capuccino,
    name: 'Capuccino',
    type: ['tradiconal', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },

  {
    image: macchiato,
    name: 'Macchiato',
    type: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    image: mochaccino,
    name: 'Mocaccino',
    type: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },

  {
    image: chocolateQuente,
    name: 'Chocolate Quente',
    type: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },

  {
    image: cubano,
    name: 'Cubano',
    type: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },

  {
    image: havaiano,
    name: 'Havaiano',
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },

  {
    image: arabe,
    name: 'Árabe',
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },

  {
    image: irlandes,
    name: 'Irlandês',
    type: ['especial', 'alcoólico' ],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export {COFFES}