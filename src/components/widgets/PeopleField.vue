<template>
  <div>
    <v-autocomplete
      ref="autocomplete"
      :auto-select-one-item="false"
      :component-item="assignationItem"
      :get-label="getAssignationLabel"
      :items="items"
      :input-attrs="{
        placeholder: placeholder || this.$t('people.select_person'),
        class: wide
          ? 'big wide v-autocomplete-input'
          : big
            ? 'big v-autocomplete-input'
            : 'v-autocomplete-input'
      }"
      :keep-open="keepOpen"
      :min-len="1"
      :wait="100"
      @focus="keepOpen = true"
      @input="onChange"
      @item-clicked="keepOpen = false"
      @update-items="update"
      v-model="item"
    />
    <div
      @click="keepOpen = false"
      :class="{
        'c-mask': true,
        'is-active': keepOpen
      }"
    ></div>
  </div>
</template>

<script>
import AssignationItem from '@/components/widgets/AssignationItem'
import { buildNameIndex, indexSearch } from '@/lib/indexing'

export default {
  name: 'people-field',

  data() {
    return {
      assignationItem: AssignationItem,
      item: null,
      items: [],
      keepOpen: false,
      searchText: ''
    }
  },

  created() {
    this.items = this.people
    this.item = this.value
    this.index = buildNameIndex(this.people)
  },

  mounted() {
    this.items = this.people
    this.$refs.autocomplete.$el.children[0].children[0].addEventListener(
      'keyup',
      event => {
        if (event.keyCode === 13 && this.item) {
          this.$emit('enter')
        }

        this.searchText =
          this.$refs.autocomplete.$el.children[0].children[0].value
        if (!this.item && this.searchText.length === 0) {
          this.items = []
        }
      }
    )
  },

  props: {
    big: {
      type: Boolean,
      default: false
    },
    people: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: () => {}
    },
    wide: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    getAssignationLabel(item) {
      return item?.name || ''
    },

    update(searchText) {
      this.keepOpen = true
      this.items = searchText?.length
        ? indexSearch(this.index, [searchText])
        : this.people
    },

    onChange() {
      this.$emit('input', this.item)
    },

    clear() {
      this.item = null
    },

    focus() {
      this.$el.querySelector('.v-autocomplete-input')?.focus()
    }
  },

  watch: {
    item() {
      if (!this.item) {
        this.items = this.people
      }
    },

    people() {
      this.item = null
      this.items = this.people
      this.index = buildNameIndex(this.people)
    }
  }
}
</script>

<style lang="scss">
.dark .v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  background-color: $dark-grey-light;
  border-color: $dark-grey;
  color: $white-grey;

  &:active,
  &:hover {
    border: 1px solid $green;
  }

  &:focus {
    border-color: $green;
  }
}

.dark .v-autocomplete .v-autocomplete-list {
  box-shadow: 2px 2px 2px 0 $dark-grey-light;
  border-color: $dark-grey;
}

.v-autocomplete .v-autocomplete-list {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  left: 6px;
  top: 41px;
  width: calc(100% - 13px);
  max-height: 300px;
  overflow-y: auto;
  z-index: 3000;
  border: 1px solid var(--border);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.v-autocomplete {
  z-index: 2000;
  position: relative;
}

.v-autocomplete .v-autocomplete-list-item {
  background: white;
  border: 0;
  border-bottom: 1px solid var(--border);
}

.v-autocomplete .v-autocomplete-list-item:last-child {
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input.wide.big {
  width: 100%;
}

.v-autocomplete .v-autocomplete-list-item.v-autocomplete-item-active {
  background: $light-grey-light;
}

.small .v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  width: 200px;
}

.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  width: 300px;
  margin-bottom: 1px;
  border: 1px solid $light-grey-light;
  border-radius: 10px;
  padding: 0.5em;

  &:active,
  &:hover {
    border: 1px solid $green;
  }

  &.big {
    padding: 0.85em;
  }
}
</style>
