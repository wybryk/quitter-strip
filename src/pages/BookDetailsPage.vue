<template>
  <base-layout :title="book ? book.title : ''" default-back-link="/books">
    <h2 v-if="!book">Could not find book for given id</h2>
    <book-details v-else :book="book"></book-details>
  </base-layout>
</template>

<script>
import BookDetails from "../components/books/BookDetails.vue";

export default {
  data() {
    return {
      bookId: this.$route.params.id,
    };
  },
  computed: {
    book() {
      return this.$store.getters.book(this.bookId);
    },
  },
  components: {
    BookDetails,
  },
};
</script>
