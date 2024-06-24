<template>
  <div
    class="self-stretch flex flex-row items-start justify-start relative max-w-full"
  >
    <img
      class="h-[608px] w-[836px] absolute !m-[0] top-[-304px] right-[-500px]"
      alt=""
      src="/vector-1.svg"
    />
    <img
      class="h-[430px] w-[535px] absolute !m-[0] bottom-[-290px] left-[-501px]"
      loading="lazy"
      alt=""
      src="/vector-2.svg"
    />
    <div
      class="flex-1 rounded-3xl bg-white flex flex-col items-center justify-center py-8 px-0 box-border max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border"
    >
      <form
        class="m-0 self-stretch flex flex-col items-start justify-between py-0 px-8 box-border min-h-[381px]"
      >
        <div
          class="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[13px]"
        >
          <h1
            class="m-0 self-stretch relative text-5xl font-medium font-red-hat-text text-neutral-500 text-center mq450:text-lgi"
          >
            Login to Your Account
          </h1>
        </div>
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[24px]"
        >
          <InputField
            email="Email"
            admingmailcom="admin@gmail.com"
            iconlyRegularTwoToneProfi="/iconlyregulartwotoneprofile.svg"
          />
          <div class="self-stretch flex flex-col items-center justify-start">
            <InputField
              email="Password"
              admingmailcom="Password"
              iconlyRegularTwoToneProfi="/iconlyregulartwotonehide.svg"
            />
          </div>
          <div class="flex flex-row items-center justify-start gap-[8px]">
            <div class="flex flex-row items-start justify-start">
              <div
                class="h-6 w-6 relative rounded box-border border-[1px] border-solid border-neutral-100"
              />
            </div>
            <div
              class="relative text-xs leading-[24px] font-red-hat-text text-black text-left inline-block min-w-[79px]"
            >
              Remember Me
            </div>
          </div>
        </div>
        <div
          class="self-stretch rounded-xl bg-darkslategray flex flex-row items-center justify-center py-2 px-5 gap-[10px] cursor-pointer"
          @click="onButtonContainerClick"
        >
          <img class="h-3.5 w-3.5 relative hidden" alt="" src="/plus1.svg" />
          <div
            class="relative text-sm tracking-[-0.01em] leading-[24px] font-medium font-red-hat-text text-white text-center inline-block min-w-[37px]"
          >
            Login
          </div>
          <img class="h-3.5 w-3.5 relative hidden" alt="" src="/plus1.svg" />
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import InputField from "./InputField.vue";

  export default defineComponent({
    name: "Frame",
    components: { InputField },
    methods: {
      onButtonContainerClick() {
        this.$router.push("/barudashboard");
      },
    },
  });
</script>
