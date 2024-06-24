<template>
  <main
    class="self-stretch flex flex-row items-start justify-center pt-0 pb-[89px] pr-[22px] pl-5 box-border max-w-full lg:pb-[58px] lg:box-border mq750:pb-[38px] mq750:box-border"
  >
    <MobileContent />
  </main>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import MobileContent from "./mobile-content.vue";

  export default defineComponent({
    name: "FrameComponent2",
    components: { MobileContent },
  });
</script>
