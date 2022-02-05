/*let About = () =>{
    return(
        <h1>iam manu</h1>
    );
};

/*import { useEffect, useState } from "react";*/


import React,{Component} from "react";

class About extends React.Component{
    constructor(){
     super();
     this.state = {
         about: "This is About Page design",
     
        }
      this.updateState = this.updateState.bind(this);
    }
        updateState(){ 
            this.setState({ about: "And try to implement this"});
        }
    
    render(){
        return(
            <>
            <h1>{ this.state.about}</h1>
            <button onClick={this.updateState}>Update State</button>
            </>
        )
    }
}

export default About;

/*const Todo = () => {

    const[inputData,setInputData] = useState('');
    const[items, setTtems] = useState(getLocalItems());
    const addItems =() => {
        if (!inputData) {

        }else{
            const allInputData = { id: new Date().getTime().toString(), name:inputData}
            setItems([...item, allInputData]);
                setInputData('')
        }
    }
        //delete
        const deleteItem = (index) => {
        console.log(id);
        const updateItems = items.filter((elem,ind) => {
         return index 
        });

        setTtems(updateItems);
    }

    //remove 
    const removeAll = () => {
        setTtems([]);
    
    };

    //add data
    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(items))
    }, [items]);

    return (
        <>
          <div className="main-div">
              <div className="child-div">
                  <figure>

                  </figure>

                  <div className="addItems">
                      <input type="text" placeholder="Add Items.." value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                      <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>

                  </div>
                  <div className="showItems">

                      {
                          items.map((elem,ind) => {
                             return(
                                 <div className="eachItem" key={elem.id}>
                                     <h3>{ elem.name }</h3>
                                     <div className=""
                                     < i className="far fa-edit add-btn" title="Edit Item" onClick={ () => Item(elem.id)}></i>
                                     < i className="far fa-trash-alt add-btn" title="delete Item" onClick={ () => deleteItem(elem.id)}></i>
                                 </div>
                             )
                          })
                      }
                  </div>
              </div>
          </div>
        </> 
    )
}*/

