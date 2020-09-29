// wire up REST dataSource
const { RESTDataSource } = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000/speakers'
    }

    async getSpeakers() {
        const data = await this.get('/');
        if (data) {
            return data;
        }
    }

    async speakerById(id) {
        const data = await this.get(`/${id}`);
        if (data) {
            return data;
        }
    }
}

module.exports = SpeakerAPI;