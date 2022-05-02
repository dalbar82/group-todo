<template>
  <div class="column">
      <div class="event-card">
          <h4 class="card-title">{{event.title}}</h4>
          <p class="card-text">{{event.description}}</p>
          <ul class="list-group">
              <li class="list-group-item">Date: {{event.date}}</li>
              <li class="list-group-item">Location: {{event.location}}</li>
              <li class="blog-author">Host: {{event.email}}</li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
    props: ['event']
}
</script>

<style lang="sass" scoped>
    .column
        display: flex
        flex-direction: column
        align-items: center
    .event-card
        background: #fff
        border-radius: 5px
        box-shadow: hsla(0, 0, 0, .2) 0 4px 2px -2px
        font-family: "adelle-sans", sans-serif
        font-weight: 100
        margin: 48px auto
        width: 20rem
        @media screen and (min-width: 480px)
            width: 28rem
        @media screen and (min-width: 767px)
            width: 40rem
        @media screen and (min-width: 959px)
            width: 50rem
    .event-card a
        color: #4d4dff
        text-decoration: none
        transition: .25s ease
        &:hover
            border-color: #ff4d4d
            color: #ff4d4d
</style>