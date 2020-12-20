<template>
  <base-layout title="Book List">
    <template v-slot:actions-end>
      <ion-button router-link="/books/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <book-list :books="books"></book-list>
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
  components: {
    IonButton,
    IonIcon,
    BookList,
  },
};
</script>
