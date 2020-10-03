<template>
  <footer class="footer p-12 lg:px-4">
    <div class="content-footer">
      <div class="content-footer-pad">
        <div class="footer-col">
          <factor-link path="/" class="nodebb-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20">
              <defs>
                <radialGradient
                  id="a"
                  cx="65.6000383%"
                  cy=".0083684%"
                  r="169.037746%"
                  fx="65.6000383%"
                  fy=".0083684%"
                  gradientTransform="scale(-.64286 -1) rotate(-36.27 -.1824788 2.55923445)"
                >
                  <stop offset="0%" stop-color="#2A6CBE" />
                  <stop offset="38.688%" stop-color="#2062BC" />
                  <stop offset="49.182%" stop-color="#1F5FBC" />
                  <stop offset="66.583%" stop-color="#1C5ABD" />
                  <stop offset="85.354%" stop-color="#1956BC" />
                  <stop offset="100%" stop-color="#1851BE" />
                </radialGradient>
              </defs>
              <path
                fill="url(#a)"
                fill-rule="nonzero"
                d="M98.6575342 6.76712329V20.5614897c-.0026676 2.2974831-.0393597 3.8800282-.0393597 5.4385103h-7.5650864c-4.5185838 0-6.9982936-2.1156164-6.9982936-5.4401566 0-2.2255185 1.2674067-3.8465753 3.2511754-4.5059882-1.6255881-.6868885-2.6174724-2.2255186-2.6174724-4.1213308 0-3.07726023 2.4521583-5.16540111 6.7503234-5.16540111h7.2187133zm7.9310418 0c4.298165 0 6.750324 2.08814088 6.750324 5.16540111 0 1.8958122-.991885 3.4344423-2.617473 4.1213308 1.983769.6594129 3.251176 2.2804697 3.251176 4.5059882 0 3.3245402-2.47971 5.4401566-6.998294 5.4401566h-7.5650863c0-1.5584821-.036692-3.1410272-.0393597-5.4385103V6.76712329h7.218713zM94.7726541 17.7573386H91.356164c-2.2592921 0-3.3889379.8517416-3.3889379 2.5277495 0 1.7584344 1.046989 2.6376516 3.1134145 2.6376516h1.7909021c1.4327218 0 1.9011114-.6868884 1.9011114-2.7750293v-2.3903718zm11.8985789 0h-3.41649v2.3903718c0 2.0881409.46839 2.7750293 1.901112 2.7750293h1.790902c2.066425 0 3.113414-.8792172 3.113414-2.6376516 0-1.6760079-1.129646-2.5277495-3.388938-2.5277495zM94.8002067 9.84438356h-3.1409671c-2.0113208 0-3.0583098.90669274-3.0583098 2.44532294 0 1.5386301 1.046989 2.4453229 3.0583098 2.4453229h3.1409671V9.84438356zm11.5679513 0h-3.140967v4.89064584h3.140967c2.01132 0 3.058309-.9066928 3.058309-2.4453229 0-1.5386302-1.046989-2.44532294-3.058309-2.44532294z"
                transform="translate(-84 -6)"
              />
            </svg>
          </factor-link>
        </div>
        <div class="footer-col list">
          <div class="menu-header text-sm">Get started</div>
          <factor-link path="/product">Product</factor-link>
          <factor-link path="/pricing">Pricing</factor-link>
        </div>

        <div class="footer-col list">
          <div class="menu-header text-sm">Resources</div>
          <factor-link path="https://answers.nodebb.org" target="_blank" rel="noopener">Answers</factor-link>
          <factor-link path="https://docs.nodebb.org" target="_blank" rel="noopener">Docs</factor-link>
          <factor-link path="https://try.nodebb.org" target="_blank" rel="noopener">Demo site</factor-link>
        </div>

        <div class="footer-col list">
          <div class="menu-header text-sm">Company</div>
          <factor-link path="/about">About</factor-link>
          <factor-link path="https://blog.nodebb.org" target="_blank" rel="noopener">Blog</factor-link>
          <factor-link @click="vis = !vis">Contact us</factor-link>
        </div>

        <div class="footer-col icons">
          <factor-link
            class="icon-link"
            path="https://github.com/nodebb"
            target="_blank"
            rel="noopener"
          >
            <factor-icon icon="fab fa-github" />
          </factor-link>
          <factor-link
            class="icon-link"
            path="https://www.facebook.com/nodebb"
            target="_blank"
            rel="noopener"
          >
            <factor-icon icon="fab fa-facebook" />
          </factor-link>
          <factor-link
            class="icon-link"
            path="https://www.instagram.com/node.bb"
            target="_blank"
            rel="noopener"
          >
            <factor-icon icon="fab fa-instagram" />
          </factor-link>
          <factor-link
            class="icon-link"
            path="https://twitter.com/nodebb"
            target="_blank"
            rel="noopener"
          >
            <factor-icon icon="fab fa-twitter" />
          </factor-link>
        </div>
      </div>
      <div class="copyright-wrap">
        <div class="copyright">
          <div v-formatted-text="setting('footer.legal')" />
          <nav class="copynav">
            <factor-link path="/terms-of-service">Terms</factor-link>
            <factor-link path="/privacy-policy">Privacy</factor-link>
            <factor-link path="/gdpr">GDPR</factor-link>
            <factor-link path="/dmca">DMCA</factor-link>
            <factor-link path="/contact">Contact</factor-link>
          </nav>
        </div>
      </div>
    </div>

    <factor-modal class="content-footer-contact" :vis.sync="vis">
      <iframe class="content-footer-iframe" src="/contact"></iframe>
    </factor-modal>
  </footer>
</template>
<script lang="ts">
import { factorModal, factorLink, factorIcon } from "@factor/ui"
import { setting } from "@factor/api"
export default {
  components: {
    factorModal,
    factorLink,
    factorIcon,
  },
  data() {
    return {
      vis: false,
    }
  },
  methods: { setting },
}
</script>

<style lang="postcss">
.footer {
  background: #fff;
  box-shadow: inset 0 1px #e3e8ee;
  .content-footer {
    position: relative;
    width: 100%;
    max-width: var(--content-width, 1200px);
    margin: 0 auto 0;
    padding: 3rem 0 0;
    .logo-nodebb {
      opacity: 0.8;
    }
    .content-footer-pad {
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 0.9fr repeat(2, 1fr) 0.8fr 0.6fr;
      grid-gap: 0;

      .footer-col {
        .nodebb-logo {
          display: block;
          svg {
            width: 50px;
            height: 50px;
          }
        }
        &.icons {
          text-align: right;
          .icon-link {
            font-size: 1.2em;
            color: var(--color-text-secondary);
            opacity: 0.8;

            margin: 0 0.5rem;
            display: inline-block;
            border-radius: 50%;
            text-align: center;

            &:hover {
              color: var(--color-primary);
              opacity: 1;
            }
          }
        }
        &.list {
          .menu-header {
            color: var(--color-text-secondary);
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
          }

          a,
          .factor-link {
            display: block;

            color: var(--color-text-secondary);
            line-height: 2rem;
            cursor: pointer;
            text-decoration: none;
            transition: opacity 0.1s;
            opacity: 0.9;
            &:hover {
              opacity: 1;
              color: var(--color-primary);
            }
            &.hiring {
              color: var(--color-secondary);
              opacity: 1;
              font-weight: 700;
              line-height: inherit;
            }
          }
        }
      }
    }
    .copyright-wrap {
      padding-left: 1rem;
      padding-right: 1rem;
      .copyright {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-top: 2rem;
        border-top: 1px solid #e8ebed;
        font-size: 0.8em;
        color: var(--color-text-secondary);
        a {
          color: var(--color-text-secondary);
          font-weight: 700;
        }
      }
      .copynav {
        text-align: right;
        a {
          margin-left: 10px;
          color: var(--color-text-secondary);
        }
      }
    }
  }
  .content-footer-iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
@media screen and (max-width: 900px) {
  .footer {
    padding: 2rem 0;
    .content-footer {
      .content-footer-pad {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 1rem;
        .footer-col {
          padding-bottom: 2rem;
          &.list {
            a {
              color: var(--color-text-secondary);
              line-height: 1.8;
              cursor: pointer;
              text-decoration: none;
              transition: opacity 0.1s;
              opacity: 0.9;
              font-size: 1.15rem;
            }
          }
          &.icons {
            text-align: left;
          }
        }
      }
      .copyright-wrap {
        .copyright {
          grid-template-columns: 1fr;
        }
        .copynav {
          text-align: left;
          margin-top: 10px;
          a {
            margin-left: 0;
            margin-right: 10px;
          }
        }
      }
    }
    .content-footer-iframe {
    }
  }
}
</style>
