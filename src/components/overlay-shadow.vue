<template>
  <div
    class="self-stretch flex-1 shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[5.8px] text-left text-base text-darkslategray-200 font-poppins"
    :style="overlayShadowStyle"
  >
    <img
      class="ml-[-20px] w-[314px] flex-1 relative max-h-full overflow-hidden object-cover"
      alt=""
      src="/link--ffq2mmimat-1702965892png@2x.png"
    />
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[22px]"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[5.2px]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[6.6px]"
        >
          <b
            class="relative leading-[16px] shrink-0 [debug_commit:69da668]"
            :style="lawanJantungBocorContainerStyle"
          >
            <p class="m-0">Lawan Jantung Bocor</p>
            <p class="m-0">'Alby Juga Penyempitan</p>
            <p class="m-0">Pembuluh Dar...</p>
          </b>
          <div
            class="w-[66.8px] rounded bg-slategray-100 flex flex-row items-start justify-start py-1 pr-[3px] pl-1 box-border shrink-0 [debug_commit:69da668] text-center text-2xs-5 text-white"
            :style="backgroundStyle"
          >
            <b
              class="flex-1 relative leading-[10.5px] inline-block min-w-[59.2px]"
              >Kesehatan</b
            >
          </div>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start text-xs-2 text-gold"
        >
          <div
            class="self-stretch rounded bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start"
          >
            <div
              class="h-2.5 w-px relative [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#ffc107]"
            />
          </div>
          <div class="relative leading-[24px]">
            <b>Rp 37.000</b>
            <span class="text-gray-600">
              <span class="text-gray-600"> </span>
              <span class="text-slategray-100">terkumpul </span>
              <span>dari Rp 150.000.000</span>
            </span>
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 pr-[81px] pl-20 text-center text-white mq450:pl-5 mq450:pr-5 mq450:box-border"
      >
        <div
          class="flex-1 rounded bg-lightseagreen-200 flex flex-row items-start justify-start pt-[5px] pb-1.5 pr-[27px] pl-[29px] cursor-pointer border-[1px] border-solid border-royalblue-100"
          @click="onLinkContainerClick"
        >
          <div
            class="flex-1 relative leading-[24px] inline-block min-w-[55.3px]"
          >
            Donasi
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type * as CSS from "csstype";

export default defineComponent({
  name: "OverlayShadow",
  props: {
    propAlignSelf: { type: String },
    propFlex: { type: String },
    propHeight: { type: [Object, Array, String, Number, Boolean] },
    propDebugCommit: { type: String },
    propDebugCommit1: { type: String },
    onLinkContainerClick: { type: Function },
  },
  computed: {
    overlayShadowStyle(): CSS.Properties {
      return {
        alignSelf: this.propAlignSelf,
        flex: this.propFlex,
        height: this.propHeight,
      };
    },
    lawanJantungBocorContainerStyle(): CSS.Properties {
      return {
        debugCommit: this.propDebugCommit,
      };
    },
    backgroundStyle(): CSS.Properties {
      return {
        debugCommit: this.propDebugCommit1,
      };
    },
  },
});
</script>
