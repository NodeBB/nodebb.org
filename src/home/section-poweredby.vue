<template>
  <figure class="poweredby">
    <h3 class="poweredby-title">NodeBB powers thousands of communities, including...</h3>

    <div class="poweredby-strip">
      <div class="logos">
        <img src="./img/icon-bethesda.svg" />
      </div>
      <div class="logos">
        <img src="./img/icon-funimation.svg" />
      </div>
         <div class="logos tbs">
        <img src="./img/icon-tbs.svg" />
      </div>
      <div class="logos opera">
        <img src="./img/icon-opera.svg" />
      </div>      
 <div class="logos be">
        <img src="./img/icon-bleedingedge.svg" />
      </div>  
      <div class="logos">
        <img src="./img/icon-netgate.svg" />
      </div>
      <div class="logos flux">
        <img src="./img/icon-flux.svg" />
      </div>
      <div class="logos itprotv">
        <img src="./img/icon-itprotv.svg" />
      </div>

      <div class="logos npp">
        <img src="./img/icon-npp.svg" />
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon
  },
  methods: {}
};
</script>

<style lang="less">
.view-home {
  .poweredby {
    --gap-x: 0px;
    --gap-y: 40px;
    flex-direction: column;
    -webkit-box-align: var(--distribute);
    align-items: var(--distribute);
    -webkit-box-pack: var(--align-items);
    justify-content: var(--align-items);
    padding: 5rem 1rem 2.25rem;
    @media (max-width: 900px) {
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
    @media (max-width: 767px) {
      padding: 2rem 1rem 2rem;
    }
    .poweredby-title {
      font-size: 1.35rem;
      font-weight: 600;
      letter-spacing: -0.01rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    .poweredby-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      text-align: center;
      font-size: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
      list-style: none;

      @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      .logos {
        display: inline-block;
        text-align: center;

        img {
          display: inline-block;
          transform-origin: left top;
          vertical-align: middle;
          height: var(--logo-height);

          --logo-height: 32px;
        }
        &.be {
          img {
            --logo-height: 32px;
          }
        }
        &.npp {
          img {
            --logo-height: 44px;
          }
        }
        &.tbs {
          img {
            --logo-height: 56px;
          }
        }
        &.itprotv {
          img {
            --logo-height: 46px;
          }
        }
        &.opera {
          img {
            --logo-height: 28px;
          }
        }
        &.flux {
          img {
            --logo-height: 29px;
          }
        }
      }
      .poweredby-context {
        text-align: center;
        font-weight: 500;
        line-height: 1.5;
        margin: 0px;
      }
    }
  }
}
</style>
