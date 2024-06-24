<template>
  <div
    class="self-stretch rounded-10xs flex flex-col items-start justify-start pt-0 px-0 pb-[5.2px] text-left text-sm text-gray-700 font-poppins"
  >
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.8px]"
    >
      <div
        class="flex-1 flex flex-row items-start justify-between pt-[4.8px] pb-[5px] pr-[13px] pl-[5px] gap-[20px] border-b-[1px] border-solid border-darkslategray-400"
      >
        <b
          class="relative leading-[28px] font-extrabold inline-block min-w-[64px]"
          :style="kategoriStyle"
          >Kategori</b
        >
        <img
          class="h-3.5 w-[9px] relative overflow-hidden shrink-0"
          alt=""
          src="/icon.svg"
        />
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Bencana
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Sosial
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Pendidikan
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Kesehatan
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Olahraga
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Kerohanian
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start pt-0 px-5 pb-2.5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Kebudayaan
        </div>
      </div>
    </div>
    <div class="flex flex-row items-start justify-start py-0 px-5">
      <div class="flex flex-row items-start justify-start gap-[4.7px]">
        <div
          class="flex flex-col items-start justify-start pt-[5.7px] px-0 pb-0"
        ></div>
        <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
        <div
          class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
        >
          Lingkungan Hidup
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type * as CSS from "csstype";

export default defineComponent({
  name: "Item2",
  props: {
    kategoriTextDecoration: { type: String },
    kesehatanTextDecoration: { type: String },
  },
  computed: {
    kategoriStyle(): CSS.Properties {
      return {
        textDecoration: this.kategoriTextDecoration,
      };
    },
    kesehatanStyle(): CSS.Properties {
      return {
        textDecoration: this.kesehatanTextDecoration,
      };
    },
  },
});
</script>
