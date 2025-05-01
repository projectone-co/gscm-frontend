<template>
  <div class="tw-flex tw-w-full">
    <div
      class="input-wrapper tw-h-[48px] tw-flex align-center tw-border tw-border-light-grey tw-bg-input-bg tw-w-full"
      :class="{ focus: isFocusing || currentValue }"
    >
      <input
        ref="input"
        v-bind="{ ...$props, ...$attrs }"
        :value="currentValue"
        @change="onChange"
        @input="onChange"
        @focus="isFocusing = true"
        @blur="isFocusing = false"
        class="tw-w-full tw-h-full py-3 px-4 border-none no-outline"
      />
      <img
        src="/icons/close-filled.svg"
        class="mr-2"
        @click="clear()"
        v-if="currentValue"
      />
    </div>
    <v-btn
      type="button"
      text
      color="#2AB3A3"
      class="btn-primary tw-cursor-pointer tw-bg-accent !tw-h-[48px] tw-min-w-[48px] tw-min-h-[48px] tw-flex justify-center align-center"
      @click="onSearch"
    >
      <img src="/icons/search.svg" />
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFocusing: false,
      currentValue: "",
    };
  },
  methods: {
    onChange(e) {
      const val = e.target.value;
      this.currentValue = val;
      this.$emit("input", val);
    },
    onSearch() {
      // console.log("this.currentValue", this.currentValue);
      this.$emit("onSearch", this.currentValue);
    },
    clear() {
      this.currentValue = "";
      this.$emit("input", "");
      this.$refs.input.focus();
    },
  },
};
</script>
<style lang="scss" scoped>
.input-wrapper {
  &.focus {
    background: white;
    border-color: #2ab3a3;
  }
}
.no-outline {
  outline: none !important;
}
</style>