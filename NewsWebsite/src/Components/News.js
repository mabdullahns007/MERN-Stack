import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component 
{
    static deafultProps =
    {
        country: "us",
        pageSize:8,
        category:"general"
    }

    static propTypes=
    {
        country:PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor()
    {
        super();
        this.state=
        {
            articles: [],
            loading: false,
            page:1
        }
    }

    async update()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93870cb81d514abc8ccf3a885b4a49c7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json();

            this.setState(
                {
                    articles: parsedData.articles,
                    loading: false
                }
            )

    }

    async componentDidMount()
    {
        this.update();
    }

    handleNextClick= async ()=>
    {

            await this.setState(
                {
                    page: this.state.page+1,
                }
            )
            this.update();
    }
        
    handlePrevClick= async ()=>
    {

        await this.setState(
            {
                page: this.state.page-1,
            }
        )
        this.update();
    }


  render() 
  {
    return (
      <div className="container my-3">
        <h2 className="container my-5 text-center">
            NewsMonkey - Top Headlines
        </h2>
        {this.state.loading && <Spinner/>}
        <div className="row container my-3 justify-content-center">
            {!this.state.loading && this.state.articles.map(
                (element)=>
                {
                    return <div className="col-md-3 container mx-3 my-3" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={new Date(element.publishedAt).toUTCString()} />
                    </div>
                    
                })}
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

        </div>
      </div>
    )
  }
}
