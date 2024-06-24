<template>
  <div
    class="self-stretch flex-1 shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-5 gap-[19.8px] text-left text-base text-darkslategray-200 font-poppins"
  >
    <img
      class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
      loading="lazy"
      alt=""
      :src="link0mtJ5yn6f81700461551j"
    />
    <div
      class="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-5"
    >
      <div
        class="h-[182.4px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[95.2px] box-border gap-[34.5px]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[1px]"
        >
          <b class="relative leading-[16px]" :style="linkHeadingStyle"
            >Membasuh Luka Palestina</b
          >
          <div
            class="rounded bg-slategray-100 flex flex-row items-start justify-start pt-1 pb-[3.5px] pr-[3px] pl-1 text-center text-2xs-5 text-white"
            :style="background1Style"
          >
            <b
              class="relative leading-[11px] font-bold inline-block min-w-[49px]"
              >Bencana</b
            >
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22.7px] text-xs-2 text-forestgreen"
        >
          <div
            class="self-stretch h-2.5 relative rounded [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#28a745] overflow-hidden shrink-0"
          >
            <div
              class="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#28a745] hidden"
            />
          </div>
          <div class="relative leading-[24px]">
            <b>Rp 18.559.833</b>
            <span class="text-gray-600">
              <span class="text-gray-600"> </span>
              <span class="text-slategray-100">terkumpul </span>
              <span>dari ∞ tidak terbatas</span>
            </span>
          </div>
        </div>
        <button
          class="cursor-pointer pt-[5px] px-5 pb-1.5 bg-lightseagreen-200 self-stretch rounded flex flex-row items-start justify-center border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
          @click="onLinkClick"
        >
          <div
            class="w-[55.3px] relative text-base leading-[24px] font-poppins text-white text-center flex items-center justify-center shrink-0 min-w-[55.3px]"
          >
            Donasi
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type * as CSS from "csstype";

export default defineComponent({
  name: "OverlayShadow2",
  props: {
    link0mtJ5yn6f81700461551j: { type: String },
    propDebugCommit: { type: String },
    propDebugCommit1: { type: String },
    onLinkClick: { type: Function },
  },
  computed: {
    linkHeadingStyle(): CSS.Properties {
      return {
        debugCommit: this.propDebugCommit,
      };
    },
    background1Style(): CSS.Properties {
      return {
        debugCommit: this.propDebugCommit1,
      };
    },
  },
});
</script>
