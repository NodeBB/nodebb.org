    <div
      v-for="(feature, index) in features"
      :id="feature.id"
      :key="index"
      class="features content bg-blue-50"
    >
      <div class="split-feature content-pad wide" :class="[index % 2 == 0 ? 'even' : 'odd']">
        <div class="feature-content-container">
          <div class="feature-content">
            <div class="super">{{ feature.super }}</div>
            <div class="font-bold tracking-tight text-3xl lg:text-4xl text-blue-900">{{ feature.title }}</div>
            <div class="mt-2 text-base leading-relaxed text-gray-600 lg:text-xl">
            <p>{{ feature.text }}</p>
            </div>
            <div v-if="feature.bullets" class="bullets">
              <div v-for="(bullet, i) in feature.bullets" :key="i" class="bullet">
                <span class="bullet-icon">
                  <factor-icon icon="fas fa-check" />
                </span>
                <span class="bullet-text">{{ bullet }}</span>
              </div>
            </div>
            <div v-if="feature.link" class="action">
              <factor-link :path="feature.link.path" class="btn bg-blue-500 rounded text-white hover:bg-blue-600">
                <span v-formatted-text="feature.link.text" />
              </factor-link>

            </div>
          </div>
        </div>
        <div v-if="feature.figure" class="feature-figure-container">
          <component :is="feature.figure" />
        </div>
      </div>
    </div>