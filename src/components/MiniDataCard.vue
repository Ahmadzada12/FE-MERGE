<template>
  <div
    class="self-stretch shadow-[0px_11.6px_36.77px_rgba(160,_163,_189,_0.1)] rounded-sm bg-white flex flex-row items-start justify-start pt-3.5 pb-[13px] pr-[25px] pl-[26px] text-left text-9xl text-neutral-500 font-red-hat-text border-[1px] border-solid border-neutral-50"
    :style="miniDataCardStyle"
  >
    <div
      class="flex-1 flex flex-row items-center justify-center py-[15.5px] px-[15px] gap-[20px]"
    >
      <img
        class="h-[60px] w-[60px] relative min-h-[60px]"
        loading="lazy"
        alt=""
        :src="group10"
      />
      <div class="flex-1 flex flex-col items-start justify-start gap-[3.9px]">
        <b
          class="relative inline-block min-w-[57px] mq450:text-3xl"
          :style="cardValueSeparatorStyle"
          >{{cardValueSeparator}}</b
        >
        <div
          class="flex flex-row items-start justify-start text-sm text-neutral-200"
        >
          <div
            class="relative font-medium inline-block min-w-[76px]"
            :style="totalBeritaStyle"
          >
            {{totalBerita}}
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
    name: "MiniDataCard",
    props: {
      group10: { type: String },
      cardValueSeparator: { type: String },
      totalBerita: { type: String },
      propBorder: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      miniDataCardStyle(): CSS.Properties {
        return {
          border: this.propBorder,
        };
      },
      cardValueSeparatorStyle(): CSS.Properties {
        return {
          minWidth: this.propMinWidth,
        };
      },
      totalBeritaStyle(): CSS.Properties {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
