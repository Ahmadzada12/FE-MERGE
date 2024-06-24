<template>
  <section
    class="ml-[-8px] self-stretch overflow-hidden flex flex-row items-start justify-between pt-[23.8px] pb-[201.6px] pr-[37px] pl-20 box-border relative max-w-full gap-[20px] text-left text-37xl-9 text-black font-montserrat lg:flex-wrap mq450:pt-5 mq450:pb-[131px] mq450:box-border mq750:pl-10 mq750:box-border"
  >
    <img
      class="h-full w-full absolute !m-[0] top-[-0.1px] right-[0px] left-[0px] max-w-full overflow-hidden"
      alt=""
      src="/base.svg"
    />
    <div
      class="flex flex-col items-start justify-start pt-[12.2px] px-0 pb-0 box-border min-w-[633px] max-w-full lg:flex-1 mq1050:min-w-full"
    >
      <b class="relative z-[1] mq450:text-15xl mq1050:text-27xl">
        <p class="m-0">Help them whenever</p>
        <p class="m-0">they are in need</p>
      </b>
    </div>
    <div
      class="w-[319.5px] flex flex-row items-start justify-start relative min-w-[319.5px] lg:flex-1"
    >
      <img
        class="h-[0.6px] w-[958px] absolute !m-[0] bottom-[30.4px] left-[-915.4px] z-[1]"
        loading="lazy"
        alt=""
        src="/line.svg"
      />
      <!-- <div
        class="flex-1 flex flex-row items-start justify-center pt-[78.1px] px-5 pb-[77.6px] bg-[url('/rectangle-2@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]"
      >
        <img
          class="h-[213.6px] w-[319.5px] relative object-cover hidden"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <img
          class="h-[57.9px] w-[57.9px] relative z-[3]"
          loading="lazy"
          alt=""
          src="/play.svg"
        />
      </div> -->
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpThem",
});
</script>
