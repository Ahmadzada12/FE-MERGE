<template>
  <header
    class="self-stretch bg-white flex flex-row items-start justify-start py-[21.7px] px-[30px] box-border gap-[30px] top-[0] z-[99] sticky max-w-full text-left text-sm text-neutral-200 font-red-hat-text"
  >
    <div class="flex flex-col items-start justify-start pt-[20.3px] px-0 pb-0">
      <img class="w-8 h-8 relative" loading="lazy" alt="" src="/list.svg" />
    </div>
    <div
      class="flex-1 flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0 box-border max-w-full"
    >
      <div
        class="w-[285px] rounded-xl bg-white box-border flex flex-row items-start justify-start py-3 px-[13px] gap-[10px] border-[1px] border-solid border-darkslategray"
      >
        <img
          class="h-5 w-5 relative min-h-[20px]"
          alt=""
          src="/magnifyingglass.svg"
        />
        <a class="[text-decoration:none] flex-1 relative text-[inherit]"
          >Search</a
        >
      </div>
    </div>
    <div
      class="rounded-81xl flex flex-row items-start justify-start py-3 px-6 gap-[15px]"
    >
      <div
        class="flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0"
      >
        <img
          class="w-6 h-6 relative"
          loading="lazy"
          alt=""
          src="/iconlyregulartwotonenotification.svg"
        />
      </div>
      <img
        class="h-[48.6px] w-[48.6px] relative rounded-[50%] object-contain"
        loading="lazy"
        alt=""
        src="/ellipse-8@2x.png"
      />
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
