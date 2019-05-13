import React from 'react';

export default class SearchBar extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Search any image"/>
                </form>
            </div>
        );
    }
}