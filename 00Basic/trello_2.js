let myTodo = {
    meetings: 0,
    meetDone: 0,
    
    addMeeting: function(num) {
        this.meetings = this.meetings + num;
    },

    addMeetDone: function(num) { 
        this.meetDone = this.meetDone + num;
    },

    meetSummary: function() {
        return "You have " + (this.meetings) + " meetings coming.. and youhave completed " + (this.meetDone) + " meetings";
    }

}

myTodo.addMeetDone(3);
myTodo.addMeeting(5);
let res = myTodo.meetSummary();

console.log(res);

