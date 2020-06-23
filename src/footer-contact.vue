<template>
  <div class="contact-specialist">
    <factor-modal :vis.sync="vis">
      <!-- <div class="contact-specialist-header">
        <h3>Speak to a specialist</h3>
        <p>I'd like to speak to someone about...</p>
      </div>-->
      <iframe src="/contact-api"></iframe>
    </factor-modal>
    <factor-btn @click="vis = !vis" class="contact-specialist-btn">Speak to a specialist</factor-btn>
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
.contact-specialist {
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
}
.el-modal .el-modal-content {
  border-radius: 0;
  padding: 5rem 0 !important;
  margin: 0 auto !important;
  width: 100% !important;
  max-width: 620px !important;
  min-height: 100vh !important;
}
.close i {
  font-family: Font Awesome 5 Pro;
  font-weight: 300;
}
.el-modal-pad {
  padding: 3rem 0 0.25rem !important;
  border-radius: 0.5rem !important;
}
.modal-text-content {
  flex-basis: 100%;
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.contact-specialist-btn {
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
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
    -webkit-transform: translateY(-0.25rem);
    -ms-transform: translateY(-0.25rem);
    transform: translateY(-0.25rem);
  }
}
</style>