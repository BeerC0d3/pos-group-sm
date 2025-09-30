<template>
  <q-header
    class="text-body1 bg-header-custom header-shadow q-py-xs"
    height-hint="58"
  >
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
        aria-label="Menu"
        icon="inbox"
        color="info"
      />

      <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
        <!-- <q-icon :name="fabYoutube" color="red" size="18px" /> -->
        <q-toolbar-title shrink class="text-weight-bold text-white">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Ventas
        </q-toolbar-title>
      </q-btn>

      <q-space />

      <!-- <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div> -->

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <!-- <q-btn
          round
          dense
          flat
          color="grey-8"
          icon="video_call"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip>Create a video or post</q-tooltip>
        </q-btn> -->
        <!-- <q-btn
          round
          dense
          flat
          color="info"
          icon="apps"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip>Apps</q-tooltip>
        </q-btn> -->
        <!-- <q-btn
          round
          dense
          flat
          color="grey-8"
          icon="message"
          v-if="$q.screen.gt.sm"
        >
          <q-tooltip>Messages</q-tooltip>
        </q-btn> -->
        <q-btn round dense flat color="white" icon="notifications">
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn
          dense
          flat
          color="white"
          icon="shopping_cart"
          @click="toggleRightDrawer"
        >
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Productos</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { usePosDrawer } from 'src/stores/all';

const $posDrawerStore = usePosDrawer();
const toggleLeft = ref(false);
const toggleRight = ref(false);

const toggleLeftDrawer = () => {
  toggleLeft.value = true;
  $posDrawerStore.StateToggle(toggleLeft.value, 'Left');
};
const toggleRightDrawer = () => {
  toggleRight.value = true;
  $posDrawerStore.StateToggle(toggleRight.value, 'Right');
};
</script>
<style>
.bg-header-custom {
  background: #13141f !important;
}
</style>
