<template>
  <!-- <q-card
    bordered
    class="my-card no-shadow q-mt-md col-6 col-sm-4 col-md-3 col-xs-12"
  >
    <div class="product-thumbnail">
      <q-img :src="productItem.image" class="media-size"></q-img>
    </div>
    <p class="text-primary text-center">{{ productItem.name }}</p>
    <p class="text-subtitle2 text-bold text-center">${{ productItem.price }}</p>
  </q-card> -->
  <q-card
    class="my-card card-bg q-mt-md col-6 col-sm-4 col-md-3 col-xs-12 shadow-1"
  >
    <q-img :src="productItem.image" class="media-size"></q-img>

    <q-card-section>
      <div class="text-color">{{ productItem.name }}</div>
      <div class="text-h6 text-bold text-color text-center">
        ${{ productItem.price }}
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { IProductView } from 'src/app/Models/Pos/IPos';

const props = defineProps({
  productItem: {
    type: Object as PropType<IProductView>,
    required: true,
  },
});
</script>
