<template>
  <div class="contact-modal">
    <factor-modal :vis.sync="vis">
      <iframe src="/contact"></iframe>
    </factor-modal>

    <a id="contact" @click="vis = !vis" target="_top">
      <span class="contact-icon">
        <span class="contact-icon-container">
          <span class="contact-icon-eye contact-icon-eye-left"></span>
          <span class="contact-icon-eye contact-icon-eye-right"></span>
        </span>
        <span class="contact-icon-mouth"></span>
        <p class="contact-tooltip">Speak to a specialist</p>
      </span>
    </a>
  </div>
</template>
<script lang="ts">
import { factorModal, factorBtn, factorLink } from "@factor/ui"
export default {
  components: { factorModal, factorBtn, factorLink },
  data() {
    return {
      vis: false,
    }
  },
}
</script>
<style lang="less">
.contact-modal {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4999;
  padding: 1.5rem;

  .contact-icon {
    width: 38px;
    height: 30px;
    background: #3ca773 !important;
    position: relative;
    right: 0;
    border-radius: 6px 5px 6px 0;
    transform: scale(0.74);
    transition: all 0.15s ease-out;
    box-shadow: none !important;
    display: flex;
    &:before {
      display: block;
      width: 1rem;
      height: 0.885rem;
      background: #2f845b;
      position: absolute;
      left: -0.65rem;
      bottom: 0;
      content: "";
      z-index: -1;
      border-radius: 0.15rem 0 0 0.585rem;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1rem;
      width: 0.5rem;
      background: #3ca773;
      z-index: -1;
      border-radius: 0.05rem 0 0 0;
    }
    .contact-tooltip {
      color: #161718;
      background-color: #fff;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: -0.01rem;
      line-height: 1;
      border-radius: 0.25rem;
      position: absolute;
      top: 0;
      left: -13.5rem;
      transform: scale(0);
      transform-origin: right;
      opacity: 0.9;
      visibility: hidden;
      border: 1px solid #c1c9d2;
      transition: all 65ms ease-out 5ms;
    }
  }
  a {
    padding: 1rem;
    cursor: pointer;
    &:hover {
      .contact-icon {
        transform: scale(0.86);
        right: 18px;
        .contact-icon-mouth {
          &:after {
            background: #fff;
            opacity: 0;
            visibility: hidden;
          }
        }
        .contact-tooltip {
          transform: scale(1);
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
  .contact-icon-container {
    position: absolute;
    left: 0.95rem;
    top: 0;
  }
  .contact-icon-eye {
    width: 4px;
    height: 4px;
    position: absolute;
    top: 8px;
    background: hsl(0, 100%, 100%);
    border-radius: 50%;
    animation: blink 6s ease-in-out infinite;
  }
  .contact-icon-eye-left {
    left: 8px;
  }
  .contact-icon-eye-right {
    right: 0;
  }
  .contact-icon-mouth {
    width: 16px;
    height: 7px;
    position: absolute;
    left: 50%;
    top: 16px;
    margin-left: -8px;
    background-color: #fff;
    border-radius: 2px 2px 18px 18px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 5px;
      border-radius: 0 0 18px 18px;
      background: #3ca773;
      left: 50%;
      top: -1px;
      margin-left: -5px;
      opacity: 1;
      visibility: visible;
    }
  }
  .contact-tooltip {
    &:after {
      left: 100%;
      top: 50%;
      border: solid rgba(0, 0, 0, 0);
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(255, 255, 255, 0);
      border-left-color: #fff;
      border-width: 8px;
      margin-top: -8px;
      margin-left: -1px;
      z-index: -1;
    }
    &:before {
      left: 100%;
      top: 50%;
      border: solid rgba(0, 0, 0, 0);
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(255, 255, 255, 0);
      border-left-color: #fff;
      border-width: 8px;
      margin-top: -8px;
      margin-left: -1px;
      z-index: -1;
      border-left-color: rgba(173, 178, 187, 0.6);
      margin-left: 0px;
    }
  }

  @keyframes blink {
    45% {
      -webkit-transform: none;
    }

    50% {
      -webkit-transform: rotateX(90deg);
    }

    55% {
      -webkit-transform: none;
    }

    90% {
      -webkit-transform: none;
    }

    95% {
      -webkit-transform: rotateX(90deg);
    }
  }

  .modal-text-content {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
  .factor-link {
    margin: 1rem;
  }
}
.el-modal {
  .el-modal-pad {
    padding: 3rem 0 0.25rem !important;
    border-radius: 0.5rem !important;

    @media (max-width: 767px) {
      border-radius: 0 !important;
      padding-top: 0 !important;
    }
  }
  .close i {
    font-family: Font Awesome 5 Pro;
    font-weight: 300;
  }
  .el-modal-content {
    border-radius: 0;
    padding: 5rem 0 !important;
    margin: 0 auto !important;
    width: 100% !important;
    max-width: 620px !important;
    min-height: 100vh !important;
    .modal-text {
      .modal-text-content {
        flex-basis: 100%;
        text-align: center;
        max-width: 100%;
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
      }
    }
  }
}

iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>