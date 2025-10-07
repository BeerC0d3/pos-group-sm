<template>
  <div class="view-total container-template">
    <ul>
      <li>
        <span class="text-h6 text-grey-10 text-bold">Total Ventas</span>
        <span class="text-h6 text-grey-10 text-bold">$53.68</span>
      </li>
    </ul>
  </div>
</template>

<style>
.view-total {
  border-top: 2px dashed #e8eff3;
  padding-top: 20px;
}
.view-total {
  position: fixed;
  bottom: 0;
  left: auto;
  background-color: #fff;

  width: 100%;
  padding: 0;
}

.view-total ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}
</style>
