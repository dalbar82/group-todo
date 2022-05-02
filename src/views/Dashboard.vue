<template>
<div class="dashboard">
  <h1>Dashboard</h1>
  <hr>
  <AddEvent />
  <hr>
  <div class="card">
    <EventItem 
      v-for="(event_item, index) in this.$store.state.events"
      :event="event_item"
      :key="index"
    />
  </div>
</div>
</template>

<script>
import AddEvent from '@/components/AddEvent.vue'
import { eventsRef } from '../firebaseApp'
import { onValue} from "firebase/database";
import EventItem from '@/components/EventItem.vue'

export default {
    name: 'Dashboard',
    components: {
      AddEvent,
      EventItem
    },
    data(){
      return {
        
      }
    },
    computed: {

    },
    mounted() {
      onValue(eventsRef, (snapshot) => {
      let events = [];
      snapshot.forEach(event => {
        events.push(event.val())
        })
        this.$store.dispatch('setEvents', events)
      });
     
    }
}
</script>

<style scoped>
  .dashboard{
    padding: 30px;
    color: white;
  }
</style>
