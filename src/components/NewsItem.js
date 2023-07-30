import React, {Component} from 'react'
export class NewsItem extends Component{
render(){
    let {title,description,imageUrl, newsUrl, date,author,source} = this.props;
    return(
        <>
        <div className='container my-4'>
         
        
        <div className="card border border-warning mb-3 my-5" style={{height: "30Rem"}}>
        <div style={{display:"flex", justifyContent:'flex-end',right:"0"}}>
        <span className="badge position-absolute top-0  rounded-pill bg-success">
        {source}
  </span></div>
           
        
  <img src={imageUrl} className="card-img-top " style={{height: "13.5em"}}alt="..."/>
  
  <div className="card-body text-secondary">

    <h6 className="card-title"style={{fontSize: "13px",display:"flex"}}><strong>{title}..</strong></h6>
    <p className="card-text" ><small className="text-body-secondary"style={{fontSize: "12.2px"}}>{description}...</small></p>
    <p className="card-text"><small className="text-body-secondary " style={{fontSize: "8px",height:"8px"}}>By {author} on {new Date(date).toGMTString()}</small></p>
    </div>
   
    <a className="btn btn-danger text-warning"href={newsUrl} ><strong>&#x21E0; Read More &#x21E2;</strong></a>
    </div>
    </div>
        </>
    )
}
}
export default NewsItem