import React from 'react';
import ReactDOM from 'react-dom';
import {faker} from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>            
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment={faker.lorem.sentence(3)}
                    avatar={faker.image.avatar()}
                />
             </ApprovalCard>
             <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterday at 6:00PM" 
                comment="Comentario2" 
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>           


        </div>


    )
}

ReactDOM.render(<App />,document.querySelector('#root'));