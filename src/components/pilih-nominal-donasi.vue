<template>
  <BackgroundShadow2 />
  <div
    class="w-[1377px] h-[974px] [background:linear-gradient(#fff,_#fff),_#fff] max-w-full overflow-y-auto leading-[normal] tracking-[normal]"
  >
    <section
      class="absolute w-full top-[70.1px] right-[0px] left-[0px] bg-whitesmoke-100 h-[580.8px] text-left text-base text-gray-600 font-poppins"
    >
      <img
        class="absolute top-[calc(50%_-_270.4px)] left-[393.5px] w-[125px] h-[125px] overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src="/ffq2mmimat-1702965892png@2x.png"
      />
      <div
        class="absolute h-[calc(100%_-_455.8px)] w-[calc(100%_-_912px)] top-[20px] right-[378.5px] bottom-[435.8px] left-[533.5px]"
      >
        <div class="absolute top-[-3.5px] left-[15px] w-[382.3px] h-[38.5px]">
          <b
            class="absolute top-[3.3px] left-[0px] leading-[16px] flex items-center w-[458.7px] h-8"
          >
            <span class="w-full">
              <p class="m-0">Lawan Jantung Bocor 'Alby Juga Penyempitan</p>
              <p class="m-0">Pembuluh Darah Alby</p>
            </span>
          </b>
        </div>
        <img
          class="absolute top-[calc(50%_-_21.3px)] left-[15px] rounded-3xs w-5 h-5 overflow-hidden object-contain"
          loading="lazy"
          alt=""
          src=""
        />
        <div
          class="absolute top-[40px] left-[35px] w-[135.8px] h-[21px] text-sm"
        >
          <div
            class="absolute top-[-0.2px] left-[0px] leading-[21px] font-light flex items-center w-[121.2px] h-[21px]"
          >
             Wahyu Nasution
          </div>
          <img
            class="absolute top-[calc(50%_-_6.8px)] left-[120.8px] w-[15px] h-[15px] overflow-hidden object-contain"
            loading="lazy"
            alt=""
            src=""
          />
        </div>
      </div>
      <div
        class="absolute h-[calc(100%_-_253px)] top-[153px] bottom-[100px] left-[calc(50%_-_310px)] w-[620px] text-sm"
      >
        <div
          class="absolute h-full w-[calc(100%_-_30px)] top-[0px] right-[15px] bottom-[0px] left-[15px] shadow-[0px_1px_6px_rgba(49,_53,_59,_0.12)] rounded-xl bg-white"
        >
          <div
            class="absolute top-[26px] left-[26px] text-base leading-[16px] font-medium flex items-center w-[69px] h-4"
          >
            Nominal
          </div>
          <div
            class="absolute top-[50px] left-[26px] leading-[24px] flex items-center w-[190px] h-6"
          >
            Pilih nominal yang tersedia
          </div>
          <div
            class="absolute h-[9.15%] w-[16.61%] top-[28.98%] right-[78.98%] bottom-[61.87%] left-[4.41%] rounded-23xl box-border text-center border-[1px] border-solid border-whitesmoke-300 cursor-pointer"
            @click="setNominal(30000)"
          >
            <div
              class="absolute top-[4.8px] left-[calc(50%_-_31.5px)] leading-[21px] font-light flex items-center justify-center w-[63.3px] h-[21px] whitespace-nowrap"
            >
              Rp30.000
            </div>
          </div>
          <div
            class="absolute h-[9.15%] w-[16.61%] top-[28.98%] right-[62.03%] bottom-[61.87%] left-[21.36%] rounded-23xl box-border text-center border-[1px] border-solid border-whitesmoke-300 cursor-pointer"
            @click="setNominal(50000)"
          >
            <div
              class="absolute top-[4.8px] left-[calc(50%_-_31.7px)] leading-[21px] font-light flex items-center justify-center w-16 h-[21px] whitespace-nowrap"
            >
              Rp50.000
            </div>
            <div
              class="absolute h-full w-[calc(100%_-_2px)] top-[-0.1px] right-[1.5px] bottom-[0.1px] left-[0.5px] rounded-31xl bg-gray-900 box-border border-[1px] border-solid border-gray-200"
            />
          </div>
          <div
            class="absolute h-[9.15%] w-[16.61%] top-[28.98%] right-[45.08%] bottom-[61.87%] left-[38.31%] rounded-23xl box-border text-center border-[1px] border-solid border-whitesmoke-300 cursor-pointer"
            @click="setNominal(75000)"
          >
            <div
              class="absolute top-[4.8px] left-[calc(50%_-_31.1px)] leading-[21px] font-light flex items-center justify-center w-[63px] h-[21px] whitespace-nowrap"
            >
              Rp75.000
            </div>
          </div>
          <div
            class="absolute h-[9.15%] w-[16.61%] top-[28.98%] right-[28.14%] bottom-[61.87%] left-[55.25%] rounded-23xl box-border text-center border-[1px] border-solid border-whitesmoke-300 cursor-pointer"
            @click="setNominal(100000)"
          >
            <div
              class="absolute top-[4.8px] left-[calc(50%_-_33.7px)] leading-[21px] font-light flex items-center justify-center w-[68px] h-[21px] whitespace-nowrap"
            >
              Rp100.000
            </div>
          </div>
          <div
            class="absolute top-[146px] left-[26px] text-base leading-[16px] font-medium flex items-center w-[136px] h-4"
          >
            Nominal Lainnya
          </div>
          <div
            class="absolute top-[170px] left-[26px] w-[calc(100%-52px)] flex items-center"
          >
            <span class="text-darkgray-100 text-center leading-[38px]">Rp |</span>
            <input
              type="number"
              v-model="nominalLainnya"
              placeholder="10.000"
              class="ml-2 flex-1 rounded-sm bg-white box-border h-10 text-xs text-darkslategray-100 border-[1px] border-solid border-lightgray-100 px-3"
            />
            <button
              class="ml-2 bg-lightgray-100 rounded p-2"
              @click="decrementNominal"
            >
              -
            </button>
            <button
              class="ml-2 bg-lightgray-100 rounded p-2"
              @click="incrementNominal"
            >
              +
            </button>
          </div>
          <div
            class="absolute top-[228.6px] left-[26px] text-xs-2 leading-[16.8px] text-slategray-100 flex items-center w-[148.4px] h-[16.8px]"
          >
            Minimum donasi Rp 1000
          </div>
          <button
            class="cursor-pointer p-0 bg-lightseagreen-200 absolute w-[calc(100%_-_52px)] top-[263px] right-[26px] left-[26px] rounded box-border h-[38.8px] opacity-[0.65] border-[1px] border-solid border-lightseagreen-200 hover:bg-lightseagreen-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightseagreen-100"
            @click="onButtonClick"
          >
            <div
              class="absolute top-[calc(50%_-_11.1px)] left-[calc(50%_-_43.2px)] text-mini-4 leading-[21.6px] font-medium font-poppins text-white text-center flex items-center justify-center w-[87px] h-[22px]"
            >
              Selanjutnya
            </div>
          </button>
        </div>
      </div>
    </section>
  </div>
  <GroupComponent11 />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GroupComponent11 from "./group-component1.vue";
import BackgroundShadow2 from "./background-shadow.vue";

export default defineComponent({
  name: "PilihNominalDonasi",
  components: { GroupComponent11, BackgroundShadow2 },
  data() {
    return {
      nominalLainnya: "",
    };
  },
  methods: {
    onButtonClick() {
      this.$router.push("/infodonatur");
    },
    setNominal(nominal: number) {
      this.nominalLainnya = nominal;
    },
    incrementNominal() {
      this.nominalLainnya = Number(this.nominalLainnya) + 10000;
    },
    decrementNominal() {
      if (Number(this.nominalLainnya) - 10000 >= 1000) {
        this.nominalLainnya = Number(this.nominalLainnya) - 10000;
      } else {
        this.nominalLainnya = 1000;
      }
    },
  },
});
</script>
