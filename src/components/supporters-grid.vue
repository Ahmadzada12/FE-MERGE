<template>
  <div
    class="w-[1184.6px] flex flex-row items-end justify-between pt-0 pb-[15.3px] pr-5 pl-0 box-border max-w-full gap-[20px] text-left text-4xl-2 text-lightslategray font-roboto mq1050:flex-wrap"
  >
    <div
      class="w-[478.6px] flex flex-row items-start justify-start gap-[25.7px] min-w-[478.6px] max-w-full mq750:min-w-full mq450:flex-wrap mq1050:flex-1"
    >
      <div
        class="flex flex-row items-start justify-start pt-[19.3px] px-0 pb-0 relative"
      >
        <div
          class="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] z-[2]"
        />
        <div class="flex flex-row items-start justify-start relative">
          <div
            class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]"
          >
            <div
              class="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] hidden z-[3]"
            />
            <div
              class="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] hidden z-[4]"
            />
          </div>
          <img
            class="h-[77.2px] w-[77.2px] relative overflow-hidden shrink-0 [debug_commit:bf4bc93] z-[5]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
      <div
        class="flex-1 flex flex-col items-start justify-start pt-[19.3px] px-0 pb-0 box-border min-w-[244px] max-w-full"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15.4px] relative gap-[14.7px]"
        >
          <div
            class="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] hidden z-[3]"
          />
          <div
            class="self-stretch flex flex-row items-start justify-start relative"
          >
            <div
              class="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] hidden z-[4]"
            />
            <div
              class="w-[146.7px] relative leading-[31px] inline-block shrink-0 z-[5] mq450:text-lgi mq450:leading-[25px]"
            >
              lorem ipsuim
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[1.2px] relative text-8xl"
          >
            <div
              class="h-[30.9px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] hidden z-[4]"
            />
            <div
              class="relative leading-[31px] whitespace-nowrap z-[5] mq450:text-3xl mq450:leading-[25px]"
            >
              £141,999.00
            </div>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start relative text-lgi-3"
          >
            <div
              class="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] hidden z-[4]"
            />
            <div
              class="relative leading-[31px] inline-block min-w-[88.8px] z-[5]"
            >
              Cancelled
            </div>
          </div>
        </div>
      </div>
    </div>
    <SupportersPagination
      donationTable="$93,384.42"
      supporters="65 supporters"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SupportersPagination from "./supporters-pagination.vue";

  export default defineComponent({
    name: "SupportersGrid",
    components: { SupportersPagination },
  });
</script>
