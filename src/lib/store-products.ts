export type StoreProduct = {
  id: string
  name: string
  price: number
  image: string
  material: string
  sizes: string[]
  category: 'bebelusi' | 'fete' | 'baieti'
  madeToOrder: true
  leadTime: string
  instagramUrl: string
}

export const madeToOrderProducts: StoreProduct[] = [
  {
    id: 'p3',
    name: 'Cămașă băieți cu croi clasic',
    price: 129,
    image: '/products/imagine-corecta.jpg',
    material: 'Bumbac organic 100%',
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani'],
    category: 'baieti',
    madeToOrder: true,
    leadTime: '3-5 zile lucrătoare',
    instagramUrl: 'https://www.instagram.com/lilisicopiii/'
  },
  {
    id: 'p6',
    name: 'Cămașă băieți modernă',
    price: 159,
    image: '/products/produs-nou-baieti-2.jpg',
    material: 'Bumbac organic 100%',
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani'],
    category: 'baieti',
    madeToOrder: true,
    leadTime: '4-6 zile lucrătoare',
    instagramUrl: 'https://www.instagram.com/lilisicopiii/'
  },
  {
    id: 'p7',
    name: 'Set elegant pentru fetițe',
    price: 189,
    image: '/products/produs-recomandat-nou.jpg',
    material: 'Bumbac organic 100%',
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
    category: 'fete',
    madeToOrder: true,
    leadTime: '4-6 zile lucrătoare',
    instagramUrl: 'https://www.instagram.com/lilisicopiii/'
  },
  {
    id: 'p5',
    name: 'Set fetițe 2 piese cu iepuraș',
    price: 179,
    image: '/products/set-2-piese-corect.jpg',
    material: 'Bumbac organic 100%',
    sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
    category: 'fete',
    madeToOrder: true,
    leadTime: '4-6 zile lucrătoare',
    instagramUrl: 'https://www.instagram.com/lilisicopiii/'
  }
]

export const featuredProducts = madeToOrderProducts
