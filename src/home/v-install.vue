<template>
  <div class="start-container">
    <nav class="nav">
      <factor-link
        v-for="(video, index) in videos"
        :key="video.id"
        :class="video.id == selected ? 'active' : ''"
        :path="`#${video.id}`"
      >{{ index + 1 }}. {{ toLabel(video.id) }}</factor-link>
    </nav>
    <div class="start-content">
      <section v-for="video in videos" :id="video.id" :key="video.id" class="video-entry">
        <div class="header">
          <h1 class="title">{{ toLabel(video.id) }}</h1>
          <div class="subtitle">
            <div class="time">
              <span class="tag">{{ video.duration }}</span>
            </div>
            <div class="synopsis">{{ video.synopsis }}</div>
          </div>
        </div>
        <div class="video-wrap">
          <div class="video">
            <iframe :src="video.url" frameborder="0" allowfullscreen />
          </div>
          <div v-formatted-text="video.context" class="video-content" />
        </div>
      </section>

      <join-program />
    </div>
  </div>
</template>

<script lang="ts">
import { toLabel } from "@factor/api";
import { factorLink } from "@factor/ui";

export default {
  components: {
    factorLink,
    elCta: () => import("./el-cta.vue")
  },
  data() {
    return {
      selected: "one",
      loading: true,
      videos: [
        {
          id: "one",
          url: "https://www.youtube.com/embed/?rel=0",
          duration: "",
          synopsis: "",
          context: ""
        },
        {
          id: "two",
          url: "https://www.youtube.com/embed/?rel=0",
          duration: "",
          synopsis: "",
          context: ""
        },
        {
          id: "three",
          url: "https://www.youtube.com/embed/?rel=0",
          duration: "",
          synopsis: "",
          context: ""
        },
        {
          id: "four",
          url: "https://www.youtube.com/embed/?rel=0",
          duration: "",
          synopsis: "",
          context: ""
        }
      ]
    };
  },
  mounted() {
    /**
     * Scrolling changes, sometimes IntersectionObserver isn't available
     */
    if (IntersectionObserver) {
      this.videos.forEach((video: any) => {
        const selector = `#${video.id}`;
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              this.selected = entries[0].target.id;
            }
          },
          { threshold: [0.2] }
        );

        const el = document.querySelector(selector);
        if (el) {
          observer.observe(el);
        }
      });
    }
  },
  metaInfo() {
    return {
      title: "Getting Started",
      description:
        "Getting started with NodeBB is easy. Install and deploy in as little as 10 minutes."
    };
  },
  methods: { toLabel }
};
</script>
<style lang="less">
.start-container {
  padding-top: 5em;
  .start-content {
    max-width: var(--content-width, 1200px);
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    padding-top: 5em;
    .start-content {
      padding: 0 1rem;
    }
  }
  .nav {
    background: #fff;
    padding: 0.5rem 1rem;
    top: 45px;
    position: sticky;
    display: flex;
    justify-content: center;
    z-index: 500;
    a {
      color: inherit;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.2em 1em;
      border-radius: 6px;
      margin: 0 1rem;
      &.active,
      &:hover {
        background: var(--color-bg-highlight);
        color: var(--color-primary);
        opacity: 1;
      }
    }
    @media (max-width: 900px) {
      top: auto;
      position: relative;
      display: block;
      max-width: 400px;
      a {
        display: block;
        margin: 0;
      }
    }
  }
  .start {
    padding-bottom: 6em;
  }
  .customize {
    padding: 0 0 3em;
  }
  .deploy {
    padding: 3em 0;
  }

  .cta {
    margin: 0 0 2em;
    button.app-btn.link {
      color: #fff;
      background: rgba(0, 0, 0, 0.1);

      &:hover {
        background: #0c1647; //rgba(0, 0, 0, 0.15);
      }
    }
  }
}
.video-entry {
  margin: 0 1.8em;
  padding: 3em 0;

  @media (max-width: 900px) {
    margin: 0;
  }

  .header {
    .time .tag {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      border-radius: 8px;
      padding: 0 1rem;
      margin-right: 2rem;
    }
    .title {
      font-size: 4em;
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      display: flex;
      max-width: 800px;
      align-items: center;

      .synopsis {
        opacity: 0.5;
        font-size: 1.5em;
      }

      @media (max-width: 900px) {
        display: block;
        .synopsis {
          margin: 1rem 0 0;
        }
      }
    }
  }

  .video-wrap {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 4rem;
    padding-top: 3em;
    align-items: center;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .video {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      width: 100%;

      box-shadow: 0px 50px 100px rgba(50, 50, 93, 0.13),
        0px 15px 35px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);

      iframe,
      object,
      embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .video-content {
      font-size: 1.2em;
      font-weight: 500;
      line-height: 1.5;

      code {
        display: block;
        font-size: 0.9em;
        margin: 0.25em 0;
        padding: 0 1rem;
        background: var(--color-bg-highlight);
        color: var(--color-secondary);
        border-radius: 6px;
      }
      ol {
        list-style-position: inside;
      }
      @media (max-width: 767px) {
        font-size: 1.2em;
      }
    }
  }
}
</style>
