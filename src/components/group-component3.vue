<template>
  <section
    class="mr-[-1px] self-stretch bg-whitesmoke-500 flex flex-row items-start justify-between pt-[26px] pb-[27px] pr-[348px] pl-[354px] box-border max-w-full gap-[20px] text-left text-lg text-gray-100 font-roboto-condensed mq750:pl-[177px] mq750:pr-[174px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq1050:justify-center"
  >
    <div
      class="h-[86px] w-[1351px] relative bg-whitesmoke-500 hidden max-w-full"
    />
    <div class="w-[163px] flex flex-row items-start justify-start relative">
      <div
        class="h-[45px] w-[175.7px] absolute !m-[0] top-[calc(50%_-_22.5px)] left-[-22.3px] rounded-10xs bg-whitesmoke-500 z-[1]"
      />
      <div
        class="flex-1 rounded-[2.64px] bg-lightgray-200 flex flex-row items-start justify-start pt-0.5 px-px pb-px gap-[8.7px] z-[2]"
      >
        <div
          class="h-[33px] w-[163px] relative rounded-[2.64px] bg-lightgray-200 hidden"
        />
        <div
          class="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
        >
          <div class="self-stretch relative z-[1]">SUPPORTERS</div>
        </div>
        <div
          class="w-[40.4px] rounded-base-2 bg-white flex flex-row items-start justify-start py-0 pr-1.5 pl-[7px] box-border z-[1] text-center text-base"
        >
          <div
            class="h-[29px] w-[40.4px] relative rounded-base-2 bg-white hidden"
          />
          <div
            class="w-[26.2px] relative leading-[30px] inline-block shrink-0 min-w-[26.2px] z-[1]"
          >
            109
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[73px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border"
    >
      <div
        class="self-stretch relative cursor-pointer z-[1]"
        @click="onPesanTextClick"
      >
        Pesan
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "GroupComponent3",
    methods: {
      onPesanTextClick() {
        // Please sync "Donasi2" to the project
      },
    },
  });
</script>
