const chai = require("chai");
const {getCurrentDate} = require("../../support/utils/formatDate");

describe("Unit test for formatDate", () => {
  const currentDate = new Date();
  const star = 0;
  const ends = 15;
  it("verifify get current date with correct format", () => {
    const dateFormat = getCurrentDate().substr(star, ends);
    const newDate = currentDate.toLocaleString().substr(star, ends);
    chai.assert.equal(dateFormat, newDate);
  });

  it("verifify get current date is not bad format", () => {
    const dateFormat = getCurrentDate().substr(star, ends);
    const newDate = currentDate.toLocaleString();
    chai.assert.notEqual(dateFormat, newDate);
  });
});
