<template>
  <div class="contact-modal">
    <factor-modal :vis.sync="vis">
      <iframe src="/contact"></iframe>
    </factor-modal>

    <factor-btn id="feedback" @click="vis = !vis" class="feedback-icon" target="_top">
      <span class="feedback-icon-container">
        <span class="feedback-icon-eye feedback-icon-eye-left"></span>
        <span class="feedback-icon-eye feedback-icon-eye-right"></span>
      </span>
      <span class="feedback-icon-mouth"></span>
      <p class="feedback-tooltip">Speak to a specialist</p>
    </factor-btn>
  </div>
</template>
<script lang="ts">
import { factorModal, factorBtn } from "@factor/ui"
export default {
  components: { factorModal, factorBtn },
  data() {
    return {
      vis: false
    }
  }
}
</script>
<style lang="less">
.contact-modal {
  display: flex;
  align-items: center;

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
  .contact-btn {
    position: fixed !important;
    bottom: 2.5rem;
    right: 2.65rem;
    background: #fff !important;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04) !important;
    border-radius: 1rem !important;
    overflow: hidden !important;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex !important;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: box-shadow 0.2s, -webkit-transform 0.2s;
    -webkit-transition: box-shadow 0.2s, transform 0.2s;
    transition: box-shadow 0.2s, transform 0.2s !important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 4999 !important;
    cursor: pointer !important;
    &:hover {
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
      -webkit-transform: translateY(-0.25rem);
      -ms-transform: translateY(-0.25rem);
      transform: translateY(-0.25rem);
    }
  }
}
.el-modal {
  .el-modal-pad {
    padding: 3rem 0 0.25rem !important;
    border-radius: 0.5rem !important;
  }
  .el-modal-content {
    border-radius: 0;
    padding: 5rem 0 !important;
    margin: 0 auto !important;
    width: 100% !important;
    max-width: 620px !important;
    min-height: 100vh !important;
  }
  .modal-text-content {
    flex-basis: 100%;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }
}
.close i {
  font-family: Font Awesome 5 Pro;
  font-weight: 300;
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

.feedback-icon {
  z-index: 20;
  width: 38px;
  height: 30px;
  background: #3ca773;
  position: fixed;
  right: 15px;
  bottom: 56px;
  border-radius: 6px 5px 6px 0;
  -webkit-transform: scale(0.74);
  -ms-transform: scale(0.74);
  transform: scale(0.74);
  -webkit-transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
  -moz-transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
  -o-transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
  transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
  &:before {
    display: block;
    width: 14px;
    height: 16px;
    background: rgb(47, 132, 91);
    position: absolute;
    left: -8px;
    bottom: 0px;
    content: "";
    z-index: -1;
    border-radius: 3px 0 0 6px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0;
    height: 17px;
    width: 7px;
    background: #3ca773;
    z-index: -1;
    border-radius: 4px 0 0 0;
  }
  &:hover {
    -webkit-transform: scale(0.86);
    -ms-transform: scale(0.86);
    transform: scale(0.86);
    right: 18px;
    .feedback-icon-mouth {
      &:after {
        background: #fff;
        opacity: 0;
        visibility: hidden;
      }
    }
    .feedback-tooltip {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }
  .feedback-tooltip {
    color: #161718;
    background-color: #fff;
    padding: 6px 8px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.024rem;
    line-height: 1.68rem;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: -222px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    transform-origin: right;
    opacity: 0;
    visibility: hidden;
    border: 1px solid rgba(173, 178, 187, 0.4);
    -webkit-transition: all 0.065s ease-out 0.005s;
    transition: all 0.065s ease-out 0.005s;
  }
}
.feedback-icon-container {
  position: absolute;
  left: 15px;
  top: 0;
}
.feedback-icon-eye {
  width: 4px;
  height: 4px;
  position: absolute;
  top: 8px;
  background: hsl(0, 100%, 100%);
  border-radius: 50%;
  -webkit-animation: blink 6s ease-in-out infinite;
  -moz-animation: blink 6s ease-in-out infinite;
  -ms-animation: blink 6s ease-in-out infinite;
  -o-animation: blink 6s ease-in-out infinite;
  animation: blink 6s ease-in-out infinite;
}
.feedback-icon-eye-left {
  left: 8px;
}
.feedback-icon-eye-right {
  right: 0;
}
.feedback-icon-mouth {
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
.feedback-tooltip {
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

iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>