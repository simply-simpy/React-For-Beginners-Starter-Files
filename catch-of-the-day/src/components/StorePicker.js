import React from 'react';

class StorePicker extends React.Component {
    // render(){ // This works, but preferred to use JSX as below
    //     return <p>Hello</p>
    // }
    render(){
        return ( // return one parent element per JSX module. Some attribute names change due to reserved words (ex: className).
            // This is a comment outside of JSX
            <form action="" className="store-selector">
                {/*This is a comment inside of JSX*/}
                <h2>Please enter a store</h2>
                <input type="text" required="required" placeholder="Store Name"/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;