<template>
  <div
    align="center"
    justify="center"
    class="tw-text-lg md:tw-text-base sm:tw-flex sm:tw-justify-center sm:tw-text-sm tw-font-semibold tw-gap-[1rem] sm:tw-px-0 tw-px-[1rem] tab-wrapper"
    style="border-bottom: 1px solid #e2e2e2"
    :class="{ 'mobile-overflow tw-block': mobileOverflow }"
    no-gutters
  >
    <div
      class="text-center pt-7 tab tw-flex items-center tw-justify-center"
      :class="`
        ${selectedtab == tab.id ? 'selectedtab' : 'notselectedtab tw-text-weak'}
        ${mobileOverflow ? 'tw-inline-flex' : ''}
      `"
      v-for="tab in tabs"
      @click="selectedtab = tab.id"
      style="cursor: pointer"
    >
      <img
        :src="tab.iconActive"
        v-if="tab.iconActive && selectedtab == tab.id"
      />
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
      default: true,
    },
  },
  data() {
    return {
      selectedtab: "",
    };
  },
  watch: {
    selectedtab(val) {
      // console.log("selectedtab Tabs", val);
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
  &.mobile-overflow {
    @media (max-width: 600px) {
      white-space: nowrap;
      overflow: auto;
    }
  }
}
.tab {
  padding: 20px 24px;
  gap: 16px;
  flex: 0 1;
  height: 68px;
  white-space: nowrap;
  gap: 16px;
  align-items: center;
  @media (min-width: 600px) {
    flex-basis: 212px;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: auto;
    flex-grow: 1 !important;
  }
}
.selectedtab {
  border-bottom: 3px solid #2ab3a3;
}
.notselectedtab {
}
</style>