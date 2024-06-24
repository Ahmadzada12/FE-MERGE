<template>
  <div
    class="flex flex-row items-start justify-start gap-[33px] max-w-full text-left text-lg text-black font-montserrat mq750:gap-[16px]"
  >
    <div
      class="w-[229px] flex flex-row items-end justify-start py-0 pr-[9px] pl-0 box-border text-4xs-6"
    >
      <img
        class="h-[59.1px] w-[63px] relative object-cover"
        loading="lazy"
        alt=""
        src="/pexelsrocketmannteam94869051-2@2x.png"
      />
      <div
        class="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.1px]"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[1px]"
        >
          <nav
            class="m-0 self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[9px] text-left text-lgi-5 text-lightseagreen-200 font-montserrat mq750:hidden"
          >
            <a
              class="[text-decoration:none] flex-1 relative uppercase font-bold text-[inherit] whitespace-nowrap z-[1]"
              >tidak bisa</a
            >
          </nav>
          <div
            class="relative tracking-[0.2em] uppercase font-medium whitespace-nowrap z-[1] mq450:hidden"
          >
            uang kalian, kami tilep
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-lightseagreen-200"
    >
      <div class="relative inline-block min-w-[58px]">Home</div>
    </div>
    <div
      class="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full"
    >
      <div
        class="flex flex-row items-start justify-start gap-[29px] mq450:hidden"
      >
        <div
          class="relative inline-block min-w-[64px] cursor-pointer"
          @click="onDonasiTextClick"
        >
          Donasi
        </div>
        <div
          class="w-[58px] relative inline-block shrink-0 cursor-pointer"
          @click="onBeritaTextClick"
        >
          Berita
        </div>
        <div
          class="relative whitespace-nowrap cursor-pointer"
          @click="onRiwayatDonasiTextClick"
        >
          Riwayat Donasi
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainContent",
  methods: {
    onDonasiTextClick() {
      this.$router.push("/donasi");
    },
    onRiwayatDonasiTextClick() {
      this.$router.push("/riwayat-donasi");
    },
    onBeritaTextClick() {
      this.$router.push("/berita");
    },
  },
});
</script>
