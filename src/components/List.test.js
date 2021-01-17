import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import List from './List';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  // beforeEach(() => {wrapper = shallow(<List />)});

  it('should render a text if no items are found ', () => {
    const wrapper = shallow(<List items={[]} />);
    expect(wrapper.text()).toEqual('No items Found');
  });
  it('should render a list of 2 repositiories if 2 repositories are found', () => {
    const wrapper = shallow(
      <List
        items={[
          { name: 'Repo1', url: 'url1', id: '1' },
          { name: 'Rep21', url: 'url2', id: '2' },
        ]}
      />
    );
    expect(wrapper.find('tbody').children()).toHaveLength(2);
    // expect(wrapper.find('tr')).toHaveLength(2);
  });
});
