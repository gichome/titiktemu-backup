import React, {Component} from "react";
import {
  ReactiveBase,
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange,
  SelectedFilters,
  ResultCard
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="titiktumbuh_prototype"
          credentials="MHwqCBl25:43bd6f10-84c7-4ee1-a5c7-90a53a3abf16"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Nunito Sans", Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#eb6961",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
        >
          <div className="navbar">
            <div className="logo-container">
              <img
                className="app-logo"
                src="Images/logo.png"
                alt="titiktumbuh"
              />
            </div>

            <div className="search-container">
              <DataSearch
                componentId="mainSearch"
                dataField={["original_title"]}
                categoryField="title"
                className="search-bar"
                queryFormat="and"
                placeholder="Cari disini..."
                iconPosition="left"
                autosuggest={true}
                filterLabel="search"
              />
            </div>
          </div>
          <div className="sub-container">
            <div
              className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-pied-piper-alt" /> Kategori{" "}
                </b>
              </div>
              <MultiList
                componentId="genres-list"
                dataField="genres_data.raw"
                className="genres-filter"
                size={20}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="Semua Kategori"
                showCheckbox={true}
                showCount={true}
                showSearch={true}
                placeholder="Kategori paper"
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "date-filter",
                    "RangeSlider",
                    "language-list",
                    "revenue-list"
                  ]
                }}
                showFilter={true}
                filterLabel="Genre"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-dollar" /> Revenue{" "}
                </b>
              </div>

              <SingleRange
                componentId="revenue-list"
                dataField="ran_revenue"
                className="revenue-filter"
                data={[
                  {start: 0, end: 1000, label: "< 1M"},
                  {start: 1000, end: 10000, label: "1M-10M"},
                  {start: 10000, end: 500000, label: "10M-500M"},
                  {start: 500000, end: 1000000, label: "500M-1B"},
                  {start: 1000000, end: 10000000, label: "> 1B"}
                ]}
                showRadio={true}
                showFilter={true}
                filterLabel="Revenue"
                URLParams={false}
                innerClass={{
                  label: "revenue-label",
                  radio: "revenue-radio"
                }}
              />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  <i className="fa fa-star" /> Ratings
                </b>
              </div>
              <RangeSlider
                componentId="RangeSlider"
                dataField="vote_average"
                className="review-filter"
                range={{
                  start: 0,
                  end: 10
                }}
                rangeLabels={{
                  start: "0",
                  end: "10"
                }}
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "language-list",
                    "date-Filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
              />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-language" /> Languages{" "}
                </b>
              </div>
              <MultiDataList
                componentId="language-list"
                dataField="original_language.raw"
                className="language-filter"
                size={100}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="All Languages"
                showCheckbox={true}
                showSearch={true}
                placeholder="Search for a language"
                react={{
                  and: [
                    "mainSearch",
                    "results",
                    "date-filter",
                    "RangeSlider",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                data={[
                  {
                    label: "English",
                    value: "English"
                  },
                  {
                    label: "Chinese",
                    value: "Chinese"
                  },
                  {
                    label: "Turkish",
                    value: "Turkish"
                  },
                  {
                    label: "Swedish",
                    value: "Swedish"
                  },
                  {
                    label: "Russian",
                    value: "Russian"
                  },
                  {
                    label: "Portuguese",
                    value: "Portuguese"
                  },
                  {
                    label: "Korean",
                    value: "Korean"
                  },
                  {
                    label: "Japanese",
                    value: "Japanese"
                  },
                  {
                    label: "Italian",
                    value: "Italian"
                  },
                  {
                    label: "Hindi",
                    value: "Hindi"
                  },
                  {
                    label: "French",
                    value: "French"
                  },
                  {
                    label: "Finnish",
                    value: "Finnish"
                  },
                  {
                    label: "Spanish",
                    value: "Spanish"
                  },
                  {
                    label: "Deutsch",
                    value: "Deutsch"
                  }
                ]}
                showFilter={true}
                filterLabel="Language"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-calendar" /> Release Date{" "}
                </b>
              </div>
              <DateRange
                componentId="date-filter"
                dataField="release_date"
                className="datePicker"
              />
            </div>
            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                showClearAll={true}
                clearAllLabel="Clear filters"
              />

              <ResultCard
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "mainSearch",
                    "RangeSlider",
                    "language-list",
                    "date-filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                pagination={true}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={12}
                Loader="Loading..."
                noResults="No results were found..."
                sortOptions={[
                  {
                    dataField: "revenue",
                    sortBy: "desc",
                    label: "Sort by Revenue(High to Low) \u00A0"
                  },
                  {
                    dataField: "popularity",
                    sortBy: "desc",
                    label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
                  },
                  {
                    dataField: "vote_average",
                    sortBy: "desc",
                    label: "Sort by Ratings(High to Low) \u00A0"
                  },
                  {
                    dataField: "original_title.raw",
                    sortBy: "asc",
                    label: "Sort by Title(A-Z) \u00A0"
                  }
                ]}
                innerClass={{
                  title: "result-title",
                  listItem: "result-item",
                  list: "list-container",
                  sortOptions: "sort-options",
                  resultStats: "result-stats",
                  resultsInfo: "result-list-info",
                  poweredBy: "powered-by"
                }}
                onData={function(res) {
                  return {
                    description: (
                      <div className="main-description">
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="#"
                            href={"http://www.imdb.com/title/" + res.imdb_id}
                          >
                            <div className="img">
                              <img
                                src={
                                  "https://image.tmdb.org/t/p/w500" +
                                  res.poster_path
                                }
                                alt={res.original_title}
                                className="result-image"
                              />
                            </div>
                            <div className="info colored">
                              <h3 className="overlay-title">
                                {res.original_title}
                              </h3>

                              <div className="overlay-description">
                                {res.tagline}
                              </div>

                              <div className="overlay-info">
                                <div className="rating-time-score-container">
                                  <div className="sub-title Rating-data">
                                    <b>
                                      Imdb
                                      <span className="details">
                                        {" "}
                                        {res.vote_average}/10{" "}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="time-data">
                                    <b>
                                      <span className="time">
                                        <i className="fa fa-clock-o" />{" "}
                                      </span>{" "}
                                      <span className="details">
                                        {res.time_str}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="sub-title Score-data">
                                    <b>
                                      Score:
                                      <span className="details">
                                        {" "}
                                        {res.score}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                                <div className="revenue-lang-container">
                                  <div className="revenue-data">
                                    <b>
                                      <span>Revenue:</span>{" "}
                                      <span className="details">
                                        {" "}
                                        ${res.or_revenue}
                                      </span>{" "}
                                    </b>
                                  </div>

                                  <div className="sub-title language-data">
                                    <b>
                                      Language:
                                      <span className="details">
                                        {" "}
                                        {res.original_language}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ),
                    url: "http://www.imdb.com/title/" + res.imdb_id
                  };
                }}
              />
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
