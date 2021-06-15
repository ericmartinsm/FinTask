<template>
  <div class="ui grid-card forceheight">
    <div class="ui link cards three column row">
      <Card
        class="card"
        v-for="(iten, i) in itens"
        :key="iten.i"
        :gifInfo="iten"
        @gifSaved="$emit('gifSaved', i)"
      />
    </div>
    <div class="setposition" v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
import Card from "./CardItem.vue";

export default {
  data: () => ({
    searchInput: "",
  }),

  props: {
    itens: { type: Array },
  },

  components: {
    Card,
  },
  methods: {
    visibilityChanged(isVisible) {
      if (!isVisible) return;
      this.$emit("callNewPage", isVisible);
    },
  },
};
</script>

<style>
.grid-card {
  min-height: 100vh !important;
  position: relative;
}
.setposition {
  position: absolute;
  bottom: 0;
}
</style>
