const APIUtil = require("./api_util.js")

class FollowToggle {
    constructor(el) {
        this.$el = $(el)
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("user-follows");
        this.render();
        
        this.$el.on("click", this.handleClick.bind(this));
    }
    
    handleClick(e) {
        const followToggle = this;
        e.preventDefault();

        if (this.followState === "followed") {
            this.followState = "unfollowing";
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
                // debugger
                followToggle.followState = "unfollowed";
                followToggle.render();
            });
        } else {
            this.followState = "following";
            this.render();
            APIUtil.followUser(this.userId).then(() => {
                // debugger
                followToggle.followState = "followed";
                followToggle.render();
            });
        } 
    }

        // let meth = (this.followState === "unfollowed" ? "POST" : "DELETE")
        // // debugger
        
        // $.ajax({
        //     method: meth,
        //     url: `/users/${this.userId}/follow`,
        //     dataType: 'json',
        //     success: () => {
        //         if (meth === "POST") {
        //             this.followState = "followed"
        //         } else {
        //             this.followState = "unfollowed"
        // //         }

        //         this.render();
        //     }
    

    cb() {
    }


    render() {
        switch (this.followState) {
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.html('Unfollow!');
                break;
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.html('Follow!');
                break;
            case 'following':
                this.$el.prop('disabled', true);
                this.$el.html('Following...');
                break;
            case 'unfollowing':
                this.$el.prop('disabled', true);
                this.$el.html('Unfollowing...');
                break;
        }
    }
    // render() {
    //     let but = this.followState === "unfollowed" ? "Follow!" : "Unfollow!"
    //     this.$el.text(`${but}`)
    // }


    
}





module.exports = FollowToggle;