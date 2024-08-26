import { DateAdapter } from '@/data/protocols'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
dayjs.locale('pt-br')

export class DayJsDateAdapter implements DateAdapter {
  format (timeStamp: number, format: string = 'DD/MM/YYYY'): string {
    const date = dayjs(timeStamp)
    const now = dayjs()

    if (date.isSame(now, 'day')) {
      return 'hoje'
    }

    if (now.subtract(1, 'day').isSame(date, 'day')) {
      return 'ontem'
    }

    return dayjs(timeStamp).format(format)
  }

  formatRecent (timeStamp: number): string {
    const date = dayjs(timeStamp)
    const now = dayjs()

    if (date.isSame(now, 'day')) {
      return 'hoje'
    }

    if (now.subtract(1, 'day').isSame(date, 'day')) {
      return 'ontem'
    }

    return `${now.diff(date, 'day')} dias atrás`
  }
}
