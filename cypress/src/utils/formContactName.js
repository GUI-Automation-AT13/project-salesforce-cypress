export function createContactName (salutation = '', name = '', lastName = '') {
    let nameComplete = '';
    if (salutation.length !== 0) {
      nameComplete += salutation.concat(' ')
    }
    if (name.length !== 0) {
      nameComplete += name.concat(' ')
    }
    if (lastName.length !== 0) {
      nameComplete += lastName
    }
    return nameComplete
  }