<template>
  <div
    class="h-[649px] flex-1 relative min-w-[109px] text-left text-sm text-neutral-200 font-red-hat-text"
    :style="iconStyle"
  >
    <div
      class="absolute top-[0px] left-[0px] bg-other-light-grey flex flex-row items-center justify-center pt-5 px-[63px] pb-[18px] gap-[10px] border-b-[1px] border-solid border-neutral-50"
    >
      <img
        class="h-6 w-6 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/24info.svg"
      />
      <div class="relative inline-block min-w-[41px]">Action</div>
    </div>
    <img
      class="absolute top-[76.5px] left-[27.5px] w-6 h-6 cursor-pointer"
      loading="lazy"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
      @click="onIconlyRegularTwoToneShowClick"
    />
    <img
      class="absolute top-[76.5px] left-[71.5px] w-6 h-6"
      loading="lazy"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[76.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[135.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[135.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[135.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[194.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[194.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[194.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[253.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[253.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[253.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[312.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[312.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[312.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[371.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[371.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[371.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[430.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[430.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[430.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[489.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[489.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[489.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[548.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[548.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[548.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
    <img
      class="absolute top-[607.5px] left-[27.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneshow.svg"
    />
    <img
      class="absolute top-[607.5px] left-[71.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotoneedit.svg"
    />
    <img
      class="absolute top-[607.5px] left-[115.5px] w-6 h-6"
      alt=""
      src="/iconlyregulartwotonedelete.svg"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Icon",
    props: {
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      onIconlyRegularTwoToneShowClick: { type: Function },
    },
    methods: {
      onIconlyRegularTwoToneShowClick1() {
        this.$router.push("/baruadd-berita");
      },
    },
    computed: {
      iconStyle(): CSS.Properties {
        return {
          height: this.propHeight,
        };
      },
    },
  });
</script>
