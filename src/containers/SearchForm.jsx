import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // 新しいcomponentを返す

/*
searchPageのcomponentのなかで、placeとonPlaceChangeが使えるようになる。
*/
// componentが必要なpropsに変換する関数
const mapStateToProps = state => ({
  place: state.place, 
});

// dispatchをもらって、propsを返す関数
const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

const SearchForm = props => (
  <form className="search-form" onSubmit={e => props.onSubmit(e)}>
    <input
      type="text"
      className="place-input"
      value={props.place}
      size="30"
      onChange={(e) => {
        e.preventDefault();
        props.onPlaceChange(e.target.value);
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


// SearchPageのcomponentとstoreをひもづけた状態の新しいcomponentをexportする
// storeとのひもづけをしてくれる
const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ConnectedSearchForm;
