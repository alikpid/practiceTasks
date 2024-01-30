Vue.component('gen-checkbox', {
    props: ['field'],
    template: `
        <fieldset>
            <legend class="block text-gray-700 text-sm font-bold mb-2">{{field.label}}</legend>
            <div class="flex items-center" 
                 v-for="variant in field.attrs.variants"
                 :key="variant.value">
                <input :type="field.attrs.type"
                       :name="field.attrs.name"
                       :value="variant.value"
                       :id="variant.value">
                <label class="ml-2" :for="variant.value">{{variant.label}}</label>
            </div>
        </fieldset>
    `,
});

Vue.component('gen-radio', {
    props: ['field'],
    template: `
        <fieldset>
            <legend class="block text-gray-700 text-sm font-bold mb-2">{{field.label}}</legend>
            <div class="flex items-center"
                 v-for="variant in field.attrs.variants"
                 :key="variant.value">
                <input :type="field.attrs.type"
                       :name="field.attrs.name" 
                       :value="variant.value" 
                       :id="variant.value">
                <label class="ml-2" :for="variant.value">{{variant.label}}</label>
            </div>
        </fieldset>
    `,
});

Vue.component('gen-select', {
    props: ['field'],
    template: `
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.attrs.name">
                {{field.label}}
            </label>
            <select class="w-full border border-gray-300 py-2 px-3 rounded-md" 
                    :name="field.attrs.name" 
                    :id="field.attrs.name">
                <option v-for="variant in field.attrs.variants"
                        :key="variant.value"
                        :value="variant.value">
                    {{variant.label}}
                </option>
            </select>
        </div>
    `,
});

Vue.component('gen-textarea', {
    props: ['field'],
    template: `
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.attrs.name">
                {{field.label}}
            </label>
            <input class="w-full border border-gray-300 py-2 px-3 rounded-md"
                   :type="field.attrs.type" 
                   :name="field.attrs.name"     
                   :id="field.attrs.name">
        </div>
    `,
});

Vue.component('gen-text', {
    props: ['field'],
    template: `
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" :for="field.attrs.name">
                {{field.label}}
            </label>
            <input class="w-full border border-gray-300 py-2 px-3 rounded-md"  autocomplete="off" 
                   :type="field.attrs.type" 
                   :name="field.attrs.name" 
                   :id="field.attrs.name">
        </div>
    `,
});

Vue.component('generated-form', {
    props: ['formData'],
    template: `
        <form>
            <div class="max-w-md bg-white p-7 rounded-md shadow-md">
                <h2 class="text-2xl font-bold mb-4">{{formData.title}}</h2>
                <p v-show="formData.description" class="mb-4 text-gray-700">{{formData.description}}</p>
                <component v-for="field in formData.fields" :key="field.attrs.name"
                           :is="getComponentName(field.attrs.type)"
                           :field="field">
                </component>
                
                <div class="flex justify-end mt-4">
                    <button v-for="button in formData.buttons" :key="button"
                            :type="button === 'submit' ? 'submit' : 'reset'"
                            class="px-4 py-2 rounded-md mr-2"
                            :class="{'bg-blue-500 text-white': button === 'submit', 'bg-red-500 text-white': button === 'clear'}">
                        {{button === 'submit' ? 'Отправить' : 'Очистить'}}
                    </button>
                </div>
            </div>
        </form>
    `,
    methods: {
        getComponentName(type) {
            return `gen-${type.toLowerCase()}`;
        },
    },
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