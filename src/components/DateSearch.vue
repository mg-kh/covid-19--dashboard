<template>
	<v-container>
		<v-btn
			color="indigo darken-3 history__search"
			dark
			@click="dialog = !dialog"
			fab
			small
		>
			<v-icon small dark>mdi-calendar-search</v-icon>
		</v-btn>
		<v-row justify="center">
			<v-dialog v-model="dialog" max-width="350">
				<v-card tile>
					<v-card-title>
						Search By Date
					</v-card-title>
				</v-card>
				<v-date-picker
					v-model="dateSearch"
					min="2019-01-1"
					:max="new Date().toISOString()"
				>
					<v-spacer></v-spacer>
					<v-btn color="indigo" @click="dialog = !dialog" text
						>Close</v-btn
					>
					<v-btn
						color="indigo"
						@click.prevent="searchByDate"
						dark
						>Search</v-btn
					>
				</v-date-picker>
			</v-dialog>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			date: false,
			country: "",
			dateSearch: "",
			showDatapicker: false,
			isloading: true,
		};
	},
	watch: {
		countyLists(val) {
			if (val != null) {
				this.isloading = false;
			}
		},
	},
	methods: {
		searchByDate() {
			this.$router.push({
				name: "History",
				params: {
					country: this.$route.params.country,
					date: this.dateSearch,
				},
			});
			this.$store.dispatch("fetchData").then(() => {
				this.dialog = false;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.history__search {
	position: fixed;
	bottom: 10%;
	right: 10px;
}
</style>
