import React from 'react';
import PropTypes from 'prop-types';

import HorizontalTimeline from '../../src/Components/HorizontalTimeline';


export default class HorizontalTimelineContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentWillMount() {
    this.dates = this.props.content.map((entry) => entry);
  }

  componentWillReceiveProps(nextProps) {
    this.dates = nextProps.content.map((entry) => entry);
  }

  render() {
    
    return (
      <div>
        <div style={{ width: '90%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}

            values={ this.dates }
          />
        </div>
       
      </div>
    );
  }
}
