<template>
  <div
    class="flex-1 rounded-3xl bg-white flex flex-col items-start justify-start pt-[79px] px-8 pb-8 box-border relative gap-[24px] min-w-[260px] max-w-full text-left text-xs text-neutral-500 font-red-hat-text"
    :style="addDataStyle"
  >
    <h2
      class="!m-[0] w-[407px] absolute top-[32px] right-[-92px] text-xl font-normal font-inherit inline-block mq450:text-base"
    >
      Donasi 1
    </h2>
    <div
      class="w-[407px] absolute !m-[0] top-[58px] right-[-92px] inline-block"
    >
      Donasi 1
    </div>
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[0.4px] text-3xs text-black"
    >
      <div class="self-stretch flex flex-row items-start justify-end">
        <div class="w-[35px] relative inline-block shrink-0">70%</div>
      </div>
      <div class="self-stretch h-[30px] relative">
        <div
          class="absolute top-[0px] left-[0px] rounded-11xl bg-darkgray w-full h-full"
        />
        <div
          class="absolute top-[0px] left-[0px] rounded-11xl bg-darkturquoise w-[187.5px] h-[30px] z-[1]"
        />
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-white mq450:flex-wrap"
    >
      <div class="flex flex-row items-start justify-start gap-[8px]">
        <div
          class="rounded-xl bg-lightseagreen flex flex-row items-center justify-center py-2.5 px-4 gap-[8px]"
        >
          <img
            class="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/plus8.svg"
          />
          <div
            class="relative tracking-[-0.01em] leading-[170%] font-medium inline-block min-w-[33px]"
          >
            Detail
          </div>
          <img
            class="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/plus8.svg"
          />
        </div>
        <div
          class="rounded-xl bg-lightseagreen flex flex-row items-center justify-center py-2.5 px-4 gap-[8px] cursor-pointer"
          @click="onButtonContainerClick1"
        >
          <img
            class="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/plus8.svg"
          />
          <div
            class="relative tracking-[-0.01em] leading-[170%] font-medium inline-block min-w-[23px]"
          >
            Edit
          </div>
          <img
            class="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/plus8.svg"
          />
        </div>
      </div>
      <div
        class="rounded-xl bg-firebrick flex flex-row items-center justify-center py-2.5 px-4 gap-[10px]"
      >
        <img class="h-3.5 w-3.5 relative hidden" alt="" src="/plus1.svg" />
        <div
          class="relative tracking-[-0.01em] leading-[170%] font-medium inline-block min-w-[37px]"
        >
          Delete
        </div>
        <img class="h-3.5 w-3.5 relative hidden" alt="" src="/plus1.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "AddData",
    props: {
      propFlex: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      onButtonContainerClick1: { type: Function },
    },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/barudetail-donasi");
      },
    },
    computed: {
      addDataStyle(): CSS.Properties {
        return {
          flex: this.propFlex,
          minWidth: this.propMinWidth,
          width: this.propWidth,
        };
      },
    },
  });
</script>
