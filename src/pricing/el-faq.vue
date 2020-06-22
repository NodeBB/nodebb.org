<template>
  <section class="faq">
    <div class="faq-header">
      <h2 class="title">Frequently Asked Questions</h2>
      <div class="sub">
        Have a question?
        <factor-link path="/contact">Contact us &rarr;</factor-link>
      </div>
    </div>
    <div class="faq-answers">
      <div v-for="(faq, i) in faqs" :key="i" class="answer">
        <div class="icon">
          <plan-icon icon="question" />
        </div>
        <div>
          <div class="answer-title">{{ faq.question }}</div>
          <div v-formatted-text="faq.answer" class="answer-text" />
          <factor-link v-if="faq.more" :path="faq.more">More &rarr;</factor-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";
import { setting } from "@factor/api";
export default {
  components: {
    factorLink,
    planIcon: () => import("./icons.vue"),
    "el-accordion": () => import("../extend/el/accordion.vue")
  },
  methods: { setting },
  data() {
    return {
      faqs: [
        {
          question: "How does the free 14-day trial work?",
          answer: `You get full access to NodeBB during your free 14-day trial. There are no restrictions, and you have no obligation to continue beyond your trial. You won’t be billed until after your 14-day trial is complete, and we’ll send an email reminder near the end of your trial to verify that you want to continue. You can cancel at any time by going into your "Account Management", clicking on the "Billing" section, and hitting the "Cancel" button in the lower right corner.`
        },
        {
          question: "How are payments handled?",
          answer: `<p>We process all payments via Stripe and offer two payment options.</p><ul class="font-normal list-outside list-square mt-8 ml-8 text-base leading-relaxed"><li>ACH debit bank transfer. (Canada only)</li><li> All major credit cards. Note, there is a 3% processing fee for credit card transactions.</li></ul>`
        },
        {
          question: "Can I cancel at anytime?",
          answer: `We require a three month commitment at the start, but after that all of our plans are month-to-month so you may cancel at any time. As a courtesy, we can provide a detailed "exit briefing" to the new party taking over.`
        },

        {
          question: "What’s my traffic limit? What if I exceed it?",
          answer: `Village and City plans have monthly traffic limits of 2M (Village) and 10M (City) unique visitors. Metropolis monthly traffic limits vary by plan. If you need to increase your limit, please contact our team.`,
          more: "/contact"
        },
        {
          question:
            "When does a unique visitor count towards my monthly traffic limit?",
          answer: `A unique visitor is a person who views a landing page, popup, or sticky bar at least once in a given month. Using cookies, we ensure each visitor only counts once toward your traffic limit—no matter how many times they return.`
        },
        {
          question: "Do you have smaller plans with less page views?",
          answer: `Unfortunately no. The "Village" plan is the smallest plan we can offer while maintaining a high level of quality service.`
        },
        {
          question: "Do you offer annual billing?",
          answer: `Yes, and we offer a discount for up-front annual billing. Please contact us for details.`
        },
        {
          question: "What's the difference between annual and monthly pricing?",
          answer: `Annual plans are billed as a single payment once per year at a discount. Monthly plans are billed every month on the date of your signup.`
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.faq {
  padding: 4rem 0;
  .faq-header {
    padding-bottom: 3rem;
    .title {
      font-size: 2em;
      font-weight: var(--font-weight-bold);
    }
    .sub {
      color: var(--color-text-secondary);
    }
  }
  .faq-answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem 4rem;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .answer {
      display: grid;
      grid-template-columns: 2.6rem 1fr;
      .icon {
        opacity: 0.5;
      }
    }
    .answer-title {
      font-weight: 700;
      font-size: 1.2em;
      line-height: 1.5em;
    }
    .answer-text {
      line-height: 1.7em;
      opacity: 0.85;
      margin-top: 0.5rem;
    }
  }
}
</style>