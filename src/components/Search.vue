<template>
  <div style="margin-bottom: 50px">
    <div class="ui icon input">
      <div class="ui icon input">
        <input
          v-on:keydown.enter="emitSearch"
          v-model="searchInput"
          type="text"
          placeholder="Nome do gif..."
        />
        <i @click="emitSearch" class="inverted circular search link icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchInput: "",
  }),
  methods: {
    emitSearch() {
      this.$emit("SearchData", this.searchInput);
    },
  },
};
</script>

<style></style>
