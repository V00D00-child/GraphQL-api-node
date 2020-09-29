const _ = require('lodash');

module.exports = {
    async speakers(session, args, { dataSources }) {
        // build a list of speakers that are the same speakers in parent session
        // this api call with be cached
        const speakers = await dataSources.speakerAPI.getSpeakers();
        const returns = speakers.filter((speaker) =>{
            return _.filter(session.speakers, { id: speaker.id }).length > 0;
        });
        return returns;
    }
};
