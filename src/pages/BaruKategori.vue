<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq975:pl-5 mq975:pr-5 mq975:box-border"
  >
    <SideBarNotificationProC2 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] mq975:max-w-full mq725:gap-[16px]"
    >
      <ASTRIXEVENTS />
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
              <h2
                class="m-0 relative text-5xl font-semibold font-red-hat-text text-black text-left inline-block min-w-[97px] mq450:text-lgi"
              >
                Kategori
              </h2>
            </div>
            <div
              class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[9px] gap-[10px] cursor-pointer"
              @click="onButtonContainerClick"
            >
              <div
                class="flex flex-col items-start justify-start pt-[5px] px-0 pb-0"
              >
                <img class="w-4 h-4 relative" alt="" src="/plus2.svg" />
              </div>
              <div
                class="relative text-base tracking-[-0.01em] leading-[165%] font-medium font-red-hat-text text-white text-center inline-block min-w-[97px]"
              >
                Add Kategori
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
                <Address1
                  no="No"
                  prop="1."
                  liveInAstrix="2."
                  prop1="3."
                  prop2="4."
                  kPeopleInterested="5."
                  cardSmall="6."
                  byPablo="7."
                  prop3="8."
                  prop4="9."
                  collectibleName="10."
                /><Address1
                  no="Kategori"
                  prop="Kategori1"
                  liveInAstrix="Kategori2"
                  prop1="Kategori3"
                  prop2="Kategori4"
                  kPeopleInterested="Kategori5"
                  cardSmall="Kategori6"
                  byPablo="Kategori7"
                  prop3="Kategori8"
                  prop4="Kategori9"
                  collectibleName="Kategori10"
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
                /><Icon propHeight="627px" />
              </div>
            </div>
          </div>
        </form>
      </section>
      <FrameComponent1 />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC2 from "../components/SideBarNotificationProC2.vue";
  import ASTRIXEVENTS from "../components/ASTRIXEVENTS.vue";
  import Address1 from "../components/Address1.vue";
  import Icon from "../components/Icon.vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";

  export default defineComponent({
    name: "BaruKategori",
    components: {
      SideBarNotificationProC2,
      ASTRIXEVENTS,
      Address1,
      Icon,
      FrameComponent1,
    },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/baruadd-kategori");
      },
    },
  });
</script>
