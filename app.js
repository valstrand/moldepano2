document.addEventListener('DOMContentLoaded', () => {
    fetch('mountains.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('mountainTable').getElementsByTagName('tbody')[0];
            data.forEach(mountain => {
                let row = tableBody.insertRow();
                let NavnCell = row.insertCell(0);
                let OmrådeCell = row.insertCell(1);
                let HøydeCell = row.insertCell(2);

                NavnCell.textContent = mountain.Navn;
                OmrådeCell.textContent = mountain.Område;
                HøydeCell.textContent = mountain.Høyde;
            });
        })
        .catch(error => console.error('Error fetching the mountains data:', error));
});
