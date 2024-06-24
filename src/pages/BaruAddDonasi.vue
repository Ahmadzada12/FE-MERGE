<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border"
  >
    <footer class="h-[61px] w-[1187px] relative bg-silver hidden max-w-full" />
    <div
      class="h-px w-[1110px] relative box-border hidden max-w-full border-t-[1px] border-solid border-neutral-50"
    />
    <SideBarNotificationProC6 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] mq1025:max-w-full mq750:gap-[16px]"
    >
      <ContentHeader />
      <section
        class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[27px] box-border max-w-full text-left text-5xl text-black font-red-hat-text"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]"
        >
          <div class="flex flex-row items-start justify-start py-0 px-0.5">
            <a
              class="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[77px] mq450:text-lgi"
              >Donasi</a
            >
          </div>
          <div
            class="self-stretch flex flex-col items-end justify-start gap-[15px] max-w-full text-mini"
          >
            <div
              class="self-stretch rounded-xl bg-white flex flex-col items-end justify-start pt-[35px] px-[47px] pb-[33px] box-border gap-[17px] max-w-full z-[1] mq750:pt-[23px] mq750:pb-[21px] mq750:box-border mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
            >
              <div
                class="w-[1111px] h-[731px] relative rounded-xl bg-white hidden max-w-full"
              />
              <div
                class="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
              >
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[17px] cursor-pointer z-[2]"
                  @click="onInputContainerClick"
                >
                  <div class="relative inline-block min-w-[88px]">
                    Judul Donasi
                  </div>
                  <div
                    class="self-stretch h-11 relative rounded-mini bg-white box-border border-[1px] border-solid border-neutral-200"
                  />
                </div>
                <div
                  class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px] max-w-full mq1025:gap-[37px] mq750:gap-[18px]"
                >
                  <div
                    class="flex-1 flex flex-col items-start justify-start gap-[18.5px] min-w-[316px] max-w-full"
                  >
                    <div class="relative inline-block min-w-[63px] z-[2]">
                      Category
                    </div>
                    <div
                      class="self-stretch h-11 relative rounded-mini bg-white box-border z-[2] border-[1px] border-solid border-neutral-200"
                    />
                    <div class="relative inline-block min-w-[56px] z-[2]">
                      Content
                    </div>
                  </div>
                  <div
                    class="w-[455px] flex flex-col items-start justify-start gap-[17px] max-w-full"
                  >
                    <div class="relative inline-block min-w-[93px] z-[2]">
                      Target Donasi
                    </div>
                    <div
                      class="self-stretch h-11 relative rounded-mini bg-white box-border z-[2] border-[1px] border-solid border-neutral-200"
                    />
                  </div>
                </div>
              </div>
              <div
                class="self-stretch h-[115px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full"
              >
                <div
                  class="self-stretch flex-1 relative rounded-mini bg-white box-border max-w-full z-[2] border-[1px] border-solid border-neutral-200"
                />
              </div>
              <ImageUpload />
              <div
                class="flex flex-row items-start justify-start gap-[31px] text-center text-base text-white mq450:flex-wrap mq450:gap-[15px]"
              >
                <div
                  class="rounded-xl bg-firebrick flex flex-row items-start justify-start py-[11px] px-10 gap-[10px] z-[2]"
                >
                  <img
                    class="h-4 w-4 relative hidden"
                    alt=""
                    src="/plus2.svg"
                  />
                  <div
                    class="relative tracking-[-0.01em] leading-[165%] font-medium inline-block min-w-[51px]"
                  >
                    Cancel
                  </div>
                  <img
                    class="h-4 w-4 relative hidden"
                    alt=""
                    src="/plus3.svg"
                  />
                </div>
                <div
                  class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[50px] gap-[10px] z-[2]"
                >
                  <img
                    class="h-4 w-4 relative hidden"
                    alt=""
                    src="/plus2.svg"
                  />
                  <div
                    class="w-[31px] relative tracking-[-0.01em] leading-[165%] font-medium inline-block min-w-[31px]"
                  >
                    Add
                  </div>
                  <img
                    class="h-4 w-4 relative hidden"
                    alt=""
                    src="/plus3.svg"
                  />
                </div>
              </div>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] text-xs text-neutral-200 mq450:flex-wrap"
            >
              <div class="relative">2024 © UCUP Dashboard</div>
              <div
                class="flex flex-row items-start justify-start gap-[20px] text-right text-label"
              >
                <div class="relative inline-block min-w-[34px]">About</div>
                <div class="relative inline-block min-w-[105px]">
                  Terms & Conditions
                </div>
                <div class="relative inline-block min-w-[68px]">
                  Privay Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SideBarNotificationProC6 from "../components/SideBarNotificationProC6.vue";
  import ContentHeader from "../components/ContentHeader.vue";
  import ImageUpload from "../components/ImageUpload.vue";

  export default defineComponent({
    name: "BaruAddDonasi",
    components: { SideBarNotificationProC6, ContentHeader, ImageUpload },
    methods: {
      onInputContainerClick() {
        this.$router.push("/baruadd-donasi1");
      },
    },
  });
</script>
