import React from 'react';
import ReactDOM from 'react-dom';
import Field from './field'

class Bmi extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            bmiVal: undefined,
            error: undefined
        };
        this.handleCalculateBmi = this.handleCalculateBmi.bind(this);
    }

    handleCalculateBmi(event){
        this.setState(()=>{
            return {bmiVal: undefined, error: undefined}
        })
        event.preventDefault();
        const weight = event.target.elements.weight.value;
        const height = event.target.elements.height.value;

        const bmiValue = Math.round( 100 * (weight / (height * height))) / 100;

        if(bmiValue > 0){
            this.setState(()=>{
                return { bmiVal: bmiValue }
            })
        } else {
            this.setState(()=>{
                return{ error: 'You have entered invalid values' }
            })
        }

        event.target.elements.weight.value = '';
        event.target.elements.height.value = '';
    }
    render(){
        return (
            <div className="calculator">
                <h1 className="calculator__heading">BMI Calculator</h1>
                <form className="calculator__form" onSubmit={this.handleCalculateBmi}>
                    <Field 
                        type="number"
                        name="weight"
                        placeholder="Enter your Weight"
                    />
                    <Field 
                        type="number"
                        name="height"
                        placeholder="Enter your Height"
                    />
                    <input 
                        type="submit" 
                        className="calculator__btn" 
                        name="Calculate" 
                        value="Calculate"    
                    />
                </form>
                
                {this.state.bmiVal ? <div className="output">
                    <h2 className="output__heading">Body Mass Index (BMI): </h2>
                    <span className="output__bmi">{this.state.bmiVal}</span>
                </div> : <p className="error">{this.state.error}</p>
                }
            </div>
        )
    }
}

export default Bmi;