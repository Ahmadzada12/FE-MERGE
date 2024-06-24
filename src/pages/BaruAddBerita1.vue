<template>
  <div
    class="w-full relative bg-other-light-grey overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border"
  >
    <footer class="h-[61px] w-[1187px] relative bg-silver hidden max-w-full" />
    <SideBarNotificationProC4 />
    <main
      class="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_273px)] mq750:gap-[16px] mq1025:max-w-full"
    >
      <Header1 />
      <section
        class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[27px] box-border max-w-full text-left text-5xl text-black font-red-hat-text"
      >
        <div
          class="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]"
        >
          <div class="flex flex-row items-start justify-start py-0 px-0.5">
            <a
              class="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[69px] mq450:text-lgi"
              >Berita</a
            >
          </div>
          <div
            class="self-stretch flex flex-col items-end justify-start gap-[15px] max-w-full text-mini"
          >
            <div
              class="self-stretch rounded-xl bg-white flex flex-col items-start justify-start pt-[35px] pb-2 pr-0 pl-0.5 box-border gap-[9px] max-w-full mq750:pt-[23px] mq750:pb-5 mq750:box-border"
            >
              <div
                class="self-stretch h-[731px] relative rounded-xl bg-white hidden"
              />
              <div
                class="self-stretch flex flex-row items-start justify-start pt-0 px-[47px] pb-[11px] box-border max-w-full mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
              >
                <div
                  class="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full"
                >
                  <div class="relative inline-block min-w-[82px] z-[1]">
                    Judul Berita
                  </div>
                  <div
                    class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[22px] pb-[11px] max-w-full z-[1] text-base font-inter border-[1px] border-solid border-neutral-200"
                  >
                    <div
                      class="h-11 w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
                    />
                    <div class="relative inline-block min-w-[57px] z-[2]">
                      Berita 1
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start pt-0 px-[47px] pb-2 box-border max-w-full mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
              >
                <div
                  class="flex-1 flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full"
                >
                  <Tags category="Category" kategori="Kesehatan" />
                  <div
                    class="w-[464px] flex flex-col items-start justify-start gap-[11px] max-w-full"
                  >
                    <div
                      class="flex flex-row items-start justify-start py-0 px-[9px]"
                    >
                      <a
                        class="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px] z-[1]"
                        >Donasi</a
                      >
                    </div>
                    <div
                      class="self-stretch rounded-mini bg-other-light-grey overflow-hidden flex flex-row items-start justify-between py-[17px] pr-[31px] pl-[29px] whitespace-nowrap gap-[20px] z-[1] text-base font-poppins border-[1px] border-solid border-neutral-200"
                    >
                      <div class="relative inline-block min-w-[122px]">
                        Operasi Kanker
                      </div>
                      <img
                        class="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/iconchevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full text-xl mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
              >
                <div class="h-[123px] flex-1 relative max-w-full">
                  <div
                    class="absolute top-[0px] left-[0px] rounded-mini bg-white box-border w-[1015px] h-28 z-[1] border-[1px] border-solid border-neutral-200"
                  />
                  <h3
                    class="m-0 absolute top-[10px] left-[22px] text-inherit font-normal font-inherit inline-block w-[957px] h-[113px] z-[2] mq450:text-base"
                  >
                    <p class="m-0">
                      Lorem ipsum dolor sit amet consectetur. Donec ultricies
                      viverra sed senectus aliquet scelerisque imperdiet.
                      Aliquet turpis tortor diam aenean metus venenatis accumsan
                      auctor. Ligula nibh enim varius venenatis id pretium
                      tellus. Pellentesque suspendisse ullamcorper dictumst
                      mattis proin at id tincidunt pulvinar.
                    </p>
                  </h3>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start pt-0 px-[47px] pb-[23px] box-border max-w-full mq1100:pl-[23px] mq1100:pr-[23px] mq1100:box-border"
              >
                <div
                  class="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full"
                >
                  <div class="relative inline-block min-w-[96px] z-[1]">
                    Cover / Image
                  </div>
                  <div
                    class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-80 max-w-full z-[1] border-[1px] border-solid border-neutral-200 mq750:pl-20 mq750:pr-20 mq750:box-border mq1025:pl-40 mq1025:pr-40 mq1025:box-border"
                  >
                    <div
                      class="h-[175px] w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
                    />
                    <img
                      class="h-[151px] w-[314px] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-41531@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-col items-end justify-start gap-[24px] max-w-full text-center text-base text-white"
              >
                <div
                  class="flex flex-row items-start justify-end py-0 px-[47px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
                >
                  <div
                    class="flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap mq450:gap-[15px]"
                  >
                    <div
                      class="rounded-xl bg-firebrick flex flex-row items-start justify-start py-[11px] px-10 gap-[10px] z-[1]"
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
                      class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[50px] gap-[10px] cursor-pointer z-[1]"
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
                  class="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-neutral-50"
                />
              </div>
            </div>
            <div
              class="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2] text-xs text-neutral-200 mq450:flex-wrap"
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
  import SideBarNotificationProC4 from "../components/SideBarNotificationProC4.vue";
  import Header1 from "../components/Header1.vue";
  import Tags from "../components/Tags.vue";

  export default defineComponent({
    name: "BaruAddBerita1",
    components: { SideBarNotificationProC4, Header1, Tags },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/baruberita");
      },
    },
  });
</script>
