<template>
  <div
    class="self-stretch w-[314.8px] shrink-0 flex flex-col items-start justify-start gap-[19.9px] text-left text-base text-darkslategray-200 font-poppins"
  >
    <OverlayShadow2
      link0mtJ5yn6f81700461551j="/link--0mtj5yn6f8-1700461551jpg1@2x.png"
      propDebugCommit="unset"
      propDebugCommit1="unset"
      :onLinkClick="onLinkClick"
    />
    <div
      class="self-stretch flex-1 shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[20.1px] gap-[19.7px]"
    >
      <img
        class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/link--35hj3dt8jk-1705305949png@2x.png"
      />
      <div
        class="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-5"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start gap-[34.5px]"
        >
          <div
            class="self-stretch flex flex-row items-start justify-between gap-[20px]"
          >
            <b class="relative leading-[16px]">Hadiah untuk guru</b>
            <div
              class="rounded bg-slategray-100 flex flex-row items-start justify-start pt-1 pb-[3.5px] pr-[3px] pl-1 text-center text-2xs-5 text-white"
            >
              <b
                class="relative leading-[11px] font-bold inline-block min-w-[62px]"
                >Pendidikan</b
              >
            </div>
          </div>
          <div
            class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22.6px] text-xs-2 text-forestgreen"
          >
            <div
              class="self-stretch h-2.5 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0"
            />
            <div class="relative leading-[24px]">
              <b>Rp 0</b>
              <span class="text-gray-600">
                <span class="text-gray-600"> </span>
                <span class="text-slategray-100">terkumpul </span>
                <span>dari ∞ tidak terbatas</span>
              </span>
            </div>
          </div>
          <button
            class="cursor-pointer pt-[5px] px-5 pb-1.5 bg-lightseagreen-200 self-stretch rounded flex flex-row items-start justify-center border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
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
    
    <div
      class="self-stretch flex-1 shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[19.8px] text-center text-2xs-5 text-white"
    >
      <img
        class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/link--rzwi4o5l6y-1701250800jpg@2x.png"
      />
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 px-5"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start gap-[57.2px]"
        >
          <div class="self-stretch flex flex-col items-start justify-start">
            <div
              class="relative text-xs-2 leading-[24px] text-left text-forestgreen"
            >
              <b>Rp 0</b>
              <span class="text-gray-600">
                <span class="text-gray-600"> </span>
                <span class="text-slategray-100">terkumpul </span>
                <span>dari ∞ tidak terbatas</span>
              </span>
            </div>
          </div>
          <button
            class="cursor-pointer pt-[5px] px-5 pb-1.5 bg-lightseagreen-200 self-stretch rounded flex flex-row items-start justify-center border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
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
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverlayShadow2 from "./overlay-shadow2.vue";

export default defineComponent({
  name: "Frame5",
  components: { OverlayShadow2 },
  methods: {
    onLinkClick() {
      this.$router.push("/donasi1");
    },
  },
});
</script>
