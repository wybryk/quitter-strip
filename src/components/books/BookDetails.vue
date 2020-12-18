<template>
  <ion-grid>
    <ion-row>
      <ion-label>
        <p>Author</p>
        <h2>{{ book.author }}</h2>
      </ion-label>
    </ion-row>
    <ion-row>
      <ion-label>
        <p>Creation date</p>
        <h2>{{ book.creationDate }}</h2>
        </ion-label>
    </ion-row>
    <ion-row>
      <ion-label>
        <p>State</p>
        <h2>{{ book.state }}</h2>
      </ion-label>
    </ion-row>
    <ion-row>
      <ion-label v-if="book.description">
        <p>Description</p>
        <h2>{{ book.description }}</h2>
      </ion-label>
    </ion-row>
    <ion-list>
      <ion-list-header>History</ion-list-header>
      <ion-item v-for="state in book.states" :key="state.creationDate">
        <ion-label>
          <h3>{{state.name}}</h3>
          <h3>{{state.creationDate}}</h3>
          <h3 v-if="state.endDate">{{state.endDate}}</h3>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonLabel, IonList, IonListHeader, IonItem } from "@ionic/vue";

export default {
  props: ["book"],
  components: {
    IonGrid,
    IonRow,
    IonLabel,
    IonList,
    IonListHeader,
    IonItem
  },
};
</script>

<style scoped>
  ion-row {
    padding: 5px;
  }
</style>