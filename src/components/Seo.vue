<template>
  <div class="invis-meta">
    {{ title }}
    {{ description }}
    {{ h1 }}
    {{ keyword }}
  </div>
</template>
<script>
  import { getMetaData } from '@/utils/meta-data'
  export default {
    data() {
      return {
        title: '',
        description: '',
        h1: '',
        keyword: ''
      }
    },
    metaInfo: function() {
      return {
        title: this.title,
        meta: [
          { name: 'title', content: this.title },
          { name: 'description', content: this.description },
          { name: 'keyword', content: this.keyword }
        ]
      }
    },
    methods: {
      getMeta() {
        const meta = getMetaData(this.$route.path)
        if (meta) {
          this.title = meta.title
          this.description = meta.description
          this.h1 = meta.h1
          this.keyword = meta.keyword
          window.title = meta.title
          this.$nextTick(() => {
            this.$meta().refresh()
            // if (!window.prerenderReady) {
            //   window.prerenderReady = true
            // }
          })
        }
      }
    },
    created() {
      this.getMeta()
    },
    mounted() {
      this.getMeta()
    },
    watch: {
      '$route' (to, from) {
        if(to !== from) {
          this.getMeta()
        }
      }
    }
  }
</script>
<style scoped>
  .invis-meta {
    visibility: hidden;
    opacity: 0;
    font-size: 0;
    max-height: 0 !important;
  }
</style>