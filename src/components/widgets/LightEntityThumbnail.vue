<template functional>
  <img
    class="thumbnail-picture"
    loading="lazy"
    alt=""
    :key="props.previewFileId"
    :src="`/api/pictures/${props.type}/preview-files/${props.previewFileId}.png`"
    :style="{
      width: props.width,
      height: props.height,
      'max-width': props.maxWidth,
      'max-height': props.maxHeight
    }"
    v-bind="data.attrs"
    v-if="props.previewFileId"
  />
  <span
    class="thumbnail-picture thumbnail-empty"
    :style="{
      width: props.width,
      height: props.emptyHeight ? props.emptyHeight : props.height
    }"
    v-bind="data.attrs"
    v-else
  >
  </span>
</template>

<script>
export default {
  name: 'light-entity-thumbnail',
  functional: true,

  props: {
    previewFileId: {
      default: '',
      type: String
    },
    width: {
      default: '150px',
      type: String
    },
    height: {
      default: '50px',
      type: String
    },
    maxHeight: {
      default: 'auto',
      type: String
    },
    maxWidth: {
      default: 'auto',
      type: String
    },
    emptyHeight: {
      type: String
    },
    type: {
      default: 'thumbnails',
      type: String
    }
  }
}
</script>

<style lang="scss">
.dark .thumbnail-picture {
  background-color: $dark-grey-lighter;
  border-color: $dark-grey-light;
}

span.thumbnail-empty {
  background: $white-grey;
  display: block;
  margin: 0;
}
</style>
