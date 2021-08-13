export function validateResults() {
    cy.get('th.dataCell > a').then((element) => {
        for (let index = 0; index < element.length; index += 1) {
            expect(element[String(index)].innerText.toLowerCase()).to.contain(wordToSearch.toLowerCase())
        }
    })
}
