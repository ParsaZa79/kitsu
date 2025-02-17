<template>
  <th
    scope="col"
    :class="{
      'validation-cell': !hiddenColumns[columnId],
      'hidden-validation-cell': hiddenColumns[columnId],
      'datatable-row-header': isStick
    }"
    :style="{ left: left }"
  >
    <div class="flexrow validation-content" :style="validationStyle">
      <department-name
        class="department-dot"
        :department="currentDepartment"
        :only-dot="true"
        :style="{ padding: '0px 0px' }"
        v-if="currentDepartment"
      />
      <router-link
        class="flexrow-item datatable-dropdown ellipsis task-type-name"
        :to="taskTypePath(columnId)"
        v-if="!isCurrentUserClient"
      >
        {{ !hiddenColumns[columnId] ? taskTypeMap.get(columnId).name : '' }}
      </router-link>
      <span
        class="flexrow-item datatable-dropdown ellipsis task-type-name"
        v-else
      >
        {{ !hiddenColumns[columnId] ? taskTypeMap.get(columnId).name : '' }}
      </span>

      <span
        class="metadata-menu-button header-icon"
        @click="$emit('show-header-menu', $event)"
      >
        <chevron-down-icon :size="'12'" />
      </span>
    </div>
  </th>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'
import DepartmentName from '@/components/widgets/DepartmentName'

export default {
  name: 'validation-header',
  props: {
    hiddenColumns: Object,
    columnId: String,
    validationStyle: Object,
    isStick: {
      type: Boolean,
      default: false
    },
    left: {
      type: String,
      default: '0px'
    },
    type: {
      type: String,
      default: 'assets'
    }
  },
  components: { ChevronDownIcon, DepartmentName },
  computed: {
    ...mapGetters([
      'currentEpisode',
      'currentProduction',
      'isCurrentUserClient',
      'isTVShow',
      'departmentMap',
      'taskTypeMap'
    ]),

    currentDepartment() {
      return this.departmentMap.get(
        this.taskTypeMap.get(this.columnId).department_id
      )
    }
  },
  methods: {
    taskTypePath(taskTypeId) {
      const taskType = this.taskTypeMap.get(taskTypeId)
      let route = {}
      if (taskType.for_entity === 'Episode') {
        route = {
          name: 'episodes-task-type',
          params: {
            production_id: this.currentProduction.id,
            task_type_id: taskTypeId
          }
        }
      } else {
        route = {
          name: 'task-type',
          params: {
            production_id: this.currentProduction.id,
            task_type_id: taskTypeId,
            type: this.type
          }
        }

        if (this.isTVShow && this.currentEpisode) {
          route.name = 'episode-task-type'
          route.params.episode_id = this.currentEpisode.id
        }
      }

      return route
    }
  }
}
</script>

<style lang="scss" scoped>
th.metadata-descriptor {
  min-width: 120px;
  max-width: 120px;
  width: 120px;
  overflow-wrap: break-word;
  hyphens: auto;
}

.task-type-name {
  font-size: 1.1em;
  max-width: 95%;
  text-transform: none;
  margin-right: 0;
}

.header-icon {
  background: var(--background);
  border-radius: 50%;
  height: 18px;
  padding: 1px;
}

.metadata-menu-button {
  background: var(--background);
  border-radius: 50%;
  height: 15px;
  width: 15px;
  position: absolute;
  right: 5px;
}
</style>
