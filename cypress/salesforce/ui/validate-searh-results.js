export function validateResults(wordToSearch) {
    cy.get('th.dataCell > a').then((element) => {
        for (let index = 0; index < element.length; index += 1) {
            expect(element[String(index)].innerText.toLowerCase()).to.contain(wordToSearch.toLowerCase())
        }
    })
}

export function validateJsons(firstJson, secondJson) {
    for (const attribute in firstJson) {
        if (Object.hasOwnProperty.call(firstJson, attribute)) {
            const element = firstJson[attribute];
            if (firstJson[attribute].length !== 1 && secondJson[attribute].length !== 1) {
                expect(firstJson[attribute]).to.deep.equal(secondJson[attribute])
            }
        }
    }
}
