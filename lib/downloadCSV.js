function download_csv(data) {
    var csv = '';
    data.forEach(function (row) {
        csv += row.join(',');
        if (!(row === undefined || row.length === 0)) {
            csv += "\n";

        }

    });

    console.log(csv);
    var hiddenElement = document.createElement('a');
    var csvData = new Blob([csv], { type: 'text/csv' });
    //new way
    var csvUrl = URL.createObjectURL(csvData);
    hiddenElement.href = csvUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Trainingdat.csv';
    hiddenElement.click();
}