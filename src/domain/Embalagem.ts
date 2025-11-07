export type TEmbalagem = {
  id: string
  nome: string
  dateTime: number
  valor: number
  valorUnitario: number
  descricao?: string
  quantidade?: number
}

export class Embalagem {
  readonly id: string
  readonly nome: string
  readonly dateTime: number
  readonly valor: number
  readonly valorUnitario: number
  readonly descricao?: string
  readonly quantidade?: number

  private constructor(data: TEmbalagem) {
    this.id = data.id
    this.nome = data.nome
    this.dateTime = data.dateTime
    this.valor = data.valor
    this.valorUnitario = data.valorUnitario
    this.descricao = data.descricao
    this.quantidade = data.quantidade
  }

  static create(data: TEmbalagem): Embalagem {
    return new Embalagem(data)
  }
}
