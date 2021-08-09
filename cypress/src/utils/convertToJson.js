
export function dataTableToJson(dataTable) {
  const newObject = {};
  dataTable.rawTable.forEach((element) => {
    newObject[element[0]] = element[1];
  });
  return newObject;
}
