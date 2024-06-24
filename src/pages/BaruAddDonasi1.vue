<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border"
  >
    <footer class="h-[61px] w-[1187px] relative bg-silver hidden max-w-full" />
    <div
      class="h-px w-[1110px] relative box-border hidden max-w-full border-t-[1px] border-solid border-neutral-50"
    />
    <SideBarNotificationProC7 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] mq750:gap-[16px] mq1025:max-w-full"
    >
      <ContentInner />
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
              class="self-stretch rounded-xl bg-white flex flex-col items-end justify-start pt-[35px] px-[47px] pb-[33px] box-border gap-[20px] max-w-full z-[1] mq750:pt-[23px] mq750:pb-[21px] mq750:box-border mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
            >
              <div
                class="w-[1111px] h-[731px] relative rounded-xl bg-white hidden max-w-full"
              />
              <div
                class="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full"
              >
                <div class="relative inline-block min-w-[88px] z-[2]">
                  Judul Donasi
                </div>
                <div
                  class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-[19px] max-w-full z-[2] border-[1px] border-solid border-neutral-200"
                >
                  <div
                    class="h-11 w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
                  />
                  <a
                    class="[text-decoration:none] relative text-[inherit] inline-block min-w-[51px] z-[3]"
                    >Donasi1</a
                  >
                </div>
                <div
                  class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]"
                >
                  <Tags
                    category="Kategori"
                    kategori="Kategori"
                    propMinWidth="57px"
                    propMinWidth1="68px"
                  />
                  <div
                    class="w-[455px] flex flex-col items-start justify-start gap-[17px] max-w-full"
                  >
                    <div class="relative inline-block min-w-[93px] z-[2]">
                      Target Donasi
                    </div>
                    <div
                      class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-[19px] max-w-full z-[2] border-[1px] border-solid border-neutral-200"
                    >
                      <div
                        class="h-11 w-[455px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
                      />
                      <div class="relative inline-block min-w-[90px] z-[3]">
                        100.000.000
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[19px] pb-[78px] max-w-full z-[2] border-[1px] border-solid border-neutral-200"
                >
                  <div
                    class="h-28 w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
                  />
                  <div class="relative inline-block min-w-[51px] z-[3]">
                    Donasi1
                  </div>
                </div>
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
                  class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[50px] gap-[10px] cursor-pointer z-[2]"
                  @click="onButtonContainerClick"
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
  import SideBarNotificationProC7 from "../components/SideBarNotificationProC7.vue";
  import ContentInner from "../components/ContentInner.vue";
  import Tags from "../components/Tags.vue";
  import ImageUpload from "../components/ImageUpload.vue";

  export default defineComponent({
    name: "BaruAddDonasi1",
    components: { SideBarNotificationProC7, ContentInner, Tags, ImageUpload },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/barudonasi");
      },
    },
  });
</script>
