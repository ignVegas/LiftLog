function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector('.content-container').classList.add('blur');
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector('.content-container').classList.remove('blur');
}

function openAddExerciseModal() {
    document.getElementById('addExerciseModal').style.display = 'block';
    document.querySelector('.content-container').classList.add('blur');
}

function closeAddExerciseModal() {
    document.getElementById('addExerciseModal').style.display = 'none';
    document.querySelector('.content-container').classList.remove('blur');
    document.getElementById('newExerciseName').value = ''; // Clear input field
}

function selectExercise(exercise) {
    document.querySelector('.dropdown button').textContent = exercise;
    closeModal();
}

function addNewExercise() {
    const newExerciseName = document.getElementById('newExerciseName').value.trim();
    if (newExerciseName === '') {
        alert('Please enter an exercise name.');
        return;
    }

    // Create a new card for the exercise
    const cardsContainer = document.querySelector('.cards');

    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = newExerciseName;

    cardsContainer.appendChild(card);

    closeAddExerciseModal();
}

function importData() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('fileContent').textContent = content;
        parseData(content);
    };

    if (file) {
        reader.readAsText(file);
    } else {
        alert('No file selected');
    }
}

function parseData(data) {
    const inputForms = document.getElementById('inputForms');
    inputForms.innerHTML = ''; // Clear existing forms

    const lines = data.split('\n');
    lines.forEach(line => {
        if (line.startsWith('Set')) {
            const parts = line.split(': ')[1].split(', ');
            const weight = parts[0].split(' = ')[1];
            const reps = parts[1].split(' = ')[1];
            addSet(weight, reps);
        }
    });
}

function addSet(weight = '', reps = '') {
    if (weight === '' || reps === '') {
        alert('Both weight and reps must be provided to add a set.');
        return;
    }

    const inputForms = document.getElementById('inputForms');

    const setDiv = document.createElement('div');
    setDiv.className = 'set';

    const weightLabel = document.createElement('label');
    weightLabel.textContent = 'Weight: ';
    setDiv.appendChild(weightLabel);

    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.name = 'weight';
    weightInput.value = weight;
    setDiv.appendChild(weightInput);

    const repsLabel = document.createElement('label');
    repsLabel.textContent = ' Reps: ';
    setDiv.appendChild(repsLabel);

    const repsInput = document.createElement('input');
    repsInput.type = 'number';
    repsInput.name = 'reps';
    repsInput.value = reps;
    setDiv.appendChild(repsInput);

    inputForms.appendChild(setDiv);
}

function exportData() {
    const sets = document.querySelectorAll('#inputForms .set');
    let data = 'Lift Log Data:\n\n';

    for (let set of sets) {
        const weight = set.querySelector('input[name="weight"]').value;
        const reps = set.querySelector('input[name="reps"]').value;

        if (weight === '' || reps === '') {
            alert('All sets must have both weight and reps filled out to export.');
            return;
        }

        data += `Set ${Array.from(sets).indexOf(set) + 1}: Weight = ${weight}, Reps = ${reps}\n`;
    }

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lift_log.txt';
    a.click();
    URL.revokeObjectURL(url);
}