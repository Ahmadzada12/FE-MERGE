<template>
  <div
    class="self-stretch flex flex-col items-start justify-start gap-[6px] text-left text-xs text-black font-red-hat-text"
  >
    <div class="self-stretch relative">{{email}}</div>
    <div
      class="self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-4 px-[15px] gap-[10px] text-sm border-[1px] border-solid border-neutral-100"
    >
      <img
        class="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
        alt=""
        src="/plus.svg"
      />
      <div class="flex-1 relative whitespace-nowrap">{{admingmailcom}}</div>
      <img
        class="h-5 w-5 relative min-h-[20px]"
        alt=""
        :src="iconlyRegularTwoToneProfi"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InputField",
    props: {
      email: { type: String },
      admingmailcom: { type: String },
      iconlyRegularTwoToneProfi: { type: String },
    },
  });
</script>
