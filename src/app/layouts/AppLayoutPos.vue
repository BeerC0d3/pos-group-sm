<template>
  <q-layout view="lHh Lpr lFf">
    <SideBar />
    <!-- <RightSideBar /> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import SideBar from '../components/Pos/SideBarCategorie.vue';
import RightSideBar from '../components/Pos/SideBarDetailOrder.vue';
</script>
