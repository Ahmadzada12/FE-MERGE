<template>
  <footer
    class="self-stretch bg-white flex flex-col items-start justify-start pt-0 px-[29px] pb-[21px] box-border gap-[23px] max-w-full text-left text-xs text-neutral-200 font-red-hat-text"
  >
    <div class="w-[1250.2px] h-[61px] relative bg-silver hidden max-w-full" />
    <div
      class="ml-[-29.5px] w-[1169.1px] h-px relative box-border max-w-[106%] shrink-0 border-t-[1px] border-solid border-neutral-50"
    />
    <div
      class="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq450:flex-wrap"
    >
      <div class="relative">2024 © UCUP Dashboard</div>
      <div
        class="flex flex-row items-start justify-start gap-[20px] text-right text-label"
      >
        <div class="relative inline-block min-w-[34px]">About</div>
        <div class="relative inline-block min-w-[105px]">
          Terms & Conditions
        </div>
        <div class="relative inline-block min-w-[68px]">Privay Policy</div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Buttonfooter1",
  });
</script>
