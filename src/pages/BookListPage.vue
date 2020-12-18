<template>
  <base-layout title="Book List">
    <template v-slot:actions-end>
      <ion-button router-link="/books/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <book-list :books="books"></book-list>
    <button @click="loadBooks">Refresh</button>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import BookList from "../components/books/BookList.vue";

export default {
  data() {
    return { add };
  },
  created() {
    this.$store.dispatch("loadBooks");
  },
  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
  methods: {
    loadBooks() {
      this.$store.dispatch("loadBooks");
    }
  },
  components: {
    IonButton,
    IonIcon,
    BookList,
  },
};
</script>
