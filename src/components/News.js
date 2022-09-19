import { waitForElementToBeRemoved } from '@testing-library/react';
import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {
    articles = []

  async componentDidMount() { 
  let url = "https://newsapi.org/v2/everything?q=apple&from=2022-09-18&to=2022-09-18&sortBy=popularity&apiKey=96c8717d7770408f912fe9f478a1482a";
  let data = fetch(url);
  let parsedata = await data.json(data)
  this.setstate({articles: parsedata.articles})
 }


  constructor(){
    super();
    this.state = {
        articles : this.articles,
        loading:false
    }
  }
  render() {
    return(
        <div className="container my-3">
            <h2>NEWSX : Top News Of The Day</h2>
            <div className="row my-12">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title.slice(0,50)} description={element.description.slice(0,90)} imageURL={element.urlToImage} nurl={element.url}/>
                    </div>
                })}
            </div>
        </div>
    )
  }
}
