<template>
  <div
    class="self-stretch w-[314.4px] shrink-0 flex flex-col items-start justify-start gap-[19.9px] text-left text-base text-darkslategray-200 font-poppins"
  >
    <OverlayShadow2
      link0mtJ5yn6f81700461551j="/link--0mtj5yn6f8-1700461551jpg@2x.png"
      :onLinkClick="onLinkClick"
    />
    <OverlayShadow1 />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverlayShadow2 from "./overlay-shadow2.vue";
import OverlayShadow1 from "./overlay-shadow1.vue";

export default defineComponent({
  name: "Frame6",
  components: { OverlayShadow2, OverlayShadow1 },
  methods: {
    onLinkClick() {
      this.$router.push("/donasi1");
    },
  },
});
</script>
