<template>
  <div
    class="w-[66px] flex flex-col items-start justify-start text-left text-sm text-neutral-500 font-red-hat-text"
    :style="address1Style"
  >
    <div
      class="self-stretch bg-other-light-grey flex flex-row items-center justify-center pt-5 px-5 pb-[18px] text-neutral-200 border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 relative" :style="no1Style">{{no}}</div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 pb-[18px] pr-[38px] pl-5 border-b-[1px] border-solid border-neutral-50"
      :style="cell4Style"
    >
      <div class="flex flex-col items-start justify-center" :style="text4Style">
        <div class="relative inline-block min-w-[8px]" :style="divStyle">
          {{prop}}
        </div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{liveInAstrix}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{prop1}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{prop2}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{kPeopleInterested}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{cardSmall}}</div>
      </div>
    </div>
    <div
      class="self-stretch bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
    >
      <div class="flex-1 flex flex-col items-start justify-center">
        <div class="self-stretch relative">{{byPablo}}</div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell5Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-3.5 pl-0"
        :style="text5Style"
      >
        <div class="relative inline-block min-w-[12px]" :style="div1Style">
          {{prop3}}
        </div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell6Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-3.5 pl-0"
        :style="text6Style"
      >
        <div class="relative inline-block min-w-[12px]" :style="div2Style">
          {{prop4}}
        </div>
      </div>
    </div>
    <div
      class="bg-white flex flex-row items-center justify-start pt-5 px-5 pb-[18px] border-b-[1px] border-solid border-neutral-50"
      :style="cell7Style"
    >
      <div
        class="flex flex-col items-start justify-center py-0 pr-[9px] pl-0"
        :style="text7Style"
      >
        <div
          class="relative inline-block min-w-[17px]"
          :style="collectibleNameStyle"
        >
          {{collectibleName}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Address1",
    props: {
      no: { type: String },
      prop: { type: String },
      liveInAstrix: { type: String },
      prop1: { type: String },
      prop2: { type: String },
      kPeopleInterested: { type: String },
      cardSmall: { type: String },
      byPablo: { type: String },
      prop3: { type: String },
      prop4: { type: String },
      collectibleName: { type: String },
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
      address1Style(): CSS.Properties {
        return {
          width: this.propWidth,
        };
      },
      no1Style(): CSS.Properties {
        return {
          display: this.propDisplay,
        };
      },
      cell4Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf,
        };
      },
      text4Style(): CSS.Properties {
        return {
          flex: this.propFlex,
        };
      },
      divStyle(): CSS.Properties {
        return {
          display: this.propDisplay1,
          minWidth: this.propMinWidth,
          alignSelf: this.propAlignSelf1,
        };
      },
      cell5Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf2,
        };
      },
      text5Style(): CSS.Properties {
        return {
          padding: this.propPadding,
          flex: this.propFlex1,
        };
      },
      div1Style(): CSS.Properties {
        return {
          display: this.propDisplay2,
          minWidth: this.propMinWidth1,
          alignSelf: this.propAlignSelf3,
        };
      },
      cell6Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf4,
        };
      },
      text6Style(): CSS.Properties {
        return {
          padding: this.propPadding1,
          flex: this.propFlex2,
        };
      },
      div2Style(): CSS.Properties {
        return {
          display: this.propDisplay3,
          minWidth: this.propMinWidth2,
          alignSelf: this.propAlignSelf5,
        };
      },
      cell7Style(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf6,
        };
      },
      text7Style(): CSS.Properties {
        return {
          padding: this.propPadding2,
          flex: this.propFlex3,
        };
      },
      collectibleNameStyle(): CSS.Properties {
        return {
          display: this.propDisplay4,
          minWidth: this.propMinWidth3,
          alignSelf: this.propAlignSelf7,
        };
      },
    },
  });
</script>
