export type TProduto = {
  id: string
  nome: string
  rendimento: number
  dateTime: number
  valorUnitario: number
  valorTotal: number
  valorLucro: number
  valorGasto: number
  valorVenda: number
  descricao?: string
}

export class Produto {
  readonly id: string
  readonly nome: string
  readonly rendimento: number
  readonly dateTime: number
  readonly valorUnitario: number
  readonly valorTotal: number
  readonly valorLucro: number
  readonly valorGasto: number
  readonly valorVenda: number
  readonly descricao?: string

  private constructor(data: TProduto) {
    this.id = data.id
    this.nome = data.nome
    this.rendimento = data.rendimento
    this.dateTime = data.dateTime
    this.valorUnitario = data.valorUnitario
    this.valorTotal = data.valorTotal
    this.valorLucro = data.valorLucro
    this.valorGasto = data.valorGasto
    this.valorVenda = data.valorVenda
    this.descricao = data.descricao
  }

  static create(data: TProduto): Produto {
    return new Produto(data)
  }
}
