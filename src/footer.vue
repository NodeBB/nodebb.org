<template>
  <footer class="footer p-12 lg:px-4">
    <div class="content-footer">
      <div class="content-footer-pad">
        <div class="footer-col">
          <factor-link path="/" class="nodebb-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39">
              <defs />
              <path
                fill="#1851be"
                fill-rule="nonzero"
                d="M25 0c13.8071187 0 25 8.6575472 25 19.337173S38.8071187 38.674346 25 38.674346 0 30.0167988 0 19.337173 11.1928813 0 25 0zm2.0735932 6.5391403H27.00965c-1.1045695 0-2 .8954305-2 2l.0009949 7.3663727c-1.6279786-1.5145533-3.8526842-2.4145455-6.4017392-2.4145455-5.2941545 0-9.2455886 3.9386283-9.2455886 9.2027566 0 5.2641282 3.9514341 9.2027566 9.2455886 9.2027566 3.8646762 0 6.9837955-2.0687433 8.4068636-5.211021.2150728.2663888.4453591.5195453.6898269.7584357 1.6455663 1.6080238 3.9336878 2.569663 6.5496424 2.569663 5.3325179 0 9.2455885-3.9386283 9.2455885-9.2027566 0-5.2641283-3.9130706-9.2027566-9.2455885-9.2027566-2.3778183 0-4.4847735.7945278-6.0845066 2.1468242-.0974191.0823509 0-2.9044762 0-5.7855879 0-.989465-.7326401-1.4301412-1.0971388-1.4301412zm-8.5501594 10.8006868c3.2111495 0 5.4695404 2.3824378 5.4695404 5.4695404 0 3.0199917-2.2583909 5.4695405-5.4695404 5.4695405-3.2111496 0-5.4695405-2.4495488-5.4695405-5.4695405 0-3.0871026 2.2583909-5.4695404 5.4695405-5.4695404zm15.9423625-1.5366335c3.2111495 0 5.4695405 2.3824379 5.4695405 5.4695405 0 3.0199917-2.258391 5.4695405-5.4695405 5.4695405-3.2111496 0-5.4695405-2.4495488-5.4695405-5.4695405 0-3.0871026 2.2583909-5.4695405 5.4695405-5.4695405zM11.0807215 8.3703121H9.9959282c-.3356382 0-.6077267.2720886-.6077267.6077268v7.6591831c0 .1621946.0786754.3143121.2110423.4080463.2253577.1595847.5374152.1062652.6970032-.1190903.2351946-.3321302.4509376-.6047877.647229-.8179727.1985353-.215622.539859-.5281646 1.0239711-.9376278.3369723-.285012.5313309-.7039575.5313034-1.1452988V9.7883412c0-.7831558-.6348732-1.4180291-1.418029-1.4180291z"
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
    factorIcon
  },
  data() {
    return {
      vis: false
    }
  },
  methods: { setting }
}
</script>

<style lang="postcss">
.footer {
  background: #fff;
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
