import React, { Component } from 'react'


export default class NewsItem extends Component 
{
  render() 
  {
    let{title,description,imageUrl,newsUrl,author,publishedAt}=this.props;

    return (
      <div className='container'>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {publishedAt}</small></p> 
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

