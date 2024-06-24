<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq975:pl-5 mq975:pr-5 mq975:box-border"
  >
    <SideBarNotificationProC1 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] mq975:max-w-full mq725:gap-[16px]"
    >
      <FrameComponent />
      <section
        class="self-stretch flex flex-row items-start justify-start pt-0 pb-10 pr-[30px] pl-7 box-border max-w-full"
      >
        <form
          class="m-0 flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full"
        >
          <div
            class="w-[1090px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap"
          >
            <div class="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <a
                class="[text-decoration:none] relative text-5xl font-semibold font-red-hat-text text-black text-left inline-block min-w-[69px] mq450:text-lgi"
                >Berita</a
              >
            </div>
            <div
              class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[13px] gap-[10px] cursor-pointer"
              @click="onButtonContainerClick"
            >
              <div
                class="flex flex-col items-start justify-start pt-[5px] px-0 pb-0"
              >
                <img class="w-4 h-4 relative" alt="" src="/plus2.svg" />
              </div>
              <div
                class="relative text-base tracking-[-0.01em] leading-[165%] font-medium font-red-hat-text text-white text-center inline-block min-w-[79px]"
              >
                Add Berita
              </div>
              <img class="h-4 w-4 relative hidden" alt="" src="/plus3.svg" />
            </div>
          </div>
          <div
            class="self-stretch rounded-xl flex flex-col items-start justify-start max-w-full"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start max-w-full"
            >
              <div
                class="self-stretch rounded-xl box-border overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full border-[1px] border-solid border-neutral-50"
              >
                <address
                  no="No"
                  columnLabel="1."
                  prop="2."
                  columnLabel1="3."
                  columnLabel2="4."
                  columnLabel3="5."
                  columnLabel4="6."
                  columnLabel5="7."
                  contactUs="8."
                  lOGO="9."
                  columnLabel6="10."
                />
                <address
                  no="Judul Berita"
                  columnLabel="Berita1"
                  prop="Berita2"
                  columnLabel1="Berita3"
                  columnLabel2="Berita4"
                  columnLabel3="Berita5"
                  columnLabel4="Berita6"
                  columnLabel5="Berita7"
                  contactUs="Berita8"
                  lOGO="Berita9"
                  columnLabel6="Berita10"
                  propWidth="875px"
                  propDisplay="inline-block"
                  propAlignSelf="stretch"
                  propFlex="1"
                  propDisplay1="unset"
                  propMinWidth="unset"
                  propAlignSelf1="stretch"
                  propAlignSelf2="stretch"
                  propPadding="unset"
                  propFlex1="1"
                  propDisplay2="unset"
                  propMinWidth1="unset"
                  propAlignSelf3="stretch"
                  propAlignSelf4="stretch"
                  propPadding1="unset"
                  propFlex2="1"
                  propDisplay3="unset"
                  propMinWidth2="unset"
                  propAlignSelf5="stretch"
                  propAlignSelf6="stretch"
                  propPadding2="unset"
                  propFlex3="1"
                  propDisplay4="unset"
                  propMinWidth3="unset"
                  propAlignSelf7="stretch"
                />
                <Icon
                  :onIconlyRegularTwoToneShowClick="onIconlyRegularTwoToneShowClick"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer1 />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC1 from "../components/SideBarNotificationProC1.vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import Address from "../components/Address.vue";
  import Icon from "../components/Icon.vue";
  import Footer1 from "../components/Footer1.vue";

  export default defineComponent({
    name: "BaruBerita",
    components: {
      SideBarNotificationProC1,
      FrameComponent,
      Address,
      Icon,
      Footer1,
    },
    methods: {
      onIconlyRegularTwoToneShowClick() {
        this.$router.push("/baruadd-berita");
      },
      onButtonContainerClick() {
        // Please sync "Baru-Add Berita" to the project
      },
    },
  });
</script>
