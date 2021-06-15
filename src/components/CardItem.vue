<template>
  <div class="card">
    <div v-if="!expand" class="ui fluid image" style="z-index: 12">
      <div class="ui left ribbon label statusCard" style="margin-top: 160px;">
        <i class="gavel icon"></i> Attack {{ gifInfo.originalW }}
      </div>
      <div
        class="ui left ribbon label statusCard"
        style="margin-top: 190px; min-width: 140px"
      >
        <i class="first aid icon"></i> Defesa {{ gifInfo.originalH }}
      </div>
      <div
        class="ui left ribbon statusCard label"
        style="margin-top: 220px; min-width: 150px"
      >
        <i class="fire icon"></i> Skill {{ gifInfo.type }}
      </div>
    </div>

    <div class="image ui">
      <img id="card-format" :src="gifInfo.src" />
    </div>
    <!--<div class="content">
        <a class="header">{{ gifInfo.title }}</a>
        <div class="meta">
          <span class="date">Created by: {{ gifInfo.username }}</span>
        </div>
      </div>-->

    <div class="extra content right aligned">
      <a>
        <button
          class="ui statusCard icon button"
          v-if="!fromWallet"
          @click="$emit('gifSaved', gifInfo)"
        >
          <i class="plus icon"></i>
        </button>
      </a>
      <a>
        <button
          class="ui statusCard icon button"
          v-if="fromWallet"
          @click="$emit('gifDelete', gifInfo)"
        >
          <i class="minus icon"></i>
        </button>
      </a>
      <a @click="editBtn">
        <button
          class="ui statusCard icon button"
          v-if="fromWallet"
          @click="$emit('gifEdit', gifInfo)"
        >
          <i class="pencil alternate icon"></i>
        </button>
      </a>
      <div v-if="expand" class="inputEdit center aligned row">
        <div style="margin-bottom: 4px; margin-top: 5px" class="ui input">
          <input v-model="gifInfo.originalW" type="text" placeholder="Search..." />
        </div>

        <div class="ui input">
          <input
            style="margin-bottom: 5px"
            v-model="gifInfo.originalH"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div class="ui input">
          <input
            style="margin-bottom: 5px"
            v-model="gifInfo.username"
            type="text"
            placeholder="Search..."
          />
        </div>
        <a @click="editBtn">
          <div @click="$emit('gifSaved', gifInfo)" class="ui bottom button">
            <i class="save icon"></i>
            Save
          </div>
        </a>
      </div>
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
  height: 210px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.card {
  -webkit-animation: fadeIn 0.8s ease-in-out;
  -moz-animation: fadeIn 0.8s ease-in-out;
  -o-animation: fadeIn 0.8s ease-in-out;
  animation: fadeIn 0.8s ease-in-out;
  min-height: 270px !important;
  background-color: #a2d2ff !important;
}
.statusCard {
  background-color: #fff !important;
}
</style>
