export default class enterpriseService {
    constructor($http) {
        this.http = $http;
    }

    addCoins(coins, username) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/enterprise/addCoins', {coins: coins, username: username});
    }

    updateCoinsPerHour(coinsPerHour, username) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/enterprise/updateCoinsPerHour',
            {coinsPerHour: coinsPerHour, username: username});
    }

    uploadVideoDetails(videoDetails) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/enterprise/videoDetails', videoDetails);
    }

    getStats(id) {
        return this.http.get(`https://ad-barn-backend.herokuapp.com/enterprise/stats/${id}`);
    }

    deleteVideo(videoId) {
        return this.http.delete(`https://ad-barn-backend.herokuapp.com/enterprise/deleteVideo/${videoId}`);
    }
}


enterpriseService.$inject = ['$http'];