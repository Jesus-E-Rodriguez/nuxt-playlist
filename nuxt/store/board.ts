import BoardService from '@/services/BoardService'
import { Board } from '@/types/board'
import { MutationTree, ActionTree } from 'vuex'

export interface State {
  boards: Board[]
}

export const state = (): State => ({
  boards: []
})

enum Types {
  SET_BOARDS = 'SET_BOARDS'
}

export const mutations: MutationTree<State> = {
  [Types.SET_BOARDS](state: State, boards: Board[]) {
    state.boards = boards
  }
}

export const actions: ActionTree<State, {}> = {
  getBoards: ({ commit }, $axios) =>
    BoardService.getBoards($axios).then(response =>
      commit(Types.SET_BOARDS, response.data)
    )
}
