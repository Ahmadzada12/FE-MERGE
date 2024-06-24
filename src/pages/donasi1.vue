<template>
  <div
    class="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[18px] leading-[normal] tracking-[normal]"
  >
    <div
      class="self-stretch bg-gray-400 flex flex-row items-start justify-end pt-[17px] px-[104px] pb-[18px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
    >
      <img
        class="h-[50px] w-[1350px] relative hidden max-w-full"
        alt=""
        src="/vector.svg"
      />
      <div class="h-[15px] w-[181.9px] relative">
        <img
          class="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          alt=""
          src="/--------------1@2x.png"
        />
        <img
          class="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/--------------@2x.png"
        />
      </div>
    </div>
    <Content />
    <section
      class="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[64.8px] box-border gap-[61px] max-w-full text-left text-[34.7px] text-gray-500 font-roboto mq750:gap-[30px] mq750:pb-[27px] mq750:box-border mq450:gap-[15px] mq1225:pb-[42px] mq1225:box-border"
    >
      <section
        class="mr-[-1px] self-stretch bg-whitesmoke-500 flex flex-row items-start justify-between pt-[26px] pb-[27px] pr-[348px] pl-[354px] box-border max-w-full gap-[20px] text-left text-lg text-gray-100 font-roboto-condensed mq750:pl-[177px] mq750:pr-[174px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq1050:justify-center"
      >
        <div class="flex flex-row items-start justify-start relative">
          <div
            class="flex-1 rounded-[2.64px] flex flex-row items-center justify-start pt-0.5 px-px pb-px gap-[8.7px] z-[2] cursor-pointer"
            :class="activeTab === 'supporters' ? 'bg-lightgray-200' : 'bg-whitesmoke-500'"
            @click="setActiveTab('supporters')"
          >
            <div class="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div class="self-stretch relative z-[1]">SUPPORTERS</div>
            </div>
          </div>
        </div>
        <div class="w-[73px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
          <div
            class="self-stretch relative cursor-pointer z-[1]"
            :class="activeTab === 'comments' ? 'bg-lightgray-200' : 'bg-whitesmoke-500'"
            @click="setActiveTab('comments')"
          >
            Pesan
          </div>
        </div>
      </section>
      <div
        class="mr-[-12px] w-[1288px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border max-w-full"
      >
        <div v-if="activeTab === 'supporters'" class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Frame4
            donationName="Donation A"
            donationTable="/frame-3.svg"
            donationTable1="$93,384.42"
            supporters="14 supporters"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            :showDonationTable="false"
          />
          <Frame4
            donationName="Donation B"
            donationTable="/frame-5.svg"
            donationTable1="$10,384.42"
            supporters="50 supporters"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            :showDonationTable="true"
          />
          <Frame4
            donationName="Donation C"
            donationTable="/frame-3.svg"
            donationTable1="$5,384.42"
            supporters="30 supporters"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            :showDonationTable="true"
          />
          <Frame4
            donationName="Donation D"
            donationTable="/frame-3.svg"
            donationTable1="$8,384.42"
            supporters="20 supporters"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            :showDonationTable="true"
          />
        </div>
        <div v-else>
          <CommentList :comments="comments" />
        </div>
      </div>
    </section>
    <div class="w-[478.6px] h-[177.6px] relative hidden max-w-full z-[3]" />
    <div class="w-[375.7px] h-[177.6px] relative hidden max-w-full z-[4]" />
    <div class="w-[478.6px] h-[163.4px] relative hidden max-w-full z-[5]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[6]" />
    <div class="w-[375.7px] h-[163.4px] relative hidden max-w-full z-[7]" />
    <div class="w-[478.6px] h-[163.4px] relative hidden max-w-full z-[8]" />
    <div class="w-[375.7px] h-[163.4px] relative hidden max-w-full z-[9]" />
    <div class="w-[478.6px] h-[163.4px] relative hidden max-w-full z-[10]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[11]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[12]" />
    <div class="w-[375.7px] h-[163.4px] relative hidden max-w-full z-[13]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[14]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[15]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[16]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[17]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[18]" />
    <div class="w-[77.2px] h-[96.5px] relative hidden z-[19]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[20]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[21]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[22]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[23]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[24]" />
    <div class="w-[77.2px] h-[77.2px] relative hidden z-[25]" />
    <div
      class="w-[124.8px] h-[24.4px] absolute !m-[0] right-[254.8px] bottom-[728.8px] hidden"
    />
    <GroupComponent2 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "../components/content.vue";
import GroupComponent3 from "../components/group-component3.vue";
import Frame4 from "../components/frame4.vue";
import GroupComponent2 from "../components/group-component2.vue";
import CommentList from "../components/comment-list.vue";

export default defineComponent({
  name: "Donasi1",
  components: {
    Content,
    GroupComponent3,
    Frame4,
    GroupComponent2,
    CommentList,
  },
  data() {
    return {
      activeTab: 'supporters',
      comments: [
        {
          id: 1,
          name: "John Doe",
          text: "Great initiative! Keep it up.",
          date: "2024-06-10",
          avatar: "path_to_avatar1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "2024-06-11",
          avatar: "path_to_avatar2.jpg",
        },
        {
          id: 3,
          name: "Alex Johnson",
          text: "This is amazing work!",
          date: "2024-06-12",
          avatar: "path_to_avatar3.jpg",
        },
      ],
    };
  },
  methods: {
    setActiveTab(tab: string) {
      this.activeTab = tab;
    },
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

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bg-lightgray-200 {
  background-color: #e0e0e0;
}

.bg-whitesmoke-500 {
  background-color: #f5f5f5;
}
</style>
