<template>
  <div
    class="self-stretch flex flex-col items-start justify-start relative gap-[14.8px] text-left text-4xl-2 text-gray-500 font-roboto"
    :style="detailsContentStyle"
  >
    <div
      class="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] hidden z-[6]"
    />
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 relative"
    >
      <div
        class="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] hidden z-[7]"
      />
      <div
        class="w-[142.8px] flex flex-row items-start justify-start relative"
        :style="nameContainerStyle"
      >
        <div
          class="h-[27px] w-full absolute !m-[0] top-[1.3px] right-[0px] left-[0px] hidden z-[8]"
          v-if="!rectangle"
        />
        <div
          class="flex-1 relative leading-[31px] z-[9] mq450:text-lgi mq450:leading-[25px]"
        >
          lorem ipsum
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[1.2px] relative text-8xl text-lightseagreen-200"
      :style="frameDiv12Style"
    >
      <div
        class="h-[30.9px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] hidden z-[7]"
      />
      <div
        class="relative leading-[31px] whitespace-nowrap z-[8] mq450:text-3xl mq450:leading-[25px]"
      >
        {{prop}}
      </div>
    </div>
    <div
      class="w-[223.9px] flex flex-row items-start justify-start text-xl-6"
      :style="supporterInfoStyle"
    >
      <div
        class="relative leading-[31px] inline-block min-w-[87.5px] z-[8] mq450:text-base mq450:leading-[25px]"
      >
        raised by
      </div>
      <div class="h-[31px] flex-1 relative text-lgi-3">
        <div
          class="absolute top-[2.6px] left-[0px] w-[136.4px] h-[24.4px] z-[7]"
          :style="supporterCountIndicatorStyle"
        />
        <div
          class="absolute top-[0px] left-[0px] leading-[31px] inline-block w-full h-full z-[9]"
        >
          {{supporters}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "ItemInfoContainer",
    props: {
      prop: { type: String },
      supporters: { type: String },
      rectangle: { type: Boolean },
      propAlignSelf: { type: String },
      propFlex: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      propWidth2: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      detailsContentStyle(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf,
          flex: this.propFlex,
          minWidth: this.propMinWidth,
        };
      },
      nameContainerStyle(): CSS.Properties {
        return {
          width: this.propWidth,
        };
      },
      frameDiv12Style(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
      supporterInfoStyle(): CSS.Properties {
        return {
          width: this.propWidth1,
        };
      },
      supporterCountIndicatorStyle(): CSS.Properties {
        return {
          width: this.propWidth2,
        };
      },
    },
  });
</script>
