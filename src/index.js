import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import {faker} from '@faker-js/faker';

const App = () => {
    return (
        
        <div className="ui container comments">
            
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Comentario1" 
                avatar={faker.image.avatar()}
             />
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterday at 6:00PM" 
                comment="Comentario2" 
                avatar={faker.image.avatar()}
                />
            


        </div>


    )
}

ReactDOM.render(<App />,document.querySelector('#root'));