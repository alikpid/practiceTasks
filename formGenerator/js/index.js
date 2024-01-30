Vue.component('generated-form', {
    props: ['formData'],
    template: `
            <form>
            <div class="max-w-md bg-white p-7 rounded-md shadow-md">
                <h2 class="text-2xl font-bold mb-4">{{formData.title}}</h2>
                <p v-show="formData.description" class="mb-4 text-gray-700">{{formData.description}}</p>
                <div v-for="field in formData.fields" :key="field.attrs.name" class="mb-4">
                    <template v-if="field.attrs.type === 'checkbox' || field.attrs.type === 'radio'">
                        <fieldset>
                            <legend class="block text-gray-700 text-sm font-bold mb-2">{{field.label}}</legend>
                            <div v-for="variant in field.attrs.variants" :key="variant.value" class="flex items-center">
                                <input :type="field.attrs.type" :name="field.attrs.name" :value="variant.value" :id="variant.value">
                                <label :for="variant.value" class="ml-2">{{variant.label}}</label>
                            </div>
                        </fieldset>
                    </template>
                    
                    <template v-else-if="field.attrs.type === 'select'">
                        <label :for="field.attrs.name" class="block text-gray-700 text-sm font-bold mb-2">{{field.label}}</label>
                        <select :name="field.attrs.name" class="w-full border border-gray-300 py-2 px-3 rounded-md" :id="field.attrs.name">
                            <option v-for="variant in field.attrs.variants" :key="variant.value" :value="variant.value">{{variant.label}}</option>
                        </select>
                    </template>
                    
                    <template v-else>
                        <label :for="field.attrs.name" class="block text-gray-700 text-sm font-bold mb-2">{{field.label}}</label>
                        <input :type="field.attrs.type" :name="field.attrs.name" class="w-full border border-gray-300 py-2 px-3 rounded-md"
                               :class="{ 'resize-none': field.attrs.type === 'textarea' }" :id="field.attrs.name" autocomplete="off">
                    </template>
            </div>
            
            <div class="flex justify-end mt-4">
                <button v-for="button in formData.buttons" :key="button" :type="button === 'submit' ? 'submit' : 'reset'"
                        class="px-4 py-2 rounded-md mr-2"
                        :class="{'bg-blue-500 text-white': button === 'submit', 'bg-red-500 text-white': button === 'clear'}">
                {{button === 'submit' ? 'Отправить' : 'Очистить'}}
                </button>
            </div>
            
        </div>
        </form>>
    `
});

new Vue({
    el: '#app',
    data: {
        selectedForm: null,
        formData: {},
        forms: [
            {id: 'form-test-1', title: 'Тест 1'},
            {id: 'form-test-2', title: 'Тест 2'},
            {id: 'form-test-3', title: 'Тест 3'},
        ],
    },
    methods: {
        async loadFormData(form) {
            const response = await fetch(`data/${form.id}.json`);
            this.formData = await response.json();
        },
        selectForm(form) {
            this.selectedForm = form;
            this.loadFormData(form);
        },
    },
    mounted() {
        this.selectedForm = this.forms[0];
        this.loadFormData(this.selectedForm);
    },
    template: `
         <div class="flex p-7">
            <div class="form-list w-1/5 rounded-md shadow-md py-7 pl-7">
                <h1 class="text-xl font-bold mb-2">Тестики:</h1>
                    <div class="form-list-container"
                         :class="{ selected: selectedForm === form }"
                         v-for="form in forms"
                         :key="form.id"
                         @click="selectForm(form)"
                         @keyup.enter.prevent="selectForm(form)"
                         tabindex="0">
                        <p :for="form.id" class="block cursor-pointer w-full py-2">{{ form.title }}</p>
                    </div>
            </div>

            <generated-form :form-data="formData"></generated-form>
        </div>
    `,
});
