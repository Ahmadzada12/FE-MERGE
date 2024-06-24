<template>
  <div class="h-6 w-6 relative">
    <img
      class="absolute h-[41.67%] w-[41.67%] top-[16.67%] right-[41.67%] bottom-[41.67%] left-[16.67%] rounded-sm max-w-full overflow-hidden max-h-full"
      loading="lazy"
      alt=""
      src="/rectangle-38.svg"
    />
    <div
      class="absolute h-[45.83%] w-[45.83%] top-[39.58%] right-[14.58%] bottom-[14.58%] left-[39.58%] rounded-sm box-border z-[1] border-[1px] border-solid border-black"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CopyLight",
  });
</script>
