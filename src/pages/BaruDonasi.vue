<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq975:pl-5 mq975:pr-5 mq975:box-border"
  >
    <SideBarNotificationProC5 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] text-left text-5xl text-black font-red-hat-text mq975:max-w-full mq725:gap-[16px]"
    >
      <Topbar />
      <div
        class="w-[1148px] flex flex-row items-start justify-start pt-0 px-[29px] pb-1 box-border max-w-full"
      >
        <div
          class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap"
        >
          <div class="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <a
              class="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[77px] mq450:text-lgi"
              >Donasi</a
            >
          </div>
          <div
            class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[15px] gap-[10px] cursor-pointer text-center text-base text-white"
            @click="onButtonContainerClick1"
          >
            <div
              class="flex flex-col items-start justify-start pt-[5px] px-0 pb-0"
            >
              <img class="w-4 h-4 relative" alt="" src="/plus10.svg" />
            </div>
            <div
              class="relative tracking-[-0.01em] leading-[165%] font-medium inline-block min-w-[84px]"
            >
              Add Donasi
            </div>
            <img class="h-4 w-4 relative hidden" alt="" src="/plus11.svg" />
          </div>
        </div>
      </div>
      <section
        class="w-[1149px] flex flex-row items-start justify-start pt-0 px-[30px] pb-[3.9px] box-border max-w-full"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full"
        >
          <form
            class="m-0 self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full"
          >
            <AddData
              :onButtonContainerClick1="onButtonContainerClick"
            /><AddData
              propFlex="1"
              propMinWidth="260px"
              propWidth="unset"
            /><AddData propFlex="1" propMinWidth="260px" propWidth="unset" />
          </form>
          <form
            class="m-0 self-stretch flex flex-row flex-wrap items-start justify-start gap-[19.9px_22px] min-h-[457px] max-w-full"
          >
            <AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            /><AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            /><AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            /><AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            /><AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            /><AddData
              propFlex="unset"
              propMinWidth="unset"
              propWidth="347px"
            />
          </form>
        </div>
      </section>
      <Buttonfooter1 />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC5 from "../components/SideBarNotificationProC5.vue";
  import Topbar from "../components/Topbar.vue";
  import AddData from "../components/AddData.vue";
  import Buttonfooter1 from "../components/Buttonfooter1.vue";

  export default defineComponent({
    name: "BaruDonasi",
    components: { SideBarNotificationProC5, Topbar, AddData, Buttonfooter1 },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/barudetail-donasi");
      },
      onButtonContainerClick1() {
        this.$router.push("/baruadd-donasi");
      },
    },
  });
</script>
