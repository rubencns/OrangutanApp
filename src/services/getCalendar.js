import { formatISO } from 'date-fns'
import axios from 'axios'
import { BASE_URL } from '../constants/settings'

export default async () => {
  const { data: games } = await axios.get(`${BASE_URL}/calendar`)
  const sortGamesByDate = games.sort((a, b) => a.date > b.date)
  const nextGame = sortGamesByDate.find(({ date }) => date >= formatISO(Date.now()))

  return { games: sortGamesByDate, nextGame }
}
