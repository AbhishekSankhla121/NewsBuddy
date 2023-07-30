import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    ApiKeyy: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

   changeToUpperCase(founder) {
    return founder.toUpperCase();
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      
    };
  }
  infi= async() => {
  
    const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKeyy}&page=${(this.state.page+1)}&pageSize=${this.props.pageSize}`;
    this.setState({  page: this.state.page +1});
    let data = await fetch(Url);
    let parsedData = await data.json();
    
       this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
   
  }
  
  async componentDidMount (){

this.props.setProgress(15);
  const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKeyy}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  console.log(Url);
  this.props.setProgress(25);
  this.props.setProgress(30);
    this.setState({ loading: true });
    this.props.setProgress(35);
    let data = await fetch(Url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    this.props.setProgress(80);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  render() {
    return (
      <>
        
          <h1 className={`text-center  text-${this.props.ModeName=="light"?"dark":"light"}`} style={{ margin:"35px 0px",marginTop:"90px", textShadow: `1px 1px 2px ${
      this.props.ModeName === "light" ? "green" : "#0dcaf0"
    }`,fontSize:"70px" }}>
            <strong><b>Today's Top Stories</b></strong>
          </h1>
          <div className={`card  container text-center border-3 border-${this.props.ModeName=="light"?"success":"info"} text-${this.props.ModeName=="light"?"dark":"info"} bg-${this.props.ModeName} card-title-spacer-10 my-4`} style={{padding:"0px",fontSize:"20px", height:"35px",width:"330px"}}>
  <strong> 
  {this.changeToUpperCase(this.props.category).slice(0,1)+this.props.category.slice(1)}</strong>
  </div>
        
  
  <InfiniteScroll
   dataLength={this.state.articles.length}
   next={this.infi}
   hasMore={this.state.articles.length < this.state.totalResults}
   loader={<Spinner/>}
   
           
          >
             {this.state.loading && <Spinner/>}
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                
                return (
                  <div className="col-md-4" key={element.url}>
                    {" "}
                    <NewsItem
                      title={
                        element.title != null
                          ? element.title.slice(0, 47)
                          : "Title is not Available"
                      }
                      description={
                        element.description !== null
                          ? element.description.slice(0, 190)
                          : "Description is not Available"
                      }
                      imageUrl={
                        element.urlToImage !== null && element.urlToImage !== " "
                          ? element.urlToImage
                          : "https://t3.ftcdn.net/jpg/05/03/24/40/360_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg"
                      }
                      newsUrl={element.url}
                      source={
                        element.source.name
                          ? element.source.name
                          : "Unknown Source"
                      }
                      date={element.publishedAt}
                      author={
                        element.author ? element.author : "Unknown Author"
                      }
                    />
                   
                  </div>
                );
              })}
             </div>
            </div>
          </InfiniteScroll>

      </>
    );
  }
}

export default News;
