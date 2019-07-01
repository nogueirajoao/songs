import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Macarena', duration: '3:42' },
        { title: 'Smells like teen spirit', duration: '4:20' },
        { title: 'Wonderwall', duration: '5:41' },
        { title: 'All star', duration: '2:32' },
        { title: 'Jump around', duration: '4:42' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});