export interface ProductData {
  id: string
  label: string
  price: number
  discountLabel: string
  firstPrice?: number
  details?: string[] | null
}

export interface Product {
  label: string
  data: ProductData[]
}

export interface RootObject {
  products: Product[]
}
