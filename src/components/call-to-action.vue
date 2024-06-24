<template>
  <div
    class="w-[1330px] flex flex-row items-start justify-center pt-0 px-5 pb-[38.9px] box-border max-w-full"
  >
    <header
      class="w-[1154px] flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-lgi-9 text-dimgray-200 font-montserrat mq750:flex-wrap mq750:justify-center"
    >
      <div
        class="flex flex-col items-start justify-start gap-[5.8px] max-w-full"
      >
        <p class="m-0 relative">
          Help Kids raise $25,000 by making a donation.
        </p>
        <p class="m-0 relative text-mini-2 font-inter inline-block max-w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
      </div>
      <div
        class="w-[202px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px] box-border text-right text-lgi-8 text-white"
      >
        <div
          class="self-stretch rounded-[7.21px] bg-lightseagreen-200 flex flex-row items-start justify-start pt-[1.8px] px-[25px] pb-[0.9px] whitespace-nowrap cursor-pointer border-[1.8px] border-solid border-gray-800"
          @click="onGroupContainerClick"
        >
          <div
            class="h-[57.7px] w-[202px] relative rounded-[7.21px] bg-lightseagreen-200 box-border hidden border-[1.8px] border-solid border-gray-800"
          />
          <div
            class="flex-1 relative leading-[55px] uppercase font-medium z-[1]"
          >
            Donate Now
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CallToAction",
    methods: {
      onGroupContainerClick() {
        this.$router.push("/donasi1");
      },
    },
  });
</script>
