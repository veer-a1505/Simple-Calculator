import React, { Component } from 'react'

import CalculatorTitle from './Components/CalculatorTitle'
import OutputScreen from './Components/OutputScreen'
import Button from './Components/Button'



import './calculator.css'

export class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            problem : '',
            solution : ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
handleClick(event){
    const value = event.target.value;
   
    switch (value) {

        case '=' : {
            if(parseInt(this.state.problem)!== ''){
                var ans='';
                try{
                    ans = eval(this.state.problem)
                }
                catch(err){
                    this.setState({solution : "Math Error"})
                }
                if(ans === undefined)
                    this.setState({solution : "Math Error"})
                else
                    this.setState({solution : ans , problem : this.state.problem})
                break;   
            }
        break;
        }
        case 'Clear' : {
            this.setState({problem : '' , solution : ''})
            break;
        }

        case "Delete" : {
            var str = this.state.problem;
            str = str.substr(0,str.length-1)
            this.setState({problem : str})
            break;
        }

        default : {
            this.setState({problem : this.state.problem += value})

        }
    }
}
    render() {       
        return (
            <div>
                <CalculatorTitle title={"Simple Calculator"}/>
                <OutputScreen problem = {this.state.problem} solution = {this.state.solution}/>
                <div className="mainCalc">
                <div>
                    <Button handleClick = {this.handleClick}   label={'Clear'}/>
                    <Button handleClick = {this.handleClick}   label={'Delete'}/>
                    <Button handleClick = {this.handleClick}   label={'.'} />
                    <Button handleClick = {this.handleClick}   label={'/'} />
                </div>                <div>
                    <Button handleClick = {this.handleClick}   label={'7'} />
                    <Button handleClick = {this.handleClick}   label={'8'} />
                    <Button handleClick = {this.handleClick}   label={'9'} />
                    <Button handleClick = {this.handleClick}   label={'*'} />
                </div>
                <div>
                    <Button handleClick = {this.handleClick}   label={'4'} />
                    <Button handleClick = {this.handleClick}   label={'5'} />
                    <Button handleClick = {this.handleClick}   label={'6'} />
                    <Button handleClick = {this.handleClick}   label={'-'} />
                </div>
                <div>
                    <Button handleClick = {this.handleClick}   label={'1'} />
                    <Button handleClick = {this.handleClick}   label={'2'} />
                    <Button handleClick = {this.handleClick}   label={'3'} />
                    <Button handleClick = {this.handleClick}   label={'+'} />
                </div>
                <div>
                </div>
                    <Button label={'0'} handleClick={this.handleClick}/>
                    <Button label={'='}  handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}

export default Calculator




