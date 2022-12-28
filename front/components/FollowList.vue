<template>
  <v-list>
    <v-col v-for="user in users" :key="user.id" cols="12" md="4" style="display: inline-block">
      <v-list-item>
        <v-list-item-avatar color="indigo">
          <span class="white--text headline">{{ user.nickname[0] }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ user.nickname }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon @click="remove(user.id)">mdi-minus-circle-outline</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-col>
  </v-list>
</template>

<script>
  export default {
    //같은 컴포넌트지만 차이점이 발생하는 경우, props로 넘겨준다.
    props : {
      users:{
        type:Array,
        required: true,
      },
      remove: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {

      }
    },
    methods : {
      onDeleteFollow() {

      }
    },
  };
</script>

<style>

</style>
