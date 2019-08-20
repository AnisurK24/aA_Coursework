import React from 'react';

class Tile extends React.Component {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const flagged = event.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }
  
  render (){
    const tile = this.props.tile;
    let status, text, count;

        if (tile.explored) {
            if (tile.bombed) {
                text = '\u2622';
                status = 'bombed';
            } else {
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count}` : "")
                status = 'explored';
            }
        } else if (tile.flagged) {
          status = 'flagged';
          text = '\u2691';
        } else { //unexplored
          status = 'unexplored';
        }

        status = `tile ${status}`

    return (
      <div className={status} onClick={this.handleClick}>{text}</div>
    );
  }
}

export default Tile;


/*
if flagged => let text = '\u2691'

until exlored => keep hidden/default;

if explored =>
  if bombed === T => let text = '\u2622'
  if bombed === LOSE
  else === explored ===> adjacent bomb count (blank if zero)
  
  
*/