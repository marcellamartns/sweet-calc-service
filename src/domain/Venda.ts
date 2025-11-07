import { Produto } from './Produto'

export type TVendedor = {
  id: string
  nome: string
  quantidade: number
  total?: number
}[]

export type TVenda = {
  id: string
  dateTime: number
  valorGasto: number
  valorTotal: number
  valorLucro: number
  produtos: Produto[]
  vendedores: TVendedor[]
}

export class Venda {
 readonly id: string
  readonly dateTime: number
  readonly valorGasto: number
  readonly valorTotal: number
  readonly valorLucro: number
  readonly produtos: Produto[]
  readonly vendedores: TVendedor[]

  private constructor(data: TVenda) {
    this.id = data.id
    this.dateTime = data.dateTime
    this.valorGasto = data.valorGasto
    this.valorTotal = data.valorTotal
    this.valorLucro = data.valorLucro
    this.produtos = data.produtos
    this.vendedores = data.vendedores
  }

  static create(data: TVenda): Venda {
    return new Venda(data)
  }
}
