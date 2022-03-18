const form = document.getElementById('calculator');

// Prepare volume data
const volumeMapping = {
    liter: {
        name: 'Liter',
        conversion: {
            barrel: 0.0083864143251288,
            hogsheade: 0.0041932072,
            barnmegaparsecs: 0
        }
    },
    barrel: {
        name: 'Barrel',
        conversion: {
            liter: 119.24047170000055,
            hogsheade: 0.5,
            barnmegaparsecs: 0
        }
    },
    hogsheade: {
        name: 'Hogs Heade',
        conversion: {
            liter: 238.48094239,
            barrel: 2,
            barnmegaparsecs: 0
        }
    },
    barnmegaparsecs: {
        name: 'Barn-megaparsec',
        conversion: {
            liter: 0,
            barrel: 0,
            hogshead: 0
        }
    }
}

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
    const measurementChoices = Object.entries(volumeMapping);
    const convertFrom = document.getElementById('convert-from-volume');
    const convertTo = document.getElementById('convert-to-volume');

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

    const conversionFactor = volumeMapping[parsedData['convert-from-volume']].conversion[parsedData['convert-to-volume']];
    const unit = parsedData['convert-unit-volume'];
    const result = unit * conversionFactor + ' ' + parsedData['convert-to-volume'];
    const resultElement = document.getElementById('result-volume');
    resultElement.textContent = result;

    // fetch('http://localhost', {
    //     method: 'POST',
    //     body: {
    //         ...parsedData,
    //         result: result
    //     }
    // });
})