<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 copyBox">
        <a href="https://tw.portal-pokemon.com/" target= _blank>
          <img
            :src="img"
            alt="pokemon"
          />
        </a>
      </div>
      <div class="col-md-4 copyBox">
        <p>
          Copyright © Jing Yu Sing 2023
          <br />
          僅個人作品，無商業用途
        </p>
      </div>
      <div class="col-md-4 copyBox">
        <router-link :to="{ name: 'login' }" class="adminBox">
          <p>管理員登入</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: './assets/images/pokemon/International_Pokémon_logo.svg.png'
    }
  }
}
</script>

<style lang="sass">
footer
  padding: 50px 0
  background-color: #5c4343
  .copyBox
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    @media screen and (max-width:768px)
      margin-bottom: 20px
      &:last-child
        margin-bottom: 0
    img
        width: 80%
        max-width: 140px
    p
        font-size: 14px
        letter-spacing: 2px
        color: #f0dec9
        transition: all 0.3s
    .adminBox
        text-decoration: none
        padding: 10px
        border: 1px solid #f0dec9
        border-radius: 10px
        transition: all 0.3s
        &:hover
            background-color: #f0dec9
            p
                color: #5c4343
</style>
