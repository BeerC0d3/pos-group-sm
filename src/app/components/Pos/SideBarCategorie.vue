<template>
  <q-drawer
    show-if-above
    v-model="posDrawer"
    side="left"
    :width="120"
    @hide="(value) => ShowHidden()"
    class="bg-left"
  >
    <q-scroll-area class="scroll-content">
      <q-btn
        :icon="categorieItem.Icon"
        :label="categorieItem.Name"
        padding="13px xs"
        stack
        :flat="categorieItem.id == 1 ? false : true"
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
import { ref, watch, computed, PropType } from 'vue';
import { ICategorieView } from 'src/app/Models/Pos/IPos';
import { usePosDrawer } from 'src/stores/all';

const props = defineProps({
  categorieItem: {
    type: Object as PropType<ICategorieView>,
    required: true,
  },
});

const posDrawer = ref(false);

const $posDrawerStore = usePosDrawer();
const ShowHidden = () => {
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
<style>
.bg-left {
  background-color: #363653 !important;
}
</style>
