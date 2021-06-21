<template>
  <div class="container">
    <BoardWidget v-for="board in boards" :key="board.id" :board="board" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BoardWidget from '@/components/BoardWidget.vue'
import { mapState } from 'vuex'

export default defineComponent({
  components: { BoardWidget },
  fetch: ({ store, error, $axios }): Promise<void> =>
    store.dispatch('board/getBoards', $axios).catch(e => {
      console.error(e)
      error({
        statusCode: 503,
        message: 'Unable to fetch user boards. Please try again.'
      })
    }),
  computed: mapState('board', ['boards'])
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}

*/

.container {
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

/*.title {*/
/*  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,*/
/*    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
