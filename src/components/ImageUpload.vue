<template>
  <div
    class="self-stretch h-[227px] flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[17px] max-w-full text-left text-mini text-black font-red-hat-text"
  >
    <div class="relative inline-block min-w-[96px] z-[2]">Cover / Image</div>
    <div
      class="self-stretch flex-1 rounded-mini bg-white box-border flex flex-row items-start justify-center py-12 px-5 max-w-full z-[2] text-center text-neutral-200 border-[1px] border-solid border-neutral-200"
    >
      <div
        class="h-[175px] w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
      />
      <div class="relative z-[3]">
        <p class="m-0">
          <span class="text-black">
            <span class="text-base">Your Image will be here</span>
            <span class="text-xl">&nbsp;</span>
          </span>
          <span>Upload your files by button or drag and drop</span>
        </p>
        <p class="m-0">in this window</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ImageUpload",
  });
</script>
