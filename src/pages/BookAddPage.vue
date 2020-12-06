<template>
  <base-layout title="Add new book" default-back-link="/books">
    <book-add-form @add-book="addBook"></book-add-form>
  </base-layout>
</template>

<script>
import BookAddForm from "../components/books/BookAddForm.vue";

export default {
  methods: {
    addBook(book) {
      this.$store.dispatch('addBook', book);
      this.$router.replace('/books');
    }
  },
  components: {
    BookAddForm
  }
}
</script>