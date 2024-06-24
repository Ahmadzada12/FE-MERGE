<template>
  <div
    class="self-stretch rounded-10xs flex flex-col items-start justify-start pt-0 px-0 pb-[5.2px] gap-[4.8px] text-left text-sm text-gray-700 font-poppins"
  >
    <div
      class="self-stretch flex flex-row items-start justify-between pt-[4.8px] pb-[5px] pr-[13px] pl-[5px] gap-[20px] border-b-[1px] border-solid border-darkslategray-400"
    >
      <b
        class="relative leading-[28px] font-extrabold inline-block min-w-[75px]"
        >Diurutkan</b
      >
      <img
        class="h-3.5 w-[9px] relative overflow-hidden shrink-0"
        alt=""
        src="/icon.svg"
      />
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-5"
    >
      <div class="flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div class="flex flex-row items-start justify-start">
          <div
            class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
          >
            <input
              class="cursor-pointer m-0 w-[13px] h-[13px] relative rounded-31xl bg-royalblue-200 box-border shrink-0 [debug_commit:bf4bc93] border-[1px] border-solid border-royalblue-200"
              type="radio"
              name="radioGroup-1"
            />
          </div>
          <div
            class="relative tracking-[1px] leading-[28px] inline-block min-w-[113.7px] shrink-0 [debug_commit:bf4bc93]"
          >
            Akan Berakhir
          </div>
        </div>
        <div class="flex flex-row items-start justify-start">
          <div
            class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
          >
            <input
              class="cursor-pointer m-0 w-[13px] h-[13px] relative rounded-31xl bg-white box-border shrink-0 [debug_commit:bf4bc93] border-[1px] border-solid border-gray-200"
              type="radio"
              name="radioGroup-1"
            />
          </div>
          <div
            class="relative tracking-[1px] leading-[28px] inline-block min-w-[66.6px] shrink-0 [debug_commit:bf4bc93]"
          >
            Terbaru
          </div>
        </div>
        <div class="flex flex-row items-start justify-start">
          <div
            class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
          >
            <input
              class="cursor-pointer m-0 w-[13px] h-[13px] relative rounded-31xl bg-white box-border border-[1px] border-solid border-gray-200"
              type="radio"
              name="radioGroup-1"
            />
          </div>
          <div
            class="relative tracking-[1px] leading-[28px] inline-block min-w-[70.3px]"
          >
            Terlama
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Item",
  });
</script>
