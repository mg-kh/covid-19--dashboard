<template>
	<v-container>
		<template v-if="isLoading">
			<div class="text-center">
				<v-dialog v-model="dialog" width="500">
					<v-card>
						<v-card-title
							class="headline grey lighten-2 text-subtitle-2 text-sm-h6"
						>
							Please Wait...<span>&#128147;</span>
						</v-card-title>
					</v-card>
				</v-dialog>
			</div>
		</template>
		<div v-else>
			<v-row>
				<v-col cols="12">
					<h1
						:class="{
							'text--secondary': modeState,
							'white--text': !modeState,
						}"
						class="text-md-h3 font-italic"
					>
						{{ countryData.country }}
					</h1>
					<h3
						:class="{
							'text--secondary': modeState,
							'grey--text': !modeState,
						}"
						class="text-subtitle-2 font-italic"
					>
						{{ countryData.day }}
					</h3>
				</v-col>
			</v-row>

			<v-row class="mb-7">
				<v-col cols="12">
					<v-alert
						:class="{
							'deep-orange': modeState,
							'orange lighten-2': !modeState,
						}"
						dark
						icon="mdi-fire"
					>
						<h3 class="text-subtitle-1">
							New Cases ({{ countryData.new }})
						</h3>
					</v-alert>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/X4pO9rD.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Positive
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.active }})
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/rf2Gcfo.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Recover
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.recovered }})
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/ZEhZZs9.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Dead
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.dead }})
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/fdK8rNW.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Total
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.total }})
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/Vrzt1oi.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Critical
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.critical }})
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/10Qu5AO.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Total Test
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ countryData.test }}) ခု
							</p>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" sm="6" md="4" lg="3">
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						class="text-center rounded-xl mb-10"
						light
					>
						<div
							class="img__container rounded-xl elevation-3"
						>
							<v-img
								width="70px"
								src="https://i.imgur.com/RuN3vTK.png"
							>
							</v-img>
						</div>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="pt-14 justify-center"
						>
							Total/Population(Ratio)
						</v-card-title>
						<v-card-text>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ totalPopRatio }}) %
							</p>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			isLoading: true,
			dialog: true,
		};
	},
	computed: {
		modeState() {
			return this.$store.getters.getModeState;
		},
		countryData() {
			return this.$store.getters.eachCountryData;
		},
		totalPopRatio() {
			let total = this.countryData.total;
			let pop = this.countryData.population;
			let ratio = 100 * (total / pop);
			return ratio.toFixed(3);
		},
	},
	watch: {
		countryData(val) {
			if (val != null) {
				this.isLoading = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.img__container {
	position: absolute;
	top: -30%;
	background: white;
	padding: 10px;
	left: 50%;
	transform: translate(-50%);
}
</style>
