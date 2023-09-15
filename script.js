// Sample data store (replace with a database in a real application)
let records = [];
let recordId = 1;

function createRecord() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newRecord = { id: recordId++, name, email };
    records.push(newRecord);

    displayRecords();
    clearForm("create-form");
}

function displayRecords() {
    const recordList = document.getElementById("record-list");
    recordList.innerHTML = "";

    for (const record of records) {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${record.id}, Name: ${record.name}, Email: ${record.email}`;
        recordList.appendChild(li);
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

function updateRecord() {
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("update-name").value;
    const email = document.getElementById("update-email").value;

    const recordToUpdate = records.find(record => record.id == id);

    if (recordToUpdate) {
        recordToUpdate.name = name;
        recordToUpdate.email = email;
        displayRecords();
        clearForm("update-form");
    } else {
        alert("Record not found");
    }
}

function deleteRecord() {
    const id = document.getElementById("delete-id").value;
    const index = records.findIndex(record => record.id == id);

    if (index !== -1) {
        records.splice(index, 1);
        displayRecords();
        clearForm("delete-form");
    } else {
        alert("Record not found");
    }
}

// Initial display of records
displayRecords();
