export default class videoService {

    constructor($http) {
        this.http = $http;
    }

    updateViewedList(obj) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/user/viewed', obj);
    }

    likeVideo(obj) {
        return this.http.post('https://ad-barn-backend.herokuapp.com/user/like', obj);
    }

    getVideo(id) {
        return this.http.get(`https://ad-barn-backend.herokuapp.com/fetch/${id}`);
    }

    searchVideos(tags) {
        return this.http.post(`https://ad-barn-backend.herokuapp.com/user/search`, tags);
    }
}

videoService.$inject = ['$http'];
