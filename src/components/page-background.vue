<template>
  <div
    class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[51px] box-border top-[0] z-[99] sticky max-w-full"
  >
    <header
      class="flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.07)] bg-white overflow-hidden flex flex-row items-end justify-start pt-[3px] px-3.5 pb-[7.9px] box-border max-w-full text-left text-lgi-5 text-lightseagreen-200 font-montserrat"
    >
      <img
        class="h-[59.1px] w-[63px] relative object-cover"
        loading="lazy"
        alt=""
        src="/pexelsrocketmannteam94869051-2@2x.png"
      />
      <div
        class="w-[173.9px] flex flex-col items-start justify-end pt-0 pb-[11.1px] pr-4 pl-0 box-border"
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
        class="w-[533.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.1px] box-border max-w-full"
      >
        <img
          class="w-[484.8px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/form.svg"
        />
      </div>
      <nav
        class="m-0 flex flex-col items-start justify-end pt-0 px-0 pb-[16.1px] box-border max-w-full mq750:hidden"
      >
        <nav
          class="m-0 flex flex-row items-start justify-start gap-[27px] text-left text-lg text-black font-montserrat mq750:hidden"
        >
          <div class="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <a
              class="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px] cursor-pointer"
              @click="onHomeClick"
              >Home</a
            >
          </div>
          <a
            class="[text-decoration:none] relative text-lightseagreen-200 inline-block min-w-[64px] cursor-pointer"
            @click="onDonasiClick"
            >Donasi</a
          >
          <div
            class="w-[62px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border"
          >
            <a
              class="[text-decoration:none] self-stretch relative text-[inherit] cursor-pointer"
              @click="onBeritaClick"
              >Berita</a
            >
          </div>
          <a
            class="[text-decoration:none] relative text-[inherit] whitespace-nowrap cursor-pointer"
            @click="onRiwayatDonasiClick"
            >Riwayat Donasi</a
          >
        </nav>
      </nav>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBackground",
  methods: {
    onHomeClick() {
      this.$router.push("/");
    },
    onDonasiClick() {
      this.$router.push("/donasi");
    },
    onBeritaClick() {
      this.$router.push("/berita");
    },
    onRiwayatDonasiClick() {
      this.$router.push("/riwayat-donasi");
    },
  },
});
</script>
