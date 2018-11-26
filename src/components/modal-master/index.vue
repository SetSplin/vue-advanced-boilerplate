<style src="./modal-master.sass" scoped lang="sass"></style>
<template>
<transition name="slide-fade">
  <div class="master" v-if="modalActive" @click.self="hide">
    <v-info-modal
      v-if="activeModalName === 'info'"
      :data="decorateData(activeModalData)"
    ></v-info-modal>
    <v-custom-modal
      v-if="activeModalName === 'customModalName'"
      :data="activeModalData"
    ></v-custom-modal>
  </div>
</transition>
</template>
<script src="./modal-master.js"></script>
