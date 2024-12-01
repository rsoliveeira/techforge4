abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }

    getResults(): object {
        const resultArray: { candidate: string; votes: number }[] = [];
        for (const candidate in this.votes) {
            if (this.votes.hasOwnProperty(candidate)) {
                resultArray.push({ candidate, votes: this.votes[candidate] });
            }
        }
        return resultArray.sort((a, b) => b.votes - a.votes);
    }
}

// Exemplo de uso com Election
const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Election Results:", election.getResults());

// Exemplo de uso com Poll
const poll = new Poll();
poll.voteFor("Alice");
poll.voteFor("Bob");
poll.voteFor("Alice");
poll.voteFor("Charlie");
poll.voteFor("Charlie");
poll.voteFor("Charlie");
console.log("Poll Results:", poll.getResults());
