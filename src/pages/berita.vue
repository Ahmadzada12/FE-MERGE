<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[17px] leading-[normal] tracking-[normal]"
  >
    <div
      class="self-stretch bg-gray-400 flex flex-row items-start justify-end pt-[17px] px-[104px] pb-[18px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
    >
      <img
        class="h-[50px] w-[1350px] relative hidden max-w-full"
        alt=""
        src="/vector.svg"
      />
      <div class="h-[15px] w-[181.9px] relative">
        <img
          class="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          alt=""
          src="/--------------1@2x.png"
        />
        <img
          class="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
          alt=""
          src="/--------------@2x.png"
        />
      </div>
    </div>
    <FrameComponent2 /><CallToAction /><FooterContainer />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent2 from "../components/frame-component2.vue";
  import CallToAction from "../components/call-to-action.vue";
  import FooterContainer from "../components/footer-container.vue";

  export default defineComponent({
    name: "Berita",
    components: { FrameComponent2, CallToAction, FooterContainer },
  });
</script>
