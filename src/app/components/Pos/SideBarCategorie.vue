<template>
  <q-drawer
    show-if-above
    v-model="posDrawer"
    side="left"
    :width="120"
    @hide="(value) => ShowHidden(value)"
    class="bg-primary"
  >
    <q-scroll-area class="scroll-content">
      <q-btn
        v-for="i in 10"
        :key="i"
        icon="fas fa-tachometer-alt"
        label="Aguas"
        padding="13px xs"
        stack
        :flat="i == 1 ? false : true"
        color="accent"
        class="full-width"
        no-caps
      >
        <q-separator inset />
      </q-btn>
    </q-scroll-area>

    <div class="absolute-top text-center avatar-top text-info">Categorias</div>
  </q-drawer>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePosDrawer } from 'src/stores/all';
const posDrawer = ref(false);
const isSelected = ref(false);

const $posDrawerStore = usePosDrawer();
const ShowHidden = (evt: any) => {
  $posDrawerStore.setToggle('Left');
};
const isOpenDrawer = computed(() => $posDrawerStore.getLeftDrawer);
watch(
  () => isOpenDrawer.value,
  (newVal) => {
    if (newVal) posDrawer.value = isOpenDrawer.value;
    else posDrawer.value = false;
  }
);
</script>
