<template>
  <div
    class="w-full relative [background:linear-gradient(#f5f6fe,_#f5f6fe),_#fff] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-[519px] box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-5xl text-gray-300 font-poppins"
  >
    <Header />
    <div
      class="w-[726px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
    >
      <a
        class="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] mq450:text-lgi mq450:leading-[19px]"
        >Donasi Saya</a
      >
    </div>
    <FrameComponent1 />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/header.vue";
import FrameComponent1 from "../components/frame-component1.vue";

export default defineComponent({
  name: "RiwayatDonasi",
  components: { Header, FrameComponent1 },
});
</script>
