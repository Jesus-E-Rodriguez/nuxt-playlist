import { AxiosPromise, AxiosInstance } from 'axios'
import { Board } from '@/types/board'

export default {
  getBoards: ($axios: AxiosInstance): AxiosPromise<Board[]> =>
    $axios.get('/boards')
}
