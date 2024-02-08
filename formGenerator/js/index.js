const forms = [
    { id: 'form-test-1', title: 'Тест 1' },
    { id: 'form-test-2', title: 'Тест 2' },
    { id: 'form-test-3', title: 'Тест 3' },
];

const formListContainer = document.getElementById('formListContainer');

async function loadFormData(form) {
    const response = await fetch(`data/${form.id}.json`);
    const formData = await response.json();
    renderForm(formData);
}

function renderForm(formData) {
    const generatedFormContainer = document.getElementById('formContainer');
    generatedFormContainer.innerHTML = '';

    const formTitle = document.createElement('h2');
    formTitle.className = 'text-2xl font-bold mb-4';
    formTitle.textContent = formData.title;

    const formDescription = document.createElement('p');
    formDescription.className = 'mb-4 text-gray-700';
    formDescription.textContent = formData.description || '';

    generatedFormContainer.appendChild(formTitle);
    generatedFormContainer.appendChild(formDescription);

    formData.fields.forEach(field => {
        const fieldElement = renderField(field);
        generatedFormContainer.appendChild(fieldElement);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'flex justify-end mt-4';
    formData.buttons.forEach(button => {
        const buttonElement = renderButton(button);
        buttonsContainer.appendChild(buttonElement);
    });
    generatedFormContainer.appendChild(buttonsContainer);
}

function renderField(field) {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('mb-4');

    switch (field.attrs.type) {
        case 'checkbox':
        case 'radio':
            const fieldsetElement = document.createElement('fieldset');
            const legendElement = document.createElement('legend');
            legendElement.className = 'block text-gray-700 text-sm font-bold mb-2';
            legendElement.textContent = field.label;
            fieldsetElement.appendChild(legendElement);

            fieldContainer.appendChild(fieldsetElement);

            field.attrs.variants.forEach(variant => {
                const inputElement = document.createElement('input');
                inputElement.type = field.attrs.type;
                inputElement.name = field.attrs.name;
                inputElement.value = variant.value;
                inputElement.id = variant.value;

                const labelElement = document.createElement('label');
                labelElement.className = 'ml-2';
                labelElement.htmlFor = variant.value;
                labelElement.textContent = variant.label;

                const variantContainer = document.createElement('div');
                variantContainer.className = 'flex items-center';
                variantContainer.appendChild(inputElement);
                variantContainer.appendChild(labelElement);

                fieldsetElement.appendChild(variantContainer);
            });

            break
        case 'select':
            const labelElement = document.createElement('label');
            labelElement.className = 'block text-gray-700 text-sm font-bold mb-2';
            labelElement.htmlFor = field.attrs.name;
            labelElement.textContent = field.label;

            const selectElement = document.createElement('select');
            selectElement.className = 'w-full border border-gray-300 py-2 px-3 rounded-md';
            selectElement.name = field.attrs.name;
            selectElement.id = field.attrs.name;

            field.attrs.variants.forEach(variant => {
                const optionElement = document.createElement('option');
                optionElement.value = variant.value;
                optionElement.textContent = variant.label;
                selectElement.appendChild(optionElement);
            });

            fieldContainer.appendChild(labelElement);
            fieldContainer.appendChild(selectElement);

            break
        case 'textarea':
            const textareaLabelElement = document.createElement('label');
            textareaLabelElement.className = 'block text-gray-700 text-sm font-bold mb-2';
            textareaLabelElement.htmlFor = field.attrs.name;
            textareaLabelElement.textContent = field.label;

            const textareaElement = document.createElement('textarea');
            textareaElement.className = 'w-full border border-gray-300 py-2 px-3 rounded-md';
            textareaElement.name = field.attrs.name;
            textareaElement.id = field.attrs.name;

            fieldContainer.appendChild(textareaLabelElement);
            fieldContainer.appendChild(textareaElement);

            break
        case 'text':
            const inputLabelElement = document.createElement('label');
            inputLabelElement.className = 'block text-gray-700 text-sm font-bold mb-2';
            inputLabelElement.htmlFor = field.attrs.name;
            inputLabelElement.textContent = field.label;

            const inputElement = document.createElement('input');
            inputElement.className = 'w-full border border-gray-300 py-2 px-3 rounded-md';
            inputElement.type = field.attrs.type;
            inputElement.name = field.attrs.name;
            inputElement.id = field.attrs.name;
            inputElement.autocomplete = 'off';

            fieldContainer.appendChild(inputLabelElement);
            fieldContainer.appendChild(inputElement);

            break
    }

    return fieldContainer;
}

function renderButton(button) {
    const type = button === 'submit' ? 'submit' : 'reset';
    const className = button === 'submit' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white';
    const buttonText = button === 'submit' ? 'Отправить' : 'Очистить';

    const buttonElement = document.createElement('button');
    buttonElement.type = type;
    buttonElement.className = `px-4 py-2 rounded-md mr-2 ${className}`;
    buttonElement.textContent = buttonText;

    return buttonElement;
}

function renderFormList(form, index) {
    const formItemContainer = document.createElement('div');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'formSelection';
    radioInput.id = form.id;
    radioInput.addEventListener('change', () => loadFormData(form));

    if (index === 0) {
        radioInput.checked = true;
    }

    const radioLabel = document.createElement('label');
    radioLabel.className = 'w-full pl-2';
    radioLabel.htmlFor = form.id;
    radioLabel.textContent = form.title;

    formItemContainer.appendChild(radioInput);
    formItemContainer.appendChild(radioLabel);

    formListContainer.appendChild(formItemContainer);
}

forms.forEach((form, index) => {
    renderFormList(form, index);
});

if (forms.length > 0) {
    loadFormData(forms[0]);
}