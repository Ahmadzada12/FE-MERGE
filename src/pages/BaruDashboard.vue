<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-5 mq1050:pr-5 mq1050:box-border"
  >
    <SideBarNotificationProC
      homeLight="/home-light.svg"
      rectangle38="/rectangle-38.svg"
      :onFrameContainerClick="onFrameContainerClick"
      :onHomeContainerClick="onHomeContainerClick"
      :onHomeContainerClick1="onHomeContainerClick1"
      :onFrameContainerClick1="onFrameContainerClick1"
    />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[517px] max-w-[calc(100%_-_273px)] lg:gap-[258px] mq450:gap-[65px] mq750:gap-[129px] mq1050:max-w-full"
    >
      <NotificationPanel />
      <footer />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC from "../components/SideBarNotificationProC.vue";
  import NotificationPanel from "../components/NotificationPanel.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "BaruDashboard",
    components: { SideBarNotificationProC, NotificationPanel, Footer },
    methods: {
      onFrameContainerClick() {
        this.$router.push("/baruberita");
      },
      onHomeContainerClick() {
        this.$router.push("/barukategori");
      },
      onHomeContainerClick1() {
        this.$router.push("/barudonasi");
      },
      onFrameContainerClick1() {
        this.$router.push("/");
      },
    },
  });
</script>
