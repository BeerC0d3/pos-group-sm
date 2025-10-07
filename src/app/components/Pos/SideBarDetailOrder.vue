<template>
  <q-drawer
    show-if-above
    v-model="posRDrawer"
    side="right"
    @hide="(value) => ShowHidden()"
    :width="270"
    class="bg-right"
  >
    <q-scroll-area class="scroll-content height-cart">
      <q-card
        class="my-card q-mb-xs card-bg card-border"
        flat
        v-for="i in 1"
        :key="i"
      >
        <q-item>
          <!-- <q-item-section avatar>
            <q-avatar>
              <img
                src="https://www.benavides.com.mx/media/catalog/product/cache/13134524bf2f7c32f6bea508eba7e730/2/0/20240612_531480.jpg"
              />
            </q-avatar>
          </q-item-section> -->

          <q-item-section>
            <q-item-label class="text-info"
              >Piña colada sin alcohol {{ i }}</q-item-label
            >
            <q-item-label caption class="text-bold text-info">
              $50.00
            </q-item-label>
          </q-item-section>
          <div class="col-auto">
            <q-btn color="red" flat outline icon="delete"></q-btn>
          </div>
        </q-item>

        <q-card-actions align="center">
          <div class="flex">
            <div class="dz-stepper">
              <div class="input-group bootstrap-touchspin">
                <div class="input-group">
                  <!-- <q-btn color="primary" icon="remove" outline round flat /> -->
                  <q-btn outline round color="accent" icon="remove" />
                  <q-input
                    v-model="text"
                    :dense="true"
                    class="form-control"
                    borderless
                    input-class="text-center text-warning text-bold"
                  />
                  <q-btn outline round color="accent" icon="add" />
                </div>
              </div>
            </div>
          </div>
        </q-card-actions>
        <!-- <q-separator color="white" /> -->
      </q-card>
    </q-scroll-area>
    <div class="absolute-top text-center avatar-top text-info">
      Detalle de orden
    </div>
    <div class="view-total-cart">
      <ul>
        <li>
          <span class="text-h6 text-color text-bold">Total</span>
          <span class="text-h6 text-color text-bold">$300.00</span>
        </li>
      </ul>
      <q-btn
        unelevated
        rounded
        label="Cobrar"
        class="full-width bg-btn-yellow"
        no-caps
      />
    </div>
  </q-drawer>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { usePosDrawer } from 'src/stores/all';

const posRDrawer = ref(false);
const text = ref('2');

const $posDrawerStore = usePosDrawer();
const ShowHidden = () => {
  $posDrawerStore.setToggle('Right');
};
const isOpenRDrawer = computed(() => $posDrawerStore.getRightDrawer);
watch(
  () => isOpenRDrawer.value,
  (newVal) => {
    if (newVal) posRDrawer.value = isOpenRDrawer.value;
    else posRDrawer.value = false;
  }
);
</script>
<style>
.card-bg-trans {
  background-color: transparent !important;
}
.card-border {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.bg-right {
  background-color: #363653 !important;
}
</style>
