var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
        this.votes = {};
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Election.prototype.voteFor = function (candidate) {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    };
    Election.prototype.getResults = function () {
        return this.votes;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.voteFor = function (candidate) {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    };
    Poll.prototype.getResults = function () {
        var resultArray = [];
        for (var candidate in this.votes) {
            if (this.votes.hasOwnProperty(candidate)) {
                resultArray.push({ candidate: candidate, votes: this.votes[candidate] });
            }
        }
        return resultArray.sort(function (a, b) { return b.votes - a.votes; });
    };
    return Poll;
}(VoteSystem));
// Exemplo de uso com Election
var election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Election Results:", election.getResults());
// Exemplo de uso com Poll
var poll = new Poll();
poll.voteFor("Alice");
poll.voteFor("Bob");
poll.voteFor("Alice");
poll.voteFor("Charlie");
poll.voteFor("Charlie");
poll.voteFor("Charlie");
console.log("Poll Results:", poll.getResults());
