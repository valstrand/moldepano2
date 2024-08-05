document.addEventListener('DOMContentLoaded', () => {
    fetch('mountains.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('mountainTable').getElementsByTagName('tbody')[0];
            data.forEach(mountain => {
                let row = tableBody.insertRow();
                let nameCell = row.insertCell(0);
                let areaCell = row.insertCell(1);
                let heightCell = row.insertCell(2);

                nameCell.textContent = mountain.name;
                areaCell.textContent = mountain.area;
                heightCell.textContent = mountain.height;
            });
        })
        .catch(error => console.error('Error fetching the mountains data:', error));
});
