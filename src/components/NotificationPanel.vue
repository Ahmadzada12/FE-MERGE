<template>
  <section
    class="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full text-left text-9xl text-neutral-500 font-red-hat-text mq750:gap-[21px]"
  >
    <FrameComponent />
    <div
      class="w-[1146px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full"
    >
      <div
        class="flex-1 flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]"
      >
        <div class="w-60 flex flex-col items-start justify-start gap-[25px]">
          <MiniDataCard
            group10="/group-10.svg"
            cardValueSeparator="300"
            totalBerita="Total Berita"
          /><MiniDataCard
            group10="/group-10-1.svg"
            cardValueSeparator="4"
            totalBerita="Total Donasi"
            propBorder="1px solid #d9d9d9"
            propMinWidth="20px"
            propMinWidth1="81px"
          />
        </div>
        <div
          class="h-[266px] flex-1 relative shadow-[0px_11.6px_36.77px_rgba(160,_163,_189,_0.1)] rounded-sm bg-white box-border min-w-[524px] max-w-full border-[1px] border-solid border-neutral-50 mq750:min-w-full"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "./FrameComponent.vue";
  import MiniDataCard from "./MiniDataCard.vue";

  export default defineComponent({
    name: "NotificationPanel",
    components: { FrameComponent, MiniDataCard },
  });
</script>
