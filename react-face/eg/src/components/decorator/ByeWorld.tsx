import React from 'react';

import { decoratorsWithName } from '../../hoc/index'

interface Props {
  name?: string;
}

class ByeWorld extends React.Component<Props, any> {
  render () {
    return <div>bye world my name is {this.props.name}</div>
  }
}

export default ByeWorld