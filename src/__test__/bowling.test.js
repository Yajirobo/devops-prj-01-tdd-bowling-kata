
import { calScore } from "../bowling";

const assert = chal.assert;

describe("Score Bowling", function(){

    it("All gutter balls -> 0", function(){
        const rolls = Array(20).fill(0);
        const result = calScore(rolls);
        const expected = 0;
        assert.equal(result , expected);
    })

    it ("All singles balls -> 20 ", function(){
        const rolls = Array(20).fill(1);
        const result = calScore(rolls);
        const expected = 20;
        assert.equal(result , expected);
    })

    it ("When player gets a spare, they get a bonus from the next throw", function(){
        const rolls = [
            5, 5,
            2, 3,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
        ];
        const result = calScore(rolls);
        const expected = 17;
        assert.equal(result,expected);
    })

    it ("Spare in final framùe counts bonus threw", function(){
        const rolls = [
            5, 5,
            2, 3,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            7, 3, 8
        ];
        const result = calScore(rolls);
        const expected = 18;
        assert.equal(result,expected);
    })

    it ("When player gets a spare, they get a bonus from the next two throw", function(){
        const rolls = [
            10,
            2, 3,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
        ];
        const result = calScore(rolls);
        const expected = 20;
        assert.equal(result,expected);
    })

    it ("Sare in final frame counts bonus throw", function(){
        const rolls = [
            10,
            2, 3,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            0, 0,
            10, 10, 1
        ];
        const result = calScore(rolls);
        const expected = 21;
        assert.equal(result,expected);
    })

    it("All Strike -> 300", function(){
        const rolls = Array(12).fill(10);
        const result = calScore(rolls);
        const expected = 300;
        assert.equal(result , expected);
    })
})