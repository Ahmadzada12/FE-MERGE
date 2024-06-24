<template>
  <footer
    class="self-stretch h-[61px] relative max-w-full text-left text-xs text-neutral-200 font-red-hat-text mq450:h-auto mq450:min-h-[61]"
  >
    <div
      class="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-silver w-[1187px]"
    />
    <div
      class="absolute top-[0px] left-[29px] box-border w-[1110px] h-px border-t-[1px] border-solid border-neutral-50"
    />
    <div
      class="absolute top-[24px] left-[29.5px] w-[1109px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq450:flex-wrap"
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
    name: "Footer",
  });
</script>
