<template>
  <figure ref="wrapper" class="stage-container integrate-figure">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div class="grid">
          <div v-for="(feature, index) in features" :key="index" class="cell">
            <icon-integrate v-if="feature.icon" class="icon-integrate" :icon="feature.icon" />
            <div class="cell-inner">
              <h4 class="text-md">{{ feature.text }}</h4>
              <p class="text-xs mt-2 font-semibold text-gray-400 normal-case">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
import Vue from "vue";
import { figureMixin } from "../../util";

export default Vue.extend({
  components: {
    "icon-integrate": () => import("./icon-integrate.vue")
  },
  mixins: [figureMixin({ ref: "wrapper", width: 500 })],
  data() {
    return {
      features: [
        {
          icon: "slack",
          text: `Slack`,
          desc: `Notify forum administrators of new posts in the community on their Slack channel.`
        },
        {
          icon: "mailchimp",
          text: `Mailchimp`,
          desc: `Auto-subscribe new user registrations to your MailChimp email list.`
        },
        // {
        //   icon: "pushbullet",
        //   text: `Pushbullet`,
        //   desc: `Send push notifications to mobile phones whenever a NodeBB notification comes in.`
        // },
        {
          icon: "ghost",
          text: `Ghost`,
          desc: `Use NodeBB as a commenting engine for the Ghost blogging platform.`
        },
        {
          icon: "google",
          text: `Google Adsense`,
          desc: `Monetize your community by placing Adsense ads on any page on your forum.`
        },
        {
          icon: "wordpress",
          text: `WordPress`,
          desc: `Use NodeBB as a commenting engine for the Wordpress CMS platform.`
        },
        {
          icon: "twilio",
          text: `Twilio`,
          desc: `Mobile verification of users via an SMS text containing a random pin code.`
        },
        {
          icon: "aws",
          text: `Amazon S3`,
          desc: `Store images and file uploads on the cloud via Amazon S3.`
        },
        {
          icon: "sendgrid",
          text: `SendGrid`,
          desc: `Allow your users to register with the SSO provider of their choice.`
        },
        {
          icon: "zendesk",
          text: `Zendesk`,
          desc: `Allow your users to register with the SSO provider of their choice.`
        }
      ]
    };
  }
});
</script>

<style lang="less">
#feature-integrate {
  position: relative;
  z-index: 0;
  .feature-figure-container {
    width: 170%;
  }
  @media (max-width: 900px) {
    .feature-figure-container {
      height: 350px;
    }
  }
}
figure.integrate-figure {
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  transform: translateY(0.5rem);
  left: 0;
  .stage-wrap {
    transform-origin: center left;
  }
  &:after {
    content: "";
    -webkit-mask-image: linear-gradient(transparent, #fff 70%);
    mask-image: linear-gradient(transparent, #fff 70%);
    bottom: 0;
    position: absolute;
    left: 0;
    width: 100%;
    height: 40%;
  }
  .stage-wrap,
  .stage {
    width: 100%;
    height: 100%;
  }
  .stage {
    position: relative;
    left: 0;
    top: 0;
    perspective: 500px;
    // -webkit-mask-image: linear-gradient(90deg, #000, #000, transparent 99%);
    .grid {
      //  -webkit-mask-image: linear-gradient(#000, #000, transparent 99%);
      --row-height: 100px;
      height: 100%;
      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      transform: rotateY(-4deg);
      .cell {
        transition: all 0.3s;
        border-radius: 0.5rem;
        background: #fff;
        box-shadow: 0 22.5px 25px -25px rgba(50, 50, 93, 0.2),
          0 2px 3px rgba(50, 50, 93, 0.1);

        font-size: 1.1em;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem 0.5rem 2rem;
        flex-direction: row;
        .cell-inner {
          display: flex;
          flex-direction: column;
        }
        .icon-integrate {
          margin-right: 1em;
        }
        &:hover {
          color: var(--color-primary);
          box-shadow: 0 22.5px 25px -25px rgba(50, 50, 93, 0.5),
            0 3px 2px rgba(50, 50, 93, 0.2);
        }
      }
    }
  }
  @media (max-width: 900px) {
    opacity: 0.6;
    transform: translateY(1em);
    .stage {
      perspective: 0;
      .grid {
        transform: scale(0.8);
        // transform: rotateY(0deg) rotateX(2deg) translateX(-4em);
        .cell {
          padding: 1rem 2rem 1rem 1rem;

          .cell-inner {
            margin-top: 0;
            p {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>