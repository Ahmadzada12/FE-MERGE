<template>
  <header
    class="self-stretch h-14 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1)] bg-white box-border shrink-0 flex flex-row items-start justify-start pt-0 pb-3 pr-3 pl-0 gap-[29px] top-[0] z-[99] sticky max-w-full text-left text-sm-9 text-gray-300 font-roboto border-b-[1px] border-solid border-whitesmoke-600"
  >
    <div
      class="w-[251px] box-border flex flex-row items-start justify-start border-r-[1px] border-solid border-whitesmoke-600"
    >
      <div
        class="flex-1 shadow-[0px_8px_15px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-start justify-start gap-[520px] mq450:gap-[260px]"
      >
        <div class="relative leading-[21px] hidden min-w-[45px]">Dasbor</div>
        <img class="w-5 h-5 relative hidden" alt="" src="/svg.svg" />
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[16.9px] text-lgi-5 text-lightseagreen-200 font-montserrat"
        >
          <div
            class="self-stretch flex flex-row items-start justify-start py-0 px-[15px]"
          >
            <div class="flex-1 flex flex-row items-end justify-start">
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
                  <div
                    class="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[9px]"
                  >
                    <a
                      class="[text-decoration:none] flex-1 relative uppercase font-bold text-[inherit] whitespace-nowrap"
                      >tidak bisa</a
                    >
                  </div>
                  <div
                    class="relative text-4xs-6 tracking-[0.2em] uppercase font-medium text-black whitespace-nowrap mq1325:hidden"
                  >
                    uang kalian, kami tilep
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="self-stretch bg-lavenderblush flex flex-row items-start justify-start pt-[13.7px] px-[19px] pb-[14.2px] gap-[12px] whitespace-nowrap z-[1] text-sm text-gray-700 font-roboto border-l-[3px] border-solid border-firebrick-200"
          >
            <img
              class="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/svg1.svg"
            />
            <div
              class="relative leading-[21px] font-medium inline-block min-w-[97.4px]"
            >
              Riwayat Donasi
            </div>
          </div>
        </div>
        <div
          class="self-stretch bg-ghostwhite flex flex-col items-start justify-start text-sm-8 border-t-[1px] border-solid border-whitesmoke-600 mq1125:hidden"
        >
          <div
            class="self-stretch bg-white flex flex-row items-start justify-start pt-[13.7px] px-[19px] pb-[14.2px] gap-[12px] whitespace-nowrap"
          >
            <img class="h-5 w-5 relative" alt="" src="/svg-1.svg" />
            <div class="relative leading-[21px] inline-block min-w-[100px]">
              Halaman Utama
            </div>
          </div>
          <div
            class="self-stretch bg-white flex flex-row items-start justify-start pt-[13.7px] px-[19px] pb-[14.2px] gap-[12px]"
          >
            <img class="h-5 w-5 relative" alt="" src="/svg-2.svg" />
            <input
              class="w-[39px] [border:none] [outline:none] font-roboto text-sm-7 bg-[transparent] h-[21px] relative leading-[21px] text-gray-300 text-left flex items-center p-0"
              placeholder="Keluar"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <nav
      class="m-0 flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full mq450:hidden"
    >
      <nav
        class="m-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[27px] max-w-full text-left text-lg text-black font-montserrat"
      >
        <div class="flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
          <a
            class="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px] cursor-pointer"
            @click="onHomeTextClick"
            >Home</a
          >
        </div>
        <a
          class="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px] cursor-pointer"
         @click="onDonasiClick" >Donasi</a
        >
        <div
          class="w-[62px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border"
        >
          <a class="[text-decoration:none] self-stretch relative text-[inherit] cursor-pointer"
          @click="onNewsClick"  >News</a
          >
        </div>
        <a
          class="[text-decoration:none] relative text-lightseagreen-200 whitespace-nowrap"
          >Riwayat Donasi</a
        >
      </nav>
    </nav>
    <div
      class="w-[51.4px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border"
    >
      <div class="self-stretch h-9 relative">
        <img
          class="absolute top-[0px] left-[0px] w-9 h-9 overflow-hidden object-cover cursor-pointer"
          @click="onProfileClick"
          loading="lazy"
          alt=""
          src="/defaultavatarpng2@2x.png"
        />
        <div
          class="absolute top-[13.9px] left-[43.4px] box-border w-2 h-1 border-t-[4px] border-solid border-slategray-200 border-r-[4px] border-l-[4px]"
        />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header",
    methods: {
      onHomeTextClick() {
        this.$router.push("/");
      },
      onDonasiClick() {
        this.$router.push("/donasi");
      },onNewsClick() {
        this.$router.push("/berita");
      },onProfileClick() {
        this.$router.push("/profile");
      },
    },
  });
</script>
