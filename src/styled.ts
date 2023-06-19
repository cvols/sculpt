import styled from 'styled-components';

const MyStyled: typeof styled = typeof styled === 'function' ? styled : styled.default;

export default MyStyled;
