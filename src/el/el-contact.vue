<template>
  <div class="contact-button">
    <factor-modal :vis.sync="vis">
      <iframe src="/contact"></iframe>
    </factor-modal>
    <factor-btn @click="vis = !vis" class="contact-link">Speak to a specialist</factor-btn>
  </div>
</template>
<script lang="ts">
import { factorModal, factorBtn } from "@factor/ui";
export default {
  components: { factorModal, factorBtn },
  data() {
    return {
      vis: false
    };
  }
};
</script>
<style lang="less">
.contact-button {
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
  .contact-link {
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
    z-index: 9999 !important;
    cursor: pointer !important;
    &:hover {
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(0, 0, 0, 0.04);
      -webkit-transform: translateY(-0.25rem);
      -ms-transform: translateY(-0.25rem);
      transform: translateY(-0.25rem);
    }
  }
}

.close i {
  font-family: Font Awesome 5 Pro;
  font-weight: 300;
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