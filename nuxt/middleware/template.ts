/**
 * Vue3 no longer supports filters (more information
 * [here](https://v3.vuejs.org/guide/migration/filters.html)).
 * As such, Vue recommends: "replacing them with method
 * calls or computed properties". Therefore, mixins are used
 * to achieve the recommended approach.
 */

const templateFiltersMixin = {
  methods: {
    /**
     * Takes a `date` parameter and converts into a human friendly date.
     *
     * Examples:
     *
     *  date("2021-05-24T02:00:54.513Z") // Output: 5/23/2021
     *
     * @param date An ISO formatted datetime string
     */
    date: (date: string): string => new Date(date).toLocaleDateString(),
  },
}

export default templateFiltersMixin
