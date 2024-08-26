export type LineBusStop = {
  id: number
  name: string
}

export type LineModel = {
  id: number
  name: string
  direction: LineBusDirection
  description: string
  shortName: string
  message: string
  stops: LineBusStop
}

export enum LineBusDirection {
  BAIRRO,
  TERMINAL
}
