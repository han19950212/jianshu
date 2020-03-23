import React,{Component} from 'react';
import actionCreators from './store'
import {       
    TopicWrapper,
    TopicItem
}from '../style'

class Topic extends Component{
    render(){
        return(
            <div>
                <TopicWrapper>
                    <TopicItem>
                        <img className='topic-pic' src='' alt = '123'></img>
                        社会热点
                    </TopicItem>
                </TopicWrapper>
            </div>
        )
    }

    componentDidMount(){
        console.log('123')
    }
}

export default Topic