import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    // const { benches } = this.props;
    return (
      <div>
        <h2>This is Bench_Index</h2>
        {this.props.benches.map(bench => (
          <BenchIndexItem key={bench.id} bench={bench} />
        ))}
      </div>
    );
  }
}

export default BenchIndex;