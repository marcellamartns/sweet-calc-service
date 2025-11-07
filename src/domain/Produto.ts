export type TProduto = {
  id: string
  nome: string
  quantidade: number
  data: number
  valorUnitario: number
  valorTotal: number
  valorLucro: number
  valorGasto: number
}

export class Produto {
  readonly nome: string
  readonly quantidade: number
  readonly data: number
  readonly valorUnitario: number
  readonly valorTotal: number
  readonly valorLucro: number
  readonly valorGasto: number

  private constructor(data: TProduto) {
    this.nome = data.nome
    this.quantidade = data.quantidade
    this.data = data.data
    this.valorUnitario = data.valorUnitario
    this.valorTotal = data.valorTotal
    this.valorLucro = data.valorLucro
    this.valorGasto = data.valorGasto
  }

  static create(data: TProduto) {
    return new Produto(data)
  }
}
