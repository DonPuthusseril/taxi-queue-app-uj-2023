document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queueLength: 0,
			init() {
				axios
					.get('/api/passenger/queue')
					.then(result => {
						// an example API call
						this.queueLength = result.data.queueCount
					});
			},
			joinQueue() {
					this.waitingPassengers++;
			},
			leaveQueue() {
					this.waitingPassengers--;
			},

			joinTaxiQueue() {
				this.waitingTaxi++
			},

			queueLength() {
					this.waitingPassengers
			},

			taxiQueueLength() {
					this.waitingTaxi
			},

			taxiDepart() {
				if(this.waitingPassengers >= 12 && this.waitingTaxi >=1) {
					console.log(this.waitingTaxi);
					this.waitingPassengers -=12;
					this.waitingTaxi--;
					this.departingTaxi++;
			}
		}
	});

});


