<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="defaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons} from '@ionic/vue';

export default {
  props: ["title", "defaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons
  }
}
</script>