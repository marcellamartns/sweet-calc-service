import { Produto } from './Produto'

export type TVendedor = {
  id: string
  nome: string
  produtos: { nome: string; quantidade: number }
  valorReceber: number
  valorRecebido: number
}[]

export type TVenda = {
  id: string
  data: number
  valorTotal: number
  valorLucro: number
  valorGasto: number
  produtos: Produto[]
  vendedores: TVendedor[]
}

export class Venda {
  readonly vendedores: TVendedor[]

  private constructor(data: TVenda) {
    this.vendedores = data.vendedores
  }

  static create(data: TVenda) {
    return new Venda(data)
  }
}
