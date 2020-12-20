<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-grid>
      <ion-row>
        <ion-input
          type="text"
          v-model="book.title"
          placeholder="Book title"
          required
        ></ion-input>
      </ion-row>
      <ion-row>
        <ion-input
          type="text"
          v-model="book.author"
          placeholder="Author"
          required
        ></ion-input>
      </ion-row>
      <ion-row>
        <ion-textarea
          rows="3"
          v-model="book.description"
          placeholder="Book description"
        ></ion-textarea>
      </ion-row>
      <ion-row>
        <ion-input
          type="text"
          v-model="book.location"
          placeholder="Location"
          required
        ></ion-input>
      </ion-row>
      <ion-row>
        <ion-input
          type="text"
          v-model="book.state"
          placeholder="State"
          required
        ></ion-input>
      </ion-row>
      <ion-row>
        <ion-button type="submit">Add book</ion-button>
      </ion-row>
    </ion-grid>
  </form>
</template>

<script>
import { IonGrid, IonRow, IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default {
  emits: ["add-book"],
  data() {
    return {
      initialStates: ["IN_LIBRARY", "WANTED_TO_READ", "READING_NOW", "READED"],
      book: {
        title: "",
        author: "",
        location: "",
        state: "",
        description: "",
        states: [],
      },
    };
  },
  methods: {
    submitForm() {
      const creationDate = new Date().toISOString();
      this.book.creationDate = creationDate;
      this.book.states = {
        creationDate: creationDate,
        endDate: "",
        name: this.book.state,
      };
      this.$emit("add-book", this.book);
    },
  },
  components: {
    IonGrid,
    IonRow,
    IonInput,
    IonTextarea,
    IonButton,
  },
};
</script>
