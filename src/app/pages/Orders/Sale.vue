<template>
  <q-layout view="lHr lpr fFr">
    <use-header />
    <side-bar-categorie
      v-for="categorie in listCategorie"
      :key="categorie.id"
      :categorie-item="{
        id: categorie.id,
        Name: categorie.Name,
        Icon: categorie.Icon,
      }"
    />
    <side-bar-car />

    <q-page-container class="bg-info">
      <q-scroll-area class="page-body absolute-top fit">
        <div class="container-template">
          <div
            class="q-pa-md q-gutter-md fit row wrap justify-center items-center content-center q-mb-xl q-mt-xl"
          >
            <use-product
              v-for="product in products"
              :key="product.id"
              :product-item="{
                id: product.id,
                name: product.nameProduct,
                image: product.image,
                price: product.price,
              }"
            />
          </div>
          <view-total-sale />
        </div>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
  <modal-message :modal="GetModal().value" @close="Hide()" />
</template>

<script lang="ts" setup>
import { ref, computed, watch, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import useProduct from 'src/app/components/Pos/product.vue';
import { ICategorieView } from 'src/app/Models/Pos/IPos';
import useHeader from 'src/app/components/Pos/Header.vue';
import sideBarCategorie from 'src/app/components/Pos/SideBarCategorie.vue';
import sideBarCar from 'src/app/components/Pos/SideBarDetailOrder.vue';
import viewTotalSale from 'src/app/components/Pos/ViewTotalSale.vue';
import { useCommonStore } from 'src/stores/all';
import useApi from 'src/app/Composables/UseApi';
import useModelMessage from 'src/Composables/ModalMessage';

const $q = useQuasar();
const $commonStore = useCommonStore();
const { TableToList } = useApi();
const { Show, Hide, GetModal } = useModelMessage();
const listCategorie = ref<ICategorieView[]>([]);

const getCategorie = async () => {
  try {
    $commonStore.Add_Request();
    listCategorie.value = await TableToList('pos', 'Categorie');
    console.log(listCategorie.value);
  } catch (error: any) {
    $commonStore.Remove_Request();
    Show('ERROR', 'Error', error);
  }
};
onBeforeMount(async () => {
  await getCategorie();
});
const products = ref([
  {
    id: 1,
    nameProduct: 'Coca cola 355 ml Lata',
    price: '22.00',
    image:
      'https://www.benavides.com.mx/media/catalog/product/cache/13134524bf2f7c32f6bea508eba7e730/2/0/20240612_531480.jpg',
  },
  {
    id: 2,
    nameProduct: 'Modelo cerveza lata 473ML',
    price: '30.00',
    image: 'https://clickbar.com.mx/29-large_default/modelo-especial-lata.jpg',
  },
  {
    id: 3,
    nameProduct: 'Agua Natural Bonafont 750mL',
    price: '9.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 4,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '15.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 5,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 6,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 7,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 8,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 9,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 10,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 11,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 12,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 13,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 14,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 15,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
  {
    id: 16,
    nameProduct: 'Agua Natural Bonafont 950mL',
    price: '22.00',
    image:
      'https://www.laranitadelapaz.com.mx/images/thumbs/0004771_agua-bonafont-12-botellas-de-600-ml.jpeg',
  },
]);

const computedSSize = computed(() => {
  return $q.screen.name;
});

watch(
  () => computedSSize.value,
  (newSize) => {
    console.log(newSize);
    getSizeScreen();
    // if (newSize) currentSize.value = $q.screen.sizes;
  }
);

const getSizeScreen = () => {
  const sizePx = ref<number>(0);
  switch (computedSSize.value) {
    case 'xl':
      sizePx.value = 450;
    case 'lg':
      sizePx.value = 450;
    case 'sm':
      sizePx.value = 450;
    // case 'md':
    //   sizePx.value = 285;
    //   break;
    case 'xs':
      sizePx.value = 350;
      break;
  }
  console.log(sizePx.value);
  return sizePx.value;
};
</script>

<style>
p {
  margin: 0;
}
.top-search {
  position: relative;
  top: 8px;
}
.product-thumbnail {
  position: relative;
  z-index: 1;
  text-align: center;
}
.product-thumbnail img {
  width: 100%;
}
/* .q-layout__section--marginal {
  background-color: var(--q-primary) !important;
  color: #fff;
} */
.scroll-content {
  height: calc(100% - 45px);
  margin-top: 45px;
}
.avatar-med-circule img {
  width: 60%;
}
.avatar-top {
  top: 20px;
}
.logo-border-bottom {
  border-bottom: 1px solid #0000001f;
}
/* .q-drawer--right {
  width: 350px !important;
} */
/* .q-drawer--left {
  width: 140px !important;
} */
.media-size {
  width: 100%;
  height: 150px;
  min-height: 150px;
}
/* .q-card {
  height: 120px !important;
} */
/* .item-content {
  justify-content: unset;
  align-items: start;
  display: flex;
} */
.item-content {
  border: 1px solid #f0f0;
  background-color: #fff;
}
.item-content .item-media {
  margin-right: 20px;
  margin-left: 0;
  margin-bottom: 10px;
  position: relative;
}
.media {
  display: flex;
  align-items: center;
  justify-content: center;
}
.media-60 {
  width: 80px;
  min-width: 80px;
  height: 80px;
}
.my-card {
  /* width: 100%;
  max-width: 350px !important; */
  width: 100%;
  border-radius: 0.5rem;
}
.q-card--bordered {
  border: 1px solid rgba(229, 232, 234, 1) !important;
}
.q-scrollarea__content {
  padding: 5px;
}
ul {
  padding: 0;
  margin: 0;
}

.my-card-product:hover {
  background-color: #fcf3ea;
  color: white;
}
/* detalle compra */
.dz-stepper {
  width: 125px;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.dz-stepper .bootstrap-touchspin {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
/* .dz-stepper .bootstrap-touchspin .q-field__native {
  padding: 0 10px !important;
  height: 100% !important;
  font-size: 1.125rem;
  font-weight: 500 !important;
  color: var(--dark);
  background: transparent;
  border: 0 !important;
  z-index: 3 !important;
  text-align: center !important;
} */
.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.YL__toolbar-input-container {
  min-width: 100px;
  width: 55%;
}
.view-total-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 5px;
  background-color: #363653;
  border-top: 2px dashed rgba(255, 255, 255, 0.2);
}
.view-total-cart ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
}
.height-cart {
  height: calc(100% - 130px) !important;
}
.height-product {
  height: calc(100% - 40px) !important;
}
.card-bg {
  background: #363653 !important;
}
.text-color {
  color: #bcbcd4 !important;
}
</style>
