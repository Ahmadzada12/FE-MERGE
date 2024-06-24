<template>
  <div
    class="w-[478.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[13.9px] box-border min-w-[478.6px] max-w-full text-left text-4xl-2 text-gray-500 font-roboto mq750:min-w-full mq1050:flex-1"
  >
    <div
      class="self-stretch flex flex-row items-start justify-start gap-[25.7px] max-w-full mq450:flex-wrap"
    >
      <div class="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
        <img
          class="w-[77.2px] h-[77.2px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame-5.svg"
        />
      </div>
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[15.4px] min-w-[244px] max-w-full"
      >
        <div class="self-stretch h-[31px] relative">
          <div class="absolute top-[0.1px] left-[0px] w-full h-full hidden" />
          <div
            class="absolute top-[1.4px] left-[0px] w-[104.2px] h-[27px] z-[1]"
          />
          <div
            class="absolute top-[0px] left-[0.1px] leading-[31px] inline-block w-[136px] z-[2] mq450:text-lgi mq450:leading-[25px]"
          >
            lorem ipsum
          </div>
        </div>
        <div
          class="relative text-8xl leading-[31px] text-lightseagreen-200 whitespace-nowrap mq450:text-3xl mq450:leading-[25px]"
        >
          {{donationTable}}
        </div>
        <div
          class="w-[212.3px] flex flex-row items-start justify-start text-xl-6"
        >
          <div
            class="relative leading-[31px] inline-block min-w-[87.5px] z-[1] mq450:text-base mq450:leading-[25px]"
          >
            raised by
          </div>
          <div class="h-[31px] flex-1 relative text-lgi-3">
            <div
              class="absolute top-[2.6px] left-[0px] w-[124.8px] h-[24.4px]"
            />
            <div
              class="absolute top-[0px] left-[0px] leading-[31px] inline-block w-full min-w-[124.8px] h-full z-[2]"
            >
              {{supporters}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SupportersPagination",
    props: {
      donationTable: { type: String },
      supporters: { type: String },
    },
  });
</script>
