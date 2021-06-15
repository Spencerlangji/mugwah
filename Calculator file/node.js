class calculator{
    constructor(previousoperationtextElement, currentOperand){
        this.previousOperandTextElement= previousoperandtextelement
        previousOperandTextElement= currentoperandtextelement
        this.clear()
    }

    clear(){
        this.currentoperand=''
        this.previousoperand=''
        this.operation= undefined

    }

    delete(){

    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes ('.')) return
        this.currentOperand=this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute(){

    }

    undatedisplay(){
        this.currentoperandtextelement.innerText = this.currentOperand
    }
}

const numberbuttons= document.querySelectorAll('[data-number]')
const operationbuttons= document.querySelectorAll('[data-operation]')
const equalsbutton= document.queryseclector('[data-equals]')
const deletebutton= document.queryseclector('[data-delete]')
const allclearbutton= document.queryseclector('[data-all-cleaar]')
const previousoperandTextelement= document.queryseclector('[data-previous-oprerand]')
const currentoperandtextelement= document.queryseclector('[data-cuurent-oprend]')

const calculator= new calculator(previousOperandTextElement, currentoperandtextelement)

numberbuttons.forEach(buttons => {
    buttons.addEventListener('click',()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

Operationbuttons.forEach(buttons => {
    buttons.addEventListener('click',()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})