export type TIngrediente = {
  id: string
  nome: string
  dateTime: number
  valor: number
  descricao?: string
  marca?: string
  peso?: number
  quantidade?: number
}

export class Ingrediente {
  readonly id: string
  readonly nome: string
  readonly dateTime: number
  readonly descricao?: string
  readonly valor: number
  readonly marca?: string
  readonly peso?: number
  readonly quantidade?: number

  private constructor(data: TIngrediente) {
    this.id = data.id
    this.nome = data.nome
    this.dateTime = data.dateTime
    this.descricao = data.descricao
    this.valor = data.valor
    this.marca = data.marca
    this.peso = data.peso
    this.quantidade = data.quantidade
  }

  static create(data: TIngrediente): Ingrediente {
    return new Ingrediente(data)
  }
}
