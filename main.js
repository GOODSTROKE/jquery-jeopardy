
// Reading Data from json file - fetch json like api


let readJeopardyData = async () => {

    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();

    console.log(rawJeopardyData);

        let groupedData = _.groupBy(data, 'value');

    console.log(groupData);

    console.log(groupData.$200);


}

readJeopardyData