<template>
  <div
    class="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[341px] max-w-full text-left text-mini text-black font-red-hat-text mq750:min-w-full"
  >
    <a
      class="[text-decoration:none] relative text-[inherit] inline-block min-w-[63px] z-[1]"
      :style="categoryStyle"
      >{{category}}</a
    >
    <div
      class="self-stretch rounded-mini bg-other-light-grey overflow-hidden flex flex-row items-start justify-between py-[17px] pr-[31px] pl-[29px] gap-[20px] z-[1] text-base font-poppins border-[1px] border-solid border-neutral-200"
    >
      <div class="relative inline-block min-w-[86px]" :style="kategori1Style">
        {{kategori}}
      </div>
      <img
        class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
        alt=""
        src="/iconchevrondown.svg"
      />
    </div>
    <div class="relative inline-block min-w-[56px] z-[1]">Content</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Tags",
    props: {
      category: { type: String },
      kategori: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      categoryStyle(): CSS.Properties {
        return {
          minWidth: this.propMinWidth,
        };
      },
      kategori1Style(): CSS.Properties {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
