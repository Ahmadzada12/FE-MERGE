<template>
  <div
    class="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-sm text-gray-600 font-poppins"
  >
    <div
      class="relative leading-[21px] font-medium inline-block min-w-[87px]"
      :style="labelNoStyle"
    >
      {{labelNoTelepon}}
    </div>
    <div
      class="self-stretch h-[38px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full"
    >
      <div
        class="h-10 flex-1 rounded-sm bg-aliceblue box-border flex flex-row items-start justify-start pt-[10.3px] px-3 pb-[10.2px] max-w-full border-[1px] border-solid border-lightgray-100"
      >
        <input
          class="w-full [border:none] [outline:none] bg-[transparent] h-[17.5px] flex-1 overflow-auto flex flex-row items-start justify-start pt-[0.5px] px-0 pb-0 box-border font-poppins text-xs text-black min-w-[250px] max-w-full"
          :placeholder="containerPlaceholder"
          type="text"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "ContactLabels",
    props: {
      labelNoTelepon: { type: String },
      containerPlaceholder: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      labelNoStyle(): CSS.Properties {
        return {
          minWidth: this.propMinWidth,
        };
      },
    },
  });
</script>
