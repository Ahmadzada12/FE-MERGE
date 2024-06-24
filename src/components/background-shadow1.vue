<template>
  <header
    class="self-stretch shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.07)] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-center py-[15px] pr-5 pl-[93px] box-border gap-[27px] sticky top-[0] z-[99] max-w-full text-left text-lg text-black font-montserrat mq725:pl-[23px] mq725:box-border mq1050:pl-[46px] mq1050:box-border"
  >
    <div
      class="w-[506.1px] flex flex-col items-start justify-start py-0 pr-[21px] pl-0 box-border max-w-full"
    >
      <img
        class="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/form.svg"
      />
    </div>
    <div
      class="flex flex-col items-start justify-start pt-[9px] pb-0 pr-1.5 pl-0"
    >
      <a
        class="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]"
        >Home</a
      >
    </div>
    <div class="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
      <div class="relative inline-block min-w-[64px]">Donasi</div>
    </div>
    <div
      class="w-[62px] flex flex-col items-start justify-start pt-[9px] pb-0 pr-1 pl-0 box-border text-lightseagreen-200"
    >
      <div class="self-stretch relative">News</div>
    </div>
    <div class="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
      <div class="relative whitespace-nowrap">Riwayat Donasi</div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BackgroundShadow1",
  });
</script>
