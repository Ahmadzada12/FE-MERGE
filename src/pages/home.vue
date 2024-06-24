<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]"
  >
    <div class="w-[62px] h-[58.2px] relative hidden" />
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-w-full"
    >
      <div
        class="flex-1 bg-gray-400 flex flex-row items-start justify-end pt-[17px] px-[104px] pb-[18px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
      >
        <img
          class="h-[50px] w-[1350px] relative hidden max-w-full"
          alt=""
          src="/vector.svg"
        />
        <img
          class="h-[15px] w-[181.9px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/--------------@2x.png"
        />
      </div>
    </div>
    <header
      class="w-[846px] flex flex-row items-start justify-center pt-0 px-5 pb-[10.9px] box-border max-w-full"
    >
      <MainContent />
    </header>
    <section
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[27px] box-border max-w-full text-left text-[75.7px] text-white font-montserrat"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start pt-[129px] pb-[203px] pr-5 pl-[93px] box-border gap-[11px] bg-[url('/banner-image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pl-5 mq450:box-border mq1050:pl-[46px] mq1050:box-border mq750:pt-[84px] mq750:pb-[132px] mq750:box-border"
      >
        <img
          class="w-[1350px] h-[541px] relative object-cover hidden max-w-full"
          alt=""
          src="/banner-image@2x.png"
        />
        <b
          class="w-[705px] relative inline-block [text-shadow:0px_5.6px_5.61px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-26xl mq1050:text-[61px]"
          >CROWDFUNDED</b
        >
        <div
          class="w-[644.2px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full text-xl"
        >
          <p
            class="m-0 h-[106px] flex-1 relative inline-block max-w-full z-[1] mq450:text-base"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </section>
    <FrameComponent /><HelpThem /><GroupComponent
      pexelsRocketmannTeam94869="/pexelsrocketmannteam94869051-2@2x.png"
      group10="/group-10.svg"
      group6="/group-6.svg"
      group5="/group-5.svg"
      group8="/group-8.svg"
      group7="/group-7.svg"
      group9="/group-9.svg"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainContent from "../components/main-content.vue";
import FrameComponent from "../components/frame-component.vue";
import HelpThem from "../components/help-them.vue";
import GroupComponent from "../components/group-component.vue";

export default defineComponent({
  name: "Home",
  components: { MainContent, FrameComponent, HelpThem, GroupComponent },
});
</script>
