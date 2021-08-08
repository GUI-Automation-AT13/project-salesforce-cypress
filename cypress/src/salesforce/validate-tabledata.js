export function validateTableData(requiredAttr) {
    let titles = {}
    let data = {}
    const actualData = {}
    return cy.get('div.x-grid3-cell-inner > a').contains(requiredAttr).parents('.x-grid3-row-table tr').then((element) => {
        data = element['0'].childNodes
    }).then(() => {
        cy.get('.x-grid3-hd-row').then((element) => {
            titles = element['0'].childNodes
            for (let index = 3; index < titles.length; index += 1) {
                actualData[titles[String(index)].innerText] = data[String(index)].innerText
            }
            return actualData
        })
    })
}