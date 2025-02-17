<template>
  <div class="people-timesheet-info">
    <div class="close">
      <router-link class="close-button" :to="closeRoute">
        <x-icon />
      </router-link>
    </div>

    <div class="flexrow">
      <people-avatar class="flexrow-item" :person="person" :is-lazy="false" />
      <page-title class="flexrow-item" :text="person.full_name" />
    </div>

    <div class="info-date" v-if="isYearInfo">
      {{ year }}
    </div>

    <div class="info-date" v-if="isMonthInfo">{{ monthString }} {{ year }}</div>

    <div class="info-date" v-else-if="isWeekInfo">
      week {{ week }}, {{ startDay }} - {{ endDay }} {{ weekMonth }} {{ year }}
    </div>

    <div class="info-day-off" v-if="!isDayInfo">{{ dayOffCount }} days off</div>

    <div class="info-date" v-else-if="isDayInfo">
      {{ day }} {{ monthString }} {{ year }}
    </div>

    <time-spent-task-list
      class="time-spent-list"
      :tasks="tasks"
      :is-loading="isLoading"
      :is-error="isLoadingError"
    />
  </div>
</template>

<script>
import moment from 'moment-timezone'

import { mapGetters, mapActions } from 'vuex'
import { XIcon } from 'vue-feather-icons'
import PageTitle from '@/components/widgets/PageTitle'
import PeopleAvatar from '@/components/widgets/PeopleAvatar'
import TimeSpentTaskList from '@/components/lists/TimeSpentTaskList'
import { monthToString } from '@/lib/time'

export default {
  name: 'people-timesheet-info',

  components: {
    XIcon,
    PageTitle,
    PeopleAvatar,
    TimeSpentTaskList
  },

  props: {
    person: {
      type: Object,
      default: () => {}
    },
    year: {
      type: Number,
      default: 0
    },
    month: {
      type: Number,
      default: 0
    },
    week: {
      type: Number,
      default: 0
    },
    day: {
      type: Number,
      default: 0
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isLoadingError: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array,
      default: () => []
    },
    dayOffCount: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ...mapGetters([]),

    startDay() {
      return moment().day('Monday').year(this.year).week(this.week).date()
    },

    endDay() {
      return moment()
        .day('Monday')
        .year(this.year)
        .week(this.week)
        .add(6, 'days')
        .date()
    },

    weekMonth() {
      return moment()
        .day('Monday')
        .year(this.year)
        .week(this.week)
        .format('MMM')
    },

    monthString() {
      return monthToString(this.month)
    },

    isYearInfo() {
      return !this.isMonthInfo && !this.isWeekInfo && !this.isDayInfo
    },

    isMonthInfo() {
      return this.$route.path.indexOf('month') > 0
    },

    isWeekInfo() {
      return this.$route.path.indexOf('week') > 0
    },

    isDayInfo() {
      return this.$route.path.indexOf('day') > 0
    },

    closeRoute() {
      if (this.isMonthInfo) {
        return {
          name: 'timesheets-month',
          params: {
            year: this.year
          }
        }
      } else if (this.isWeekInfo) {
        return {
          name: 'timesheets-week',
          params: {
            year: this.year
          }
        }
      } else if (this.isDayInfo) {
        return {
          name: 'timesheets-day',
          params: {
            year: this.year,
            month: this.month
          }
        }
      } else {
        return { name: 'timesheets' }
      }
    }
  },

  methods: {
    ...mapActions([]),

    onCloseClicked() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.data-list {
  padding-bottom: 5em;
}

.people-timesheet-info {
  padding: 1em;
}

.info-date {
  font-size: 1.5em;
  margin-top: 1em;
  text-transform: capitalize;
}

.info-day-off {
}

.close {
  text-align: right;
}
</style>
