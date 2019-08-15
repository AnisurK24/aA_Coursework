const FollowToggle = require('./follow_toggle.js')
const UsersSearch = require('./users_search')

$(() => {
    $('.users-search').each((i, search) => new UsersSearch(search));
    const $button = $(".follow-toggle")
    // debugger
    $button.each(function(idx, follow) {
        new FollowToggle(follow)
    });
});

