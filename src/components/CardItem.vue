<template>
  <div class="card">
    <div class="ui fluid image" style="z-index: 12">
      <div
        class="ui left ribbon label statusCard"
        style="margin-top: 110px; max-width: 50px"
      >
        <i v-if="!expand" class="gavel icon"></i>
        <input v-model="gifInfo.originalW" v-if="expand" type="text" />
        <span v-if="!expand"> Attack {{ gifInfo.originalW }}</span>
      </div>
      <div
        class="ui right ribbon label statusCard"
        style="margin-top: 140px; max-width: 50px"
      >
        <i v-if="!expand" class="first aid icon"></i>
        <input v-model="gifInfo.originalH" v-if="expand" type="text" />
        <span v-if="!expand"> Defense {{ gifInfo.originalH }} </span>
        <div @click="editBtn" v-if="expand">
          <button
            @click="$emit('gifSaved', gifInfo)"
            id="saveEditedGif"
            class="circular ui icon button"
          >
            <i class="save icon"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="image ui">
      <img id="card-format" :src="gifInfo.src" />
    </div>
    <div v-if="!fromWallet">
      <button
        @click="$emit('gifSaved', gifInfo)"
        id="addButton"
        class="circular ui icon button"
      >
        <i class="plus icon"></i>
      </button>
    </div>
    <div v-if="fromWallet">
      <button
        @click="$emit('gifDelete', gifInfo)"
        id="delButton"
        class="circular ui icon button"
      >
        <i class="minus icon"></i>
      </button>
    </div>
    <div @click="editBtn" v-if="fromWallet" style="z-index: 100">
      <button
        @click="$emit('gifEdit', gifInfo)"
        id="editButton"
        class="circular ui icon button"
      >
        <i class="pencil alternate icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expand: false,
  }),

  props: ["gifInfo", "fromWallet"],
  methods: {
    editBtn() {
      this.expand = !this.expand;
    },
  },
};
</script>

<style>
#card-format {
  height: 30vh;
  border-radius: 5px;
}
#saveEditedGif {
  position: absolute;
  font-size: 8px;
  right: 0;
  top: 7px;
}

.card {
  -webkit-animation: fadeIn 0.8s ease-in-out;
  -moz-animation: fadeIn 0.8s ease-in-out;
  -o-animation: fadeIn 0.8s ease-in-out;
  animation: fadeIn 0.8s ease-in-out;
  background-color: #a2d2ff8f !important;
  position: relative;
  height: 30vh;
}
.card:hover .statusCard {
  visibility: visible;
}
.statusCard {
  background-color: #fff !important;
  visibility: hidden;
}
#editButton,
#delButton,
#addButton {
  position: absolute;
  align-self: center;
  font-size: 12px;
  color: #fff;
  top: -13px;
  z-index: 99;
}

#addButton {
  right: -13px;
  background-color: rgb(21, 114, 18);
}

#editButton {
  right: -13px;
  background-color: rgb(92, 88, 88);
}
#delButton {
  left: -13px;
  background-color: rgb(243, 9, 9);
}
</style>
