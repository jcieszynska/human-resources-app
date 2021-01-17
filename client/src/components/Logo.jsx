import React from 'react';
import styled from 'styled-components';

import logo from '../hr.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends React.Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} width="50" alt="logo" />
            </Wrapper>
        )
    }
}
export default Logo