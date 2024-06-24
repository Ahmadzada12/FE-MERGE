<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-5 mq1050:pr-5 mq1050:box-border"
  >
    <SideBarNotificationProC8 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] text-left text-5xl text-black font-red-hat-text mq1050:max-w-full mq750:gap-[16px]"
    >
      <Header2 />
      <div
        class="flex flex-row items-start justify-start pt-0 px-[29px] pb-[7px]"
      >
        <a
          class="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[77px] mq450:text-lgi"
          >Donasi</a
        >
      </div>
      <DonationDetails /><Footer2 />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC8 from "../components/SideBarNotificationProC8.vue";
  import Header2 from "../components/Header2.vue";
  import DonationDetails from "../components/DonationDetails.vue";
  import Footer2 from "../components/Footer2.vue";

  export default defineComponent({
    name: "BaruDetailDonasi",
    components: { SideBarNotificationProC8, Header2, DonationDetails, Footer2 },
  });
</script>
