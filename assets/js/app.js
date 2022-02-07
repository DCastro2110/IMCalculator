function calcOfMyImc() {
    const form = document.body.querySelector('form')
    const heightInput = form.querySelector('#height')
    const weigthInput = form.querySelector('#weight')
    const box = document.body.querySelector('.box')
    const tableLines = document.body.querySelectorAll('.table tr');

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        window.scroll(0, document.body.scrollHeight)

        const height = Number(heightInput.value)
        const weight = Number(weigthInput.value)
        const imc = calc(weight, height).toFixed(2)
        let msg

        if (!weight && !height)  {
            msg = 'Peso e altura inválidos'
            writer(msg)
            return
        } else if (!weight || !height) {
            msg = 'Peso ou altura inválidos'
            writer(msg)
            return
        }

        msg = `Seu IMC é de ${imc}`
        weightType(imc)
        writer(msg, imc)
    })

    function calc(w, h) {
        return w / (h / 100) ** 2
    }

    function criaP() {
        const p = document.createElement('p')
        return p
    }
    
    function writer(msg, imc) {
        const p = criaP()
        p.classList.add('imc-result')
        box.innerHTML = ''
        p.innerHTML = msg
        box.appendChild(p)
        colorP(p, imc)
    }

    function weightType(imc) {
        if (imc >= 40) {
            for (let i = 1; i < tableLines.length; i++) {
                tableLines.item(i).setAttribute('style', 'background-color: #fff')
            }
            tableLines.item(5).setAttribute('style', 'background-color: var(--r-color')
        } else if (imc >= 30) {
            for (let i = 1; i < tableLines.length; i++) {
                tableLines.item(i).setAttribute('style', 'background-color: #fff')
            }
            tableLines.item(4).setAttribute('style', 'background-color: var(--o-color)')  
        } else if (imc >= 25) {
            for (let i = 1; i < tableLines.length; i++) {
                tableLines.item(i).setAttribute('style', 'background-color: #fff')
            }
            tableLines.item(3).setAttribute('style', 'background-color: var(--y-color)')
        } else if (imc >= 18.5) {
            for (let i = 1; i < tableLines.length; i++) {
                tableLines.item(i).setAttribute('style', 'background-color: #fff')
            }
            tableLines.item(2).setAttribute('style', 'background-color: var(--g-color)')
        } else if (imc < 18.5) {
            for (let i = 1; i < tableLines.length; i++) {
                tableLines.item(i).setAttribute('style', 'background-color: #fff')
            }
            tableLines.item(1).setAttribute('style', 'background-color: var(--r-color)')
        }
    }
    console.log(tableLines)
}
calcOfMyImc()