import * as React from 'react';
import { Sublease } from '../../models/index';
import { List } from 'immutable';

interface Props {
  subleases: List<Sublease>;
  isFetching: boolean;
  handleRefresh: () => void;
}

const Subleases: React.StatelessComponent<Props> = ({ subleases,
                                                      isFetching,
                                                      handleRefresh }) => (
  <div>
    <ul>
    { subleases.map((sublease: Sublease) => (
        <li key={sublease.uid}>
          {sublease.address}
        </li>
        ))
    }
    </ul>
    <br/>
    <button onClick={handleRefresh}>Refresh</button>
    {(isFetching) ? <div>FETCHING</div> : null}
  </div>
);

export default Subleases;