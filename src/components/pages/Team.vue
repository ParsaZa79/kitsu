<template>
  <div class="people page fixed-page">
    <div class="flexrow mt2 add-people">
      <people-field
        ref="people-field"
        class="flexrow-item add-people-field"
        :people="unlistedPeople"
        :placeholder="$t('people.add_member_to_team')"
        big
        @enter="addPerson"
        v-model="person"
      />
      <button class="button flexrow-item" @click="addPerson">
        {{ $t('main.add') }}
      </button>
    </div>

    <production-team-list
      :entries="teamPersons"
      :is-loading="isTeamLoading"
      :is-error="isTeamLoadingError"
      @remove="removePerson"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { sortPeople } from '@/lib/sorting'

import ProductionTeamList from '@/components/lists/ProductionTeamList'
import PeopleField from '@/components/widgets/PeopleField'

export default {
  name: 'team',
  components: {
    PeopleField,
    ProductionTeamList
  },

  data() {
    return {
      person: null,
      isTeamLoading: false,
      isTeamLoadingError: false
    }
  },

  computed: {
    ...mapGetters([
      'currentProduction',
      'productionMap',
      'openProductions',
      'personMap',
      'people'
    ]),

    teamPersons() {
      return sortPeople(
        this.currentProduction.team.map(personId =>
          this.personMap.get(personId)
        )
      )
    },

    unlistedPeople() {
      return this.people.filter(person => {
        return !this.currentProduction.team.includes(person.id) && person.active
      })
    }
  },

  methods: {
    ...mapActions(['addPersonToTeam']),

    addPerson() {
      if (this.person) {
        this.addPersonToTeam(this.person)
        setTimeout(() => {
          this.$refs['people-field'].clear()
        }, 1)
      }
    },

    removePerson(person) {
      this.removePersonFromTeam(person)
    }
  },

  metaInfo() {
    return {
      title: `${this.currentProduction.name} | ${this.$t(
        'people.team'
      )} - Kitsu`
    }
  }
}
</script>

<style lang="scss" scoped></style>
