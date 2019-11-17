<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
      >THE DOMINANT WHITE-BELLIED HEDGEHOG COLORS</v-flex>
    </v-layout>
    <v-layout row wrap class="meal-plans">
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://nmomos.com/wp-content/uploads/2019/08/IMG_3978-768x768.jpg"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">SALT & PEPPER</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>

          <v-card-text>
            <div>
              <h3 class="headline mb-0">SALT & PEPPER</h3>
              <div>
                The spines are white, banded with black.
                No more than 5% of the quills are to be solid white.
                The face is white with a black mask, ears and nose.
                The underbody hair is white
                Black mottling of the underbelly is extensive.
                Skin on the shoulders is jet-black.
                The nose is black.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn
              outlined
              block
              color="green"
              @click="showHedgehogs(1)"
              data-cy="plansSPBtn"
            >Select This Color</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://nmomos.com/wp-content/uploads/2019/08/IMG_0825-1-768x768.jpg"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">CINNAMON</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>

          <v-card-text>
            <div>
              <h3 class="headline mb-0">CINNAMON</h3>
              <div>
                Spines are white, banded by light cinnamon brown.
                No more than 5% of the spines are to be solid white.
                The face is not masked.
                The underbelly is white and mottling of the skin is not preferred.
                Skin on the shoulders is pink.
                The nose is liver.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn
              outlined
              block
              color="green"
              @click="showHedgehogs(2)"
              data-cy="plansCINNAMONBtn"
            >Select This Color</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://nmomos.com/wp-content/uploads/2019/08/IMG_4001-768x768.jpg"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">APRICOT</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>

          <v-card-text>
            <div>
              <h3 class="headline mb-0">APRICOT</h3>
              <div>
                Spines are white, banded by pale orange-beige.
                The underbody is white.
                The face is not masked.
                The eyes are ruby-red.
                The nose is pink.
                <br />
                <br />
                <br />
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn
              outlined
              block
              color="green"
              @click="showHedgehogs(4)"
              data-cy="plansAPRICOTBtn"
            >Select This Color</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomePlans",
  methods: {
    showHedgehogs(color) {
      this.$store.dispatch("getHedgehogs", color);
    }
  }
};
</script>

<style scoped>
</style>
