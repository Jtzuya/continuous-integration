const WorkingDirectory = require("../models/working-directory");
const GitCommand = require("../models/git-command");
const Operations = require('../classes/Operations')

const chai = require('chai');
const expect = chai.expect;


describe("Testing GitCommand.status()", function(){
    it('Should return information if has changes in directory', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");
        wd.addFile("index.js", "assets/scripts", "alert('Hi!')")

        // console.log(wd, 'filled')
        let git = new GitCommand(wd);
        let output = git.status();

        expect(output).to.equal('You have 2 change/s.\nviews/index.html\nassets/scripts/index.js');
    });

    it('Should return information if no changes in directory', function(){
        let wd = new WorkingDirectory();

        let git = new GitCommand(wd);
        let output = git.status();

        expect(output).to.equal('You have 0 change/s.\n');
    });
})

describe("Testing Operations", function() {
    it('Should return the correct result when combining two random numbers while using the addition operation', function() {
        let randomNum1 = Math.floor(Math.random() * (999 - 99) + 99)
        let randomNum2 = Math.floor(Math.random() * (999 - 99) + 99)

        let op = new Operations()
        let res = op.addition(randomNum1, randomNum2)

        expect(res).to.equal(randomNum1 + randomNum2)
    })

    it('Should return the correct result when combining two random numbers while using the subtraction operation', function() {
        let randomNum1 = Math.floor(Math.random() * (999 - 99) + 99)
        let randomNum2 = Math.floor(Math.random() * (999 - 99) + 99)

        let op = new Operations()
        let res = op.subtract(randomNum1, randomNum2)

        expect(res).to.equal(randomNum1 - randomNum2)
    })
})