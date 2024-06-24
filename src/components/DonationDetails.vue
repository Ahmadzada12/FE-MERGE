<template>
  <section
    class="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-[29px] pl-[27px] box-border max-w-full text-left text-mini text-black font-red-hat-text"
  >
    <div
      class="flex-1 rounded-xl bg-white flex flex-col items-end justify-start pt-[26px] px-[47px] pb-[41px] box-border gap-[17px] max-w-full mq1050:pt-5 mq1050:pb-[27px] mq1050:box-border mq450:pb-5 mq450:box-border mq1150:pl-[23px] mq1150:pr-[23px] mq1150:box-border"
    >
      <div
        class="w-[1111px] h-[801px] relative rounded-xl bg-white hidden max-w-full"
      />
      <div
        class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[10.6px] gap-[0.4px] text-3xs"
      >
        <div class="self-stretch flex flex-row items-start justify-end">
          <div class="relative z-[1]">Rp 70.000.000 / Rp 100.000.000</div>
        </div>
        <div class="self-stretch h-[30px] relative">
          <div
            class="absolute top-[0px] left-[0px] rounded-11xl bg-darkgray w-full h-full z-[1]"
          />
          <div
            class="absolute top-[0px] left-[0px] rounded-11xl bg-darkturquoise w-[672.4px] h-[30px] z-[2]"
          />
        </div>
      </div>
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full"
        >
          <div class="relative inline-block min-w-[88px] z-[1]">
            Judul Donasi
          </div>
          <div
            class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-[19px] max-w-full z-[1] text-neutral-200 border-[1px] border-solid border-neutral-200"
          >
            <div
              class="h-11 w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
            />
            <div class="relative inline-block min-w-[51px] z-[2]">Donasi1</div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px] max-w-full mq1050:gap-[37px] mq750:gap-[18px]"
        >
          <div
            class="flex-1 flex flex-col items-start justify-start gap-[18.5px] min-w-[316px] max-w-full"
          >
            <a
              class="[text-decoration:none] relative text-[inherit] inline-block min-w-[63px] z-[1]"
              >Category</a
            >
            <div
              class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-[19px] max-w-full z-[1] text-neutral-200 border-[1px] border-solid border-neutral-200"
            >
              <div
                class="h-11 w-[486px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
              />
              <a
                class="[text-decoration:none] relative text-[inherit] inline-block min-w-[62px] z-[2]"
                >Kategori1</a
              >
            </div>
            <div class="relative inline-block min-w-[56px] z-[1]">Content</div>
          </div>
          <div
            class="w-[455px] flex flex-col items-start justify-start gap-[17px] max-w-full"
          >
            <div class="relative inline-block min-w-[93px] z-[1]">
              Target Donasi
            </div>
            <div
              class="self-stretch rounded-mini bg-white box-border flex flex-row items-start justify-start py-2.5 px-[9px] max-w-full z-[1] text-neutral-200 border-[1px] border-solid border-neutral-200"
            >
              <div
                class="h-11 w-[455px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
              />
              <div class="relative inline-block min-w-[90px] z-[2]">
                100.000.000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full text-neutral-200"
      >
        <div
          class="flex-1 rounded-mini bg-white box-border flex flex-row items-start justify-start pt-2.5 px-[9px] pb-[78px] max-w-full z-[1] border-[1px] border-solid border-neutral-200"
        >
          <div
            class="h-28 w-[1015px] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-neutral-200"
          />
          <div class="relative inline-block min-w-[115px] z-[2]">
            Deskripsi Donasi1
          </div>
        </div>
      </div>
      <ImageUpload />
      <div
        class="flex flex-row items-start justify-start gap-[31px] text-center text-base text-white mq450:flex-wrap mq450:gap-[15px]"
      >
        <div
          class="rounded-xl bg-firebrick flex flex-row items-start justify-start py-[11px] px-10 gap-[10px] z-[1]"
        >
          <img class="h-4 w-4 relative hidden" alt="" src="/plus2.svg" />
          <div
            class="relative tracking-[-0.01em] leading-[165%] font-medium inline-block min-w-[51px]"
          >
            Cancel
          </div>
          <img class="h-4 w-4 relative hidden" alt="" src="/plus3.svg" />
        </div>
        <div
          class="rounded-xl bg-darkslategray flex flex-row items-start justify-start py-[11px] px-[50px] gap-[10px] z-[1]"
        >
          <img class="h-4 w-4 relative hidden" alt="" src="/plus2.svg" />
          <div
            class="w-[31px] relative tracking-[-0.01em] leading-[165%] font-medium inline-block min-w-[31px]"
          >
            Add
          </div>
          <img class="h-4 w-4 relative hidden" alt="" src="/plus3.svg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import ImageUpload from "./ImageUpload.vue";

  export default defineComponent({
    name: "DonationDetails",
    components: { ImageUpload },
  });
</script>
