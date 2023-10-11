new Vue({
    el: '#app',
    data: { // You shouldn't change the "data" part
        pet: 'Cat',
        number1: 6,
        number2: 7,
        sentence1: 'Be or not to be in uppercase that is the question.',
        sentence2: 'txet siht daer nac I',
        sentence3: 'I am not in lowercase and certainly not reversed',
    },
    methods: {
        dividedBy2 (number) {
            return number / 2
        }
    },
    filters: {
        capitalize (string) {
            return string.toUpperCase()
        }
    },
})
