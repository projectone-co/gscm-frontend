<template>
  <div
    align="center"
    justify="center"
    class="tw-w-[100%] tw-text-lg md:tw-text-base sm:tw-flex sm:tw-justify-center sm:tw-text-sm tw-font-semibold tw-gap-[24px] sm:tw-px-0 tab-wrapper tw-mt-[48px]"
    :class="{ 'mobile-overflow': mobileOverflow }"
    no-gutters
  >
    <div
      class="text-center pt-7 tab tw-flex items-center tw-justify-center tw-flex-col tw-gap-[6px] tw-flex-1"
      :class="`
        ${selectedtab == tab.id ? 'selectedtab' : 'notselectedtab tw-text-weak'}
        ${mobileOverflow ? 'tw-inline-flex' : '' }
      `"
      v-for="tab in tabs"
      @click="selectedtab = tab.id"
      style="cursor: pointer"
    >
      <img :src="tab.iconActive" v-if="tab.iconActive && selectedtab == tab.id" />
      <img :src="tab.icon" v-else-if="tab.icon" />
      <h2 class="mb-0" :style="selectedtab == tab.id ? 'color: #2ab3a3;' : ''">
        {{ $t(tab.text) }}
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: Array,
    mobileOverflow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selectedtab: "",
    };
  },
  watch: {
    selectedtab(val) {
      // console.log(val);
      this.$emit("input", val);
    },
    value(val) {
      this.selectedtab = val;
    },
  },
  mounted() {
    // console.log(this.$attrs);
    this.selectedtab = this.$attrs.value;
  },
};
</script>
<style lang="scss" scoped>
  .tab-wrapper {
    display: flex;
    &.mobile-overflow {
      @media(max-width: 600px) {
        position: relative;
        left: 16px;
        width: calc(100% + 16px);
        margin-left: -16px;
        margin-right: -16px;
        white-space: nowrap;
        overflow: auto;
      }
    }
  }
  .tab {
    padding: 20px 24px;
    gap: 16px;
    white-space: nowrap;
    gap: 16px;
    flex-basis: 170px;
    align-items: center;
    border: 1px solid #EEEEEE;
    @media(min-width:600px) {
      flex: 1 0;
      font-size: 18px;
    }
    @media(max-width:600px) {
      width: auto;
      flex-shrink: 0;
      flex-grow: 1 !important;
      &:last-child {
        margin-right: 16px;
      }
    }
  }
  .selectedtab {
    border-color: #2ab3a3;
    background: white;
  }
  .notselectedtab {
    background: #F6F6F6;
  }
</style>