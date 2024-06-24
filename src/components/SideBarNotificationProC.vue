<template>
  <div
    class="w-[273px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[26px] px-0 pb-[529px] gap-[23px] text-left text-sm text-black font-red-hat-text border-[1px] border-solid border-neutral-50 mq750:pb-56 mq750:box-border mq1050:hidden mq1050:pt-5 mq1050:pb-[344px] mq1050:box-border"
    :style="sideBarNotificationProCStyle"
  >
    <div
      class="flex flex-row items-start justify-start py-0 px-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border"
    >
      <img
        class="h-[65px] w-[139px] relative object-cover"
        loading="lazy"
        alt=""
        src="/uns-1@2x.png"
      />
    </div>
    <img class="w-0 h-0 relative" loading="lazy" alt="" />
    <div class="self-stretch flex flex-col items-start justify-start">
      <div class="self-stretch flex flex-col items-start justify-start">
        <div
          class="self-stretch flex flex-col items-end justify-center gap-[8px]"
        >
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px] text-lightseagreen"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <img
                  class="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  :src="homeLight"
                />
                <a
                  class="[text-decoration:none] flex-1 relative text-[inherit]"
                  :style="dashboardStyle"
                  >Dashboard</a
                >
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretcircledown.svg"
              />
            </div>
          </div>
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px]"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border cursor-pointer"
              @click="onFrameContainerClick"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <img
                  class="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/order.svg"
                />
                <a
                  class="[text-decoration:none] flex-1 relative text-[inherit]"
                  :style="beritaStyle"
                  >Berita</a
                >
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretcircledown.svg"
              />
            </div>
          </div>
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px] cursor-pointer"
            @click="onHomeContainerClick"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <CopyLight />
                <div class="flex-1 relative" :style="kategoriStyle">
                  Kategori
                </div>
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretcircledown.svg"
              />
            </div>
          </div>
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px]"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <img
                  class="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/file-dock-light.svg"
                />
                <div class="flex-1 relative">Laporan</div>
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretcircledown.svg"
              />
            </div>
          </div>
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px] cursor-pointer"
            @click="onHomeContainerClick1"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <img
                  class="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/money-light.svg"
                />
                <a class="[text-decoration:none] flex-1 relative text-[inherit]"
                  >Donasi</a
                >
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretdown.svg"
              />
            </div>
          </div>
          <img
            class="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/separator-1.svg"
          />
          <div
            class="self-stretch h-[51px] flex flex-col items-start justify-start pt-2 px-5 pb-[9px] box-border relative gap-[10px]"
          >
            <div
              class="w-[3px] h-[22px] absolute !m-[0] top-[14px] right-[0px] rounded-3xs bg-neutral-200 hidden z-[0]"
            />
            <div
              class="w-[233px] !m-[0] absolute top-[8px] left-[20px] flex flex-row items-center justify-center py-[5px] px-0 box-border cursor-pointer"
              @click="onFrameContainerClick1"
            >
              <div
                class="flex-1 flex flex-row items-center justify-start gap-[10px]"
              >
                <img
                  class="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/sign-in-squre-duotone-line.svg"
                />
                <div class="flex-1 relative">Logout</div>
              </div>
              <img
                class="h-[18px] w-[18px] relative hidden z-[2]"
                alt=""
                src="/caretdown.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";
  import CopyLight from "./CopyLight.vue";

  export default defineComponent({
    name: "SideBarNotificationProC",
    components: { CopyLight },
    props: {
      homeLight: { type: String },
      rectangle38: { type: String },
      sideBarNotificationProCPosition: { type: String },
      sideBarNotificationProCTop: {
        type: [Object, Array, String, Number, Boolean],
      },
      sideBarNotificationProCLeft: {
        type: [Object, Array, String, Number, Boolean],
      },
      dashboardColor: { type: String },
      beritaTextDecoration: { type: String },
      uns1IconBorder: { type: String },
      kategoriColor: { type: String },
      onFrameContainerClick: { type: Function },
      onHomeContainerClick: { type: Function },
      onHomeContainerClick1: { type: Function },
      onFrameContainerClick1: { type: Function },
    },
    methods: {
      onFrameContainerClick2() {
        this.$router.push("/baruberita");
      },
      onHomeContainerClick2() {
        this.$router.push("/barukategori");
      },
      onHomeContainerClick3() {
        this.$router.push("/barudonasi");
      },
      onFrameContainerClick3() {
        this.$router.push("/");
      },
    },
    computed: {
      sideBarNotificationProCStyle(): CSS.Properties {
        return {
          position: this.sideBarNotificationProCPosition,
          top: this.sideBarNotificationProCTop,
          left: this.sideBarNotificationProCLeft,
        };
      },
      dashboardStyle(): CSS.Properties {
        return {
          color: this.dashboardColor,
        };
      },
      beritaStyle(): CSS.Properties {
        return {
          textDecoration: this.beritaTextDecoration,
        };
      },
      orderIconBackgroundStyle(): CSS.Properties {
        return {
          border: this.uns1IconBorder,
        };
      },
      kategoriStyle(): CSS.Properties {
        return {
          color: this.kategoriColor,
        };
      },
    },
  });
</script>
