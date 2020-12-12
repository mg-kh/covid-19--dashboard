<template>
	<div class="vue-world-map">
		<!-- Show Country Overview Data -->
		<template>
			<div class="text-center">
				<v-dialog
					v-model="dialog"
					min-width="300"
					max-width="400"
					light
				>
					<v-card v-if="isfetchingData">
						<v-card-title class="text-subtitle-2 text-sm-h6"
							>Please Wait...
							<span>&#128147;</span></v-card-title
						>
					</v-card>
					<v-card
						:class="{
							white: modeState,
							'blue-grey darken-2': !modeState,
						}"
						v-else
					>
						<v-card-title
							:class="{
								'indigo--text': modeState,
								'indigo--text text--accent-1': !modeState,
							}"
							class="text-h3 justify-center"
						>
							{{ overViewCountryData.country }}
						</v-card-title>
						<div
							class="img__container pa-3 elevation-3 my-5 blue-grey rounded"
						>
							<v-img
								:src="getCountryFlag(legend.code)"
								class="mx-auto"
							>
							</v-img>
						</div>
						<v-card-text class="text-center">
							<h3
								:class="{
									'indigo--text': modeState,
									'indigo--text text--accent-1': !modeState,
								}"
								class="mb-3"
							>
								Population
							</h3>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ overViewCountryData.population }})
							</p>
							<h3
								:class="{
									'indigo--text': modeState,
									'indigo--text text--accent-1': !modeState,
								}"
								class="mb-3"
							>
								Total Cases
							</h3>
							<h3
								:class="{
									'indigo--text': modeState,
									'indigo--text text--accent-1': !modeState,
								}"
								class="mb-3"
							></h3>
							<p
								:class="{
									'green--text': modeState,
									'green--text text--accent-1': !modeState,
								}"
								class="text-h6"
							>
								({{ overViewCountryData.total }})
							</p>
							<v-btn
								:class="{
									'indigo white--text': modeState,
									light: !modeState,
								}"
								:to="{
									name: 'Statistics',
									params: {
										country:
											overViewCountryData.country,
									},
								}"
								>View Detail</v-btn
							>
						</v-card-text>
					</v-card>
				</v-dialog>
			</div>
		</template>

		<Map @clickCountry="clickCountry" />
	</div>
</template>

<script>
import chroma from "chroma-js";
import { getCode, getName } from "@/plugins/country";
import Map from "./Map";
import {
	getDynamicMapCss,
	getBaseCss,
	getCombinedCssString,
} from "./dynamic-map-css";

let legend = {
	data: null,
	code: null,
	name: null,
};

let position = {
	left: 0,
	top: 0,
};

export default {
	name: "MapChart",
	components: { Map },
	computed: {
		modeState() {
			return this.$store.getters.getModeState;
		},
		overViewCountryData() {
			return this.$store.getters.overViewCountryData;
		},
	},
	watch: {
		countryData() {
			this.renderMapCSS();
		},
		overViewCountryData(val) {
			if (val != {}) {
				this.isfetchingData = false;
			}
		},
	},
	props: {
		lowColor: {
			type: String,
			default: "#fde2e2",
		},
		highColor: {
			type: String,
			default: "#d83737",
		},
		countryData: {
			type: Object,
			required: false,
			default: () => {
				return {
					MM: 1,
					US: 0,
				};
			},
		},
		defaultCountryFillColor: {
			type: String,
			default: "#dadada",
		},
		countryStrokeColor: {
			type: String,
			default: "#909090",
		},
	},
	data() {
		return {
			dialog: false,
			isfetchingData: true,
			snackbar: false,
			legend: legend,
			position: position,
			node: document.createElement("style"),
			chromaScale: chroma.scale([
				this.$props.lowColor,
				this.$props.highColor,
			]),
		};
	},
	methods: {
		clickCountry(country) {
			this.legend = country;
			this.dialog = true;
			this.isfetchingData = true;
			this.$store.dispatch("getoverViewCountryData", country.name);
			this.$emit("clickCountry", country);
		},
		onHoverCountry(country) {
			this.legend = country;
			this.position = country.position;
			this.snackbar = true;
			this.$emit("hoverCountry", country);
		},
		renderMapCSS() {
			const baseCss = getBaseCss(this.$props);
			const dynamicMapCss = getDynamicMapCss(
				this.$props.countryData,
				this.chromaScale
			);
			this.$data.node.innerHTML = getCombinedCssString(
				baseCss,
				dynamicMapCss
			);
		},
		getCountryFlag(country) {
			let countryCode = country;
			let url = `https://www.countryflags.io/${countryCode}/flat/64.png`;
			return url;
		},
	},
	mounted() {
		document.body.appendChild(this.$data.node);
		this.renderMapCSS();
	},
};
</script>

<style scoped>
.vue-world-map {
	max-width: 900px;
	margin: auto;
	overflow: auto;
}
#map-svg {
	height: 100%;
}

.vue-world-map {
	position: relative;
}

.legend {
	position: fixed;
	top: 10%;
	right: 20px;
}

.img__container {
	width: 80px;
	margin: auto;
}
</style>
