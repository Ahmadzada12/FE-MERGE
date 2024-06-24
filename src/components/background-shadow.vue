<template>
  <header
    class="self-stretch shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.07)] bg-white overflow-hidden flex flex-row items-start justify-start pt-[5px] px-[60px] pb-[5.9px] box-border top-[0] z-[99] sticky max-w-full text-left text-lg text-black font-montserrat lg:pl-[30px] lg:pr-[30px] lg:box-border"
  >
    <img
      class="ml-[-63px] h-[59.1px] w-[63px] relative object-cover"
      loading="lazy"
      alt=""
      src="/pexelsrocketmannteam94869051-2@2x.png"
    />
    <div
      class="w-[190.9px] flex flex-col items-start justify-start pt-3 pb-0 pr-[33px] pl-0 box-border text-lgi-5 text-lightseagreen-200"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[1px]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[9px]"
        >
          <a
            class="[text-decoration:none] flex-1 relative uppercase font-bold text-[inherit] whitespace-nowrap"
            >tidak bisa</a
          >
        </div>
        <div
          class="relative text-4xs-6 tracking-[0.2em] uppercase font-medium text-black whitespace-nowrap lg:hidden"
        >
          uang kalian, kami tilep
        </div>
      </div>
    </div>
    <div
      class="w-[519.1px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-[34px] pl-0 box-border max-w-full"
    >
      <img
        class="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/form.svg"
      />
    </div>
    <div
      class="w-[271px] flex flex-col items-start justify-start pt-[19px] pb-0 pr-[31px] pl-0 box-border mq750:w-[31px]"
    >
      <div
        class="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:hidden"
      >
        <div class="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <div
            class="relative inline-block min-w-[58px] cursor-pointer"
            @click="onHomeTextClick"
          >
            Home
          </div>
        </div>
        <div class="relative text-lightseagreen-200 inline-block min-w-[64px]">
          Donasi
        </div>
        <div class="w-[58px] relative inline-block shrink-0">News</div>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
      <div class="relative whitespace-nowrap">Riwayat Donasi</div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BackgroundShadow",
    methods: {
      onHomeTextClick() {
        this.$router.push("/");
      },
    },
  });
</script>
