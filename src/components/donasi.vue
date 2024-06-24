<template>
  <div
    class="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start gap-[30px] leading-[normal] tracking-[normal] text-left text-sm text-slategray-100 font-poppins"
  >
    <PageBackground />
    <main
      class="self-stretch h-[1606.5px] shrink-0 flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-sm text-gray-700 font-poppins"
    >
      <div
        class="self-stretch w-[1209.9px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[29.9px] max-w-full"
      >
        <div
          class="w-[176.7px] shrink-0 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border"
        >
          <div
            class="self-stretch flex flex-col items-start justify-start gap-[20px]"
          >
            <Item2 />
            <div
              class="self-stretch rounded-10xs flex flex-col items-start justify-start pt-0 px-0 pb-[5.2px] gap-[4.8px]"
            >
              <div
                class="self-stretch flex flex-row items-start justify-between pt-[4.8px] pb-[5px] pr-[13px] pl-[5px] gap-[20px] border-b-[1px] border-solid border-darkslategray-400"
              >
                <b
                  class="relative leading-[28px] font-extrabold inline-block min-w-[48px]"
                  >Status</b
                >
                <img
                  class="h-3.5 w-[9px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div class="flex flex-row items-start justify-start py-0 px-5">
                <div class="flex flex-col items-start justify-start gap-[10px]">
                  <div
                    class="flex flex-row items-start justify-start gap-[4.7px]"
                  >
                    <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
                    <div
                      class="relative tracking-[1px] leading-[28px] inline-block min-w-[100px]"
                    >
                      Berlangsung
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-start justify-start gap-[4.7px]"
                  >
                    <input class="m-0 h-[18.7px] w-[13px]" type="checkbox" />
                    <div
                      class="relative tracking-[1px] leading-[28px] inline-block min-w-[57px]"
                    >
                      Selesai
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Item />
            <button
              class="cursor-pointer pt-[5px] pb-1.5 pr-[49px] pl-[50px] bg-[transparent] rounded flex flex-row items-start justify-start border-[1px] border-solid border-royalblue-100 hover:bg-cornflowerblue-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
            >
              <div
                class="relative text-base leading-[24px] font-poppins text-royalblue-100 text-center inline-block min-w-[76px]"
              >
                Terapkan
              </div>
            </button>
          </div>
        </div>
        <!-- di sini -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          <div
            class="self-stretch flex-1 shadow-[0px_0px_8px_rgba(0,_0,_0,_0.12)] rounded-3xs bg-gray-1200 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-5 gap-[19.8px]"
            :class="cardWidth"
          >
            <img
              class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/link--ffq2mmimat-1702965892png1@2x.png"
            />
            <div
              class="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-5"
            >
              <div
                class="h-[182.4px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[95.2px] box-border gap-[57.2px]"
              >
                <div
                  class="self-stretch flex flex-col items-start justify-start gap-[5.2px]"
                >
                  <div
                    class="self-stretch flex flex-row items-start justify-start gap-[6.7px]"
                  >
                    <b class="relative leading-[16px]">
                      <p class="m-0">Lawan Jantung Bocor</p>
                      <p class="m-0">'Alby Juga Penyempitan</p>
                      <p class="m-0">Pembuluh Dar...</p>
                    </b>
                    <div
                      class="w-[66.8px] rounded bg-slategray-100 flex flex-row items-start justify-start py-1 pr-[3px] pl-1 box-border text-center text-2xs-5 text-white"
                    >
                      <b
                        class="flex-1 relative leading-[10.5px] font-bold inline-block min-w-[59.2px]"
                        >Kesehatan</b
                      >
                    </div>
                  </div>
                  <div
                    class="self-stretch flex flex-col items-start justify-start text-xs-2 text-gold"
                  >
                    <div
                      class="self-stretch rounded bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start"
                    >
                      <div
                        class="h-2.5 w-px relative [background:linear-gradient(45deg,_rgba(255,_255,_255,_0.15)_25%,_rgba(0,_0,_0,_0)_25%,_rgba(0,_0,_0,_0)_50%,_rgba(255,_255,_255,_0.15)_50%,_rgba(255,_255,_255,_0.15)_75%,_rgba(0,_0,_0,_0)_75%,_rgba(0,_0,_0,_0)),_#ffc107]"
                      />
                    </div>
                    <div class="relative leading-[24px]">
                      <b>Rp 37.000</b>
                      <span class="text-gray-600">
                        <span class="text-gray-600"> </span>
                        <span class="text-slategray-100">terkumpul </span>
                        <span>dari Rp 150.000.000</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  class="cursor-pointer pt-[5px] px-5 pb-1.5 bg-lightseagreen-200 self-stretch rounded flex flex-row items-start justify-center border-[1px] border-solid border-royalblue-100 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100"
                  @click="onDonasiClick"
                >
                  <div
                    class="w-[55.3px] relative text-base leading-[24px] font-poppins text-white text-center flex items-center justify-center shrink-0 min-w-[55.3px]"
                  >
                    Donasi
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Tambahkan lebih banyak card di sini -->
        </div>
      </div>
    </main>
    <div
      class="self-stretch h-[339.5px] relative shrink-0 mq1050:h-auto mq1050:min-h-[339.5]"
    >
      <div
        class="absolute top-[0px] left-[290.2px] rounded w-[1003.3px] h-[35.5px]"
      >
        <div
          class="absolute w-[calc(100%_-_908.6px)] top-[0px] right-[908.6px] left-[0px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-white box-border flex flex-row items-start justify-start py-[7px] pr-[11px] pl-[13px] whitespace-nowrap border-[1px] border-solid border-gainsboro"
        >
          <div class="relative leading-[17.5px] inline-block min-w-[69px]">
            « Previous
          </div>
        </div>
        <div
          class="absolute w-[calc(100%_-_936.8px)] top-[0px] right-[843.1px] left-[93.7px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-white box-border flex flex-row items-start justify-start py-[7px] pr-2.5 pl-[13px] whitespace-nowrap z-[1] text-royalblue-100 border-[1px] border-solid border-gainsboro"
        >
          <div class="relative leading-[18px] inline-block min-w-[41px]">
            Next »
          </div>
        </div>
      </div>
      <GroupComponent4 />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageBackground from "./page-background.vue";
import Item2 from "./item2.vue";
import Item from "./item.vue";
import GroupComponent4 from "./group-component4.vue";

export default defineComponent({
  name: "Donasi",
  components: {
    PageBackground,

    Item2,
    Item,
    GroupComponent4,
  },
  methods: {
    onDonasiClick() {
      this.$router.push("/donasi1");
    },
  },
  data() {
    return {
      cardWidth: "w-1/3",
    };
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  gap: 20px;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
