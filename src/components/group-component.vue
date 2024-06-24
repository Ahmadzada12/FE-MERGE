<template>
  <footer
    class="self-stretch bg-gray-400 flex flex-col items-end justify-start pt-[49px] pb-4 pr-[5px] pl-0 box-border gap-[8px] max-w-full text-left text-3xl text-lightseagreen-200 font-source-sans-pro"
    :style="groupFooterStyle"
  >
    <div
      class="self-stretch h-[315px] relative bg-gray-400 hidden"
      :style="rectangleStyle"
    />
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq750:gap-[22px]"
    >
      <div
        class="w-[1321.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
        :style="frameDivStyle"
      >
        <div
          class="w-[1141.6px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap"
          :style="frameDiv1Style"
        >
          <div
            class="w-72 flex flex-col items-start justify-start pt-[5px] pb-0 pr-8 pl-0 box-border text-lgi-5 font-montserrat"
            :style="frameDiv2Style"
          >
            <div
              class="self-stretch flex flex-col items-start justify-start gap-[9.9px]"
            >
              <div
                class="w-[220px] flex flex-row items-end justify-start"
                :style="frameDiv10Style"
              >
                <img
                  class="h-[59.1px] w-[63px] relative object-cover z-[1]"
                  alt=""
                  :src="pexelsRocketmannTeam94869"
                  :style="pexelsRocketmannTeam9486905IconStyle"
                />
                <div
                  class="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.1px]"
                >
                  <div
                    class="self-stretch flex flex-col items-start justify-start gap-[1px]"
                    :style="frameDiv11Style"
                  >
                    <div
                      class="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[9px]"
                    >
                      <b
                        class="flex-1 relative uppercase font-bold z-[1]"
                        :style="tidakBisaStyle"
                        >tidak bisa</b
                      >
                    </div>
                    <div
                      class="relative text-4xs-6 tracking-[0.2em] uppercase font-medium text-white z-[1]"
                      :style="uangKalianKamiStyle"
                    >
                      uang kalian, kami tilep
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] text-base text-lightgray-300 font-source-sans-pro"
              >
                <p class="m-0 flex-1 relative z-[1]">
                  Fundly is dedicated to providing you with the tools you need
                  to raise money for whatever your cause may be.
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[16px]"
            :style="footerStyle"
          >
            <h3
              class="m-0 w-[117px] relative text-inherit uppercase font-normal font-inherit inline-block z-[1] mq450:text-lg"
            >
              About Us
            </h3>
            <div
              class="flex flex-row items-start justify-start gap-[38px] text-base text-lightgray-300 mq450:gap-[19px]"
              :style="footerLinksStyle"
            >
              <div
                class="flex flex-col items-start justify-start gap-[8px]"
                :style="footerLinkColumnStyle"
              >
                <div
                  class="relative inline-block min-w-[127px] z-[1]"
                  :style="fundraisingIdeasStyle"
                >
                  Fundraising Ideas
                </div>
                <a
                  class="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px] z-[1]"
                  >Pricing</a
                >
                <a
                  class="[text-decoration:none] relative text-[inherit] inline-block min-w-[100px] z-[1]"
                  >Privacy Policy</a
                >
                <div
                  class="relative inline-block min-w-[66px] z-[1]"
                  :style="aboutUsStyle"
                >
                  About Us
                </div>
                <div class="relative inline-block min-w-[56px] z-[1]">
                  Support
                </div>
              </div>
              <div class="flex flex-col items-start justify-start gap-[8px]">
                <div class="relative inline-block min-w-[32px] z-[1]">Blog</div>
                <div class="relative inline-block min-w-[94px] z-[1]">
                  Terms of Use
                </div>
                <a
                  class="[text-decoration:none] w-8 relative text-[inherit] inline-block z-[1]"
                  >FAQ</a
                >
                <div
                  class="relative inline-block min-w-[40px] z-[1]"
                  :style="salesStyle"
                >
                  Sales
                </div>
                <div class="w-[41px] relative inline-block z-[1]">Press</div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-[19px]"
            :style="socialMediaStyle"
          >
            <div class="flex flex-row items-start justify-start py-0 px-[3px]">
              <h3
                class="m-0 relative text-inherit uppercase font-normal font-inherit inline-block min-w-[114px] z-[1] mq450:text-lg"
              >
                Follow Us
              </h3>
            </div>
            <div
              class="flex flex-col items-start justify-start gap-[26px] text-base text-lightgray-300"
              :style="socialIconsRowStyle"
            >
              <div
                class="w-[250.6px] flex flex-row items-start justify-between gap-[20px]"
                :style="frameDiv3Style"
              >
                <div
                  class="w-[115.6px] flex flex-row items-start justify-start gap-[14.6px]"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group10"
                    :style="groupIconStyle"
                  />
                  <div
                    class="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
                  >
                    <a
                      class="[text-decoration:none] self-stretch relative text-[inherit] z-[1]"
                      >Facebook</a
                    >
                  </div>
                </div>
                <div
                  class="flex flex-row items-start justify-start gap-[16.1px]"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group6"
                    :style="groupIcon1Style"
                  />
                  <div
                    class="flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
                  >
                    <a
                      class="[text-decoration:none] relative text-[inherit] inline-block min-w-[51px] z-[1]"
                      >Twitter</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="flex flex-row items-start justify-start gap-[40.9px] mq450:gap-[20px]"
                :style="frameDiv4Style"
              >
                <div
                  class="flex flex-row items-start justify-start gap-[14.6px]"
                  :style="frameDiv5Style"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group5"
                    :style="groupIcon2Style"
                  />
                  <div
                    class="flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
                    :style="frameDiv6Style"
                  >
                    <div
                      class="relative inline-block min-w-[76px] z-[1]"
                      :style="instagramStyle"
                    >
                      Instagram
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-row items-start justify-start gap-[16.1px]"
                  :style="frameDiv7Style"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group8"
                    :style="groupIcon3Style"
                  />
                  <div
                    class="flex flex-col items-start justify-start pt-[3px] px-0 pb-0"
                    :style="frameDiv8Style"
                  >
                    <div
                      class="relative inline-block min-w-[65px] z-[1]"
                      :style="googleStyle"
                    >
                      Google+
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-[235.6px] flex flex-row items-start justify-between gap-[20px]"
                :style="frameDiv9Style"
              >
                <div
                  class="w-[108.6px] flex flex-row items-start justify-start gap-[14.6px]"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group7"
                    :style="groupIcon4Style"
                  />
                  <div
                    class="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0"
                  >
                    <div
                      class="self-stretch relative z-[1]"
                      :style="linkedinStyle"
                    >
                      Linkedin
                    </div>
                  </div>
                </div>
                <div
                  class="w-[78.1px] flex flex-row items-start justify-start gap-[16.1px]"
                >
                  <img
                    class="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
                    loading="lazy"
                    alt=""
                    :src="group9"
                  />
                  <div
                    class="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0"
                  >
                    <div class="self-stretch relative z-[1]">Blog</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch h-px relative bg-dimgray-100 z-[1]"
        :style="footerBackgroundStyle"
      />
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] text-center text-base text-lightgray-300"
    >
      <div
        class="w-[166px] relative inline-block shrink-0 z-[1]"
        :style="copyrightFundlyStyle"
      >
        Copyright © Fundly 2023
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "GroupComponent",
    props: {
      pexelsRocketmannTeam94869: { type: String },
      group10: { type: String },
      group6: { type: String },
      group5: { type: String },
      group8: { type: String },
      group7: { type: String },
      group9: { type: String },
      groupFooterAlignSelf: { type: String },
      groupFooterPosition: { type: String },
      groupFooterTop: { type: [Object, Array, String, Number, Boolean] },
      groupFooterLeft: { type: [Object, Array, String, Number, Boolean] },
      groupFooterWidth: { type: [Object, Array, String, Number, Boolean] },
      rectangleHeight: { type: [Object, Array, String, Number, Boolean] },
      frameDivWidth: { type: [Object, Array, String, Number, Boolean] },
      frameDivWidth1: { type: [Object, Array, String, Number, Boolean] },
      frameDivFlexWrap: { type: String },
      frameDivDebugCommit: { type: String },
      frameDivWidth2: { type: [Object, Array, String, Number, Boolean] },
      footerWidth: { type: [Object, Array, String, Number, Boolean] },
      footerLinksAlignSelf: { type: String },
      footerLinkColumnFlex: { type: String },
      fundraisingIdeasDisplay: { type: String },
      fundraisingIdeasMinWidth: {
        type: [Object, Array, String, Number, Boolean],
      },
      fundraisingIdeasAlignSelf: { type: String },
      aboutUsTextDecoration: { type: String },
      salesMinWidth: { type: [Object, Array, String, Number, Boolean] },
      salesWidth: { type: [Object, Array, String, Number, Boolean] },
      socialMediaWidth: { type: [Object, Array, String, Number, Boolean] },
      socialIconsRowAlignSelf: { type: String },
      frameDivWidth3: { type: [Object, Array, String, Number, Boolean] },
      groupIconMinHeight: { type: [Object, Array, String, Number, Boolean] },
      groupIconMinHeight1: { type: [Object, Array, String, Number, Boolean] },
      frameDivAlignSelf: { type: String },
      frameDivFlex: { type: String },
      groupIconMinHeight2: { type: [Object, Array, String, Number, Boolean] },
      frameDivFlex1: { type: String },
      instagramDisplay: { type: String },
      instagramMinWidth: { type: [Object, Array, String, Number, Boolean] },
      instagramTextDecoration: { type: String },
      instagramAlignSelf: { type: String },
      frameDivWidth4: { type: [Object, Array, String, Number, Boolean] },
      groupIconMinHeight3: { type: [Object, Array, String, Number, Boolean] },
      frameDivFlex2: { type: String },
      googleDisplay: { type: String },
      googleMinWidth: { type: [Object, Array, String, Number, Boolean] },
      googleAlignSelf: { type: String },
      frameDivWidth5: { type: [Object, Array, String, Number, Boolean] },
      footerBackgroundDebugCommit: { type: String },
      copyrightFundlyWidth: { type: [Object, Array, String, Number, Boolean] },
      frameDivWidth6: { type: [Object, Array, String, Number, Boolean] },
      pexelsRocketmannTeam94869DebugCommit: { type: String },
      frameDivDebugCommit1: { type: String },
      tidakBisaDebugCommit: { type: String },
      uangKalianKamiDebugCommit: { type: String },
      groupIconDebugCommit: { type: String },
      googleDebugCommit: { type: String },
      groupIconDebugCommit1: { type: String },
      linkedinDebugCommit: { type: String },
    },
    computed: {
      groupFooterStyle(): CSS.Properties {
        return {
          alignSelf: this.groupFooterAlignSelf,
          position: this.groupFooterPosition,
          top: this.groupFooterTop,
          left: this.groupFooterLeft,
          width: this.groupFooterWidth,
        };
      },
      rectangleStyle(): CSS.Properties {
        return {
          height: this.rectangleHeight,
        };
      },
      frameDivStyle(): CSS.Properties {
        return {
          width: this.frameDivWidth,
        };
      },
      frameDiv1Style(): CSS.Properties {
        return {
          width: this.frameDivWidth1,
          flexWrap: this.frameDivFlexWrap,
          debugCommit: this.frameDivDebugCommit,
        };
      },
      frameDiv2Style(): CSS.Properties {
        return {
          width: this.frameDivWidth2,
        };
      },
      footerStyle(): CSS.Properties {
        return {
          width: this.footerWidth,
        };
      },
      footerLinksStyle(): CSS.Properties {
        return {
          alignSelf: this.footerLinksAlignSelf,
        };
      },
      footerLinkColumnStyle(): CSS.Properties {
        return {
          flex: this.footerLinkColumnFlex,
        };
      },
      fundraisingIdeasStyle(): CSS.Properties {
        return {
          display: this.fundraisingIdeasDisplay,
          minWidth: this.fundraisingIdeasMinWidth,
          alignSelf: this.fundraisingIdeasAlignSelf,
        };
      },
      aboutUsStyle(): CSS.Properties {
        return {
          textDecoration: this.aboutUsTextDecoration,
        };
      },
      salesStyle(): CSS.Properties {
        return {
          minWidth: this.salesMinWidth,
          width: this.salesWidth,
        };
      },
      socialMediaStyle(): CSS.Properties {
        return {
          width: this.socialMediaWidth,
        };
      },
      socialIconsRowStyle(): CSS.Properties {
        return {
          alignSelf: this.socialIconsRowAlignSelf,
        };
      },
      frameDiv3Style(): CSS.Properties {
        return {
          width: this.frameDivWidth3,
        };
      },
      groupIconStyle(): CSS.Properties {
        return {
          minHeight: this.groupIconMinHeight,
        };
      },
      groupIcon1Style(): CSS.Properties {
        return {
          minHeight: this.groupIconMinHeight1,
        };
      },
      frameDiv4Style(): CSS.Properties {
        return {
          alignSelf: this.frameDivAlignSelf,
        };
      },
      frameDiv5Style(): CSS.Properties {
        return {
          flex: this.frameDivFlex,
        };
      },
      groupIcon2Style(): CSS.Properties {
        return {
          minHeight: this.groupIconMinHeight2,
        };
      },
      frameDiv6Style(): CSS.Properties {
        return {
          flex: this.frameDivFlex1,
        };
      },
      instagramStyle(): CSS.Properties {
        return {
          display: this.instagramDisplay,
          minWidth: this.instagramMinWidth,
          textDecoration: this.instagramTextDecoration,
          alignSelf: this.instagramAlignSelf,
        };
      },
      frameDiv7Style(): CSS.Properties {
        return {
          width: this.frameDivWidth4,
        };
      },
      groupIcon3Style(): CSS.Properties {
        return {
          minHeight: this.groupIconMinHeight3,
          debugCommit: this.groupIconDebugCommit,
        };
      },
      frameDiv8Style(): CSS.Properties {
        return {
          flex: this.frameDivFlex2,
        };
      },
      googleStyle(): CSS.Properties {
        return {
          display: this.googleDisplay,
          minWidth: this.googleMinWidth,
          alignSelf: this.googleAlignSelf,
          debugCommit: this.googleDebugCommit,
        };
      },
      frameDiv9Style(): CSS.Properties {
        return {
          width: this.frameDivWidth5,
        };
      },
      footerBackgroundStyle(): CSS.Properties {
        return {
          debugCommit: this.footerBackgroundDebugCommit,
        };
      },
      copyrightFundlyStyle(): CSS.Properties {
        return {
          width: this.copyrightFundlyWidth,
        };
      },
      frameDiv10Style(): CSS.Properties {
        return {
          width: this.frameDivWidth6,
        };
      },
      pexelsRocketmannTeam9486905IconStyle(): CSS.Properties {
        return {
          debugCommit: this.pexelsRocketmannTeam94869DebugCommit,
        };
      },
      frameDiv11Style(): CSS.Properties {
        return {
          debugCommit: this.frameDivDebugCommit1,
        };
      },
      tidakBisaStyle(): CSS.Properties {
        return {
          debugCommit: this.tidakBisaDebugCommit,
        };
      },
      uangKalianKamiStyle(): CSS.Properties {
        return {
          debugCommit: this.uangKalianKamiDebugCommit,
        };
      },
      groupIcon4Style(): CSS.Properties {
        return {
          debugCommit: this.groupIconDebugCommit1,
        };
      },
      linkedinStyle(): CSS.Properties {
        return {
          debugCommit: this.linkedinDebugCommit,
        };
      },
    },
  });
</script>
