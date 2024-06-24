<template>
  <section
    class="w-[1286px] flex flex-row items-start justify-start pt-0 px-6 pb-[76px] box-border max-w-full text-left text-31xl text-gray-1100 font-montserrat mq1050:pb-[49px] mq1050:box-border mq750:pb-8 mq750:box-border"
  >
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq750:gap-[39px]"
    >
      <div
        class="w-[1028px] flex flex-row items-start justify-start pt-0 px-[23px] pb-1.5 box-border max-w-full"
      >
        <h1
          class="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-11xl mq1050:text-21xl"
        >
          Mau berbuat baik apa hari ini?
        </h1>
      </div>
      <div
        class="w-[1225px] flex flex-col items-start justify-start gap-[52px] max-w-full text-xl text-black font-nunito mq750:gap-[26px]"
      >
        <div
          class="w-[460px] flex flex-row items-start justify-start py-0 px-[45px] box-border max-w-full mq450:pl-[22px] mq450:pr-[22px] mq450:box-border"
        >
          <div
            class="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full"
          >
            <div
              class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full"
            >
              <div
                class="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap"
              >
                <img
                  class="self-stretch w-[148px] relative max-h-full object-cover min-h-[118px] cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/clipped-image-20240515-230125-1@2x.png"
                  @click="onClippedImage20240515230125Click"
                />
                <img
                  class="self-stretch w-[148px] relative max-h-full object-cover min-h-[118px] cursor-pointer"
                  alt=""
                  src="/clipped-image-20240515-230125-1-1@2x.png"
                  @click="onClippedImage202405152301251Click"
                />
              </div>
            </div>
            <div
              class="w-[324px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap"
            >
              <b class="relative font-bold mq450:text-base">Program Donasi</b>
              <div
                class="flex flex-col items-start justify-start pt-px px-0 pb-0"
              >
                <b
                  class="relative font-bold inline-block min-w-[57px] mq450:text-base"
                  >Berita</b
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[95px] box-border max-w-full text-41xl text-gray-1100 font-montserrat mq450:pl-5 mq450:box-border mq1050:pl-[47px] mq1050:box-border"
        >
          <h1
            class="m-0 w-[690px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-17xl mq1050:text-29xl"
          >
            Campaign mendesak
          </h1>
        </div>
        <div
          class="self-stretch grid flex-row items-start justify-start py-0 pr-0 pl-[57px] relative gap-[20px] grid-cols-[repeat(4,_minmax(210px,_1fr))] text-center text-base text-white font-poppins lg:pl-7 lg:box-border mq450:grid-cols-[minmax(210px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(210px,_364px))]"
        >
          <div
            class="h-[30px] w-[30px] absolute !m-[0] top-[108px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0"
          />
          <div
            class="h-[352px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border text-left text-darkslategray-200"
          >
            <OverlayShadow :onLinkContainerClick="onLinkContainerClick" />
          </div>
          <div
            class="flex flex-col items-start justify-start py-0 pr-1.5 pl-0 text-4xs font-inter"
          >
            <div
              class="self-stretch shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-start justify-start pt-[37.2px] pb-[3px] pr-[3px] pl-0 z-[2] mq450:pt-6 mq450:pb-5 mq450:box-border"
            >
              <b class="w-[73.7px] relative hidden">
                <p class="m-0">Read More &</p>
                <p class="m-0">Donate</p>
              </b>
              <div
                class="self-stretch flex flex-row items-start justify-start relative text-2xs-5 font-poppins"
              >
                <img
                  class="h-[191px] w-[314px] absolute !m-[0] top-[-37.2px] right-[-23.5px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/link--ffq2mmimat-1702965892png@2x.png"
                />
                <div
                  class="w-[66.8px] !m-[0] absolute right-[-3.9px] bottom-[133.5px] rounded bg-slategray-100 flex flex-row items-start justify-start py-1 pr-[3px] pl-1 box-border"
                >
                  <b
                    class="flex-1 relative leading-[10.5px] font-bold inline-block min-w-[59.2px]"
                    >Kesehatan</b
                  >
                </div>
                <div
                  class="w-[274.4px] !m-[0] absolute right-[-3.9px] bottom-[89px] rounded bg-whitesmoke-400 overflow-hidden shrink-0 flex flex-row items-start justify-start"
                >
                  <div
                    class="h-2.5 w-px relative [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#ffc107]"
                  />
                </div>
                <div
                  class="flex-1 shadow-[0px_0px_7.08px_rgba(0,_0,_0,_0.12)] bg-white flex flex-col items-end justify-end pt-[159.6px] pb-[5px] pr-11 pl-0 gap-[22px] text-left text-base text-darkslategray-200 mq450:pr-5 mq450:box-border"
                >
                  <img
                    class="w-[270.2px] h-[311.8px] relative hidden"
                    alt=""
                    src="/shape-17-copy-2.svg"
                  />
                  <div
                    class="self-stretch flex flex-col items-start justify-start gap-[15.2px]"
                  >
                    <b
                      class="relative leading-[16px] shrink-0 [debug_commit:69da668]"
                    >
                      <p class="m-0">Lawan Jantung Bocor</p>
                      <p class="m-0">'Alby Juga Penyempitan</p>
                      <p class="m-0">Pembuluh Dar...</p>
                    </b>
                    <div
                      class="relative text-xs-2 leading-[24px] shrink-0 [debug_commit:69da668] text-gold"
                    >
                      <b>Rp 37.000</b>
                      <span class="text-gray-600">
                        <span class="text-gray-600"> </span>
                        <span class="text-slategray-100">terkumpul </span>
                        <span>dari Rp 150.000.000</span>
                      </span>
                    </div>
                  </div>
                  <div
                    class="w-[179px] flex flex-row items-start justify-end py-0 px-[33px] box-border"
                  >
                    <button
                      class="cursor-pointer pt-[5px] pb-1.5 pr-[27px] pl-[29px] bg-lightseagreen-200 flex-1 rounded flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
                      @click="onLinkClick"
                    >
                      <div
                        class="flex-1 relative text-base leading-[24px] font-poppins text-white text-center inline-block min-w-[55.3px]"
                      >
                        Donasi
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-end justify-start pt-[37.2px] pb-[3px] pr-1 pl-0 z-[2] text-2xs-5 mq450:pt-6 mq450:pb-5 mq450:box-border"
          >
            <div
              class="self-stretch flex flex-row items-start justify-start relative"
            >
              <img
                class="h-[191px] w-[314px] absolute !m-[0] top-[-37.2px] right-[-24.3px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/link--ffq2mmimat-1702965892png@2x.png"
              />
              <div
                class="w-[66.8px] !m-[0] absolute right-[-4.7px] bottom-[133.5px] rounded bg-slategray-100 flex flex-row items-start justify-start py-1 pr-[3px] pl-1 box-border"
              >
                <b
                  class="flex-1 relative leading-[10.5px] font-bold inline-block min-w-[59.2px]"
                  >Kesehatan</b
                >
              </div>
              <div
                class="w-[274.4px] !m-[0] absolute right-[-4.7px] bottom-[89px] rounded bg-whitesmoke-400 overflow-hidden shrink-0 flex flex-row items-start justify-start"
              >
                <div
                  class="h-2.5 w-px relative [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#ffc107]"
                />
              </div>
              <div
                class="flex-1 shadow-[0px_0px_7.08px_rgba(0,_0,_0,_0.12)] bg-white flex flex-col items-start justify-start pt-[159.6px] px-0 pb-[5px] gap-[15.2px] text-left text-base text-darkslategray-200"
              >
                <img
                  class="self-stretch h-[311.8px] relative max-w-full overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/shape-17-copy-3.svg"
                />
                <b class="relative leading-[16px]">
                  <p class="m-0">Lawan Jantung Bocor</p>
                  <p class="m-0">'Alby Juga Penyempitan</p>
                  <p class="m-0">Pembuluh Dar...</p>
                </b>
                <div
                  class="w-[226px] flex flex-col items-start justify-start gap-[5px] text-xs-2 text-gold"
                >
                  <div class="relative leading-[24px]">
                    <b>Rp 37.000</b>
                    <span class="text-gray-600">
                      <span class="text-gray-600"> </span>
                      <span class="text-slategray-100">terkumpul </span>
                      <span>dari Rp 150.000.000</span>
                    </span>
                  </div>
                  <div
                    class="self-stretch flex flex-row items-start justify-end py-0 px-[33px] text-center text-lgi-2 text-white font-inter"
                  >
                    <div class="h-[55px] w-[113px] relative">
                      <b
                        class="absolute top-[0px] left-[2.7px] font-bold inline-block w-[104.3px] min-w-[104.3px] z-[1]"
                        >Read More</b
                      >
                      <button
                        class="cursor-pointer pt-[5px] pb-1.5 pr-[27px] pl-[29px] bg-lightseagreen-200 absolute top-[17px] left-[0px] rounded box-border w-[113px] flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
                        @click="onLink1Click"
                      >
                        <div
                          class="flex-1 relative text-base leading-[24px] font-poppins text-white text-center inline-block min-w-[55.3px]"
                        >
                          Donasi
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OverlayShadow
            propAlignSelf="unset"
            propFlex="unset"
            propHeight="352px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            :onLinkContainerClick="onLinkContainer2Click"
          />
        </div>
      </div>
      <div
        class="self-stretch h-0.5 flex flex-row items-start justify-end max-w-full"
      >
        <div
          class="self-stretch w-[1188px] relative bg-whitesmoke-500 max-w-full"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import OverlayShadow from "./overlay-shadow.vue";

  export default defineComponent({
    name: "FrameComponent",
    components: { OverlayShadow },
    methods: {
      onLinkContainerClick() {
        this.$router.push("/donasi1");
      },
      onLinkContainer2Click() {
        this.$router.push("/donasi1");
      },
      onClippedImage20240515230125Click() {
        this.$router.push("/donasi");
      },
      onClippedImage202405152301251Click() {
        this.$router.push("/berita");
      },
      onLinkClick() {
        this.$router.push("/donasi1");
      },
      onLink1Click() {
        this.$router.push("/donasi1");
      },
    },
  });
</script>
