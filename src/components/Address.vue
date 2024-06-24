<template>
  <div
    class="w-[66px] flex flex-col items-start justify-start text-left text-sm text-neutral-500 font-red-hat-text"
    :style="addressStyle"
  >
    <div
      class="self-stretch bg-other-light-grey flex flex-row items-center justify-center pt-5 px-5 pb-[18px] text-neutral-200 border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 relative" :style="noStyle">{{no}}</div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 pb-[18px] pr-[38px] pl-5 border-b-[1px] border-solid border-neutral-50"
      :style="cellStyle"
    >
      <div class="flex flex-col items-start justify-center" :style="textStyle">
        <div
          class="relative inline-block min-w-[8px]"
          :style="columnLabelStyle"
        >
          {{columnLabel}}
        </div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{prop}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{columnLabel1}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{columnLabel2}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{columnLabel3}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{columnLabel4}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{columnLabel5}}</div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell1Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-3.5 pl-0"
        :style="text1Style"
      >
        <div class="relative inline-block min-w-[12px]" :style="contactUsStyle">
          {{contactUs}}
        </div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell2Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-3.5 pl-0"
        :style="text2Style"
      >
        <div class="relative inline-block min-w-[12px]" :style="lOGOStyle">
          {{lOGO}}
        </div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell3Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-[9px] pl-0"
        :style="text3Style"
      >
        <div
          class="relative inline-block min-w-[17px]"
          :style="columnLabel1Style"
        >
          {{columnLabel6}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Address",
    props: {
      no: { type: String },
      columnLabel: { type: String },
      prop: { type: String },
      columnLabel1: { type: String },
      columnLabel2: { type: String },
      columnLabel3: { type: String },
      columnLabel4: { type: String },
      columnLabel5: { type: String },
      contactUs: { type: String },
      lOGO: { type: String },
      columnLabel6: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
      propAlignSelf: { type: String },
      propFlex: { type: String },
      propDisplay1: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf1: { type: String },
      propAlignSelf2: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propFlex1: { type: String },
      propDisplay2: { type: String },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf3: { type: String },
      propAlignSelf4: { type: String },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
      propFlex2: { type: String },
      propDisplay3: { type: String },
      propMinWidth2: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf5: { type: String },
      propAlignSelf6: { type: String },
      propPadding2: { type: [Object, Array, String, Number, Boolean] },
      propFlex3: { type: String },
      propDisplay4: { type: String },
      propMinWidth3: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf7: { type: String },
    },
    computed: {
      addressStyle(): CSS.Properties {
        return {
          width: this.propWidth,
        };
      },
      noStyle(): CSS.Properties {
        return {
          display: this.propDisplay,
        };
      },
      cellStyle(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf,
        };
      },
      textStyle(): CSS.Properties {
        return {
          flex: this.propFlex,
        };
      },
      columnLabelStyle(): CSS.Properties {
        return {
          display: this.propDisplay1,
          minWidth: this.propMinWidth,
          alignSelf: this.propAlignSelf1,
        };
      },
      cell1Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf2,
        };
      },
      text1Style(): CSS.Properties {
        return {
          padding: this.propPadding,
          flex: this.propFlex1,
        };
      },
      contactUsStyle(): CSS.Properties {
        return {
          display: this.propDisplay2,
          minWidth: this.propMinWidth1,
          alignSelf: this.propAlignSelf3,
        };
      },
      cell2Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf4,
        };
      },
      text2Style(): CSS.Properties {
        return {
          padding: this.propPadding1,
          flex: this.propFlex2,
        };
      },
      lOGOStyle(): CSS.Properties {
        return {
          display: this.propDisplay3,
          minWidth: this.propMinWidth2,
          alignSelf: this.propAlignSelf5,
        };
      },
      cell3Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf6,
        };
      },
      text3Style(): CSS.Properties {
        return {
          padding: this.propPadding2,
          flex: this.propFlex3,
        };
      },
      columnLabel1Style(): CSS.Properties {
        return {
          display: this.propDisplay4,
          minWidth: this.propMinWidth3,
          alignSelf: this.propAlignSelf7,
        };
      },
    },
  });
</script>
