import getDataFromAPI from "../api";


export const getAPIData = (url) => getDataFromAPI(url);

export const extractColumns = (dataList) => {
  const data=dataList[0];
  const columns=[];
  for(const key in data) {
    if(typeof data[key]==='number' || typeof data[key]==='string')
      columns.push({
        'headerName': key,
        'identifier': key,
      })
  }
  return columns;
}

export const mapData = (columns, dataList) => {
  const mappedData = [];

  dataList.forEach(data =>  {
    let tempObj = {};
    columns.forEach(element => {
      tempObj[element.identifier] = data[element.identifier];
    })
    mappedData.push(tempObj);
  })
  return mappedData;
  
}


export const sortbyKey = ( dataList, key, sortType ) => {
  if(sortType === 'asc')
    return dataList.sort((a,b) => (a[key] > b[key] ? 1 : ((b[key] > a[key]) ? -1 : 0)));
  else if (sortType==='desc')
    return dataList.sort((a,b) => (a[key] > b[key] ? -1 : ((b[key] > a[key]) ? 1 : 0)));
}