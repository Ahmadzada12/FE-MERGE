<template>
  <section
    class="w-[1309px] flex flex-row items-start justify-center pt-0 px-5 pb-11 box-border max-w-full text-center text-11xl text-black font-roboto mq750:pb-5 mq750:box-border mq1050:pb-[29px] mq1050:box-border"
  >
    <div
      class="w-[1141px] flex flex-col items-start justify-start gap-[60.9px] max-w-full mq750:gap-[15px] mq1225:gap-[30px]"
    >
      <header
        class="flex flex-row items-end justify-start gap-[61px] max-w-full text-left text-lgi-5 text-lightseagreen-200 font-montserrat mq750:gap-[30px] mq450:gap-[15px]"
      >
        <div class="w-[207px] flex flex-row items-end justify-start gap-[4px]">
          <img
            class="h-[59.1px] w-[63px] relative object-cover"
            loading="lazy"
            alt=""
            src="/pexelsrocketmannteam94869051-2@2x.png"
          />
          <div
            class="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.1px]"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[1px]"
            >
              <a
                class="[text-decoration:none] self-stretch relative uppercase font-bold text-[inherit] whitespace-nowrap"
                >Your logo</a
              >
              <div
                class="flex flex-row items-start justify-start py-0 pr-7 pl-[18px] text-4xs-6 text-black"
              >
                <div
                  class="relative tracking-[0.2em] uppercase font-medium inline-block min-w-[94px] whitespace-nowrap"
                >
                  your tagline
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="m-0 flex flex-col items-start justify-end pt-0 px-0 pb-[17.1px] box-border max-w-full mq750:hidden"
        >
          <nav
            class="m-0 flex flex-row items-start justify-start gap-[27px] text-left text-lg text-black font-montserrat"
          >
            <div
              class="flex flex-col items-start justify-start py-0 pr-1.5 pl-0"
            >
              <div
                class="relative inline-block min-w-[58px] cursor-pointer"
                @click="onHomeTextClick"
              >
                Home
              </div>
            </div>
            <a
              class="[text-decoration:none] relative text-lightseagreen-200 inline-block min-w-[64px] cursor-pointer"
              @click="onDonasiTextClick"
              >Donasi</a
            >
            <div
              class="w-[62px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border"
            >
              <a
                class="[text-decoration:none] self-stretch relative text-[inherit] cursor-pointer"
                @click="onBeritaTextClick"
                >Berita</a
              >
            </div>
            <div
              class="relative whitespace-nowrap cursor-pointer"
              @click="onRiwayatDonasiTextClick"
            >
              Riwayat Donasi
            </div>
          </nav>
        </nav>
      </header>
      <div
        class="self-stretch flex flex-row items-start justify-start pt-0 pb-[8.1px] pr-0 pl-[21px] box-border max-w-full"
      >
        <div
          class="flex-1 flex flex-col items-end justify-start gap-[27px] max-w-full"
        >
          <div
            class="w-[1100px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
          >
            <h2
              class="m-0 relative text-inherit leading-[60px] uppercase font-bold font-inherit mq750:text-5xl mq750:leading-[48px] mq450:text-lg mq450:leading-[36px]"
            >
              donate & Help kids!
            </h2>
          </div>
          <section
            class="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-mini text-white font-montserrat"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]"
            >
              <div
                class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full"
              >
                <div
                  class="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap"
                >
                  <div
                    class="h-[400px] flex-1 relative min-w-[487px] max-w-full mq750:min-w-full"
                  >
                    <p
                      class="m-0 absolute top-[88.3px] left-[77.7px] inline-block w-[439.7px] h-[74px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has beenLorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been
                    </p>
                    <img
                      class="absolute top-[0px] left-[0px] w-full h-full object-cover mix-blend-luminosity z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image1@2x.png"
                    />
                  </div>
                  <div
                    class="w-[368px] bg-white flex flex-col items-start justify-start pt-0 pb-[7px] pr-11 pl-[45px] box-border gap-[97px] min-w-[368px] max-w-full text-center text-5xl font-roboto-condensed mq750:min-w-full mq450:gap-[48px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-1"
                  >
                    <div
                      class="w-[368px] h-[400px] relative bg-white hidden max-w-full"
                    />
                    <div
                      class="self-stretch rounded bg-lightseagreen-200 flex flex-row items-start justify-start py-0 pr-[72px] pl-[73px] z-[1] border-[1px] border-solid border-gray-800 mq450:pl-5 mq450:pr-5 mq450:box-border cursor-pointer"
                      @click="onPilihNominalTextClick"
                    >
                      <div
                        class="h-[62px] w-[279px] relative rounded bg-lightseagreen-200 box-border hidden border-[1px] border-solid border-gray-800"
                      />
                      <a
                        class="[text-decoration:none] flex-1 relative leading-[60px] uppercase text-[inherit] z-[1] mq450:text-lgi mq450:leading-[48px]"
                        >Donasi</a
                      >
                    </div>
                    <div
                      class="self-stretch flex flex-col items-start justify-start gap-[17px] text-left text-26xl text-black font-source-sans-pro"
                    >
                      <div
                        class="w-[77px] flex flex-row items-start justify-start py-0 px-px box-border"
                      >
                        <div
                          class="flex-1 flex flex-col items-start justify-start gap-[11px]"
                        >
                          <div
                            class="self-stretch relative leading-[45px] z-[1] mq750:text-17xl mq750:leading-[36px] mq450:text-8xl mq450:leading-[27px]"
                          >
                            109
                          </div>
                          <div
                            class="relative text-base uppercase font-roboto-condensed text-darkslategray-300 inline-block min-w-[57px] z-[1]"
                          >
                            Donors
                          </div>
                        </div>
                      </div>
                      <div
                        class="w-[195px] flex flex-row items-start justify-start pt-0 px-px pb-[15px] box-border"
                      >
                        <div
                          class="flex-1 flex flex-col items-start justify-start gap-[11px]"
                        >
                          <div
                            class="self-stretch relative leading-[45px] whitespace-nowrap z-[1] mq750:text-17xl mq750:leading-[36px] mq450:text-8xl mq450:leading-[27px]"
                          >
                            Rp9,850
                          </div>
                          <a
                            class="[text-decoration:none] w-[53px] relative text-base uppercase font-roboto-condensed text-[inherit] inline-block z-[1]"
                            >Raised</a
                          >
                        </div>
                      </div>
                      <div
                        class="self-stretch flex flex-col items-start justify-start gap-[8px] text-base font-roboto-condensed"
                      >
                        <div
                          class="self-stretch h-2 relative rounded bg-whitesmoke-500 z-[1]"
                        >
                          <div
                            class="absolute top-[0px] left-[0px] rounded bg-whitesmoke-500 w-full h-full hidden z-[1]"
                          />
                          <div
                            class="absolute top-[0px] left-[0px] bg-lightseagreen-200 box-border w-[109px] h-2 z-[2] border-[1px] border-solid border-gray-1000"
                          />
                        </div>
                        <div
                          class="self-stretch flex flex-row items-start justify-start gap-[42px] mq450:flex-wrap mq450:gap-[21px]"
                        >
                          <div
                            class="flex-1 flex flex-row items-start justify-start min-w-[99px]"
                          >
                            <div
                              class="w-[37px] relative inline-block shrink-0 z-[1]"
                            >
                              Goal:
                            </div>
                            <div
                              class="flex-1 relative whitespace-nowrap z-[1]"
                            >
                              Rp. 100.000.000
                            </div>
                          </div>
                          <div class="flex flex-row items-start justify-start">
                            <div
                              class="relative inline-block min-w-[69px] z-[1]"
                            >
                              Days Left:
                            </div>
                            <div
                              class="relative inline-block min-w-[16px] z-[1]"
                            >
                              57
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-[444px] flex flex-row flex-wrap items-start justify-start gap-[14px] max-w-full text-15xl text-black font-roboto"
              >
                <h1
                  class="m-0 flex-1 relative text-inherit leading-[60px] uppercase font-bold font-inherit inline-block min-w-[243px] max-w-full mq750:text-8xl mq750:leading-[48px] mq450:text-xl mq450:leading-[36px]"
                >
                  donate & Help kids!
                </h1>
                <div
                  class="w-14 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-xl-2 text-white font-montserrat"
                >
                  <div
                    class="self-stretch h-[36.4px] relative overflow-hidden shrink-0"
                  >
                    <img
                      class="absolute top-[3.1px] left-[-0.1px] w-[29.7px] h-[28.6px] z-[1]"
                      alt=""
                      src="/button-icons.svg"
                    />
                    <b
                      class="absolute top-[4.4px] left-[10.6px] font-bold inline-block min-w-[8px] z-[2] mq450:text-base"
                      >f</b
                    >
                    <div
                      class="absolute top-[3.1px] left-[-0.1px] w-[56.1px] h-[28.6px]"
                    >
                      <img
                        class="absolute top-[0px] left-[0px] w-full h-full"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        class="absolute top-[10.3px] left-[35.6px] w-[11.5px] h-[8.9px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-[988px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-3xl text-gray-100 font-roboto-condensed"
            >
              <p
                class="m-0 flex-1 relative leading-[24.3px] inline-block max-w-full mq450:text-lg mq450:leading-[19px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div
        class="w-96 flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full text-sm text-white font-roboto-condensed"
      >
        <div
          class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap"
        >
          <div
            class="w-[110px] rounded bg-steelblue box-border flex flex-row items-start justify-start py-0 px-[34px] border-[1px] border-solid border-gray-800 cursor-pointer"
            @click="onShareClick"
          >
            <div
              class="h-[42px] w-[110px] relative rounded bg-steelblue box-border hidden border-[1px] border-solid border-gray-800"
            />
            <div
              class="flex-1 relative leading-[42px] uppercase inline-block min-w-[40px] z-[1]"
            >
              Share
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-start pt-px pb-0 pr-[37px] pl-0"
          >
            <div
              class="relative leading-[42px] uppercase inline-block min-w-[40px]"
            >
              Tweet
            </div>
          </div>
          <div
            class="w-[37px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border"
          >
            <div
              class="self-stretch relative leading-[42px] uppercase inline-block min-w-[37px]"
            >
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Content",
  methods: {
    onHomeTextClick() {
      this.$router.push("/");
    },
    onDonasiTextClick() {
      this.$router.push("/donasi");
    },
    onBeritaTextClick() {
      this.$router.push("/berita");
    },
    onRiwayatDonasiTextClick() {
      this.$router.push("/riwayat-donasi");
    },
    onPilihNominalTextClick() {
      this.$router.push("/pilih-nominal-donasi");
    },
    async onShareClick() {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
        alert("Failed to copy link");
      }
    },
  },
});
</script>
