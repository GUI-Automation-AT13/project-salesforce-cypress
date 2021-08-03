const chai = require("chai");
const {getCurrentDate} = require("../../src/utils/formatDate");

describe("Unit test for formatDate", () => {
  const currentDate = new Date();
  it("verifify get current date with correct format", () => {
    const star = 0;
    const ends = 14;
    const dateFormat = getCurrentDate();
    const newDate = currentDate.toLocaleString().substr(star, ends);
    chai.assert.equal(dateFormat, newDate);
  });

  it("verifify get current date is not bad format", () => {
    const dateFormat = getCurrentDate();
    const newDate = currentDate.toLocaleString();
    chai.assert.notEqual(dateFormat, newDate);
  });
});
