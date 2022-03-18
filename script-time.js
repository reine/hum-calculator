const form = document.getElementById('calculator');

// Prepare time data
const timeMapping = {
    hour: {
        name: 'Hour',
        conversion: {
            shake: 360000000000
        }
    },
    shake: {
        name: 'Shake',
        conversion: {
            hour: 2.7777777777777777
        }
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    const measurementChoices = Object.entries(timeMapping);
    const convertFrom = document.getElementById('convert-from-time');
    const convertTo = document.getElementById('convert-to-time');

    let options = [];

    for (const [ key, value ] of measurementChoices) {
        options.push(`<option value="${key}">${value.name}</option>`)
    }
    const template = options.join('');

    convertFrom.innerHTML = template;
    convertTo.innerHTML = template;
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(form);
    const parsedData = {};

    for (const [ name, value ] of formData) {
        parsedData[name] = value;
    }

    const conversionFactor = timeMapping[parsedData['convert-from-time']].conversion[parsedData['convert-to-time']];
    const unit = parsedData['convert-unit-time'];
    const result = unit * conversionFactor + ' ' + parsedData['convert-to-time'];
    const resultElement = document.getElementById('result-time');
    resultElement.textContent = result;

    // fetch('http://localhost', {
    //     method: 'POST',
    //     body: {
    //         ...parsedData,
    //         result: result
    //     }
    // });
})