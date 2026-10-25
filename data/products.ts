/**
 * PRODUCTS — the single source of truth for the storefront.
 *
 * HOW TO UPDATE PRICES / INVENTORY / IMAGES:
 * 1. Prices: change the `price` number below (USD). Set `stockLabel`
 *    to reflect inventory, e.g. "In stock", "Low stock", "Sold out".
 * 2. Images: drop a JPG/PNG into `public/images/` using the exact
 *    filename in `image` (e.g. public/images/fallen-angel-hoodie.jpg).
 *    Recommended: 1200×1500px portrait, JPG under 400KB.
 *    If the file is missing, the card shows a branded placeholder —
 *    the page never breaks.
 * 3. Add a product: copy one entry, give it a unique `id`, and it
 *    appears on the page automatically.
 * 4. Remove a product: delete (or comment out) its entry.
 */
export interface Product {
  id: string;
  name: string;
  price: number; // USD
  flag: string;
  flagGold?: boolean;
  description: string;
  stockLabel: string;
  image: string; // path under /images, e.g. "/images/fallen-angel-hoodie.jpg"
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: 'fallen-angel-hoodie',
    name: 'The Fallen Angel Hoodie',
    price: 50,
    flag: 'Flagship — Drop 002',
    description:
      'Jet-black lightweight build made for Florida heat. Red patterned hood lining and an integrated drop-down mask in the hood crown. Front: the brand mark, THE FALLEN, and the angel. Back: Not For Ourselves Alone Are We Born around the gothic cross.',
    stockLabel: 'Low stock',
    image: '/images/fallen-angel-hoodie.jpg',
    imageAlt: 'The Fallen Angel hoodie — black with red Realest Ones branding',
  },
  {
    id: 'signature-drop-tee',
    name: 'Signature Drop Tee',
    price: 20,
    flag: 'Christmas Run',
    flagGold: true,
    description:
      'The signature tee. First run sold out. The next run lands in time for Christmas.',
    stockLabel: 'Coming soon',
    image: '/images/signature-drop-tee.jpg',
    imageAlt: 'Signature Drop tee',
  },
  {
    id: 'real-legacy-tee',
    name: 'Purpose Is The Real Legacy Tee',
    price: 20,
    flag: 'The Creed',
    description:
      'The declaration in its purest form. Purpose is the Real Legacy.',
    stockLabel: 'Coming soon',
    image: '/images/real-legacy-tee.jpg',
    imageAlt: 'Purpose Is The Real Legacy tee',
  },
];

export const formatPrice = (n: number): string => `$${n}`;
